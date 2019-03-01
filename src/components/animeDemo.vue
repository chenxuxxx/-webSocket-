<template>
  <div class="animeQ">
    <!-- <div class="demo"></div> -->
    <div class="box"></div>
    <!-- <span>ss</span> -->
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    // this.$nextTick(() => {
      this.$anime({
        targets: '.box',
        translateX: 1000,
        duration: 4000,
        loop: true,
        
        // complete: function (anim) {
        //   completeLogEl.value = 'completed : ' + anim.completed
        // }
      })
    // })

  },
}
</script>
<style lang="less" scope>
.animeQ {
  // position: relative;
  // .demo {
  //   width: 800px;
  //   height: 800px;
  //   background-color: gray;
  //   position: absolute;
  //   // z-index: 99999999999;
  // }
  .box {
    height: 50px;
    width: 50px;
    // position: absolute;
    display:inline-block;
    background-color: skyblue;
    // z-index: 999999999999;

  }
}
</style>