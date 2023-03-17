import VoteContext from '@/components/vote/voteContext';
import action from '@/store/actions';
import { Button } from 'antd';
import { useContext } from 'react';

const Footer = () => {
  const { store } = useContext(VoteContext);
  return (
    <div className="footer">
      <Button
        type="primary"
        onClick={() => {
          store.dispatch(action.vote.support());
        }}>
        支持
      </Button>
      <Button
        type="primary"
        danger
        onClick={() => {
          store.dispatch(action.vote.unSupport());
        }}>
        反对
      </Button>
    </div>
  );
};

export default Footer;
