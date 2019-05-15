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
    }, {
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    }, {
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    }, {
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    }, {
      name: '每月巡检',
      creater: '系统管理员',
      patroler: '演示用户',
      time: '2018-10-17 00:44:20',
      lastTime: '2018-10-17 00:44:20',
      describe: 'xxxxxxxxxxxx',
      status: 1
    }, {
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
    }, {
      name: '温度',
      describe: '机房温度，预置检查项',
      reference: '~',
      value: '',
      unit: '',
      type: '人工巡检',
      detail: '',
      result: 2
    }],
    addDialogTable: [{
      uuic: 1,
      name: '温度',
      describe: '机房温度，预置检查项',
      reference: '~',
      value: '',
      unit: '',
      inspect_val: '',
      type: '人工巡检',
      detail: '',
      result: 1
    }, {
      uuic: 2,
      name: '温度',
      describe: '机房温度，预置检查项',
      reference: '~',
      value: '',
      unit: '',
      inspect_val: '',
      type: '人工巡检',
      detail: '',
      result: 2
    }],
    editDialogVisible: false,
    setDialogVisible: false,
    setTableData: [{
      name: '温度',
      describe: '机房温度，预置检查项',
      detail: ''
    }, {
      name: '温度',
      describe: '机房温度，预置检查项',
      detail: ''
    }],
    setData: {
      len: 0,
    },
    addChildDialog: false,
    childTableData: [{
      name: '温度',
      describe: '机房温度，预置检查项',
      detail: '11',
      type: '22'
    }, {
      name: '温度',
      describe: '机房温度，预置检查项',
      detail: '11',
      type: '22'
    }],
    multipleSelection: [],
    countNum: 0,
    addObj: {
      uuic: '',
      name: '',
      describe: '',
      reference_min: '',
      reference_max: '',
      unit: '',
      type: '',
      inspect_val: '',
      detail: '',
    },
  },
  created() {
    this.setMenuList();
    this.setLeftMenuList();
    this.leftMenuList.selectMenu = this.leftMenuList.list[1];
    this.setData.len = this.setTableData.length;
  },
  mounted() { },
  watch: {
    // addObj: {
    //   uuid: this.countNum,
    //   name: this.addObj.name,
    //   describe: this.addObj.describe,
    //   reference_min: this.addObj.reference_min,
    //   reference_max: this.addObj.reference_max,
    //   unit: this.addObj.unit,
    //   type: '人工巡检',
    //   inspect_val: this.addObj.inspect_val,
    //   detail: this.addObj.detail,
    // }
  },
  methods: {
    pushDataToTable(obj) {
      this.addDialogTable.push(obj);
    },
    addInspect() {
      this.countNum ++;
      this.addDialogTable.push({
        uuid: '',
        name: '',
        describe: '',
        reference_min: '',
        reference_max: '',
        unit: '',
        type: '人工巡检',
        inspect_val: '',
        detail: '',
      });




      // this.countNum ++;
      // console.log(this.countNum);
      // if (this.countNum % 2 == 0) {
      //   this.addDialogTable.push({
      //     name: '1',
      //     describe: '2',
      //     reference: '3',
      //     unit: '4',
      //     inspect_val: '5',
      //     type: '人工巡检',
      //     opera: null,
      //   });
      // } else {
      //   let cell_tr = document.createElement('tr');
      //   cell_tr.setAttribute('class', 'el-table__row');
      //   for (let i = 0; i < 7; i++) {
      //     let td = document.createElement('td');
      //     let input = document.createElement('input');
      //     let input1 = document.createElement('input');
      //     let br = document.createElement('br');
      //     let br1 = document.createElement('br');
      //     let text = document.createTextNode("~");
      //     let text1 = document.createTextNode("");
      //     let div1 = document.createElement("div");
      //     let div2 = document.createElement("div");
      //     let span1 = document.createElement('span');
      //     td.setAttribute('class', 'com-txt-overflow');
      //     td.style.padding = '2px 4px';
      //     input.setAttribute('style', 'padding:4px;');
      //     input1.setAttribute('style', 'padding:4px; margin-top: 5px;');
      //     switch (i) {
      //       case 0:
      //         td.appendChild(input);
      //         input.placeholder = '巡检项名称';
      //         break;
      //       case 1:
      //         td.appendChild(input);
      //         input.placeholder = '巡检项描述';
      //         break;
      //       case 2:
      //         td.appendChild(input);
      //         input.placeholder = '最小值';
      //         td.appendChild(br);
      //         td.appendChild(text);
      //         td.appendChild(br1);
      //         input1.placeholder = '最大值';
      //         td.appendChild(input1);
      //         break;
      //       case 3:
      //         td.appendChild(input);
      //         input.placeholder = '单位';
      //         break;
      //       case 4:
      //         td.appendChild(text1);
      //         break;
      //       case 5:
      //         div1.innerText = '人工巡检';
      //         div1.className = 'cell';
      //         td.style.padding = '6px 0';
      //         td.appendChild(div1);
      //         break;
      //       case 6:
      //         div2.className = 'cell';
      //         span1.innerHTML = '<span class="el-icon-close com-hover"></span>'
      //         div2.appendChild(span1);
      //         span1.setAttribute('onClick', 'deleteNode()');
      //         // span1.onClick = (evt) => {
      //         //   console.log('eee', evt)
      //         //   this.$refs.addTable.bodyWrapper.firstChild.lastChild.removeChild(cell_tr);
      //         // };
      //         td.style.padding = '6px 0';
      //         td.appendChild(div2);
      //         break;
      //     }
      //     cell_tr.appendChild(td);
      //   }
      //   this.$refs.addTable.bodyWrapper.firstChild.lastChild.appendChild(cell_tr)
        // console.log(this.$refs.addTable, this.$refs.addTable.bodyWrapper.firstChild.lastChild);
      // }
    },
    deleteNode() {
      console.log('eee')
    },
    addSetChild() {
      this.setTableData.push({
        name: '',
        describe: '',
      });
      this.setData.len = this.setTableData.length;
    },
    deleteSetData(index, rows) {
      rows.splice(index, 1);
      this.setData.len = this.setTableData.length;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteOperation(index, rows) {
      rows.splice(index, 1);
    },
    handleChange(evt) {
      console.log('1-', evt);
    },
    toRoute(menu) {
      window.location.href = menu.url;
    },
    setMenuList: function () {
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
    setLeftMenuList: function () {
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
