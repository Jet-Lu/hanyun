var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      web_tableData: [
        { name: '/', host_name: '本地主机', route: '网络服务器', servlet: '0', },
        { name: '网络服务器', host_name: '本地主机', route: '网络服务器', servlet: '0', },
        { name: '/net-server', host_name: 'localhost', route: '/net-server', servlet: '0', },
        { name: '/net-server', host_name: 'localhost', route: '/net-server', servlet: '0', },
        { name: '/net-server', host_name: 'localhost', route: '/net-server', servlet: '0', },
      ],
      tab_array: [
        { label: '业务总览', url: './resource-overview.html', active: false },
        { label: 'WEB应用', url: './web-app.html', active: true },
        { label: '连接器', url: './connection.html', active: false }
      ],
      page_array: [
        { label: '总览', url: './resource-overview.html', active: true },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false }
      ],
      marginTop_togglePage: ''
    }
  },
  created() { },
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
  }
});