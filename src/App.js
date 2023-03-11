import Count from '@/components/Count';
import Demo from '@/components/Demo';
import Dialog from '@/components/Dialog';
import Vote from '@/components/Vote';
import './App.css';

function App() {
  return (
    <>
      <Demo></Demo>
      <Vote title="投票"></Vote>
      <Dialog content="一定好好学习">
        <button>确定</button>
        <button>取消</button>
      </Dialog>
      <Count title="title">
        <p slot="header">header</p>
        <p slot="footer">footer</p>
        <span>1234</span>
        <p>default</p>
      </Count>
    </>
  );
}

export default App;
