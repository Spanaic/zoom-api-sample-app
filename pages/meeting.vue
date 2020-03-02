<template>
  <div class="meeting">
    <div class="container-zoom">
      <ZoomFrame :nickname="nickname" :meetingId="meetingId" />
    </div>
  </div>
</template>

<script>
import ZoomFrame from "@/components/ZoomFrame.vue";

export default {
  name: "app",
  data() {
    return {
      nickname: "",
      meetingId: ""
    };
  },
  components: {
    ZoomFrame
  },
  created() {
    this.nickname = this.$route.query.nickname;
    this.meetingId = this.$route.query.meetingId;
    console.log("this.nickname", this.nickname);
    console.log("meetingId", this.meetingId);
  }
};
</script>

<style>
/* #zmmtg-root {
  visibility: true;
} */

.container-zoom {
  width: 70%;
  height: 100%;
}
</style>