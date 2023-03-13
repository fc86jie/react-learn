import Count from '@/components/Count';
import CountNew from '@/components/count/Count';
import Demo from '@/components/Demo';
import Dialog from '@/components/Dialog';
import UseEffectDemo from '@/components/UseEffectDemo';
import UseMemoDemo from '@/components/UseMemoDemo';
import UsePartialStateDemo from '@/components/UsePartialStateDemo';
import UseRefDemo from '@/components/UseRefDemo';
import UseStateDemo from '@/components/UseStateDemo';
import Vote from '@/components/Vote';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <CountNew></CountNew>
      {/* <UsePartialStateDemo></UsePartialStateDemo> */}
      {/* <UseMemoDemo></UseMemoDemo> */}
      {/* <UseRefDemo></UseRefDemo> */}
      {/* <UseEffectDemo /> */}
      {/* <UseStateDemo /> */}
      {/* <Demo />
      <Vote title="投票" />
      <Dialog content="一定好好学习">
        <button>确定</button>
        <button>取消</button>
      </Dialog>
      <Count title="title">
        <p slot="header">header</p>
        <p slot="footer">footer</p>
        <span>1234</span>
        <p>default</p>
      </Count> */}
    </>
  );
}

export default App;
