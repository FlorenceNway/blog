import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { authToken } from '../variable/constants';

const getHeader = () => {
  const token = localStorage.getItem(authToken)
    ? localStorage.getItem(authToken)
    : sessionStorage.getItem(authToken);

  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return null;
};

const pending = (type, meta) => ({
  type,
  payload: null,
  meta: { isPending: true, ...meta },
});

const onSuccess = (
  dispatch,
  type,
  response,
  onSuccessCallback,
  meta,
  params
) => {
  const { data, headers } = response;
  // if (headers[MESSAGE_TYPE_LABEL]) {
  //   dispatch(addNotification(headers));
  // }
  if (type) {
    dispatch({
      type,
      payload: data,
      meta: { headers, isPending: false, params, ...meta },
    });
  }

  if (typeof onSuccessCallback === 'function') {
    onSuccessCallback(response);
  }
};

const onError = (dispatch, type, error, onErrorCallback) => {
  // if (_.has(error, 'response.status') && error.response.status === 401) {
  //   sessionStorage.removeItem(TOKEN_LABEL);
  //   localStorage.removeItem(TOKEN_LABEL);
  //   // window.location = LOGIN_URL;
  // }
  // if (_.has(error, 'response.headers')) {
  //   if (error.response.headers[MESSAGE_TYPE_LABEL]) {
  //     dispatch(notifyOnError(error));

  //     // notifyOnError(error);
  //   }
  // }
  // dispatch(notifyOnError(error));
  if (type) {
    dispatch({ type, error: true });
  }
  if (typeof onErrorCallback === 'function') {
    onErrorCallback(error);
  }
};

function Api(dispatch) {
  if (typeof dispatch !== 'function') {
    throw Error('Please provide a valid dispatch.');
  }

  const that = this;
  that.config = {};
  that.config.dispatch = dispatch;

  // that.instance = _dispatch => new Api(_dispatch);

  Api.prototype.url = (url) => {
    that.config.url = url;
    return that;
  };

  Api.prototype.meta = (meta) => {
    that.config.meta = meta;
    return that;
  };

  Api.prototype.action = (type) => {
    that.config.actionType = type;
    return that;
  };

  Api.prototype.params = (_params) => {
    if (!isEmpty(_params)) {
      that.config.params = _params;
    }
    return that;
  };

  Api.prototype.data = (data) => {
    that.config.data = data;
    return that;
  };

  Api.prototype.headers = (headers) => {
    that.config.headers = headers;
    return that;
  };

  Api.prototype.onSuccess = (onSuccessCallback) => {
    that.config.onSuccessCallback = onSuccessCallback;
    return that;
  };

  Api.prototype.onError = (onErrorCallback) => {
    that.config.onErrorCallback = onErrorCallback;
    return that;
  };

  Api.prototype.get = () => {
    if (that.config.actionType) {
      dispatch(pending(that.config.actionType, that.config.meta));
    }
    axios
      .get(that.config.url, {
        headers: { ...getHeader(), ...that.config.headers },
        params: that.config.params || null,
      })
      .then((response) => {
        onSuccess(
          that.config.dispatch,
          that.config.actionType,
          response,
          that.config.onSuccessCallback,
          that.config.meta,
          that.config.params
        );
      })
      .catch((error) => {
        onError(
          that.config.dispatch,
          that.config.actionType,
          error,
          that.config.onErrorCallback
        );
      });
  };

  Api.prototype.delete = () => {
    dispatch(pending(that.config.actionType));
    axios
      .delete(that.config.url, {
        headers: { ...getHeader(), ...that.config.headers },
        params: that.config.params || null,
      })
      .then((response) => {
        onSuccess(
          that.config.dispatch,
          that.config.actionType,
          response,
          that.config.onSuccessCallback,
          that.config.meta,
          that.config.params
        );
      })
      .catch((error) => {
        onError(
          that.config.dispatch,
          that.config.actionType,
          error,
          that.config.onErrorCallback
        );
      });
  };

  Api.prototype.update = () => {
    dispatch(pending(that.config.actionType));
    axios
      .put(that.config.url, that.config.data, {
        headers: { ...getHeader(), ...that.config.headers },
        params: that.config.params,
      })
      .then((response) => {
        onSuccess(
          that.config.dispatch,
          that.config.actionType,
          response,
          that.config.onSuccessCallback,
          that.config.meta,
          that.config.params
        );
      })
      .catch((error) => {
        onError(
          that.config.dispatch,
          that.config.actionType,
          error,
          that.config.onErrorCallback
        );
      });
  };

  Api.prototype.post = () => {
    dispatch(pending(that.config.actionType));
    axios
      .post(that.config.url, that.config.data, {
        headers: { ...getHeader(), ...that.config.headers },
        params: that.config.params,
      })
      .then((response) => {
        onSuccess(
          that.config.dispatch,
          that.config.actionType,
          response,
          that.config.onSuccessCallback,
          that.config.meta,
          that.config.params
        );
      })
      .catch((error) => {
        onError(
          that.config.dispatch,
          that.config.actionType,
          error,
          that.config.onErrorCallback
        );
      });
  };
}

export default (dispatch) => new Api(dispatch);
