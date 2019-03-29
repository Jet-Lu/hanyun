Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      business_data: null,
      multiple_pie: {
        line: {
          color: ['#54E8FF'],
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '50',
            right: '20',
            top: '20',
            bottom: '20'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '02:33', '03:33', '04:33', '05:33', '06:33', '08:33'],
            axisLabel: {
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              fontSize: 12,
              formatter: '{value}'
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            splitLine: {
              lineStyle: {
                color: ['#eee']
              }
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              name: '模拟数据',
              type: 'line',
              areaStyle: {
                color: '#304C8E'
              },
              data: [11, 31, 15, 23, 52, 16, 20]
            }
          ]
        }
      },
      init_page: {
        show_newwork: true
      },
      tab_array: [
        { label: '资源总览', url: './resource-overview.html', active: false },
        { label: '内存分析', url: './memory-analysis.html', active: false },
        { label: '表空间', url: './table-space.html', active: false },
        { label: '数据文件', url: './data-file.html', active: true },
        { label: '会话', url: './Conversation.html', active: false },
        { label: 'JOB', url: './job.html', active: false },
        { label: '重做日志', url: './redo-log.html', active: false },
        { label: '死锁检测', url: '', active: false },
        { label: '库缓存', url: './library-cache.html', active: false }
      ],
      time_array: [
        { name: '1H', value: '1H' },
        { name: '6H', value: '6H' },
        { name: '1D', value: '1D' },
        { name: '7D', value: '7D' },
        { name: '30D', value: '30D' },
        { name: '自定义', value: '自定义' },
      ],
      network_tableData: [
        { name: '红帽VirtlO以太网适配器#2', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
        { name: '红帽VirtlO以太网适配器#2', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
        { name: '红帽VirtlO以太网适配器#4', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
        { name: '红帽VirtlO以太网适配器#2', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
        { name: '红帽VirtlO以太网适配器#2', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
      ],
      page_array: [
        { label: '总览', url: './resource-overview.html', active: true },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false },
        { label: '拓扑定位', url: '', active: false },
        { label: '关注定位', url: '../focus-position/focus-position.html', active: false },
      ],
      editTimeDialog: false,
      time: {
        value1: '',
        value2: ''
      },
      echart_toggle: [
        { label: 'WEB应用' },
      ],
      cpuData: {
        echart_title: 'WEB应用',
        isActice: '1H',
        current_name: '红帽VirtlO以太网适配器#4'
      },
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', safety_level: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
  },
  mounted() {
  },
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    hightLight(row) {
      console.log(row);
      this.cpuData.current_name = row.name;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
    showPage_network(evt) {
      console.log(evt);
      this.init_page.show_newwork = false;
    },
    toggleEcharts(evt) {
      this.cpuData.echart_title = evt.label;
    },
    toggleTime(evt) {
      console.log(evt);
      this.cpuData.isActice = evt;
      switch (evt) {
        case '自定义':
          this.editTimeDialog = true;
          break;
        default:
          break;
      }
    },
  }
});