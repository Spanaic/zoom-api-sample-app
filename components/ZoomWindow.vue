<template>
  <div></div>
</template>

<script>
export default {
  props: {
    nickname: String,

    meetingId: String
  },

  mounted() {
    const meetConfig = this.$MeetingCfg(this.meetingId, this.nickname);

    const ZoomMtg = this.$ZoomMtg;

    // Generate Signature function

    const signature = ZoomMtg.generateSignature({
      meetingNumber: meetConfig.meetingNumber,

      apiKey: meetConfig.apiKey,

      apiSecret: meetConfig.apiSecret,

      role: meetConfig.role,

      success: function(res) {
        // eslint-disable-next-line

        console.log("success signature: " + res.result);
      }
    });

    // join function

    ZoomMtg.init({
      leaveUrl: "http://www.zoom.us",

      isSupportAV: true,

      success: () => {
        ZoomMtg.join({
          meetingNumber: meetConfig.meetingNumber,

          userName: meetConfig.userName,

          signature: signature,

          apiKey: meetConfig.apiKey,

          userEmail: "email@gmail.com",

          passWord: meetConfig.passWord,

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