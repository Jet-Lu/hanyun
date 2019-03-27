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
    tableData: [
      {
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      },{
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      },{
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      },{
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      },{
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      },{
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      },{
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      },{
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      },{
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      },{
        name: '监控系统数据库',
        IP: '172.165.213.531',
        dataNum: '100',
        serveNum: '100',
        saveNum: '100',
        VMNum: '100',
        area: '默认管理域',
        healthStatus: 0,
        manageStatus: 1,
        accessStatus: 2,
        time: '5分钟'
      }
    ],
    tabNum: 0
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.leftMenuList.selectMenu = this.leftMenuList.list[0].children[0];
    this.leftMenuList.openMenu = this.leftMenuList.list[0].id;
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
    },
    showDialog() {
      this.dialogVisible = true;
      
    },
    handleClose() {
      this.changeTab= 0;
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
    submitDialog() {
      if (1) {
        this.$message.error('请完整填写输入框！');
        return false;
      } else {
        this.dialogVisible = false;
        this.$message({
          type: 'success',
          message: '新增成功！'
        });
      }
    },
    changeTab(num) {
      this.tabNum = num;
    }
  }
});