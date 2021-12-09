<template>
  <div>
    <svg-icon
      :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
      @click="enTogger"
    ></svg-icon>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

const isFullscreen = ref(false)
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}
const enTogger = () => {
  screenfull.toggle()
}
onMounted(() => {
  screenfull.on('change', change)
})
onUnmounted(() => {
  screenfull.on('change', change)
})
</script>
