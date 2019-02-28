<template>
  <div class="hello">
    <div id="main"></div>
    <button @click="handler">点击变化</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
      option: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 4000, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 点击事件
    handler () {
      this.option.series[0].data[2] = 3000
      this.init()
    },
    // 初始化echart
    init() {
      this.$echart.init(document.getElementById("main")).setOption(this.option)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  width: 1000px;
  height: 600px;
}
</style>
