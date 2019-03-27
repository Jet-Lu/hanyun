var app = new Vue({
  el: '#homeIndex',
  data: {
    showMenu: true,
    menuList: [],
    leftMenuList: null,
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
    value: ''
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.leftMenuList.selectMenu = this.leftMenuList.list[2].children[2];
    this.leftMenuList.openMenu = this.leftMenuList.list[2].id;
  },
  mounted() {},
  methods: {
    toRoute(menu) {
      window.location.href = menu.url;
    },
    setMenuList: function () {
      this.menuList = [{
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
          active: false
        },
        {
          name: '系统管理',
          img: '../assets/images/menu/menu-11',
          url: '../system-manage/system-manage.html',
          active: true
        }
      ];
    },
    setLeftMenuList: function () {
      this.leftMenuList = {
        openMenu: null,
        selectMenu: null,
        list: [{
            id: '1',
            name: '用户管理',
            iconClass: 'menu-icon4-r',
            canTouch: false, //点开却不会选中
            children: [{
                id: '1-1',
                name: '系统用户',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-2',
                name: '角色管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-3',
                name: 'AD配置',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '2',
            name: '图库管理',
            iconClass: 'menu-icon4-s',
            canTouch: true,
            children: [{
                id: '2-1',
                name: '分类管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '2-2',
                name: '图库分类',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '3',
            name: '系统监听器',
            iconClass: 'menu-icon4-t',
            canTouch: true,
            children: [{
                id: '3-1',
                name: '陷阱解析配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-2',
                name: '系统日志解析配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-3',
                name: '的Windows事件配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-4',
                name: 'AIX错误日志配置',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '4',
            name: '推送配置',
            iconClass: 'menu-icon4-u',
            canTouch: true,
            children: [{
                id: '4-1',
                name: '邮件配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '4-2',
                name: '短信配置',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '5',
            name: '系统配置',
            iconClass: 'menu-icon4-v',
            canTouch: true,
            children: [{
                id: '5-1',
                name: '资源类型管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '5-2',
                name: '分布式管理',
                iconClass: '',
                canTouch: true
              },
              {
                id: '5-3',
                name: '系统参数配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '5-4',
                name: '接口管理',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '6',
            name: '系统审计',
            iconClass: 'menu-icon4-w',
            canTouch: true,
            children: [{
                id: '6-1',
                name: '操作日志',
                iconClass: '',
                canTouch: true
              },
              {
                id: '6-2',
                name: '日志管理',
                iconClass: '',
                canTouch: true
              }
            ]
          },
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
        window.location.href = './system-manage.html';
      } else if (menu.id === '1-2') {
        window.location.href = './role-manage.html';
      } else if (menu.id === '1-3') {
        window.location.href = './ad-config.html';
      } else if (menu.id === '2-1') {
        window.location.href = './sort-manage.html';
      } else if (menu.id === '2-2') {
        window.location.href = './picture-manage.html';
      } else if (menu.id === '3-1') {
        window.location.href = './trap-config.html';
      } else if (menu.id === '3-2') {
        window.location.href = './log-config.html';
      } else if (menu.id === '3-3') {
        window.location.href = './windows-config.html';
      } else if (menu.id === '3-4') {
        window.location.href = './aix-config.html';
      } else if (menu.id === '4-1') {
        window.location.href = './email-config.html';
      } else if (menu.id === '4-2') {
        window.location.href = './message-config.html';
      } else if (menu.id === '5-1') {
        window.location.href = './system-config.html';
      } else if (menu.id === '5-2') {
        window.location.href = './distributed-manage.html';
      } else if (menu.id === '5-3') {
        window.location.href = './params-config.html';
      } else if (menu.id === '5-4') {
        window.location.href = './interface-manage.html';
      } else if (menu.id === '6-1') {
        window.location.href = './opera-log.html';
      } else if (menu.id === '6-2') {
        window.location.href = './log-manage.html';
      }
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
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  }
});