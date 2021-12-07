<template>
  <div class="">
    {{ $t('msg.test') }}
    <el-pagination :page-size="100" layout="total" :total="10000"></el-pagination>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
