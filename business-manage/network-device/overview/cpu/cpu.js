Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      business_data: null,
      multiple_pie: {
        line: {
          color: ['#5793f3', '#d14a61'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['进流量', '出流量'],
            textStyle: {
              color: '#ccc'
            },
            bottom: '10'
          },
          grid: {
            left: '50',
            right: '20',
            top: '20',
            bottom: '60'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '02:33', '03:33', '04:33', '05:33', '06:33', '08:33'],
            axisLabel: {
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              fontSize: 12,
              formatter: '{value}'
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#ccc'
              }
            },
            splitLine: {
              lineStyle: {
                color: ['#eee']
              }
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              name: '进流量',
              type: 'line',
              areaStyle: {
                color: '#304C8E'
              },
              data: [11, 31, 15, 23, 52, 16, 20]
            }, {
              name: '出流量',
              type: 'line',
              areaStyle: {
                color: '#304C8E'
              },
              data: [21, 34, 55, 28, 50, 11, 40]
            }
          ]
        },
        line2: null,
        line3: null,
        line4: null,
      },
      init_page: {
        show_cpu: true
      },
      tab_array: [
        { label: '资源总览', url: './resource-overview.html', active: false },
        { label: '端口列表', url: './cpu.html', active: true },
        { label: '地址表', url: './network.html', active: false },
        { label: 'APP表', url: './process.html', active: false },
        { label: '路由表', url: './service.html', active: false },
        { label: 'MPLS VPN表', url: './disk.html', active: false },
        { label: 'VLAN表', url: './storage.html', active: false }
      ],
      time: {
        value1: '',
        value2: ''
      },
      time_array: [
        { name: '1H', value: '1H' },
        { name: '6H', value: '6H' },
        { name: '1D', value: '1D' },
        { name: '7D', value: '7D' },
        { name: '30D', value: '30D' },
        { name: '自定义', value: '自定义' },
      ],
      cpu_tableData: [
        { name: '红帽VirtlO以太网适配器#1', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
        { name: '红帽VirtlO以太网适配器#2', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
        { name: '红帽VirtlO以太网适配器#3', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
        { name: '红帽VirtlO以太网适配器#4', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
        { name: '红帽VirtlO以太网适配器#5', desc: '红帽VirtlO以太网适配器', nick_name: '红帽VirtlO以太网适配器#2', port_type: '以太网端口', mac: '00:16:55:3E:11:B9', manage_status: '1', run_status: '2', bandwidth: '100M', in_flow: '20', out_flow: '50' },
      ],
      editTimeDialog: false,
      page_array: [
        { label: '总览', url: './resource-overview.html', active: true },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false },
        { label: '拓扑定位', url: '', active: false },
      ],
      echart_toggle: [
        { label: '流量速率' },
        { label: '带宽利用率' },
        { label: '包速率' },
        { label: '错包率' },
        { label: '丢包率' },
      ],
      cpuData: {
        echart_title: '流量速率',
        isActice: '1H',
        current_name: '红帽VirtlO以太网适配器#1'
      },
      marginTop_togglePage: ''
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', safety_level: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
  },
  mounted() {
    console.log(this.$refs.homePage, this.$refs.main_row);
    const calcHeight = this.$refs.homePage.clientHeight - this.$refs.main_row.$el.clientHeight - 240;
    console.log(calcHeight, this.$refs.homePage.clientHeight, this.$refs.main_row.$el.clientHeight);
    if (calcHeight < 0) {
      this.marginTop_togglePage = '20px';
    } else {
      this.marginTop_togglePage = calcHeight + 'px';
    }
  },
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
    showPage_cpu(evt) {
      console.log(evt);
      this.init_page.show_cpu = false;
    },
    hightLight(row) {
      console.log(row);
      this.cpuData.current_name = row.name;
    },
    toggleEcharts(evt) {
      console.log(evt.label);
      this.cpuData.echart_title = evt.label;
      switch (evt.label) {
        case '流量速率':
          this.multiple_pie.line = JSON.parse(JSON.stringify(this.multiple_pie.line));
          console.log(this.multiple_pie.line);
        break;
        case '带宽利用率':
          this.multiple_pie.line2 = JSON.parse(JSON.stringify(this.multiple_pie.line));
          this.multiple_pie.line2.legend.data = ['进带宽', '出带宽'];
          this.multiple_pie.line2.series[0].name = '进带宽';
          this.multiple_pie.line2.series[1].name = '出带宽';
          console.log(this.multiple_pie.line2);
        break;
        case '包速率':
          this.multiple_pie.line3 = JSON.parse(JSON.stringify(this.multiple_pie.line));
          this.multiple_pie.line3.legend.data = ['包速率', '非包速率'];
          this.multiple_pie.line3.series[0].name = '包速率';
          this.multiple_pie.line3.series[1].name = '非包速率';
          console.log(this.multiple_pie.line3);
        break;
        case '错包率':
          this.multiple_pie.line4 = JSON.parse(JSON.stringify(this.multiple_pie.line));
          this.multiple_pie.line4.legend.data = ['错包率', '非错包率'];
          this.multiple_pie.line4.series[0].name = '错包率';
          this.multiple_pie.line4.series[1].name = '非错包率';
        break;
        case '丢包率':
          this.multiple_pie.line5 = JSON.parse(JSON.stringify(this.multiple_pie.line));
          this.multiple_pie.line5.legend.data = ['丢包率', '非丢包率'];
          this.multiple_pie.line5.series[0].name = '丢包率';
          this.multiple_pie.line5.series[1].name = '非丢包率';
        break;
      }
    },
    toggleTime(evt) {
      console.log(evt);
      this.cpuData.isActice = evt;
      switch (evt) {
        case '自定义':
          this.editTimeDialog = true;
          break;
        default:
          break;
      }
    },
  }
});