<script lang='ts' setup>
import { ref, onMounted, reactive } from 'vue';
let rateValue = ref(0)
</script>
<template>
  <van-rate v-model="rateValue" :size="25" color="#ffd21e" void-icon="star" void-color="#eee" />
</template>
<style lang='less' scoped></style>