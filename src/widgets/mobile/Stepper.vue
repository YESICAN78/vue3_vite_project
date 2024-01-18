<script lang='ts' setup>
import { ref, onMounted, reactive } from 'vue';
const stepperValue = ref(0)
</script>
<template>
  <van-stepper v-model="stepperValue" />
</template>
<style lang='less' scoped></style>