import react, { Component } from 'react';
class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <marquee
          ref="marquee"
          direction="left"
          scrollamount="3"
          onMouseOver={() => this.refs.marquee.stop()}
          onMouseOut={() => this.refs.marquee.start()}
        >
          设定活动字幕的滚动方向direction="down"：向下
        </marquee>
        <marquee height="40" width="50%" bgcolor="aaeeaa">
          啦啦啦，我会移动耶！
        </marquee>
        <marquee height="500" direction="left" bgcolor="#CCCCCC">
          设定活动字幕的高度height="500"
        </marquee>
        <marquee
          direction="up"
          behavior="scroll"
          scrollamount="1"
          scrolldelay="0"
          loop="-1"
          width="1000"
          height="50"
          bgcolor="#0099FF"
          hspace="10"
          vspace="10"
        >
          指整个Marquee对齐方式; (2)behavior:设置滚动的方式:
          scroll:表示由一端滚动到另一端,会重复,缺陷是不能无缝滚动。
          slide:表示由一段滚动到另一端,不会重复...
        </marquee>
      </div>
    );
  }
}

export default IndexPage;
