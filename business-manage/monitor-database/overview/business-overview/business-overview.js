Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      radio2: '1H',
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
      options: [
        { value: '打开链接数', label: '打开链接数' },
        { value: '主键命中率', label: '主键命中率' },
        { value: '已用键缓冲区大小', label: '已用键缓冲区大小' },
        { value: '键缓存大小', label: '键缓存大小' },
        { value: '查询缓存命中率', label: '查询缓存命中率' },
        { value: '每秒接收请求数', label: '每秒接收请求数' },
        { value: '等待后获取表锁失败次数', label: '等待后获取表锁失败次数' },
        { value: '激活线程数', label: '激活线程数' },
        { value: '响应时长', label: '响应时长' }
      ],
      value: '',
      database_array: [
        { id: '1', label: 'INFORMATION_SCHEMA', count: 62, size: '163.23MB' },
        { id: '2', label: 'MySQL', count: 62, size: '163.23KB' },
        { id: '3', label: '网络', count: 62, size: '163.23MB' },
        { id: '4', label: 'performance_schema', count: 62, size: '163.23GB' },
        { id: '5', label: 'SYS', count: 62, size: '0.00B' },
      ],
      editTimeDialog: false,
      time: {
        value1: '',
        value2: ''
      },
      time_array: [
        { name: '1H', value: '1H' },
        { name: '6H', value: '6H' },
        { name: '1D', value: '1D' },
        { name: '7D', value: '7D' },
        { name: '30D', value: '30D' },
        { name: '自定义', value: '自定义' },
      ],
      alarm_tableData: [
        { alarm_id: '11', alarm_name: '2物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '1', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '1物理内存使用率异常', levle: '0', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '0', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '3物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '物理内存使用率异常', levle: '2', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
      ],
      tab_array: [
        { label: '业务总览', url: '', active: true }
      ],
      isActice: '1H',
      page_array: [
        { label: '总览', url: './business-overview.html', active: true },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false }
      ],
      signal_info: {
        baseInfo: { status: '0', version: '2021-03-20', start_time: '23天', main_name: 'qingta', setup_folder: 'd:/kugou', system: 'windows' },
        linePool: {},
      },
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', safety_level: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
  },
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    toggleTime(evt) {
      // console.log(evt);
      this.isActice = evt;
      switch (evt) {
        // case '1H':
        //   this.multiple_pie.line.xAxis.data = [];
        //   break;
        case '自定义':
          this.editTimeDialog = true;
          break;
        default:
          break;
      }
    },
  }
});