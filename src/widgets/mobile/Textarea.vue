<script lang='ts' setup>
import { ref, onMounted, reactive } from 'vue';
import { Field, } from 'vant';
const inputValue = ref('')
</script>
<template>
  <van-field type="textarea" v-model="inputValue" placeholder="请输入用户名" />
</template>
<style lang='less' scoped></style>