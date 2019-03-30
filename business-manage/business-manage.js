Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight,
      page_init: true,
      menuList: [],
      resource_list: [
        { label1: '系统-监控点的数据库', value1: '', label2: '服务核心', value2: '' },
        { label1: '服务采集', value1: '', label2: 'web服务器', value2: '' },
        { label1: 'web服务器', value1: '', label2: '系统-监控点的服务库', value2: '' },
        { label1: 'FTP', value1: '', label2: '服务器测试', value2: '' },
        { label1: 'Apache的服务', value1: '', label2: '维也纳-测试1', value2: '' },
        { label1: '维也纳-测试2', value1: '', label2: '维也纳-测试3', value2: '' },
        { label1: '维也纳-测试4', value1: '', label2: '47.98.213.184', value2: '' },
      ],
      health_levels: [
        { label1: '严重', value1: '', label2: '重要', value2: '' },
        { label1: '次要', value1: '', label2: '重要', value2: '' }
      ],
      business_tableData: [
        { business_id: '11', label: 'Openstack V3', img_url: '../assets/images/icon/1.1.1.png', width: 0, height: 0, left: 0, top: 0, healthy: '91%', status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '22', label: 'vCenter5.5', img_url: '../assets/images/icon/1.1.2.png', width: 0, height: 0, left: 0, top: 0, healthy: '92%', status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '33', label: 'vCenter6.0', img_url: '../assets/images/icon/1.1.1.png', width: 0, height: 0, left: 0, top: 0, healthy: '93%', status: '0', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '44', label: 'SDN', healthy: '94%', img_url: '../assets/images/icon/1.1.2.png', width: 0, height: 0, left: 0, top: 0, status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '55', label: '阿里云', healthy: '95%', img_url: '../assets/images/icon/1.1.1.png', width: 0, height: 0, left: 0, top: 0, status: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '66', label: '京东云', healthy: '96%', img_url: '../assets/images/icon/1.1.1.png', width: 0, height: 0, left: 0, top: 0, status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '77', label: '华三云', healthy: '97%', img_url: '../assets/images/icon/1.1.2.png', width: 0, height: 0, left: 0, top: 0, status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '88', label: '华云', healthy: '98%', img_url: '../assets/images/icon/1.1.1.png', width: 0, height: 0, left: 0, top: 0, status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '99', label: '腾讯云', healthy: '99%', img_url: '../assets/images/icon/1.1.2.png', width: 0, height: 0, left: 0, top: 0, status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
        { business_id: '00', label: '百度云', healthy: '100%', img_url: '../assets/images/icon/1.1.1.png', width: 0, height: 0, left: 0, top: 0, status: '1', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' },
      ],
      radio1: '储存容量',
      bus_responseSpeed: {
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '0',
          right: '0',
          top: '10',
          bottom: '40',
          containLabel: true,
          borderColor: '#ccc'
        },
        xAxis: {
          data: ['Openstack V3', 'vCenter5.5', 'vCenter6.0', 'SDN', '阿里云'],
          axisLabel: {
            // interval: 0,
            rotate: 40,
            textStyle: {
              color: '#ccc'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#ccc',
            }
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#ccc'
            }
          }
        },
        series: [{
          barWidth: '25%',
          data: [120, 200, 150, 80, 70],
          type: 'bar',
          itemStyle: {
            normal: {
              barBorderRadius: [15],
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#1BECEC' },
                { offset: 1, color: '#14B1B1' }
              ])
            }
          }
        }]
      },
      bus_alarmTime: {
        color: ['#69F0AE', '#FF5252', '#FFAB40', '#E4E429', '#1CEFEF'],
        tooltip: {
          trigger: 'item',
          formatter: "{b} <br /> {c} ({d}%)"
        },
        legend: {
          bottom: 10,
          left: 'center',
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 6,
          padding: [0, 10],
          textStyle: {
            color: '#ccc',
            padding: [2, 14, 2, 4]
          },
          data: ['正常', '严重', '重要', '次要', '提示']
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              color: '#ccc',
            },
            labelLine: {
              lineStyle: {
                color: '#ccc',
              }
            },
            data: [
              { value: 335, name: '正常' },
              { value: 310, name: '严重' },
              { value: 234, name: '重要' },
              { value: 135, name: '次要' },
              { value: 1548, name: '提示' }
            ]
          }
        ]
      },
      multiple_pie: null,
      single_pie: {
        color: ['#FFE259'],
        grid: {
          top: 'middle',
        },
        legend: {
          show: true,
          left: '90',
          top: 'middle',
          textStyle: {
            color: '#ccc'
          },
          selectedMode: false,
          icon: 'none',
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            var res = params.name + ' : ' + params.percent + '%';
            return res;
          }
        },
        xAxis: [{
          show: false
        }],
        yAxis: [{
          show: false
        }],
        series: [{
          name: '',
          center: [80, 40],
          radius: [26, 35],
          type: 'pie',
          animation: false,
          legendHoverLink: false,
          hoverAnimation: false,
          selected: false,
          tooltip: {
            show: false
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 48,
            name: '阿里云',
            label: {
              normal: {
                formatter: '{d} %',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'bold',
                }
              }
            }
          }, {
            value: (100 - 52),
            name: '',
            tooltip: { show: false },
            itemStyle: {
              normal: {
                color: '#aaa'
              },
              emphasis: {
                color: '#aaa'
              }
            },
            hoverAnimation: false
          }]
        }]
      },
      addBusiDialog: false,
      business_form: {
        name: '',
      },
      business_rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
      ball_data: {
        ball_array: [],
        speed: 2,
        count: 10,
        rad: 0,
        run: null,
        time: 2000,
        healthy: null
      }
    }
  },
  mounted() {
    this.setMenuList();
    this.toggleBtn();
    this.ballInit();
    console.log(this.screenWidth);
    console.log(this.screenHeight);
  },
  methods: {
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
          active: true
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
          active: false
        }
      ];
    },
    /* 椭圆运动 */
    ballInit() {
      this.drawBall(0, 50, 80, this.ball_data.count);
      this.ball_data.healthy = this.business_tableData[this.business_tableData.length - 1].healthy;
      this.ball_data.rad = (Math.PI / 180) * Math.round(360 / this.ball_data.count);
      let el = document.getElementById('line_path');
      this.runBall();
      let index = 9;
      this.ball_data.run = setInterval(() => {
        this.runBall();
        index --;
        index = index < 0 ? 9 : index;
        // console.log(index);
        this.ball_data.healthy = this.business_tableData[index].healthy;
      }, 3000);
      if (el) {
        el.addEventListener("mouseover", () => {
          clearInterval(this.ball_data.run);
          this.ball_data.run = null;
        }, false);
      }
      el.addEventListener("mouseout", () => {
        clearInterval(this.ball_data.run);
        this.ball_data.run = setInterval(this.runBall, this.ball_data.time);
      }, false);
    },
    drawBall(r, ox, oy) {
      for (let i = 0; i < this.business_tableData.length; i++) {
        let x = ox + r * Math.sin(this.ball_data.rad * i);
        let y = oy + r * Math.cos(this.ball_data.rad * i);
        this.business_tableData[i].left = x + '%';
        this.business_tableData[i].top = y + '%';
      }
    },
    onBlurInput(evt, str) {
      if (!str) {
        evt.target.style.border = '1px solid #f00';
        evt.target.style.boxShadow = '0 0 3px #f00';
      } else {
        evt.target.style.border = '1px solid #519dcf';
        evt.target.style.boxShadow = '0 0 3px #519dcf';
      }
    },
    runBall() {
      let allpers;
      let dotLeft = 45;
      let doTop = 35;
      let ahd = 360 / this.ball_data.count * Math.PI / 180;
      this.ball_data.speed += 35;
      this.ball_data.speed = this.ball_data.speed < 360 ? this.ball_data.speed : 35;
      let ainhd = this.ball_data.speed * Math.PI / 180;
      this.business_tableData.forEach((v, i) => {
        allpers = (Math.cos((ahd * i + ainhd)) * 80 + doTop) / (doTop + 100);
        let wpers = Math.max(0.6, allpers);
        // console.log(wpers, allpers);
        v.width = wpers * 48 + 'px';
        v.height = wpers * 48 + 'px';
        v.left = Math.sin(ahd * i + ainhd) * 40 + dotLeft + '%';
        v.top = Math.cos(ahd * i + ainhd) * 30 + doTop + '%';
      });
    },
    showDialog(str) {
      /* 新建业务 */
      console.log(str);
      switch (str) {
        case 'dialog':
          this.addBusiDialog = true;
          break;
        case 'list':
          this.page_init = false;
          break;
        case 'charts':
          this.page_init = true;
          break;
      }
    },
    /* 确认新建业务 */
    confirmAddBus() {
      if (this.business_form.name == '' || this.business_form.name == undefined) {
        this.$message.error('请完整填写输入框！');
        return false;
      } else {
        this.$message({
          type: 'success',
          message: '新增成功！'
        });
      }
    },
    openNewWindow(obj) {
      let screenWidth = window.screen.width;
      let screenHeight = window.screen.height;
      // console.log(screenWidth, screenHeight);
      let url = `./business-overview.html?id=${obj.business_id}`;
      if (screenHeight <= 768) {
        window.open(url, '_blank', `width=${screenWidth}, height=${screenHeight-100},top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no`);
      } else {
        let height = 850;
        let width = 1366;
        let top = (screenHeight - height) / 2 * 0.8;
        if (top < 0) {
          top = 0;
        }
        let left = (screenWidth - width) / 2;
        if (left < 0) {
          left = 0;
        }
        window.open(url, '_blank', `height=${height},width=${width},top=20,left=30,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no`);
      }
    },
    createCanvas(data) {
      let result = [];
      for (var i = 0; i < data.length; i++) {
        result.push({
          name: '',
          center: i % 2 === 0 ? [80, (i * 50 + 80)] : [280, ((i - 1) * 50 + 80)],
          radius: [26, 35],
          type: 'pie',
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: data[i].value,
            name: data[i].name,
            label: {
              normal: {
                formatter: '{d} %',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '16',
                  fontWeight: 'bold',
                }
              }
            }
          }, {
            value: (100 - data[i].value),
            name: '',
            tooltip: { show: false },
            itemStyle: {
              normal: {
                color: '#aaa'
              },
              emphasis: {
                color: '#aaa'
              }
            },
            hoverAnimation: false
          }]
        });
      }
      return result;
    },
    /* 告警统计 */
    toggleBtn() {
      let data = [];
      this.business_tableData.forEach((v, i) => {
        data.push({
          name: v.label,
          value: i * 10 + 5
        });
      });
      this.multiple_pie = {
        color: ['#FFE259'],
        tooltip: {
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            var res = params.name + ' : ' + params.percent + '%';
            return res;
          }
        },
        xAxis: [{
          show: false
        }],
        yAxis: [{
          show: false
        }],
        series: this.createCanvas(data)
      }
    },
  }
})