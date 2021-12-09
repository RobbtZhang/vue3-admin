<template>
  <div class="header-search" :class="{ show: isShow }">
    <svg-icon
      class-name="search-icon"
      icon="search"
      @click.stop="onShowClick"
    ></svg-icon>
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in searchOptions"
        :value="option.item"
        :key="option.item.path"
        :label="option.item.title.join(' / ')"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { filterRoutes } from '@/utils/route'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import { generateRoutes } from './filterData'
import { watchSwitchLang } from '@/utils/i18n'

const router = useRouter()

let searchPool = computed(() => {
  const routes = filterRoutes(router.getRoutes())
  return generateRoutes(routes)
})

let fuse

const initFuse = (searchPool) => {
  return new Fuse(searchPool, {
    shouldSort: true,
    minMatchCharLength: 1,
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'path',
        weight: 0.3
      }
    ]
  })
}

fuse = initFuse(searchPool.value)

const isShow = ref(false)
const search = ref('')
const onShowClick = () => {
  isShow.value = !isShow.value
}
const searchOptions = ref([])
const querySearch = (query) => {
  if (query !== '') {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}
const onSelectChange = (val) => {
  router.push(val.path)
}
const headerSearchSelectRef = ref(null)
const onClose = () => {
  isShow.value = false
  headerSearchSelectRef.value.blur()
  searchOptions.value = []
}
watch(isShow, (val) => {
  if (val) {
    headerSearchSelectRef.value.focus()
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})
watchSwitchLang(() => {
  searchPool = computed(() => {
    const routes = filterRoutes(router.getRoutes())
    return generateRoutes(routes)
  })
  fuse = initFuse(searchPool.value)
})
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
