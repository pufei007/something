import react, { Component } from 'react';
import { emoji } from './emoji';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: emoji['PEOPLE_EMOJIS'],
      activeKey: 'PEOPLE_EMOJIS',
      selectEmoji: [],
    };
  }
  onChange = activeKey => {
    this.setState({
      activeKey: activeKey,
      emoji: emoji[activeKey],
    });
  };
  selectEmoji = img => {
    let current = JSON.parse(JSON.stringify(this.state.selectEmoji));
    current.push(img);
    this.setState({
      selectEmoji: current,
    });
  };
  render() {
    const { emoji, activeKey, selectEmoji } = this.state;
    return (
      <div>
        <Tabs
          tabPosition={'bottom'}
          onChange={this.onChange}
          activeKey={activeKey}
          animated={false}
        >
          <TabPane tab="😀" key="PEOPLE_EMOJIS">
            {emoji.map((item, index) => (
              <span
                key={index}
                onClick={this.selectEmoji.bind(this, item)}
                style={{ cursor: 'pointer', fontSize: '30px' }}
              >
                {item}
              </span>
            ))}
          </TabPane>
          <TabPane tab="🦊" key="ANIMALS_NATURE_EMOJIS">
            {emoji.map((item, index) => (
              <span
                key={index}
                onClick={this.selectEmoji.bind(this, item)}
                style={{ cursor: 'pointer', fontSize: '30px' }}
              >
                {item}
              </span>
            ))}
          </TabPane>
          <TabPane tab="🍏" key="FOOD_SPORTS_EMOJIS">
            {emoji.map((item, index) => (
              <span
                key={index}
                onClick={this.selectEmoji.bind(this, item)}
                style={{ cursor: 'pointer', fontSize: '30px' }}
              >
                {item}
              </span>
            ))}
          </TabPane>
          <TabPane tab="🚗" key="TRAVEL_PLACES_EMOJIS">
            {emoji.map((item, index) => (
              <span
                key={index}
                onClick={this.selectEmoji.bind(this, item)}
                style={{ cursor: 'pointer', fontSize: '30px' }}
              >
                {item}
              </span>
            ))}
          </TabPane>
          <TabPane tab="💎" key="OBJECTS_EMOJIS">
            {emoji.map((item, index) => (
              <span
                key={index}
                onClick={this.selectEmoji.bind(this, item)}
                style={{ cursor: 'pointer', fontSize: '30px' }}
              >
                {item}
              </span>
            ))}
          </TabPane>
          <TabPane tab="❤️" key="SYMBOLS_FLAGS_EMOJIS">
            {emoji.map((item, index) => (
              <span
                key={index}
                onClick={this.selectEmoji.bind(this, item)}
                style={{ cursor: 'pointer', fontSize: '30px' }}
              >
                {item}
              </span>
            ))}
          </TabPane>
        </Tabs>
        <div>{selectEmoji.join(' ')}</div>
      </div>
    );
  }
}

export default IndexPage;
