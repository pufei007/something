import { Component } from 'react';
import { Waypoint } from 'react-waypoint';
import { Divider } from 'antd';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
        {
          width: 400 * Math.random(),
          height: 300 * Math.random(),
          r: Math.floor(Math.random() * 255),
          g: Math.floor(Math.random() * 255),
          b: Math.floor(Math.random() * 255),
        },
      ],
    };
  }
  _handleWaypointEnter = () => {
    console.log('给我加载');
    let data = JSON.parse(JSON.stringify(this.state.list));
    let ran = [];
    for (let i = 0; i < 20; i++) {
      ran.push({
        width: 200 * Math.random(),
        height: 100 * Math.random(),
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255),
      });
    }
    let res = data.concat(ran);
    setTimeout(() => {
      this.setState({
        list: res,
      });
    }, 500);
  };
  render() {
    const { list } = this.state;
    return (
      <div style={{}}>
        {list.map((item, index) => (
          <div
            key={index}
            style={{
              height: `${item.height}px`,
              width: `${item.width}px`,
              backgroundColor: 'rgba(' + item.r + ',' + item.g + ',' + item.b + ',0.8)',
            }}
          />
        ))}
        <Waypoint onEnter={this._handleWaypointEnter}>
          <div style={{ color: '#e43' }}>加载更多</div>
        </Waypoint>
      </div>
    );
  }
}

export default IndexPage;
