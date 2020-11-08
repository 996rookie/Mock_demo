<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.get("/api/news").then((res) => {
      console.log(res);
    });
    axios.post("/api/post/news").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="less" scoped></style>
