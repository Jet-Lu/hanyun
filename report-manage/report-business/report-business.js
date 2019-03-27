var app = new Vue({
  el: '#homeIndex',
  data: {
    showMenu: true,
    menuList: [],
    text1: '',
    value1: '',
    options: [
      {
        value: '选项1',
        label: '黄金糕'
      },
      {
        value: '选项2',
        label: '双皮奶'
      },
      {
        value: '选项3',
        label: '蚵仔煎'
      },
      {
        value: '选项4',
        label: '龙须面'
      },
      {
        value: '选项5',
        label: '北京烤鸭'
      }
    ],
    value: '',
    leftMenuList: null,
    dialogVisible: false,
    selectId: 1,
    tipSelect: [{
      id: 1,
      name: '全部'
    },{
      id: 2,
      name: '网络设备'
    },{
      id: 3,
      name: '服务器'
    },{
      id: 4,
      name: '数据库'
    },{
      id: 5,
      name: '应用服务器'
    },{
      id: 6,
      name: '网络服务器'
    },{
      id: 7,
      name: '邮件服务器'
    },{
      id: 8,
      name: '中间件'
    },{
      id: 9,
      name: '存储设备'
    },{
      id: 10,
      name: '光纤交换机'
    },{
      id: 11,
      name: '虚拟化'
    },{
      id: 12,
      name: '通用监控'
    }],
    selectId1: 1,
    tipSelect1: [{
      id: 1,
      name: '全部'
    }],
    tableData: [{
      name: '名称名称名称',
      describe: 'ceve',
      status: 1,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    },{
      name: '名称名称名称',
      describe: 'ceve',
      status: 0,
      type: '未订阅',
      createTime: '2018-10-17 00:44:20',
      time: '2018-10-17 00:44:20'
    }],
    tableData1: [{
      id: 1,
      name: 'WEB服务器',
      attr: '资源负载检测',
      topn: 10,
      max: 1,
      min: 1,
      maxAvg: 1,
      minAvg: 1
    },{
      id: 2,
      name: 'WEB服务器',
      attr: '资源负载检测',
      topn: 10,
      max: 1,
      min: 1,
      maxAvg: 1,
      minAvg: 1
    },{
      id: 3,
      name: 'WEB服务器',
      attr: '资源负载检测',
      topn: 10,
      max: 1,
      min: 1,
      maxAvg: 1,
      minAvg: 1
    },{
      id: 4,
      name: 'WEB服务器',
      attr: '资源负载检测',
      topn: 10,
      max: 1,
      min: 1,
      maxAvg: 1,
      minAvg: 1
    },{
      id: 5,
      name: 'WEB服务器',
      attr: '资源负载检测',
      topn: 10,
      max: 1,
      min: 1,
      maxAvg: 1,
      minAvg: 1
    },{
      id: 6,
      name: 'WEB服务器',
      attr: '资源负载检测',
      topn: 10,
      max: 1,
      min: 1,
      maxAvg: 1,
      minAvg: 1
    }],
    tableData2: [{
      name: '响应时间',
      unit: '时间',
      type: '资源负载检测',
    },{
      name: '响应时间',
      unit: '时间',
      type: '资源负载检测',
    },{
      name: '响应时间',
      unit: '时间',
      type: '资源负载检测',
    }],
    tableRadio: null,
    showDetail: 0,
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    tabNum: 0,
    tabNum1: 0,
    radio: null,
    radio1: null,
    radio2: null,
    radio3: null,
    radio4: null,
    radio5: null
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.leftMenuList.selectMenu = this.leftMenuList.list[7].children[0];
    this.leftMenuList.openMenu = this.leftMenuList.list[7].id;
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
          active: true
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
            name: '性能分析列表',
            iconClass: 'menu-icon4-l',
            canTouch: true,
          },
          {
            id: '2',
            name: '报告分类管理',
            iconClass: 'menu-icon4-2',
            canTouch: true
          },
          {
            id: '3',
            name: '可用性报告',
            iconClass: 'menu-icon4-m',
            canTouch: false,
            children: [
              {
                id: '3-1',
                name: '网络设备可用状态',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '4',
            name: '告警统计报告',
            iconClass: 'menu-icon4-n',
            canTouch: false,
            children: [
              {
                id: '4-1',
                name: '资源告警统计',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '5',
            name: 'TOPN报告',
            iconClass: 'menu-icon4-o',
            canTouch: false,
            children: [
              {
                id: '5-1',
                name: '网络设备TOPN',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '6',
            name: '类别报告',
            iconClass: 'menu-icon4-g',
            canTouch: false,
            children: [
              {
                id: '6-1',
                name: '测试',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '7',
            name: '资源性能报告',
            iconClass: 'menu-icon4-p',
            canTouch: false,
            children: [
              {
                id: '7-1',
                name: '维也纳测试',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '8',
            name: '业务报告',
            iconClass: 'menu-icon4-q',
            canTouch: false,
            children: [
              {
                id: '8-1',
                name: '维也纳测试',
                iconClass: '',
                canTouch: true
              }
            ]
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
        window.location.href = './report-manage.html';
      } else if (menu.id === '2') {
        window.location.href = './sort-manage.html';
      } else if (menu.id === '3-1') {
        window.location.href = './report-available.html';
      } else if (menu.id === '4-1') {
        window.location.href = './report-alarm.html';
      } else if (menu.id === '5-1') {
        window.location.href = './report-topn.html';
      } else if (menu.id === '6-1') {
        window.location.href = './report-type.html';
      } else if (menu.id === '7-1') {
        window.location.href = './report-resource.html';
      } else if (menu.id === '8-1') {
        window.location.href = './report-business.html';
      }
    },
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    },
    setShowDetail(flag) {
      this.showDetail = flag;
    },
    /* 输入框失焦点 */
    onBlurInput(evt, str) {
      if (!str) {
        evt.target.style.border = '1px solid #f00';
        evt.target.style.boxShadow = '0 0 3px #f00';
      } else {
        evt.target.style.border = '1px solid #519dcf';
        evt.target.style.boxShadow = '0 0 3px #519dcf';
      }
    },
    changeTab(num) {
      this.tabNum = num;
    },
    changeTab1(num) {
      this.tabNum1 = num;
    },
    setSelectId(id) {
      this.selectId = id;
    },
    setSelectId1(id) {
      this.selectId1 = id;
    },
    consoleLog(a, b, c) {
      console.log(a, b, c);
    }
  }
});
