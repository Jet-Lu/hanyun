Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      radio2: '1H',
      business_data: null,
      multiple_pie: {
        gauge: null,
        pie: null
      },
      options: [
        { value: 'CPU使用率', label: 'CPU使用率' },
        { value: 'Heap space', label: 'Heap space' },
        { value: 'PermGen space', label: 'PermGen space' },
        { value: '平均请求次数（秒）', label: '平均请求次数（秒）' },
        { value: '当前会话数', label: '当前会话数' },
        { value: '当前活动线程数', label: '当前活动线程数' },
        { value: '平均响应时间', label: '平均响应时间' },
        { value: '响应时长', label: '响应时长' }
      ],
      value: '',
      database_array: [
        { id: '1', label: 'INFORMATION_SCHEMA', count: 62, size: '163.23MB' },
        { id: '2', label: 'MySQL', count: 62, size: '163.23KB' },
        { id: '3', label: '网络', count: 62, size: '163.23MB' }
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
      web_tableData: [
        { name: '/', host_name: '本地主机', route: '网络服务器', servlet: '0', },
        { name: '网络服务器', host_name: '本地主机', route: '网络服务器', servlet: '0', },
        { name: '/net-server', host_name: 'localhost', route: '/net-server', servlet: '0', },
        { name: '/net-server', host_name: 'localhost', route: '/net-server', servlet: '0', },
        { name: '/net-server', host_name: 'localhost', route: '/net-server', servlet: '0', },
      ],
      connect_tableData: [
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'AJP-NIO-9090', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'AJP-NIO-9090', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'AJP-NIO-9090', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
      ],
      isActice: '1H',
      tab_array: [
        { label: '业务总览', url: './resource-overview.html', active: false },
        { label: 'WEB应用', url: './web-app.html', active: false },
        { label: '连接器', url: './connection.html', active: true }
      ],
      page_array: [
        { label: '总览', url: './resource-overview.html', active: true },
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
  mounted() {
    // this.getBusinessUsingRight();
  },
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
    toggleTime(evt) {
      console.log(evt);
      this.isActice = evt;
      switch (evt) {
        case '自定义':
          this.editTimeDialog = true;
          break;
        default:
          break;
      }
    },
    /* 业务可用率 */
    getBusinessUsingRight() {
      // cpu使用率
      this.multiple_pie.gauge = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            // startAngle: -180,
            // endAngle: 180,
            // axisLine: {
            //   show: false,
            // },
            // axisTick: {
            //   show: false,
            // },
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }]
          }
        ]
      };
      this.multiple_pie.pie = {
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
      };
    },
  }
});