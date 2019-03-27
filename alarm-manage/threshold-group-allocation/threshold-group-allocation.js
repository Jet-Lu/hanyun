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
    value1: null,
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
    selectId2: 1,
    selectId3: 1,
    tipSelect2: [{
      id: 1,
      name: '网络设备'
    },{
      id: 2,
      name: '服务器'
    },{
      id: 3,
      name: '数据库'
    },{
      id: 4,
      name: '应用中间件'
    },{
      id: 5,
      name: 'Web服务'
    },{
      id: 6,
      name: '邮件服务'
    },{
      id: 7,
      name: '中间件'
    },{
      id: 8,
      name: '存储设备'
    },{
      id: 9,
      name: '光纤交换机'
    },{
      id: 10,
      name: '虚拟化'
    },{
      id: 11,
      name: '标准服务监控'
    },{
      id: 12,
      name: '业务资源'
    }],
    tipSelect3: [{
      id: 1,
      name: '二层交换机'
    },{
      id: 2,
      name: '三层交换机'
    },{
      id: 3,
      name: '路由器'
    },{
      id: 4,
      name: '防火墙'
    },{
      id: 5,
      name: '下一代防火墙'
    },{
      id: 6,
      name: 'IPS入侵防御'
    },{
      id: 7,
      name: 'IDS入侵检测'
    },{
      id: 8,
      name: 'vpn'
    },{
      id: 9,
      name: '网闸'
    },{
      id: 10,
      name: 'WAF'
    },{
      id: 11,
      name: '漏洞扫描'
    },{
      id: 12,
      name: 'UTM'
    },{
      id: 13,
      name: '上网行为管理'
    },{
      id: 14,
      name: '防病毒'
    },{
      id: 15,
      name: '负载均衡'
    },{
      id: 16,
      name: 'SNMP设备'
    }],
    tableData: [{
      name: 'CPU使用率',
      type1: '服务器',
      type2: 'Linux',
      other: '系统默认的资源通断检测告警阈值策略,不可删除,不可更改'
    },{
      name: 'CPU使用率',
      type1: '服务器',
      type2: 'Linux',
      other: '系统默认的资源通断检测告警阈值策略,不可删除,不可更改'
    },{
      name: 'CPU使用率',
      type1: '服务器',
      type2: 'Linux',
      other: '系统默认的资源通断检测告警阈值策略,不可删除,不可更改'
    },{
      name: 'CPU使用率',
      type1: '服务器',
      type2: 'Linux',
      other: '系统默认的资源通断检测告警阈值策略,不可删除,不可更改'
    },{
      name: 'CPU使用率',
      type1: '服务器',
      type2: 'Linux',
      other: '系统默认的资源通断检测告警阈值策略,不可删除,不可更改'
    }],
    tabNum: 0,
    dialogTable: [{
      name: '可用性',
      type: '状态',
      data: null,
      detail: null
    },{
      name: '可用性',
      type: '状态',
      data: null,
      detail: null
    },{
      name: '可用性',
      type: '状态',
      data: null,
      detail: null
    },{
      name: '可用性',
      type: '状态',
      data: null,
      detail: null
    },{
      name: '可用性',
      type: '状态',
      data: null,
      detail: null
    }]
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.leftMenuList.selectMenu = this.leftMenuList.list[2].children[1];
    this.leftMenuList.openMenu = this.leftMenuList.list[2].id;
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
          active: true
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
            name: '当前告警',
            iconClass: 'menu-icon4-9',
            canTouch: true
          },
          {
            id: '2',
            name: '历史告警',
            iconClass: 'menu-icon4-a',
            canTouch: true
          },
          {
            id: '3',
            name: '阈值管理',
            iconClass: 'menu-icon4-b',
            canTouch: false, //点开却不会选中
            children: [
              {
                id: '3-1',
                name: '阈值配置',
                iconClass: '',
                canTouch: true
              },
              {
                id: '3-2',
                name: '阈值组配置',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '4',
            name: '策略管理',
            iconClass: 'menu-icon4-c',
            canTouch: false, //点开却不会选中
            children: [
              {
                id: '4-1',
                name: '资源告警策略',
                iconClass: '',
                canTouch: true
              },
              {
                id: '4-2',
                name: '告警屏蔽策略',
                iconClass: '',
                canTouch: true
              },
              {
                id: '4-3',
                name: '告警动作策略',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '5',
            name: '系统日志',
            iconClass: 'menu-icon4-d',
            canTouch: true
          },
          {
            id: '6',
            name: '窗口事件',
            iconClass: 'menu-icon4-e',
            canTouch: true
          },
          {
            id: '7',
            name: 'AIX错误日志',
            iconClass: 'menu-icon4-f',
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
        window.location.href = './alarm-manage.html';
      } else if (menu.id === '2') {
        window.location.href = './alarm-history.html';
      } else if (menu.id === '3-1') {
        window.location.href = './threshold-allocation.html';
      } else if (menu.id === '3-2') {
        window.location.href = './threshold-group-allocation.html';
      } else if (menu.id === '4-1') {
        window.location.href = './alarm-resource.html';
      } else if (menu.id === '4-2') {
        window.location.href = './alarm-shield.html';
      } else if (menu.id === '4-3') {
        window.location.href = './alarm-active.html';
      } else if (menu.id === '5') {
        window.location.href = './system-log.html';
      } else if (menu.id === '6') {
        window.location.href = './window-event.html';
      } else if (menu.id === '7') {
        window.location.href = './error-log.html';
      }
    },
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    },
    showDialog() {
      this.dialogVisible = true;
    },
    handleClose() {
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
    setSelectId(id) {
      this.selectId = id;
    },
    setSelectId1(id) {
      this.selectId1 = id;
    },
    setSelectId2(id) {
      this.selectId2 = id;
    },
    setSelectId3(id) {
      this.selectId3 = id;
    },
    changeTab(id) {
      this.tabNum = id;
    }
  }
});
