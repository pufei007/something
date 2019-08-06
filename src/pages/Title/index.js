import react, { Component } from 'react';
import { Input, Button } from 'antd';
import styles from './index.css';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  valueChange = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  test = () => {
    // console.log(userNameReplace(this.state.value));
    this.setState({
      value: userNameReplace(this.state.value),
    });
  };
  render() {
    return (
      <div>
        <Input value={this.state.value} onChange={this.valueChange} placeholder="请输入" />
        <Button onClick={this.test}>测试结果</Button>
      </div>
    );
  }
}

export default IndexPage;
function userNameReplace(name) {
  // let noEMOJI=name.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "")
  if (name) {
    // let Spacer=/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/im;
    // let spacer = /[-_|—]/g;
    let spacer = /(\-{2,})|(\_+)|(\|+)|(\——+)/; //间隔符（或连续间隔符）如---， _ ，| ，统一改为-
    let overFour = /[(\[)|(\{})|(\【)|(\『})|(\〖})]\S{5,}[(\〗)|(\』)|(\】)|(\})|(\])]/; //﹛﹜『』〖〗［］【】（书名号，小括号除外）等括号内字数大于4个字 删除
    let lessFour = /[(\[)|(\{})|(\【)|(\『})|(\〖})]\S{1,5}[(\〗)|(\』)|(\】)|(\})|(\])]/; //﹛﹜『』〖〗［］【】（书名号，小括号除外）等括号内字数少于等于4个字改为「」或[ ]
    let emoji = /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f])|(\ud83d[\ude80-\udeff])/g; //匹配emoji
    // let emoji = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g; //匹配emoji
    let someSpace = /\s{2,}/g; //匹配句中出現连续空格
    let trimSpace = /(^\s*)|(\s*$)/g; //删除前后空格
    let end = /(\.)|(\。)|(\，)|(\,)|(\；)|(\;)|(\—)|(\——)/; //删除末尾出现无意义符号：中英文句号，逗号，分号，破折号
    let fullStop = /(\。)/; //句中出现中文句号改为空格
    let continuity = /[,.?:;'!"，。？：；’‘！”“、]{2,}\…\…/; //连续标点符号且最后一个是省略号
    // let interChange=/^((?![,.?:;'!"])[\u2E80-\u9FFF，。？：；’‘！”“、])+$/
    let interChange = /([\u2E80-\u9FFF,.?:;'!"])+$/;
    // console.log(emoji);
    // let space = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
    // let someSpace = /(^\s{2,})|(\s{2,}$)|(\s{5,})/g; //匹配句中出現连续空格
    // let someSpace = /(^\s{1,})|(\s{1,}$)/g ; //匹配句中出現连续空格
    // let someSpace =/(^\s*)|(\s*$)/g ; //字符串前后所有空格
    // let toChines=/[\u4e00-\u9fa5][\·\~\！\@\#\￥\%\……\&\*\（\）\——\-\+\=\【\】\{\}\、\|\；\‘\’\：\“\”\《\》\？\，\。\、\`\~\!\#\$\%\^\&\*\(\)\_\[\]{\}\\\|\;\'\'\:\"\"\,\.\/\<\>\?]/
    // let overFour=/\([\s\S]*?\)/
    // console.log(emoji.test(name));
    // console.log(name.replace(RegExp(emoji, 'g')), '2222222');
    // name = name.replace(emoji, '');
    // let name=name
    // name = name.trim();
    if (emoji.test(name)) {
      console.log(11);
      name = name.replace(emoji, '')
      //  name.replace(RegExp(emoji, 'g'), '2222222');
      // console.log(name.replace(RegExp(emoji, 'g')), '');
    } else if (fullStop.test(name)) {
      console.log(2);
      name = name.replace(RegExp(fullStop, 'g'), ' ');
    }
    if (someSpace.test(name)) {
      //句中连续空格保留一个空格
      name = name.replace(someSpace, ' ');
    }
    if (spacer.test(name)) {
      name = name.replace(RegExp(spacer, 'g'), '-').replace(RegExp(spacer, 'g'), '-');
    }
    if (end.test(name)) {
      name = name.replace(RegExp(end, 'g'), '').replace(RegExp(end, 'g'), '');
    }
    if (trimSpace.test(name)) {
      name = name.replace(trimSpace, '');
    }
    if (overFour.test(name)) {
      name = name.replace(RegExp(overFour, 'g'), match => {
        console.log(match);
        match = match.substring(0, match.length - 1);
        let last = match.substr(1);
        console.log(last);
        return last;
      });
    }
    if (lessFour.test(name)) {
      name = name.replace(RegExp(lessFour, 'g'), match => {
        console.log(match);
        match = match.substring(0, match.length - 1);
        let last = match.substr(1);
        console.log(last);
        return `[${last}]`;
      });
    }
    if (continuity.test(name)) {
      name = name.replace(RegExp(continuity, 'g'), '……');
    }
    if (interChange.test(name)) {
      // name = name.replace(RegExp(interChange, 'g'), match => {
      //   console.log(match);
      let last = name.replace(',', '，vvv');
      //  let last = match.substring(0, match.length - 1);
      // let last = match.substr(1);
      console.log(last);
      //   return `${last}`;
      // });
    }
    // name = name.replace(space, '-');
    // name = name.replace(someSpace, '');
    console.log(name);
    return name;
  } else {
    return name;
  }
}
