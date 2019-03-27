Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data: {
    theme: false,
    showMenu: true,
    menuList: [],
    leftMenuList: null,
    chart1: null,
    chart2: null,
    chart3: null,
    sanTable: [
      {
        name: 'port3',
        type: 'F-PORT',
        WWN: '20:03:c4:f5:11:22',
        manageStatus: 0,
        runStatus: 1,
        bandwidth: '16.00Gbps',
        inflow: '229.69Gbps',
        outflow: '229.69Gbps'
      },
      {
        name: 'port3',
        type: 'F-PORT',
        WWN: '20:03:c4:f5:11:22',
        manageStatus: 2,
        runStatus: 1,
        bandwidth: '16.00Gbps',
        inflow: '229.69Gbps',
        outflow: '229.69Gbps'
      },
      {
        name: 'port3',
        type: 'F-PORT',
        WWN: '20:03:c4:f5:11:22',
        manageStatus: 2,
        runStatus: 1,
        bandwidth: '16.00Gbps',
        inflow: '229.69Gbps',
        outflow: '229.69Gbps'
      },
      {
        name: 'port3',
        type: 'F-PORT',
        WWN: '20:03:c4:f5:11:22',
        manageStatus: 2,
        runStatus: 1,
        bandwidth: '16.00Gbps',
        inflow: '229.69Gbps',
        outflow: '229.69Gbps'
      },
      {
        name: 'port3',
        type: 'F-PORT',
        WWN: '20:03:c4:f5:11:22',
        manageStatus: 2,
        runStatus: 1,
        bandwidth: '16.00Gbps',
        inflow: '229.69Gbps',
        outflow: '229.69Gbps'
      }
    ],
    alarmTable: [
      {
        level: 'xxxxxxxxxxxx',
        name: 'xxxxxxxxxxxx',
        status: 'xxxxxxxxxxxx',
        time: 'xxxxxxxxxxxx',
        keepTime: 'xxxxxxxxxxxx'
      },
      {
        level: 'xxxxxxxxxxxx',
        name: 'xxxxxxxxxxxx',
        status: 'xxxxxxxxxxxx',
        time: 'xxxxxxxxxxxx',
        keepTime: 'xxxxxxxxxxxx'
      },
      {
        level: 'xxxxxxxxxxxx',
        name: 'xxxxxxxxxxxx',
        status: 'xxxxxxxxxxxx',
        time: 'xxxxxxxxxxxx',
        keepTime: 'xxxxxxxxxxxx'
      },
      {
        level: 'xxxxxxxxxxxx',
        name: 'xxxxxxxxxxxx',
        status: 'xxxxxxxxxxxx',
        time: 'xxxxxxxxxxxx',
        keepTime: 'xxxxxxxxxxxx'
      },
      {
        level: 'xxxxxxxxxxxx',
        name: 'xxxxxxxxxxxx',
        status: 'xxxxxxxxxxxx',
        time: 'xxxxxxxxxxxx',
        keepTime: 'xxxxxxxxxxxx'
      },
      {
        level: 'xxxxxxxxxxxx',
        name: 'xxxxxxxxxxxx',
        status: 'xxxxxxxxxxxx',
        time: 'xxxxxxxxxxxx',
        keepTime: 'xxxxxxxxxxxx'
      }
    ]
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.setChart1();
    this.setChart2();
    this.setChart3();
    this.leftMenuList.selectMenu = this.leftMenuList.list[0];
  },
  mounted() {},
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
          active: false
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
          active: true
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
    setLeftMenuList: function() {
      this.leftMenuList = {
        openMenu: null,
        selectMenu: null,
        list: [
          {
            id: '1',
            name: '存储总览',
            iconClass: 'fa fa-television',
            canTouch: true //点开却不会选中
          },
          {
            id: '2',
            name: '存储拓扑',
            iconClass: 'fa fa-television',
            canTouch: true
          },
          {
            id: '3',
            name: '存储列表',
            iconClass: 'fa fa-database ',
            canTouch: false,
            children: [
              {
                id: '3-1',
                name: '光纤交换机',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-2',
                name: '存储设备',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-3',
                name: '光纤链路',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '4',
            name: '虚拟化TOPN',
            iconClass: 'fa fa-exclamation-triangle',
            canTouch: true
          }
        ]
      };
    },
    selectedLeftMenu(menu) {
      if (menu.canTouch) {
        this.leftMenuList.selectMenu = menu;
        this.afterSelect(menu);
      }
      if (menu.children) {
        if (this.leftMenuList.openMenu === menu.id) {
          let mList = this.leftMenuList.openMenu.split('-');
          if (mList.length > 1) {
            mList.pop();
            this.leftMenuList.openMenu = mList.join('-');
          } else {
            this.leftMenuList.openMenu = null;
          }
        } else {
          this.leftMenuList.openMenu = menu.id;
        }
      }
    },
    afterSelect(menu) {
      if (menu.id === '1') {
        window.location.href = './storage-manage.html';
      } else if (menu.id === '2') {
        window.location.href = './storage-topology.html';
      } else if (menu.id === '3-1') {
        window.location.href = './optical-switches.html';
      } else if (menu.id === '3-2') {
        window.location.href = './storage-equip.html';
      } else if (menu.id === '3-3') {
        window.location.href = './optical-link.html';
      } else if (menu.id === '4') {
        window.location.href = './storage-topn.html';
      }
    },
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    },
    setChart1() {
      this.chart1 = {
        title: {
          text: '有效容量',
          top: 30,
          left: 'center',
          textStyle: {
            color: this.theme ? '#fff' : '#666',
            fontSize: 12,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'center',
          bottom: '20',
          itemWidth: 0,
          itemHeight: 0,
          formatter: a => {
            let data = this.chart1.series[0].data.find(v => v.name === a);
            return a + data.value + 'TB';
          },
          textStyle: {
            color: this.theme ? '#fff' : '#666'
          },
          data: ['已使用', '可使用']
        },
        series: [
          {
            name: '有效容量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '48%'],
            label: {
              position: 'inside',
              textBorderWidth: 0,
              formatter: '{c}%'
            },
            data: [
              {
                value: 35,
                name: '已使用',
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
                        color: this.theme ? '#54e8ff' : '#3498db'
                      },
                      {
                        offset: 1,
                        color: this.theme ? '#2a7d80' : '#3498db'
                      }
                    ],
                    globalCoord: false
                  }
                }
              },
              {
                value: 65,
                name: '可使用',
                itemStyle: { color: this.theme ? '#101e43' : 'rgba(52, 152, 219, 0.2)' },
                label: { show: false }
              }
            ]
          }
        ]
      };
    },
    setChart2() {
      this.chart2 = {
        title: {
          text: '磁盘容量',
          top: 30,
          left: 'center',
          textStyle: {
            color: this.theme ? '#fff' : '#666',
            fontSize: 12,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'center',
          bottom: '20',
          itemWidth: 0,
          itemHeight: 0,
          formatter: a => {
            let data = this.chart2.series[0].data.find(v => v.name === a);
            return a + data.value + '个';
          },
          textStyle: {
            color: this.theme ? '#fff' : '#666'
          },
          data: ['可使用', '不可用']
        },
        series: [
          {
            name: '有效容量',
            type: 'pie',
            radius: '55%',
            center: ['50%', '48%'],
            label: {
              position: 'inside',
              textBorderWidth: 0,
              formatter: '{c}%'
            },
            data: [
              {
                value: 35,
                name: '可使用',
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
                        color: this.theme ? '#ffe259' : '#f8c968'
                      },
                      {
                        offset: 1,
                        color: this.theme ? '#ffa751' : '#f8c968'
                      }
                    ],
                    globalCoord: false
                  }
                }
              },
              {
                value: 65,
                name: '不可用',
                itemStyle: { color: this.theme ? '#101e43' : 'rgba(248, 201, 104, 0.2)' },
                label: { show: false }
              }
            ]
          }
        ]
      };
    },
    setChart3() {
      this.chart3 = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: [
            'StoragePool:VSP G400.412050.1-2',
            'StoragePool:VSP G400.411974.1-4',
            'StoragePool:VSP G400.411970.1-7',
            'StoragePool:VSP G400.411974.1-6',
            'StoragePool:VSP G400.411970.1-4'
          ],
          axisLine: {
            lineStyle: {
              color: this.theme ? '#8190b8' : '#f4f4f4'
            }
          },
          axisLabel: {
            interval: 0,
            color: this.theme ? 'rgba(255,255,255,0.6)' : '#c5cfd5',
            lineHeight: 14,
            width: 10,
            formatter: data => {
              const array = data.split('');
              let length = data.length;
              const newArray = [];
              for (let i = 0; i < length; i++) {
                newArray.push(array[i]);
                if ((i + 1) % 11 === 0) {
                  newArray.push('\n');
                }
              }
              return newArray.join('');
            },
            rich: {}
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          splitNumber: 4,
          // boundaryGap: ['0%', '20%'],
          axisLabel: {
            color: this.theme ? 'rgba(255,255,255,0.6)' : '#c5cfd5',
            formatter: data => {
              return data + 'TB';
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
          bottom: 10,
          left: 20,
          containLabel: true
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
                    color: this.theme ? '#1cefef' : '#97c1ff'
                  },
                  {
                    offset: 1,
                    color: this.theme ? '#14abab' : '#97c1ff'
                  }
                ],
                globalCoord: false
              }
            },
            data: [4.09, 2.4, 6.25, 3.4, 3],
            barCategoryGap: '82%'
          }
        ]
      };
    }
  }
});
