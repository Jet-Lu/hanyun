Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      business_data: null,
      multiple_pie: {
        tooltip: {},
        gauge: {
          tooltip: {
            formatter: "{c}%"
          },
          series: [
            {
              name: '业务指标',
              type: 'gauge',
              startAngle: 180,
              radius: "50%",
              center: ['50%', '70%'],
              endAngle: 0,
              axisLine: {
                lineStyle: {
                  width: 3,
                  color: [[0.48, '#0aa'], [1, '#000']],
                }
              },
              pointer: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              detail: {
                fontSize: 15,
                formatter: '{value}%'
              },
              data: [{ value: 48, name: '' }]
            }, {
              name: '业务指标',
              type: 'gauge',
              startAngle: 180,
              endAngle: 0,
              center: ['50%', '70%'],
              radius: "100%",
              axisLine: {
                lineStyle: {
                  width: 3,
                  color: [[0.48, '#0aa'], [1, '#000']],
                }
              },
              pointer: {
                width: 5
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                show: false
              },
              itemStyle: {
                color: "yellow",
                shadowColor: "#0aa",
              },
              markPoint: {
                symbol: 'circle',
                symbolSize: 10,
              },
              detail: {
                show: false,
                fontSize: 15,
                formatter: '{value}%'
              },
              data: [{ value: 48, name: '' }]
            }
          ]
        },
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
                color: '#ccc'
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
                color: '#ccc'
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
      tab_array: [
        { label: '资源总览', url: './resource-overview.html', active: true },
        { label: '端口列表', url: './cpu.html', active: false },
        { label: '地址表', url: './network.html', active: false },
        { label: 'APP表', url: './process.html', active: false },
        { label: '路由表', url: './service.html', active: false },
        { label: 'MPLS VPN表', url: './disk.html', active: false },
        { label: 'VLAN表', url: './storage.html', active: false }
      ],
      options: [
        { value: 'CPU使用率', label: 'CPU使用率' },
        { value: '系统平均负载', label: '系统平均负载' },
        { value: '物理内存使用率', label: '物理内存使用率' },
        { value: '交换内存使用率', label: '交换内存使用率' },
        { value: 'Swap交换情况', label: 'Swap交换情况' },
        { value: '响应时长', label: '响应时长' }
      ],
      value: '',
      database_array: [
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
        { id: '2', label: 'MySQL', status: '1', count: 62, size: '163.23KB' },
        { id: '2', label: 'MySQL', status: '1', count: 62, size: '163.23KB' },
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
        { id: '2', label: 'MySQL', status: '1', count: 62, size: '163.23KB' },
        { id: '2', label: 'MySQL', status: '1', count: 62, size: '163.23KB' },
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
        { id: '2', label: 'MySQL', status: '1', count: 62, size: '163.23KB' },
        { id: '2', label: 'MySQL', status: '1', count: 62, size: '163.23KB' },
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
        { id: '2', label: 'MySQL', status: '1', count: 62, size: '163.23KB' },
        { id: '2', label: 'MySQL', status: '1', count: 62, size: '163.23KB' },
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
        { id: '1', label: 'INFO', status: '0', count: 62, size: '163.23MB' },
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
      isActice: '1H',
      page_array: [
        { label: '总览', url: './resource-overview.html', active: true },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false },
        { label: '拓扑定位', url: '', active: false },
      ],
      signal_info: {
        baseInfo: { status: '0', version: '2021-03-20', start_time: '23天', main_name: 'qingta', setup_folder: 'd:/kugou', system: 'windows' },
        linePool: {},
      },
      cpuData: {
        echart_title: 'WEB应用',
        isActice: '1H',
      },
      page_height: {
        marginTop_togglePage: '',
        average_height: '',
        content_height: ''
      }
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', safety_level: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
    this.multiple_pie.gauge.series[1].axisLine.lineStyle.color[0][0] = 48 / 100;
    this.multiple_pie.gauge.series[1].data[0].value = (48 / 100) * 100;
  },
  mounted() {
    // console.log(document.body.clientHeight, this.$refs.homePage, this.$refs.main_row);
    // const calcHeight = document.body.clientHeight - this.$refs.main_row.clientHeight - 120;
    // const calcMainHeight = document.body.clientHeight - this.$refs.overvie_header.clientHeight - 300;
    // console.log(calcHeight, document.body.clientHeight, this.$refs.main_row.clientHeight);
    // if (calcHeight < 0) {
    //   this.page_height.marginTop_togglePage = '20px';
    // } else {
    //   this.page_height.marginTop_togglePage = calcHeight + 'px';
    // }
    // this.page_height.average_height = (calcMainHeight / 2) + 'px';
    // this.page_height.content_height = (calcMainHeight / 2) - 74 + 'px';
    // console.log(calcMainHeight, this.page_height.average_height, this.page_height.content_height);
  },
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
    toggleTime(evt) {
      this.isActice = evt;
      this.cpuData.isActice = evt;
      switch (evt) {
        case '1H':
          // this.multiple_pie.line.xAxis.data = [];
          break;
        case '自定义':
          this.editTimeDialog = true;
          break;
        default:
          break;
      }
    },
  }
});