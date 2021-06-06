<template>
  <div class="toastBox">{{toastMessage}}</div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:['toastMessage']
  }
</script>

<style lang="scss" scoped>
    .toastBox {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 10px;
        background-color: rgba(0,0,0,0.5);
        border-radius: 5px;
        color: #eee;
    }
 
</style>
