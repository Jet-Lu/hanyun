Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      init_page: {
        show_storage: true
      },
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
        },
        line2: {
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
        },
        line3: {
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
              formatter: '{value}KB/s'
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
        { label: '业务总览', url: './resource-overview.html', active: false },
        { label: '中央处理器', url: './cpu.html', active: false },
        { label: '网卡', url: './network.html', active: false },
        { label: '进程', url: './process.html', active: false },
        { label: '服务', url: './service.html', active: false },
        { label: '磁盘', url: './disk.html', active: false },
        { label: '硬盘IO', url: './storage.html', active: true }
      ],
      time_array: [
        { name: '1H', value: '1H' },
        { name: '6H', value: '6H' },
        { name: '1D', value: '1D' },
        { name: '7D', value: '7D' },
        { name: '30D', value: '30D' },
        { name: '自定义', value: '自定义' },
      ],
      storage_tableData: [
        { name: '1C:', line_len: 5, read_times: 8, write_times: 8, read_speed: '0.00B', write_speed: '0.00B' },
        { name: '2C:', line_len: 5, read_times: 8, write_times: 8, read_speed: '0.00B', write_speed: '0.00B' },
        { name: '3C:', line_len: 5, read_times: 8, write_times: 8, read_speed: '0.00B', write_speed: '0.00B' },
        { name: '4C:', line_len: 5, read_times: 8, write_times: 8, read_speed: '0.00B', write_speed: '0.00B' },
        { name: '5C:', line_len: 5, read_times: 8, write_times: 8, read_speed: '0.00B', write_speed: '0.00B' },
        { name: '6C:', line_len: 5, read_times: 8, write_times: 8, read_speed: '0.00B', write_speed: '0.00B' },
        { name: '1C:', line_len: 5, read_times: 8, write_times: 8, read_speed: '0.00B', write_speed: '0.00B' },
      ],
      echart_toggle: [
        { label: '队列长度' },
        { label: '读写次数' },
        { label: '读写速率' }
      ],
      page_array: [
        { label: '总览', url: './resource-overview.html', active: true },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false },
        { label: '拓扑定位', url: '', active: false },
        { label: '关注定位', url: '../focus-position/focus-position.html', active: false },
      ],
      cpuData: {
        echart_title: '队列长度',
        isActice: '1H',
        current_name: '2C:'
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
      this.cpuData.current_name = row.name;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
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
    showPage_storage(evt) {
      console.log(evt);
      this.init_page.show_storage = false;
    },
  }
});