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
    tableData: [{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx'
    },{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx',
    },{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx',
    },{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx',
    },{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx',
    },{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx',
    },{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx',
    },{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx',
    },{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx',
    },{
      IP: 'xxxxxxxxxxxx',
      mac: 'xxxxxxxxxxxx',
      type: 'xxxxxxxxxxxx',
      user: 'xxxxxxxxxxxx',
      status: 'xxxxxxxxxxxx',
      lastTime: 'xxxxxxxxxxxx',
      unLoginTime: 'xxxxxxxxxxxx',
      isOld: 'xxxxxxxxxxxx',
      apartment: 'xxxxxxxxxxxx',
    }]
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.leftMenuList.selectMenu = this.leftMenuList.list[0].children[3];
    this.leftMenuList.openMenu = this.leftMenuList.list[0].id;
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
          active: true
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
            name: 'IP地址管理',
            iconClass: 'menu-icon4-i',
            canTouch: false, //点开却不会选中
            children: [
              {
                id: '1-1',
                name: '部门管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-2',
                name: '未分配网段',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-3',
                name: '已分配网段',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-4',
                name: '已使用IP地址',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-5',
                name: '老化IP地址',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-6',
                name: '审核管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-7',
                name: '审计日志',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '2',
            name: '配置组管理',
            iconClass: 'menu-icon4-g',
            canTouch: true
          },
          {
            id: '3',
            name: '设备管理',
            iconClass: 'menu-icon4-h',
            canTouch: true
          },
          {
            id: '4',
            name: '告警管理',
            iconClass: 'menu-icon4-9',
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
      if (menu.id === '1-1') {
        window.location.href = './intelligent-tools.html';
      } else if (menu.id === '1-2') {
        window.location.href = './unallocated-segmen.html';
      } else if (menu.id === '1-3') {
        window.location.href = './allocated-segmen.html';
      } else if (menu.id === '1-4') {
        window.location.href = './used-IP.html';
      } else if (menu.id === '1-5') {
        window.location.href = './old-IP.html';
      } else if (menu.id === '1-6') {
        window.location.href = './examine-manage.html';
      } else if (menu.id === '1-7') {
        window.location.href = './examine-log.html';
      } else if (menu.id === '2') {
        window.location.href = './config-manage.html';
      } else if (menu.id === '3') {
        window.location.href = './equip-manage.html';
      } else if (menu.id === '4') {
        window.location.href = './alarm-manage.html';
      }
    },
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  }
});
