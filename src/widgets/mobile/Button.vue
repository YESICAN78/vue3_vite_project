<script lang='ts' setup>
import { ref, onMounted, reactive } from 'vue';
</script>
<template>
  <div class="button">
    <van-button class="btn" type="primary">提交</van-button>
  </div>
</template>
<style lang='less' scoped>
.button {
  width: 100%;
  .btn{
    width: inherit;
  }
}
</style>