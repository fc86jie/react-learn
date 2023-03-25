/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-18 18:15:38
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-18 18:45:42
 * @FilePath: \src\source\xReactRedux.js
 * @Description:
 */

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { bindActionCreators } from 'redux';

const reduxContext = createContext();

export function Provider(props) {
  let { store, children } = props;
  return <reduxContext.Provider value={{ store }}>{children}</reduxContext.Provider>;
}

export function connect(mapStateToProps, mapDispatchToProps) {
  if (!mapStateToProps) {
    mapStateToProps = () => ({});
  }
  if (!mapDispatchToProps) {
    mapDispatchToProps = dispatch => {
      // 默认返回dispatch
      return { dispatch };
    };
  }

  return function currying(Component) {
    return function HOC(props) {
      let { store } = useContext(reduxContext);
      let { getState, dispatch, subscribe } = store;

      let [_, forceUpdate] = useState(0);
      useEffect(() => {
        let unSubscribe = subscribe(() => {
          forceUpdate(+new Date());
        });

        return () => {
          unSubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      let state = getState();
      let nextState = useMemo(() => {
        return mapStateToProps(state);
      }, [state]);

      let dispatchProps = {};

      if (typeof mapDispatchToProps === 'function') {
        dispatchProps = mapDispatchToProps(dispatch);
      } else {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      }

      return <Component {...props} {...nextState} {...dispatchProps}></Component>;
    };
  };
}
