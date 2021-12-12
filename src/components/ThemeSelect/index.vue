<template>
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <svg-icon id="guide-theme" icon="change-theme"></svg-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{$t('msg.theme.themeColorChange')}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <div>
    <SelectColor v-model="selectColorVisiable" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SelectColor from './components/SelectColor.vue'
const selectColorVisiable = ref(false)
const handleSetTheme = command => {
  selectColorVisiable.value = true
}
</script>
