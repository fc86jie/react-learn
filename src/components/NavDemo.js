/**
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-14 12:40:32
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-16 11:20:14
 * @FilePath: \src\components\NavDemo.js
 * @Description:
 */

// css module 样式隔离
import { createUseStyles } from 'react-jss';
import styl from './nav.module.css';

const userStyle = createUseStyles({
  title: {
    '&:hover': {
      color: 'green',
    },
  },
});

const NavDemo = () => {
  let useStyl = userStyle();
  return (
    <>
      <div className={styl.title + ' ' + useStyl.title}>首页</div>
      <div className={styl['nav-list']}>
        <a href="https://www.baidu.com" className="clear">
          京东超市
        </a>
        <a href="https://www.baidu.com">秒杀</a>
        <a href="https://www.baidu.com">便宜包邮</a>
      </div>
      <div className={styl.link}>link</div>
    </>
  );
};

export default NavDemo;
