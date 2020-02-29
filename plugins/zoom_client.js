import Vue from 'vue'

console.log("zoom_client.js")

import { ZoomMtg } from '@zoomus/websdk';

console.log("checkSystemRequirements");

console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

// CDN version default

ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.3.7/lib', '/av');

ZoomMtg.preLoadWasm();

ZoomMtg.prepareJssdk();

// console.log('apiKey', process.env.API_KEY);
// console.log('apiSecret', process.env.API_SECRET);

const MeetingCfg = (meetingId, nickname) => ({

    apiKey: process.env.API_KEY,

    apiSecret: process.env.API_SECRET,

    meetingNumber: meetingId,

    userName: nickname,

    passWord: "we use meeting crated password",

    leaveUrl: "https://zoom.us",

    role: 0

})

// what variable you hook into Vue's prototype will be available on ANY vue component

Vue.prototype.$ZoomMtg = ZoomMtg

Vue.prototype.$MeetingCfg = MeetingCfg