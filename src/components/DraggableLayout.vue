<template>
    
    <draggable
      class="layout"
      :list="config.children"
      group="componentsGroup"
      :animation="400"
      itemKey="id"
    >
      <template #item="{element, index}">
        <div class="component">
          <component :is="element.__config__.tag" v-model="value" @input="onInput"></component>
        </div>
      </template>
    </draggable>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  props: {
    config: {
      type: Object,
      default: {}
    }
  },
  watch: {
    config: {
      deep: true,
      handler(value) {
        console.log(value);
      }
    }
  },
  
  setup () {
    const state = reactive({
      value: 0
    });
    return {
      ...toRefs(state)
    }
  },
  methods: {
    onInput(val: [string, number]) {
      this.$emit('input', val);
    }
  }
})
</script>

<style lang="less" scoped>
.layout {
  padding: 20px;
  background: pink;
  cursor: move;
  .component {
    padding: 10px;
    background: yellow;
    cursor: move;
  }
}

</style>
