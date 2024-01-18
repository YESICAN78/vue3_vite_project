
<script lang='ts' setup>
import { ref, onMounted, reactive, watch } from 'vue';
import draggable from 'vuedraggable';
import { generateUUID, generateRandomString } from '@/utils/Tool'
import getName from '../../widgets/getWidget'
import { getWidgetsList } from './widgetList'
import { ComponentItem } from "./interface"
import { Button } from 'vant';
import RenderForm from './renderForm.vue'
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type removeKey = 'valueKey' | 'id'
type newComponentItem = Optional<ComponentItem, removeKey>
let widgetList: newComponentItem[] = reactive([])
const RefDraggable = ref(null)
let activeIndex = ref(0)
const dialogVisible = ref(false)
const getWidget = (name: string) => {
  return getName[name]
}
const handleItemClick = (index: number) => {
  activeIndex.value = index
}
const deleteFormItem = (data: ComponentItem) => {
  let list: newComponentItem[] = widgetList.filter(item => item.id !== data.id)
  widgetList = [...list]
}
const cloneDog = (data: newComponentItem) => {
  return {
    name: data.name, element: data.element, id: generateUUID(), valueKey: generateRandomString(20)
  }
}
const componentChange = (data: any) => {
  console.log("data", data, activeIndex.value)
}

const PreviewMobileForm = () => {
  dialogVisible.value = true
}
const handleClose = () => {
  dialogVisible.value = false
}
</script>
<template>
  <div class="dragMain">
    <div class="left">
      <draggable :list="getWidgetsList()" ghost-class="ghost" :force-fallback="true"
        :group="{ name: 'widgetList', pull: 'clone' }" :sort="false" itemKey="id" class="list-group" :clone="cloneDog">
        <template #item="{ element }">
          <div class="list-group-item">
            <label class="move">{{ element.name }}</label>
          </div>
        </template>
      </draggable>
    </div>
    <div class="center">
      <div class="mobile">
        <div class="mobile_screen">
          <div class="spirit_island"></div>
          <draggable :list="widgetList" ghost-class="ghost" itemKey="id" :force-fallback="true" group="widgetList"
            :fallback-class="true" :fallback-on-body="true" class="mobile_content" :animation="400">
            <template #item="{ element, index }">
              <van-space style="width: 100%;margin-bottom: 20px;" direction="vertical">
                <div :class="['mobile_content_item', { 'active': activeIndex === index }]"
                  @click="handleItemClick(index)">
                  <van-icon @click="deleteFormItem(element)" class="close" name="clear" color="red" size="23" />
                  <span v-if="!['Button'].includes(element.element)" class="label">{{ element.name }}</span>
                  <div>
                    <component :onChange="componentChange" :is="getWidget(element.element)"></component>
                  </div>
                </div>
              </van-space>
            </template>
          </draggable>
        </div>
      </div>
    </div>
    <div class="right">
      <el-button @click="PreviewMobileForm" type="primary">预览</el-button>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="移动端预览" width="350" :before-close="handleClose">
    <RenderForm :formThree="widgetList" />
  </el-dialog>
</template> 
<style lang='less' scoped>
.dragMain {
  height: inherit;
  display: flex;
  justify-content: space-between;

  .center {
    width: calc(100% - 300px);
    padding: 50px 0 30px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;

    .mobile {
      display: flex;
      justify-content: center;
      align-items: center;
      aspect-ratio: 1/2;
      border-radius: 40px;
      background-color: #000;



      .mobile_screen {
        position: relative;
        display: flex;
        width: 96%;
        align-items: flex-end;
        aspect-ratio: 1/2;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 22px;

        .spirit_island {
          position: absolute;
          top: 1%;
          left: 50%;
          transform: translateX(-50%);
          height: 5%;
          width: 35%;
          border-radius: 35px;
          background: black;
        }

        .mobile_content {
          display: flex;
          align-items: center;
          flex-direction: column;
          width: 100%;
          padding: 30px 10px 0px 10px;
          box-sizing: border-box;
          height: 94%;
          overflow-y: scroll;

          &::-webkit-scrollbar {
            display: none;
          }

          .mobile_content_item {
            position: relative;
            padding: 5px;
            box-sizing: border-box;
            align-items: center;
            width: 100%;
            border: 4px solid transparent;



            .label {
              display: block;
              margin-bottom: 20px;
            }

            .close {
              display: none;
              position: absolute;
              right: -10px;
              top: -15px;
              cursor: pointer;
              z-index: 1;
            }

            &:hover {
              border: 4px #999 dashed;
              border-radius: 5px;
              cursor: move;

              .close {
                display: block;
              }
            }
          }
        }
      }
    }
  }

  .left,
  .right {
    padding: 10px;
    width: 300px;
    background-color: #f0f2f5;
  }

  .list-group {
    display: flex;
    flex-wrap: wrap;

    .list-group-item {
      width: 48%;
      height: 50px;
      user-select: none;
      text-align: center;
      line-height: 50px;
      cursor: move;
      border: 2px solid transparent;

      &:hover {
        border: 2px #999 dashed;
        border-radius: 5px;
        cursor: move;
      }
    }
  }

}
</style>