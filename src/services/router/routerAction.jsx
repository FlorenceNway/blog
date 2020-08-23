import {
  push as routerPush, //wanna use push as function name, thats why rename it
  goBack as routerGoBack,
  replace as routerReplace,
} from "connected-react-router";

export const push = (path) => (dispatch) => {
  dispatch(routerPush(path));
};

export const goBack = () => (dispatch) => {
  dispatch(routerGoBack());
};

export const replace = (path) => (dispatch) => {
  dispatch(routerReplace(path));
};
