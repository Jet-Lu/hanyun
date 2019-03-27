var app = new Vue({
  el: '#homeIndex',
  data: {
    checked: false,
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
    dialogVisible: true,
    tableData: [{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
    },{
      number: 'xxxxxxxxxxx',
      name: 'xxxxxxxxxxx',
      type: 'xxxxxxxxxxx',
      resName: 'xxxxxxxxxxx',
      IP: '172.16.154.122',
      type: 'CentOS的',
      portIndex: 'xxxxxxxxxx',
      portMode: 'xxxxxxxxxx',
      tipMode: 'xxxxxxxxxx',
      belong: 'xxxxxxxxxx',
      other: 'xxxxxxxxxx',
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
          active: true
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
          active: false
        }
      ];
    },
    setLeftMenuList: function () {
      this.leftMenuList = {
        openMenu: null,
        selectMenu: null,
        list: [{
            id: '1',
            name: '自定义分组',
            iconClass: 'menu-icon4-1',
            canTouch: true, //点开却不会选中
            children: [{
                id: '1-1',
                name: '自定义',
                iconClass: '',
                canTouch: true
              },
              {
                id: '1-2',
                name: '自定义1',
                iconClass: '',
                canTouch: true
              }
            ]
          },
          {
            id: '2',
            name: '资源列表',
            iconClass: 'menu-icon4-2',
            canTouch: true,
            children: [{
                id: '2-1',
                name: '全部资源',
                iconClass: '',
                canTouch: true
              },
              {
                id: '2-2',
                name: '网络设备',
                iconClass: '',
                canTouch: true,
                children: [{
                  id: '2-2-1',
                  name: '网络设备1',
                  iconClass: '',
                  canTouch: true,
                  num: ''
                }, {
                  id: '2-2-2',
                  name: '网络设备2',
                  iconClass: '',
                  canTouch: true,
                  num: '1'
                }]
              }
            ]
          },
          {
            id: '3',
            name: '端口管理',
            iconClass: 'menu-icon4-3',
            canTouch: true
          },
          {
            id: '4',
            name: 'VLAN管理',
            iconClass: 'menu-icon4-4',
            canTouch: true
          },
          {
            id: '5',
            name: '链路管理',
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
      if (menu.id === '1' || menu.id.indexOf('1-') === 0) {
        window.location.href = './resource-manage.html';
      } else if (menu.id === '2' || menu.id.indexOf('2-') === 0) {
        window.location.href = './resource-list.html';
      } else if (menu.id === '3') {
        window.location.href = './port-manage.html';
      } else if (menu.id === '4') {
        window.location.href = './VLAN-manage.html';
      } else if (menu.id === '5') {
        window.location.href = './link-manage.html';
      }
    },
    openWindow(e) {
      let screenWidth = window.screen.width;
      let screenHeight = window.screen.height;
      let url = `../business-manage/web-service/overview/resource-overview.html?id=${e.name}`;
      window.open(url, '_blank', `width=${screenWidth}, height=${screenHeight - 100},top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no`);
    },
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  }
});
