var app = new Vue({
  el: '#homeIndex',
  data: {
    showMenu: true,
    menuList: [],
    leftMenuList: null,
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
    }]
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.leftMenuList.selectMenu = this.leftMenuList.list[6].children[0];
    this.leftMenuList.openMenu = this.leftMenuList.list[6].id;
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
    }
  }
});
