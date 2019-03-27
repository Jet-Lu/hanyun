Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data: {
    theme: false,
    message: 'Hello Vue!',
    menuList: [],
    homeDataList: [],
    dialogVisible: false,
    newHomeDataList: [],
    inDragDataId: null
  },
  created() {
    this.setMenuList();
    this.setHomeDataList();
  },
  mounted() {
  },
  methods: {
    toRoute(menu) {
      window.location.href = menu.url;
    },
    setMenuList: function() {
      this.menuList = [
        {
          name: '首页',
          img: '../assets/images/menu/menu-1',
          url: '../index/index.html',
          active: true
        },
        {
          name: '拓扑管理',
          img: '../assets/images/menu/menu-2',
          url: '../topology-manage/topology-manage.html',
          active: false
        },
        {
          name: '业务管理',
          img: '../assets/images/menu/menu-3',
          url: '../business-manage/business-manage.html',
          active: false
        },
        {
          name: '资源管理',
          img: '../assets/images/menu/menu-4',
          url: '../resource-manage/resource-manage.html',
          active: false
        },
        {
          name: '虚拟化',
          img: '../assets/images/menu/menu-5',
          url: '../virtualization/virtualization.html',
          active: false
        },
        {
          name: '存储管理',
          img: '../assets/images/menu/menu-6',
          url: '../storage-manage/storage-manage.html',
          active: false
        },
        {
          name: '告警管理',
          img: '../assets/images/menu/menu-7',
          url: '../alarm-manage/alarm-manage.html',
          active: false
        },
        {
          name: '智能工具',
          img: '../assets/images/menu/menu-8',
          url: '../intelligent-tools/intelligent-tools.html',
          active: false
        },
        {
          name: '巡检管理',
          img: '../assets/images/menu/menu-9',
          url: '../patrol-manage/patrol-report.html',
          active: false
        },
        {
          name: '报表管理',
          img: '../assets/images/menu/menu-10',
          url: '../report-manage/report-manage.html',
          active: false
        },
        {
          name: '系统管理',
          img: '../assets/images/menu/menu-11',
          url: '../system-manage/system-manage.html',
          active: false
        }
      ];
    },
    setHomeDataList() {
      this.homeDataList = [
        {
          id: 1,
          name: '告警统计',
          style: {
            width: '422px'
          },
          show: true,
          menuList: ['图表', '列表', '移除'],
          menuType: '图表',
          noData: false,
          chart: {
            tooltip: {
              trigger: 'item',
              formatter: '{b} : {c} ({d}%)'
            },
            legend: {
              bottom: 10,
              left: 'center',
              itemWidth: 6,
              itemHeight: 6,
              icon: 'circle',
              textStyle: {
                color: this.theme ? '#fff' : '#c5cfd5',
                padding: [2, 14, 2, 4]
              },
              formatter: name => {
                const dataList = this.homeDataList[0].tableData;
                const data = dataList.find(v => v.name === name);
                return data.name + ' ' + data.value + '次';
              },
              data: ['严重告警', '重要告警', '次要告警', '提示告警']
            },
            series: [
              {
                color: ['#ff5c54', '#ff9e54', '#fff954', '#1cefef'],
                name: '告警统计',
                type: 'pie',
                radius: '50%',
                center: ['50%', '40%'],
                clockwise: false,
                startAngle: 0,
                data: [
                  {
                    value: 18,
                    name: '严重告警',
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                          {
                            offset: 0,
                            color: '#ff5c54'
                          },
                          {
                            offset: 1,
                            color: '#ff352b'
                          }
                        ],
                        globalCoord: false
                      }
                    }
                  },
                  {
                    value: 6,
                    name: '重要告警',
                    itemStyle: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                          {
                            offset: 0,
                            color: '#ff9e54'
                          },
                          {
                            offset: 1,
                            color: '#ff8529'
                          }
                        ],
                        globalCoord: false
                      }
                    }
                  },
                  {
                    value: 0,
                    name: '次要告警',
                    itemStyle: { color: '#fff954' }
                  },
                  {
                    value: 0,
                    name: '提示告警',
                    itemStyle: { color: '#1cefef' }
                  }
                ],
                label: {
                  show: false
                },
                itemStyle: {
                  emphasis: {
                    shadowBlur: 15,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(14, 21, 42, 0.25)'
                  }
                }
              }
            ]
          },
          tableCols: [
            { field: 'name', header: '告警级别', width: 150 },
            { field: 'value', header: '告警数量', width: 150 }
          ],
          tableData: [
            { value: 18, name: '严重告警' },
            { value: 6, name: '重要告警' },
            { value: 0, name: '次要告警' },
            { value: 0, name: '提示告警' }
          ]
        },
        {
          id: 2,
          name: '资源类别告警分析',
          style: {
            'min-width': '864px'
          },
          show: true,
          menuList: ['图表', '列表', '移除'],
          menuType: '图表',
          noData: false,
          chart: {
            color: ['#ff5252', '#ff9e54', '#fff954', '#1cefef'],
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['严重告警', '重要告警', '次要告警', '提示告警'],
              align: 'left',
              top: 16,
              right: 17,
              itemWidth: 6,
              itemHeight: 6,
              itemGap: 32,
              textStyle: {
                color: this.theme ? '#fff' : '#c5cfd5',
                padding: [0, 0, 0, 2]
              }
            },
            xAxis: {
              data: [
                '网络设备',
                '服务器',
                '数据库',
                '应用服务器',
                'web服务器',
                '邮件服务器',
                '中间件',
                '存储设备',
                '光纤交换机',
                '虚拟化',
                '通用监控',
                '业务资源'
              ],
              axisLine: {
                lineStyle: {
                  color: this.theme ? '#8190b8' : '#f4f4f4'
                }
              },
              axisLabel: {
                interval: 0,
                color: this.theme ? 'rgba(255,255,255,0.6)' : '#c5cfd5',
                formatter: data => {
                  const array = data.split('');
                  let index = Math.floor(array.length / 2);
                  if (index < 2) {
                    index = 2;
                  }
                  array.splice(index, 0, '\n');
                  return array.join('');
                },
                lineHeight: 14,
                rich: {}
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              minInterval: 5,
              axisLabel: {
                formatter: '{value}次',
                color: this.theme ? 'rgba(255,255,255,0.6)' : '#c5cfd5'
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: this.theme ? '#8190b8' : '#f4f4f4',
                  opacity: this.theme ? 0.3 : 1
                }
              }
            },
            grid: {
              top: 68,
              right: 25,
              bottom: 51,
              left: 60
            },
            series: [
              {
                name: '严重告警',
                type: 'bar',
                stack: 'one',
                data: [15, 7, 8, 2, 3, 6, 13, 8, 3, 17, 9, 14],
                barCategoryGap: '75%'
              },
              {
                name: '重要告警',
                type: 'bar',
                stack: 'one',
                data: [3]
              },
              {
                name: '次要告警',
                type: 'bar',
                stack: 'one',
                data: []
              },
              {
                name: '提示告警',
                type: 'bar',
                stack: 'one',
                data: []
              }
            ]
          },
          tableCols: [
            { field: 'name', header: '资源类别', width: 150 },
            { field: 'alarm1', header: '严重告警', width: 150 },
            { field: 'alarm2', header: '重要告警', width: 150 },
            { field: 'alarm3', header: '次要告警', width: 150 },
            { field: 'alarm4', header: '提示告警', width: 150 }
          ],
          tableData: [
            {
              name: '网络设备',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '服务器',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '数据库',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '应用服务器',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: 'web服务器',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '邮件服务器',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '中间件',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '存储设备',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '光纤交换机',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '虚拟化',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '通用监控',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            },
            {
              name: '业务资源',
              alarm1: 2,
              alarm2: 3,
              alarm3: 4,
              alarm4: 1
            }
          ]
        },
        {
          id: 3,
          name: '资源类型统计',
          style: null,
          show: true,
          menuList: ['图表', '移除'],
          menuType: '图表',
          noData: false,
          chart: {
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              data: [
                'windows',
                'Linux',
                'CentOS',
                'Tomcat',
                'Apache',
                'IP检测',
                'MySQL',
                'FTP'
              ],
              axisLine: {
                lineStyle: {
                  color: this.theme ? '#8190b8' : '#f4f4f4'
                }
              },
              axisLabel: {
                interval: 0,
                color: this.theme ? 'rgba(255,255,255,0.6)' : '#8190b8',
                lineHeight: 14
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              boundaryGap: ['0%', '20%'],
              axisLabel: {
                color: this.theme ? 'rgba(255,255,255,0.6)' : '#8190b8'
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: this.theme ? '#8190b8' : '#f4f4f4',
                  opacity: this.theme ? 0.3 : 1
                }
              }
            },
            grid: {
              top: 40,
              right: 24,
              bottom: 40,
              left: 47
            },
            series: [
              {
                name: '',
                type: 'bar',
                itemStyle: {
                  barBorderRadius: 500,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: this.theme ? '#1cefef' : '#8cd481'
                      },
                      {
                        offset: 1,
                        color: this.theme ? '#14abab' : '#8cd481'
                      }
                    ],
                    globalCoord: false
                  }
                },
                data: [4, 3, 7, 3, 3, 5, 7, 1],
                barCategoryGap: '75%'
              }
            ]
          }
        },
        {
          id: 4,
          name: '当前告警',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: false,
          tableData: [
            {
              level: 1,
              name: '物理内存使用异常',
              original: '维也纳-测试4维也纳-测试4',
              type: 'CentOS的',
              alarmType: '资源负载检测',
              status: '已确认，未清除',
              date: '2018-10-17 00:44:20'
            },
            {
              level: 2,
              name: '物理内存使用异常',
              original: '维也纳-测试4维也纳-测试4',
              type: 'CentOS的',
              alarmType: '资源负载检测',
              status: '已确认，未清除',
              date: '2018-10-17 00:44:20'
            },
            {
              level: 3,
              name: '物理内存使用异常',
              original: '维也纳-测试4维也纳-测试4',
              type: 'CentOS的',
              alarmType: '资源负载检测',
              status: '已确认，未清除',
              date: '2018-10-17 00:44:20'
            },
            {
              level: 4,
              name: '物理内存使用异常',
              original: '维也纳-测试4维也纳-测试4',
              type: 'CentOS的',
              alarmType: '资源负载检测',
              status: '已确认，未清除',
              date: '2018-10-17 00:44:20'
            },
            {
              level: 1,
              name: '物理内存使用异常',
              original: '维也纳-测试4维也纳-测试4',
              type: 'CentOS的',
              alarmType: '资源负载检测',
              status: '已确认，未清除',
              date: '2018-10-17 00:44:20'
            },
            {
              level: 1,
              name: '物理内存使用异常',
              original: '维也纳-测试4维也纳-测试4',
              type: 'CentOS的',
              alarmType: '资源负载检测',
              status: '已确认，未清除',
              date: '2018-10-17 00:44:20'
            },
            {
              level: 1,
              name: '物理内存使用异常',
              original: '维也纳-测试4维也纳-测试4',
              type: 'CentOS的',
              alarmType: '资源负载检测',
              status: '已确认，未清除',
              date: '2018-10-17 00:44:20'
            },
            {
              level: 1,
              name: '物理内存使用异常',
              original: '维也纳-测试4维也纳-测试4',
              type: 'CentOS的',
              alarmType: '资源负载检测',
              status: '已确认，未清除',
              date: '2018-10-17 00:44:20'
            }
          ]
        },
        {
          id: 5,
          name: '网络设备的CPU利用率TOPN',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        },
        {
          id: 6,
          name: '网络设备内存利用率TOPN',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        },
        {
          id: 7,
          name: '服务器CPU利用率TOPN',
          style: null,
          show: true,
          menuList: ['图表', '列表', '移除'],
          menuType: '图表',
          noData: false,
          chart: {
            tooltip: {
              trigger: 'axis',
              formatter: '{b}: {c}%'
            },
            xAxis: {
              data: ['test', 'WEB服务器', '维也纳-测试4'],
              axisLine: {
                lineStyle: {
                  color: this.theme ? '#8190b8' : '#f4f4f4'
                }
              },
              axisLabel: {
                interval: 0,
                color: this.theme ? 'rgba(255,255,255,0.6)' : '#c5cfd5',
                lineHeight: 14
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              max: 100,
              min: 0,
              splitNumber: 5,
              axisLabel: {
                color: this.theme ? 'rgba(255,255,255,0.6)' : '#c5cfd5',
                formatter: data => {
                  return data + '%';
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: this.theme ? '#8190b8' : '#f4f4f4',
                  opacity: this.theme ? 0.3 : 1
                }
              }
            },
            grid: {
              top: 40,
              right: 24,
              bottom: 40,
              left: 60
            },
            series: [
              {
                name: '',
                type: 'bar',
                itemStyle: {
                  barBorderRadius: 500,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: this.theme ? '#545fff' : '#3498db'
                      },
                      {
                        offset: 1,
                        color: this.theme ? '#545fff' : '#3498db'
                      }
                    ],
                    globalCoord: false
                  }
                },
                data: [40, 22, 62],
                barWidth: 16,
                barCategoryGap: '75%'
              }
            ]
          },
          tableData: [
            {
              name: '维也纳',
              type: 'CentOS的',
              address: '123.207.153.163',
              status1: 0,
              status2: 1,
              accross: 10
            },
            {
              name: 'WEB服务器',
              type: 'CentOS的',
              address: '123.207.153.163',
              status1: 0,
              status2: 1,
              accross: 18
            },
            {
              name: '维也纳',
              type: 'CentOS的',
              address: '123.207.153.163',
              status1: 0,
              status2: 1,
              accross: 0
            }
          ]
        },
        {
          id: 8,
          name: '端口流量TOPN',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        },
        {
          id: 9,
          name: '服务器内存利用率TOPN',
          style: null,
          show: true,
          menuList: ['图表', '列表', '移除'],
          menuType: '列表',
          noData: false,
          chart: {
            tooltip: {
              trigger: 'axis',
              formatter: '{b}: {c}%'
            },
            xAxis: {
              data: [
                'test',
                'WEB服务器',
                '维也纳-测试4'
              ],
              axisLine: {
                lineStyle: {
                  color: this.theme ? '#8190b8' : '#f4f4f4'
                }
              },
              axisLabel: {
                interval: 0,
                color: this.theme ? 'rgba(255,255,255,0.6)' : '#c5cfd5',
                lineHeight: 14
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              max: 100,
              min: 0,
              splitNumber: 5,
              axisLabel: {
                color: this.theme ? 'rgba(255,255,255,0.6)' : '#c5cfd5',
                formatter: data => {
                  return data + '%';
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: this.theme ? '#8190b8' : '#f4f4f4',
                  opacity: this.theme ? 0.3 : 1
                }
              }
            },
            grid: {
              top: 40,
              right: 24,
              bottom: 40,
              left: 60
            },
            series: [
              {
                name: '',
                type: 'bar',
                itemStyle: {
                  barBorderRadius: 500,
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: this.theme ? '#ffd754' : '#f8c968'
                      },
                      {
                        offset: 1,
                        color: this.theme ? '#bc9d54' : '#f8c968'
                      }
                    ],
                    globalCoord: false
                  }
                },
                data: [97, 64, 42],
                barWidth: 16,
                barCategoryGap: '75%'
              }
            ]
          },
          tableData: [
            {
              name: '维也纳',
              type: 'CentOS的',
              address: '123.207.153.163',
              status1: 0,
              status2: 1,
              accross: 98.11
            },
            {
              name: 'WEB服务器',
              type: 'CentOS的',
              address: '123.207.153.163',
              status1: 0,
              status2: 1,
              accross: 95.11
            },
            {
              name: '维也纳',
              type: 'CentOS的',
              address: '123.207.153.163',
              status1: 0,
              status2: 1,
              accross: 0
            }
          ]
        },
        {
          id: 10,
          name: '关注的网络设备',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        },
        {
          id: 11,
          name: '端口出流量TOPN',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        },
        {
          id: 12,
          name: '关注的服务器',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        },
        {
          id: 13,
          name: '端口进带宽利用率TOPN',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        },
        {
          id: 14,
          name: '端口进流量TOPN',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        },
        {
          id: 15,
          name: '关注的端口',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        },
        {
          id: 16,
          name: '关注的应用',
          style: null,
          show: true,
          menuList: ['列表', '移除'],
          menuType: '列表',
          noData: true,
        }
      ];
    },
    changeHomeMenu(cmd, data) {
      if (cmd === '移除') {
        data.show = false;
        return;
      }
      data.menuType = cmd;
    },
    showDialog() {
      this.dialogVisible = true;
      this.newHomeDataList = _.cloneDeep(this.homeDataList);
    },
    handleClose() {
      this.newHomeDataList = [];
    },
    submitDialog() {
      this.homeDataList = this.newHomeDataList;
      this.dialogVisible = false;
    },
    leftDrop(e, id) {
      e.preventDefault();
      if(id !== 0) {
        this.newHomeDataList.forEach(e => {
          if(e.id === this.inDragDataId) {
            if (id === 1) {
              e.show = false;
            } else if (id === 2) {
              e.show = true;
            }
          }
        })
      }
      this.newHomeDataList = [...this.newHomeDataList];
    },
    dragStart(e, id) {
      this.inDragDataId = id;
    }
  }
});