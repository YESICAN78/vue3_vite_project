<script lang='ts' setup>
import { ref, onMounted, reactive, watch } from 'vue';
const props = defineProps({
  onChange: {
    type: Function
  }
})
const inputValue = ref('')
watch(inputValue, () => {
  props.onChange && props.onChange(inputValue.value)
})
</script>
<template>
  <div class="Input">
    <van-field v-model="inputValue" placeholder="留言" />
  </div>
</template>
<style lang='less' scoped>
.Input {
  width: 100%;
}
</style>