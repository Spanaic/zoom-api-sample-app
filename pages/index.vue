<template>
  <div class="join">
    <div class="join-card">
      <div class="join-header">
        <h2>Join Meeting</h2>
      </div>

      <div>
        <div class="form-item">
          <label for="ユーザー名">ユーザー名</label>
          <input v-model="nickname" type="text" name="nickname" />
        </div>
        <div class="form-item">
          <label for="meetingId">Meeting ID:</label>
          <input v-model="meetingId" type="text" name="meetingId" />
        </div>

        <div class="form-item">
          <button @click="changeDisplayForMtg">
            <nuxt-link
              :to="{path: '/meeting', query: {nickname: nickname, meetingId: meetingId}}"
            >キャリアコンサルタントに相談する</nuxt-link>
            <!-- <a :href="baseUrl.url">キャリアコンサルタントに相談する</a> -->
          </button>
        </div>
      </div>
    </div>
    <!-- <div id="zmmtg-root" :class="[ isActive === true ? 'zmmtg-off' : null]"></div> -->
    <!-- <div id="zmmtg-root" :class="{ zmmtgOff: isActive}"></div> -->
    <!-- <div :class="{ zmmtgOff: isActive}"> -->
    <!-- <div id="zmmtg-root"></div> -->
    <!-- <div id="aria-notify-area"></div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "join",
  data() {
    return {
      nickname: "",
      meetingId: "",
      isActive: true
      // baseUrl: {
      //   url:
      //     process.env.BASE_URL +
      //     `/meeting?nickname=${this.nickname}&?meetingId=${this.meetingId}`
      //   // query: { nickname: this.nickname, meetingId: this.meetingId }
      // }
      // FIXME: リロードすることには成功したけど、リロードなのでqueryのdataがundefinedになってしまうため断念。。。
    };
  },
  methods: {
    changeDisplayForMtg() {
      this.isActive = false;
      console.log("this.isActive", this.isActive);
    }
  },
  created() {
    console.log("this.isActive", this.isActive);
  }
};
</script>

<style>
/* #zmmtg-root {
  visibility: hidden;
} */

/* .zmmtgOff {
  display: none;
  visibility: hidden;
} */

.join {
  padding: 5px;
}

.join-card {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 30%;
  height: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.join-header {
  border-bottom: 1px solid #d7dae2;
  padding: 20px;
  margin-bottom: 20px;
}

.form-item {
  display: block;
  padding: 5px;
}
</style>