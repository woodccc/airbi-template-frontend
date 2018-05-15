<template>
    <i class="iconfont" :class="type" :style="{ color: color }"/>
</template>

<script>
  export default {
    name: 'app-icon',
    props: {
      type: {
        type: String
      },
      color: {
        type: String
      }
    }
  }
</script>

<style scoped>
    .iconfont {
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
        color: #909399;
        display: inline-block;
    }
</style>
