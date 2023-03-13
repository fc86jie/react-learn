import React from 'react';

class Demo extends React.PureComponent {
  state = {
    arr: [1, 2, 3],
    a: 1,
  };

  p3 = React.createRef();

  add = () => {
    let { arr } = this.state;
    this.setState({
      arr: [...arr, arr.length + 1],
    });
  };
  render() {
    let { arr } = this.state;
    return (
      <div>
        {arr.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={this.add}>增加</button>
        <p ref="p1">段落1</p>
        <p ref={x => (this.p2 = x)}>段落2</p>
        <p ref={this.p3}>段落3</p>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.refs.p1);
    console.log(this.p2);
    console.log(this.p3.current);
  }
}

export default Demo;
