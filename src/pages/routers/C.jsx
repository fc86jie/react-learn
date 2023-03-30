// import { useLocation, useMatch, useParams } from 'react-router-dom';

const C = props => {
  // 接收url search传参
  // const location = useLocation();
  // const lData = new URLSearchParams(location.search);
  // let [lData] = useSearchParams();
  // let id = lData.get('id');
  // let name = lData.get('name');

  // 接收 url path传参
  // const { id, name } = useParams();

  // 接收 隐式传参
  // const location = useLocation();
  // const { id, name } = location.state || { id: 999, name: 'default' };
  let name = 'zs';
  let id = 456;

  return (
    <>
      <h3>这是C组件</h3>
      {name}-{id}
    </>
  );
};

export default C;
