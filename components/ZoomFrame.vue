<template>
  <div class="iframe-container">
    <meta charset="utf-8" />
    <link
      type="text/css"
      rel="stylesheet"
      href="https://dmogdx0jrul3u.cloudfront.net/1.3.7/css/bootstrap.css"
    />
    <link
      type="text/css"
      rel="stylesheet"
      href="https://dmogdx0jrul3u.cloudfront.net/1.3.7/css/react-select.css"
    />

    <meta name="format-detection" content="telephone=no" />
  </div>
</template>

<script>
import { ZoomMtg } from "@zoomus/websdk";

console.log("API_KEY", process.env.API_KEY);

// CDN version default

ZoomMtg.setZoomJSLib("https://dmogdx0jrul3u.cloudfront.net/1.3.7/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

export default {
  name: "ZoomFrame",
  data() {
    return {
      src: "",
      meetConfig: {},
      signature: {}
    };
  },
  props: {
    nickname: String,
    meetingId: String
  },
  created() {
    this.meetConfig = {
      apiKey: process.env.API_KEY,
      apiSecret: process.env.API_SECRET,
      meetingNumber: this.meetingId,
      userName: this.nickname,
      passWord: "",
      leaveUrl: "https://zoom.us",
      role: 0
    };

    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiKey,
      role: this.meetConfig.role,
      success(res) {
        console.log("success signature: " + res.result);
      }
    });

    ZoomMtg.init({
      leaveUrl: "http://zoom.us",
      isSupportAV: true,
      success: () => {
        ZoomMtg.join({
          meetingNumber: this.meetConfig.meetingNumber,
          userName: this.meetConfig.userName,
          signature: this.signature,
          apiKey: this.meetConfig.apiKey,
          userEmail: "email@gmail.com",
          passWord: this.meetConfig.passWord,
          success: function(res) {
            // eslint-disable-next-line
            console.log("join meeting success");
          },
          error: function(res) {
            // eslint-disable-next-line
            console.log(res);
          }
        });
      },
      error: function(res) {
        // eslint-disable-next-line
        console.log(res);
      }
    });
  }
};
</script>

<style>
</style>