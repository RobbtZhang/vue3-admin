<template>
  <div class="hamburger-container" @click="toggerClick">
    <svg-icon id="guide-hamburger" class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
const toggerClick = () => {
  store.commit('app/triggerSidebarOpened')
}
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 6px;
  .hamburger {
    vertical-align: middle;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
}
</style>
