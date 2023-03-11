/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-03-11 15:44:56
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-03-11 18:23:25
 * @FilePath: \src\components\Vote.jsx
 * @Description:
 */

// const Vote = function (props) {
//   let { title } = props;
//   let supNum = 2,
//     noSupNum = 8;

//   return (
//     <div className="vote-box">
//       <div className="header">
//         <h2 className="title">{title}</h2>
//         <span>{supNum + noSupNum}人</span>
//       </div>
//       <div className="main">
//         <p>支持人数：{supNum}人</p>
//         <p>反对人数：{noSupNum}人</p>
//       </div>
//       <div className="footer">
//         <button
//           onClick={() => {
//             supNum++;
//             console.log(supNum);
//           }}>
//           支持
//         </button>
//         <button
//           onClick={() => {
//             noSupNum++;
//             // 值发生变化，视图不会发生变更
//             console.log(noSupNum);
//           }}>
//           反对
//         </button>
//       </div>
//     </div>
//   );
// };

import PropTypes from 'prop-types';
import React from 'react';

class Vote extends React.Component {
  static defaultProps = {
    num: 0,
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      supNum: 2,
      noSupNum: 8,
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log('------------', state, props);
    return null;
  }
  shouldComponentUpdate() {
    console.log('-----------shouldComponentUpdate');
    return true;
  }

  render() {
    let { supNum, noSupNum } = this.state;

    return (
      <div className="vote-box">
        <div className="header">
          {this.props.num}
          <h2 className="title">{this.props.title}</h2>
          <span>{supNum + noSupNum}人</span>
        </div>
        <div className="main">
          <p>支持人数：{supNum}人</p>
          <p>反对人数：{noSupNum}人</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              this.setState({ supNum: supNum + 1 });
            }}>
            支持
          </button>
          <button
            onClick={() => {
              this.setState({ noSupNum: noSupNum + 1 });
            }}>
            反对
          </button>
        </div>
      </div>
    );
  }
}

export default Vote;
