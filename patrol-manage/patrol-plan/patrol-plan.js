var app = new Vue({
  el: '#homeIndex',
  data: {
    showMenu: true,
    menuList: [],
    text1: '',
    radio: '1',
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
    checked: false,
    tableData: [{
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    },{
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    },{
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    },{
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    },{
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    },{
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    }],
    dialogConfirm: false,
    dialogFlag: 1,
    activeNames: ['1'],
    dialogTable: [{
      name: '温度',
      describe: '机房温度，预置检查项',
      reference: '~',
      value: '',
      unit: '',
      type: '人工巡检',
      detail: '',
      result: 1
    },{
      name: '温度',
      describe: '机房温度，预置检查项',
      reference: '~',
      value: '',
      unit: '',
      type: '人工巡检',
      detail: '',
      result: 2
    }],
    editDialogVisible: false,
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.leftMenuList.selectMenu = this.leftMenuList.list[1];
  },
  mounted() {},
  methods: {
    handleChange(evt) {
      console.log('1-', evt);
    },
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
          active: true
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
            name: '巡检报告',
            iconClass: 'menu-icon4-j',
            canTouch: true
          },
          {
            id: '2',
            name: '巡检计划',
            iconClass: 'menu-icon4-k',
            canTouch: true
          }
        ]
      };
    },
    editChange(e) {
      console.log('2-', e);
      this.editDialogVisible = true;
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
        window.location.href = './patrol-report.html';
      } else if (menu.id === '2') {
        window.location.href = './patrol-plan.html';
      }
    },
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  }
});
