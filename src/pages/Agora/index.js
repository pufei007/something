import {Component} from 'react';
import AgoraRTC from 'agora-rtc-sdk';

class Chat extends Component {
    state = {  }
    componentDidMount(){
        this.client = AgoraRTC.createClient({ mode: 'live', codec: 'h264' });
        this.client.init('4f34c247f5bc4ac094c287b5a3a5aded', function () {
            console.log("AgoraRTC client initialized");
          
          }, function (err) {
            console.log("AgoraRTC client init failed", err);
          });
    }
    render() { 
        return (    <div>
            sdfsdf
        </div>     );
    }
}
 
export default Chat;