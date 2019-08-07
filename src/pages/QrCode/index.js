import react, { Component } from 'react';
import QRCode from 'qrcode';
import { Input, Button, message } from 'antd';
import styles from './index.less';
const { TextArea } = Input;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
			text: '',
			imgURL:''
    };
  }
  textChange = e => {
    this.setState({
      text: e.target.value.trim(),
    });
  };
  buildQrCode = () => {
    const { text } = this.state;
    let qrCode = this.refs.qrCode;

    QRCode.toCanvas(qrCode, text, error => {
      if (error) {
        message.error('二维码生成失败');
      }
    });
  };
  buildQrCodeURL = () => {
    const { text } = this.state;
    QRCode.toDataURL(text)
      .then(url => {
				console.log(url);
				this.setState({
					imgURL:url
				})
      })
      .catch(err => {
        console.error(err);
      });
  };
  render() {
    const { text,imgURL } = this.state;
    return (
      <div className={styles.main}>
        <div className={styles.input}>
          <TextArea rows={4} onChange={this.textChange} value={text} placeholder="请输入内容" />
        </div>
        <div className={styles.btn}>
          <Button type="primary" onClick={this.buildQrCode}>
            转为二维码canvas
          </Button>
					<br/>
					<br/>
          <Button type="primary" onClick={this.buildQrCodeURL}>
            转为二维码图片
          </Button>
        </div>
        <div className={styles.res}>
          <canvas ref="qrCode" style={{ display: 'block' }} />
					<img src={imgURL} alt="qrcode" style={{ display: imgURL?'block':'none' }}/>
        </div>
      </div>
    );
  }
}

export default IndexPage;
