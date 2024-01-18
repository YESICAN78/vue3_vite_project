<script lang='ts' setup>
import { ref, onMounted, reactive } from 'vue';
let sliderValue = ref(20)
const onChange = (value: number) => {
  sliderValue.value = value
}
</script>
<template>
  <div class="slider">
    <van-slider v-model="sliderValue" @change="onChange" />
  </div>
</template>
<style lang='less' scoped>
.slider {
  display: flex;
  align-items: center;
  height: 40px;
}
</style>