import VoteContext from '@/components/vote/voteContext';
import { Button } from 'antd';
import { useContext } from 'react';

const Footer = () => {
  const { store } = useContext(VoteContext);
  return (
    <div className="footer">
      <Button
        type="primary"
        onClick={() => {
          store.dispatch({
            type: 'VOTE_SUP',
          });
        }}>
        支持
      </Button>
      <Button
        type="primary"
        danger
        onClick={() => {
          store.dispatch({
            type: 'VOTE_OP',
          });
        }}>
        反对
      </Button>
    </div>
  );
};

export default Footer;
