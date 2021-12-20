<template>
  <div class="home">
    <div class="components-view">
      <el-scrollbar>
        <div v-for="(item, index) in componentsType" :key="index">
          <div class="components-title">
            {{ item.title }}
          </div>
          <draggable
            class="components-draggable"
            :list="item.list"
            :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
            draggable=".components-item"
            :sort="false"
            itemKey="id"
            @end="onend"
          >
            <template #item="{ element }">
              <div class="drag components-item">{{ element.__config__.label }}</div>
            </template>
          </draggable>
        </div>
      </el-scrollbar>
    </div>
    <draggable
      class="preview-view"
      :list="previewList"
      group="componentsGroup"
      :animation="400"
      itemKey="id"
    >
      <template #item="{element, index}">
        <draggable-item
          :drawing-list="previewList"
          :current-item="element"
          :index="index"
          :active-id="activeId"
          :form-conf="formConf"
          @activeItem="activeFormItem"
          @copyItem="drawingItemCopy"
          @deleteItem="drawingItemDelete"
        />
      </template>
    </draggable>
    <div class="config-view">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import {
  inputComponents, selectComponents, layoutComponents, formConf
} from '@/data/config'
import DraggableItem from '@/components/DraggableItem.vue';
export default defineComponent({
  components: { DraggableItem },
  setup () {
    const data = reactive({
      formConf,
      activeId: 0,
      previewList: [],
      componentsType: [
        {
          title: '输入型组件',
          list: inputComponents
        },
        {
          title: '选择型组件',
          list: selectComponents
        },
        {
          title: '布局型组件',
          list: layoutComponents
        }
      ]
    })
    const onend = () => {

    }
    const activeFormItem = () => {

    }
    const drawingItemCopy = () => {

    }
    const drawingItemDelete = () => {

    }
    return { 
      ...toRefs(data), 
      onend, 
      activeFormItem,
      drawingItemCopy,
      drawingItemDelete
    }
  }
})
</script>

<style lang="less" scoped>
.home {
  display: flex;
  height: calc(100vh - 60px);
  .drag {
    cursor: move;
  }
  .components-view {
    width: 300px;
    background-color: #ffffff;
    border-right: 1px solid #e3e6eb;
    .components-item {
      display: inline-block;
      width: 48%;
      margin: 1%;
      transition: transform 0ms !important;
      width: 100px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border: 1px solid #999999;
      margin: 10px;
      box-sizing: border-box;
    }
  }
  .preview-view {
    flex: 1;
    .preview-item {
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: inline-block;
      border: 1px solid #999999;
      text-align: center;
      &:hover {
        background-color: #ffffff;
      }
      &.sortable-ghost {
        background-color: blue;
      }
    }
    .components-item.sortable-ghost {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background-color: blue;
      margin: 0;
      text-align: center;
    }
  }
  .config-view {
    width: 320px;
    background-color: #ffffff;
    border-left: 1px solid #e3e6eb;
  }
}

</style>
