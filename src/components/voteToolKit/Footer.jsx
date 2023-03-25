import action from '@/store/actions';
import { support, supportAsync, unSupport } from '@/storeToolKit/features/vote/voteSlice';
import { Button } from 'antd';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const Footer = props => {
  const dispatch = useDispatch();
  const supportHandle = useCallback(() => dispatch(support()));
  const unSupportHandle = useCallback(() => dispatch(unSupport()));
  const supportAsyncHandle = useCallback(() => dispatch(supportAsync()));
  return (
    <div className="footer">
      <Button
        type="primary"
        onClick={() => {
          supportHandle();
        }}>
        支持
      </Button>
      <Button
        type="primary"
        danger
        onClick={() => {
          unSupportHandle();
        }}>
        反对
      </Button>
      <Button
        type="primary"
        onClick={() => {
          supportAsyncHandle();
        }}>
        异步支持
      </Button>
    </div>
  );
};

export default Footer;
