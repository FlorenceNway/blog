import React from 'react'
import classNames from 'classnames'
import { Header } from "semantic-ui-react";
import styles from './layout.module.scss'


 const Layout = ({children,header}) => { //{children, header, ...rest}
    return (
      <div className={classNames(styles.layout, styles.layoutPadding)}>
        <Header as="h1">{header}</Header>
        {children}
      </div>
    );
}
export default Layout