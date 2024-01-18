<script lang='ts' setup>
import { ref, onMounted, reactive } from 'vue';
import { ComponentItem } from "./interface"
const props = defineProps({
  formThree: {
    type: Array,
    required: true
  }
})

onMounted(() => {

  console.log(props.formThree)
})

</script>
<template>
  <div class="renderForm"></div>
</template>
<style lang='less' scoped>
.renderForm {
  width: 100%;
}
</style>