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
    chart4: null,
    chart5: null,
    chart6: null
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.setChart();
    this.leftMenuList.selectMenu = this.leftMenuList.list[3];
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
          active: true
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
    setLeftMenuList: function() {
      this.leftMenuList = {
        openMenu: null,
        selectMenu: null,
        list: [
          {
            id: '1',
            name: '虚拟化资源',
            iconClass: 'menu-icon4',
            canTouch: false, //点开却不会选中
            children: [
              {
                id: '1-1',
                name: 'VMware的',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '2',
            name: '虚拟化拓扑',
            iconClass: 'menu-icon4',
            canTouch: true,
            children: [
              {
                id: '2-1',
                name: '全部资源',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '3',
            name: '虚拟化事件',
            iconClass: 'menu-icon4-4',
            canTouch: true
          },
          {
            id: '4',
            name: '虚拟化TOPN',
            iconClass: 'menu-icon4-5',
            canTouch: true
          }
        ]
      };
    },
    setChart() {
      this.chart1 = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}: {c}%'
        },
        xAxis: {
          data: ['172.16.7.34', '172.16.7.35'],
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
          bottom: 28,
          left: 60
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: [{
              value: 40,
              itemStyle: {
                color: this.theme ? '#1cefef' : '#3498db'
              }
            }, {
              value: 24,
              itemStyle: {
                color: this.theme ? '#69f0ae' : '#f8c968'
              }
            }],
            barWidth: 32,
            barCategoryGap: '75%'
          }
        ]
      };
      this.chart2 = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}: {c}%'
        },
        xAxis: {
          data: ['172.16.7.34', '172.16.7.35'],
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
          bottom: 28,
          left: 60
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: [{
              value: 23.5,
              itemStyle: {
                color: this.theme ? '#1cefef' : '#3498db'
              }
            }, {
              value: 39,
              itemStyle: {
                color: this.theme ? '#69f0ae' : '#f8c968'
              }
            }],
            barWidth: 32,
            barCategoryGap: '75%'
          }
        ]
      };
      this.chart3 = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}: {c}%'
        },
        xAxis: {
          data: ['172.16.7.34', '172.16.7.35'],
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
          bottom: 28,
          left: 60
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: [{
              value: 77,
              itemStyle: {
                color: this.theme ? '#1cefef' : '#3498db'
              }
            }, {
              value: 14.5,
              itemStyle: {
                color: this.theme ? '#69f0ae' : '#f8c968'
              }
            }],
            barWidth: 32,
            barCategoryGap: '75%'
          }
        ]
      };
      this.chart4 = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}: {c}%'
        },
        xAxis: {
          data: ['172.16.7.34', '172.16.7.35'],
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
          bottom: 28,
          left: 60
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: [{
              value: 40,
              itemStyle: {
                color: this.theme ? '#1cefef' : '#3498db'
              }
            }, {
              value: 24,
              itemStyle: {
                color: this.theme ? '#69f0ae' : '#f8c968'
              }
            }],
            barWidth: 32,
            barCategoryGap: '75%'
          }
        ]
      };
      this.chart5 = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}: {c}%'
        },
        xAxis: {
          data: ['172.16.7.34', '172.16.7.35'],
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
          bottom: 28,
          left: 60
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: [{
              value: 23.5,
              itemStyle: {
                color: this.theme ? '#1cefef' : '#3498db'
              }
            }, {
              value: 39,
              itemStyle: {
                color: this.theme ? '#69f0ae' : '#f8c968'
              }
            }],
            barWidth: 32,
            barCategoryGap: '75%'
          }
        ]
      };
      this.chart6 = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b}: {c}%'
        },
        xAxis: {
          data: ['172.16.7.34', '172.16.7.35', 'datastore735'],
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
          bottom: 28,
          left: 60
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: [{
              value: 23.5,
              itemStyle: {
                color: this.theme ? '#1cefef' : '#3498db'
              }
            }, {
              value: 39,
              itemStyle: {
                color: this.theme ? '#69f0ae' : '#f8c968'
              }
            }, {
              value: 14.5,
              itemStyle: {
                color: this.theme ? '#ddff8e' : '#8cd481'
              }
            }],
            barWidth: 32,
            barCategoryGap: '75%'
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
      if (menu.id === '1-1') {
        window.location.href = './virtualization.html';
      } else if (menu.id === '3') {
        window.location.href = './vir-event.html';
      } else if (menu.id === '4') {
        window.location.href = './vir-topn.html';
      }
    },
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  }
});
