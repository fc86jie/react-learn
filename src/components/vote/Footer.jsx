import VoteContext from '@/components/vote/voteContext';
import action from '@/store/actions';
import { Button } from 'antd';
import { useContext } from 'react';
import { connect } from 'react-redux';
// import { connect } from '@/source/xReactRedux';

const Footer = props => {
  // const { store } = useContext(VoteContext);
  const { support, unSupport, supportAsync } = props;
  return (
    <div className="footer">
      <Button
        type="primary"
        onClick={() => {
          // store.dispatch(action.vote.support());
          support();
        }}>
        支持
      </Button>
      <Button
        type="primary"
        danger
        onClick={() => {
          // store.dispatch(action.vote.unSupport());
          unSupport();
        }}>
        反对
      </Button>
      <Button
        type="primary"
        onClick={() => {
          supportAsync();
        }}>
        异步支持
      </Button>
    </div>
  );
};

// export default Footer;
// export default connect(null, dispatch => {
// dispatch的标准写法
//   return {
//     support() {
//       dispatch(action.vote.support());
//     },
//     unSupport() {
//       dispatch(action.vote.unSupport());
//     },
//   };
// })(Footer);
export default connect(null, action.vote)(Footer);
