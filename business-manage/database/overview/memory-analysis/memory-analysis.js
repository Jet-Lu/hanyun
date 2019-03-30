Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      multiple_pie: {
        bar: {
          color: ['#54E8FF'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#ccc',
              rotate: 30
            },
            data: ['SGA固定区域大小', '大地', 'SGA最大值', 'JAVA池', 'SGA可用内存', '重做日志缓冲区大小', '缓冲区大小', '共享池大小', '量大PGA空间', '已分配PGA大小', '正在使用PGA大小']
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#ccc',
            }
          },
          series: [{
            barWidth: '20%',
            label: {
              show: true,
              position: 'top',
              fontSize: '12px',
              color: '#ccc',
              formatter: function(param) {
                return param.value + 'GB'
              }
            },
            data: [120, 200, 150, 80, 70, 110, 130, 20, 40, 100, 200],
            type: 'bar'
          }]
        }
      },
      tab_array: [
        { label: '资源总览', url: './resource-overview.html', active: false },
        { label: '内存分析', url: './memory-analysis.html', active: true },
        { label: '表空间', url: './table-space.html', active: false },
        { label: '数据文件', url: './data-file.html', active: false },
        { label: '会话', url: './Conversation.html', active: false },
        { label: 'JOB', url: './job.html', active: false },
        { label: '重做日志', url: './redo-log.html', active: false },
        { label: '死锁检测', url: '', active: false },
        { label: '库缓存', url: './library-cache.html', active: false }
      ],
    }
  },
  created() { },
  mounted() { },
  methods: {
    toggleTab(evt) {
      window.location.href = evt.url;
    },
  }
});