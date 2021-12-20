<script lang="tsx">
import { defineComponent, resolveComponent, h } from 'vue'
import DraggableLayout from '@/components/DraggableLayout.vue'

export default defineComponent({
  components: {
    DraggableLayout
  },
  props: [
    'currentItem',
    'index',
    'drawingList',
    'activeId',
    'formConf'
  ],
  setup(props, context) {
  
    const layout = () => {
      return (
        props.currentItem.__config__.tag ? <div style="padding: 20px; background: black; cursor: move;">
          {
            h(resolveComponent(props.currentItem.__config__.tag), {
              modelValue: props.currentItem.defaultValue,
              'onUpdate:modelValue'(e: any) {
                props.currentItem.defaultValue = e;
              }
            })
          }
        </div> : <DraggableLayout config={props.currentItem.__config__}></DraggableLayout>
      )
    }
    return {
      layout
    };
  },
  render() {
 
    return this.layout()
  }
})
</script>
