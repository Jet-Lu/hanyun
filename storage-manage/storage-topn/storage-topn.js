var app = new Vue({
  el: '#homeIndex',
  data: {
    showMenu: true,
    menuList: [],
    text1: '',
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
    tableData: [{
      level: 'xxxxxxx',
      name: 'xxxxxxxxxxx',
      origin: 'xxxxxxxxxxxxxxx',
      resType: 'xxxxxxxx',
      alarmType: 'xxxxxxxxxxxx',
      alarmStatus: 'xxxxxxx',
      alarmContent: 'xxxxxxxxx',
      time1: '2018-10-17 00:44:20',
      time2: '16天20小时7分48秒',
      people: '系统管理员',
      confirmTime: '2018-10-17 00:44:20'
    },{
      level: 'xxxxxxx',
      name: 'xxxxxxxxxxx',
      origin: 'xxxxxxxxxxxxxxx',
      resType: 'xxxxxxxx',
      alarmType: 'xxxxxxxxxxxx',
      alarmStatus: 'xxxxxxx',
      alarmContent: 'xxxxxxxxx',
      time1: '2018-10-17 00:44:20',
      time2: '16天20小时7分48秒',
      people: '系统管理员',
      confirmTime: '2018-10-17 00:44:20'
    },{
      level: 'xxxxxxx',
      name: 'xxxxxxxxxxx',
      origin: 'xxxxxxxxxxxxxxx',
      resType: 'xxxxxxxx',
      alarmType: 'xxxxxxxxxxxx',
      alarmStatus: 'xxxxxxx',
      alarmContent: 'xxxxxxxxx',
      time1: '2018-10-17 00:44:20',
      time2: '16天20小时7分48秒',
      people: '系统管理员',
      confirmTime: '2018-10-17 00:44:20'
    },{
      level: 'xxxxxxx',
      name: 'xxxxxxxxxxx',
      origin: 'xxxxxxxxxxxxxxx',
      resType: 'xxxxxxxx',
      alarmType: 'xxxxxxxxxxxx',
      alarmStatus: 'xxxxxxx',
      alarmContent: 'xxxxxxxxx',
      time1: '2018-10-17 00:44:20',
      time2: '16天20小时7分48秒',
      people: '系统管理员',
      confirmTime: '2018-10-17 00:44:20'
    },{
      level: 'xxxxxxx',
      name: 'xxxxxxxxxxx',
      origin: 'xxxxxxxxxxxxxxx',
      resType: 'xxxxxxxx',
      alarmType: 'xxxxxxxxxxxx',
      alarmStatus: 'xxxxxxx',
      alarmContent: 'xxxxxxxxx',
      time1: '2018-10-17 00:44:20',
      time2: '16天20小时7分48秒',
      people: '系统管理员',
      confirmTime: '2018-10-17 00:44:20'
    },{
      level: 'xxxxxxx',
      name: 'xxxxxxxxxxx',
      origin: 'xxxxxxxxxxxxxxx',
      resType: 'xxxxxxxx',
      alarmType: 'xxxxxxxxxxxx',
      alarmStatus: 'xxxxxxx',
      alarmContent: 'xxxxxxxxx',
      time1: '2018-10-17 00:44:20',
      time2: '16天20小时7分48秒',
      people: '系统管理员',
      confirmTime: '2018-10-17 00:44:20'
    },{
      level: 'xxxxxxx',
      name: 'xxxxxxxxxxx',
      origin: 'xxxxxxxxxxxxxxx',
      resType: 'xxxxxxxx',
      alarmType: 'xxxxxxxxxxxx',
      alarmStatus: 'xxxxxxx',
      alarmContent: 'xxxxxxxxx',
      time1: '2018-10-17 00:44:20',
      time2: '16天20小时7分48秒',
      people: '系统管理员',
      confirmTime: '2018-10-17 00:44:20'
    },{
      level: 'xxxxxxx',
      name: 'xxxxxxxxxxx',
      origin: 'xxxxxxxxxxxxxxx',
      resType: 'xxxxxxxx',
      alarmType: 'xxxxxxxxxxxx',
      alarmStatus: 'xxxxxxx',
      alarmContent: 'xxxxxxxxx',
      time1: '2018-10-17 00:44:20',
      time2: '16天20小时7分48秒',
      people: '系统管理员',
      confirmTime: '2018-10-17 00:44:20'
    }],
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
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
            iconClass: 'menu-icon4-6',
            canTouch: true, //点开却不会选中
          },
          {
            id: '2',
            name: '存储拓扑',
            iconClass: 'menu-icon4-6',
            canTouch: true
          },
          {
            id: '3',
            name: '存储列表',
            iconClass: 'menu-icon4-7',
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
            iconClass: 'menu-icon4-8',
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
    }
  }
});
