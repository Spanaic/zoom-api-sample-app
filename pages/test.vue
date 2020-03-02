<template>
  <div>
    <button @click="getMeetingList">会議一覧を取得する</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userId: 51628834
    };
  },
  methods: {
    async getMeetingList() {
      console.log(this.userId);
      let res = await axios
        .get(`https://api.zoom.us/v2/users/${this.userId}/meetings`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>