<!--
 * @Author: SunFulin
 * @Date: 2023-10-17 10:30:00
 * @LastEditTime: 2023-10-18 17:15:50
 * @LastEditors: Dragon
-->
<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import MenuList from '@/utils/menu'
const links = reactive([
  {
    title: "自定义指令",
    route: "/voiceBroadcast",
  },
  {
    title: "TS泛型",
    route: "/tst",
  },
  {
    title: "拖拽生成表单",
    route: "/draggable"
  }
]);
const menuActive = ref(0)

const handleMenu = (index) => {
  menuActive.value = index
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="system_aside">
        <div :class="['aside-item',
          { 'aside-item-active': menuActive === index }]" @click="handleMenu(index)" v-for="(item, index) in links"
          :key="item.route">
          <router-link class="aside-link" :to="item.route">{{
            item.title
          }}</router-link>
        </div>

      </el-aside>
      <el-main class="system_main">
        <div class="content_main">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style lang="less" scoped>
.common-layout {
  height: 100%;
}

.el-main {
  --el-main-padding: 20px;
  box-sizing: border-box;
}

.el-container {
  height: inherit;
}

.system_aside {
  width: 300px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .aside-item {
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 50px;
    margin-bottom: 5px;
    cursor: pointer;

    &:hover {
      background-color: #e9ebef;
    }

    .aside-link {
      display: block;
      height: inherit;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.6);
    }
  }

  .aside-item-active {
    background-color: #e9ebef;
    color: rgb(51, 51, 51);
    font-weight: 700;
  }
}

.system_main {
  width: calc(100% - 300px);
  overflow-y: scroll;
  background-color: #f0f2f5;

  .content_main {
    background-color: #ffff;
    overflow-y: scroll;
    height: 100%;
  }
}
</style>
