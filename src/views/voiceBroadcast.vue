<script setup>
import { ref, onMounted, reactive, nextTick, onBeforeMount, watch } from "vue";
const textarea2 = ref(`因为其他国家的领导人基本早就到了`);
const onend = () => {
  console.log("播报结束");
};
const debounceTime = ref(3000);
const debounceData = ref("");
const debounce = () => {
  debounceData.value = "成功";
};
</script>
<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>语音文字播报</span>
        </div>
      </template>
      <el-input
        v-model="textarea2"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="请输入播报内容"
      />
      <el-button
        :key="textarea2"
        type="primary"
        v-voiceBroadcast:[{text:textarea2}]="onend"
        >开始播报</el-button
      >
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>指令实现防抖</span>
        </div>
      </template>
      <p>{{ debounceTime + "后执行提交" + debounceData }}</p>
      <el-button type="primary" v-debounce:[{time:debounceTime}]="debounce"
        >提交</el-button
      >
    </el-card>
  </div>
</template>
<style lang="less" scoped>
.box-card {
  margin-bottom: 10px;
}
</style>
