Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      // screenWidth: document.body.clientWidth,
      // screenHeight: document.body.clientHeight,
      radio1: '业务总览',
      business_data: null,
      alarm_statics: {
        color: ['#FFE259'],
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            var res = params.name + ' : ' + params.percent + '%';
            return res;
          }
        },
        xAxis: [{
          show: false
        }],
        yAxis: [{
          show: false
        }],
        series: {
          name: '',
          center: 80,
          radius: [48, 60],
          type: 'pie',
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 35,
            name: '告警',
            label: {
              normal: {
                formatter: '{d} %',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'bold',
                }
              }
            }
          }, {
            value: 65,
            name: '',
            tooltip: { show: false },
            itemStyle: {
              normal: {
                color: '#aaa'
              },
              emphasis: {
                color: '#aaa'
              }
            },
            hoverAnimation: false
          }]
        }
      },
      business_using: {
        tooltip: {
          trigger: 'item',
          formatter: "{b}%"
        },
        hoverAnimation: {
          show: false
        },
        series: [{
          name: '',
          type: 'pie',
          radius: '65%',
          center: ['50%', '35%'],
          calculable: true,
          silent: true,
          clockwise: true,
          data: [
            {
              value: 35,
              name: '业务可用率',
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#54E8FF' },
                    { offset: 1, color: '#2A7D80' }
                  ],
                }
              },
            },
            {
              value: 65,
              label: {
                show: false,
              },
              name: '',
              itemStyle: {
                color: '#101E43'
              }
            },
          ],
          label: {
            normal: {
              formatter: '{c}%',
              position: 'inner',
              textStyle: {
                color: '#fff',
                fontSize: 12,
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }
        }],
        color: ['#0aa', '#101E43'],
      },
      alarm_object: [
        { name: '监控系统数据库', status: '0' },
        { name: '核心服务', status: '1' },
        { name: '采集服务', status: '2' },
        { name: 'WEB数据库', status: '1' },
        { name: '监控系统服务器', status: '1' },
        { name: '网络设备', status: '0' },
        { name: '测试服务器', status: '0' },
        { name: '数据库', status: '1' }
      ],
      this_tab: '业务总览',
      tab_array: [
        { label: '业务总览', url: '' },
        { label: '资源告警', url: '', },
        { label: '业务拓扑', url: '', }
      ],
      multiple_pie: {
        pie1: null,
        pie2: null,
        line: null
      },
      isActice: '0',
      pie3: {
        now: +new Date(2018, 5, 3),
        oneDay: 12 * 3600 * 1000,
        value: Math.random() * 1000
      },
      alarm_tableData: [
        { alarm_id: '11', alarm_name: '2物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '1', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '1物理内存使用率异常', levle: '0', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '0', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '3物理内存使用率异常', levle: '1', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
        { alarm_id: '11', alarm_name: '物理内存使用率异常', levle: '2', alarm_type: '资源负载检测', alarm_status: '1', safety_level: '2', product_time: '2019-02-04', continued_time: '16分23秒', confirmor: '16', confirm_time: '2019-02-05', alarm_content: '百分比 大于等于 50% 触发 严重' },
      ],
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', safety_level: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
    this.getBusinessUsingRight();
    // console.log(screenWidth, screenHeight);
    window.onresize = (e) => {
      // #8190b8
      let screenWidth = document.body.clientWidth;
      let screenHeight = document.body.clientHeight;
      // console.log(e, e.target.innerHeight, e.target.innerWidth);
      // console.log(screenWidth, screenHeight);
    }
  },
  methods: {
    toggleTab(evt) {
      this.radio1 = evt.label;
      this.this_tab = evt.label;
    },
    /* 业务可用率 - 右 */
    getBusinessUsingRight() {
      let labelFromatter = {
        label: {
          formatter: function (params) {
            return 100 - params.value + '%'
          },
          textStyle: {
            baseline: 'top'
          }
        }
      }
      this.multiple_pie.pie1 = {
        color: ['#1CEFEF'],
        series: [{
          type: 'pie',
          center: ['50%', '50%'],
          radius: [25, 35],
          clockwise: false,
          hoverAnimation: false,
          x: '0%',
          itemStyle: labelFromatter,
          data: [{
            name: '',
            value: 75,
            label: {
              show: true,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              color: '#ccc',
            }
          },
          {
            name: '',
            value: 25,
            label: {
              show: false,
              position: 'center',
              formatter: '{b}',
              textStyle: {
                baseline: 'bottom'
              }
            },
            labelLine: {
              show: false
            }
          }]
        }]
      };
      this.multiple_pie.pie2 = {
        color: ['#1CEFEF'],
        series: [{
          type: 'pie',
          center: ['50%', '50%'],
          radius: [25, 35],
          clockwise: false,
          hoverAnimation: false,
          x: '0%',
          itemStyle: labelFromatter,
          data: [{
            name: '',
            value: 75,
            label: {
              show: true,
              position: 'center'
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              color: '#ccc',
            }
          },
          {
            name: '',
            value: 25,
            label: {
              show: false,
              position: 'center',
              formatter: '{b}',
              textStyle: {
                baseline: 'bottom'
              }
            },
            labelLine: {
              show: false
            }
          }]
        }]
      };
      let data = [];
      for (let i = 0; i < 1000; i++) {
        data.push(this.randomData());
      }
      this.multiple_pie.line1 = {
        color: ['#54E8FF'],
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '120',
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
          splitLine: {
            lineStyle: {
              color: ['#ccc']
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
            formatter: '{value} %'
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            lineStyle: {
              color: ['#ccc']
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
      this.multiple_pie.line2 = {
        color: ['#54E8FF'],
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '120',
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
          splitLine: {
            lineStyle: {
              color: ['#ccc']
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
            formatter: '{value} ms'
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            lineStyle: {
              color: ['#ccc']
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
    randomData() {
      this.pie3.now = new Date(+this.pie3.now + this.pie3.oneDay);
      this.pie3.value = this.pie3.value + Math.random() * 21 - 10;
      return {
        name: this.pie3.now.toString(),
        value: [
          [this.pie3.now.getFullYear(), this.pie3.now.getMonth() + 1, this.pie3.now.getDate()].join('/'),
          Math.round(this.pie3.value)
        ]
      }
    },
    openNewPage(obj) {
      console.log(obj);
      let screenWidth = window.screen.width;
      let screenHeight = window.screen.height;
      let url = '';
      switch (obj.name) {
        case '监控系统数据库':
          url = `./monitor-database/overview/business-overview.html?page=${obj.name}`;
          window.open(url, '_blank', `width=1366, height=668,top=0,left=0,toolbar=no,menubar=no,location=no,status=no`);
          break;
        case '核心服务':
          url = `./core-service/overview/resource-overview.html?page=${obj.name}`;
          window.open(url, '_blank', `width=1366, height=668,top=0,left=0,toolbar=no,menubar=no,location=no,status=no`);
          break;
        case '采集服务':
          url = `./core-service/overview/resource-overview.html?page=${obj.name}`;
          window.open(url, '_blank', `width=1366, height=668,top=0,left=0,toolbar=no,menubar=no,location=no,status=no`);
          break;
        case 'WEB数据库':
          url = `./monitor-database/overview/business-overview.html?page=${obj.name}`;
          window.open(url, '_blank', `width=1366, height=668,top=0,left=0,toolbar=no,menubar=no,location=no,status=no`);
          break;
        case '监控系统服务器':
          url = `./web-service/overview/resource-overview.html?page=${obj.name}`;
          window.open(url, '_blank', `width=1366, height=668,top=0,left=0,toolbar=no,menubar=no,location=no,status=no`);
          break;
        case '网络设备':
          url = `./network-device/overview/resource-overview.html?page=${obj.name}`;
          window.open(url, '_blank', `width=1366, height=668,top=0,left=0,toolbar=no,menubar=no,location=no,status=no`);
          break;
        case '测试服务器':

          break;
        case '数据库':
          url = `./database/overview/resource-overview.html?page=${obj.name}`;
          window.open(url, '_blank', `width=1366, height=668,top=0,left=0,toolbar=no,menubar=no,location=no,status=no`);
          break;
        default:
          break;
      }
    },
    /* 告警统计切换 */
    alarmToggle(type) {
      switch (type) {
        case 'healthy':
          this.isActice = '0';
          break;
        case 'storage':
          this.isActice = '1';
          break;
      }
    }
  }
})