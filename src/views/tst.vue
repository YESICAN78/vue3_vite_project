<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";

const identity = <T>(name: T) => {
  return name;
};

onMounted(() => {
  console.log(identity({name:"00"}));
});
</script>
<template>
  <div>p</div>
</template>
<style lang="less" scoped></style>
