var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      tab_array: [
        { label: '业务总览', url: '', active: false },
        { label: '中央处理器', url: '', active: false },
        { label: '网卡', url: '', active: false },
        { label: '进程', url: '', active: false },
        { label: '服务', url: '', active: false },
        { label: '磁盘', url: '', active: false },
        { label: '硬盘IO', url: '', active: false }
      ],
      options: [
        { value: 'CPU使用率', label: 'CPU使用率' },
        { value: '系统平均负载', label: '系统平均负载' },
        { value: '物理内存使用率', label: '物理内存使用率' },
        { value: '交换内存使用率', label: '交换内存使用率' },
        { value: 'Swap交换情况', label: 'Swap交换情况' },
        { value: '响应时长', label: '响应时长' }
      ],
      value: '',
      deleteDialog: false,
      time_array: [
        { name: '1H', value: '1H' },
        { name: '6H', value: '6H' },
        { name: '1D', value: '1D' },
        { name: '7D', value: '7D' },
        { name: '30D', value: '30D' },
        { name: '自定义', value: '自定义' },
      ],
      connect_tableData: [
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'AJP-NIO-9090', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'AJP-NIO-9090', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'AJP-NIO-9090', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
        { name: 'HTTP-NIO-BOBO', ip: '127.0.0.1', port: '4200', agreement: 'http/1.1', operator: '内部', plan: 'http', status: '已启动', busy_line: '0', current_line: '0', },
      ],
      page_array: [
        { label: '总览', url: '../overview/resource-overview.html', active: false },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false },
        { label: '拓扑定位', url: '', active: false },
        { label: '关注定位', url: '../focus-position/focus-position.html', active: true },
      ],
      addFocusDialog: false,
    }
  },
  created() { },
  mounted() {
  },
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
    deleteProcess(obj) {
      console.log(obj);
      this.deleteDialog = true;
    },
    showAddFocusDialog() {
      this.addFocusDialog = true;
    },
  }
});