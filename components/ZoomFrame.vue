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

console.log("checkSystemRequirements");
console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

// CDN version default

ZoomMtg.setZoomJSLib("https://dmogdx0jrul3u.cloudfront.net/1.3.7/lib", "/av");
ZoomMtg.setZoomJSLib("https://source.zoom.us/1.5.0/lib", "/av");
// ZoomMtg.setZoomJSLib(
//   "http://localhost:3000/node_modules/@zoomus/websdk/dist/lib",
//   "/av"
// ); // Local version default

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
      leaveUrl: process.env.BASE_URL,
      role: 0
    };

    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiSecret,
      role: this.meetConfig.role,
      success(res) {
        console.log("success signature: " + res.result);
      }
    });

    ZoomMtg.init({
      leaveUrl: process.env.BASE_URL,
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
  },
  mounted() {}
};
</script>

<style scoped>
/* #zmmtg-root {
  visibility: true;
} */
</style>