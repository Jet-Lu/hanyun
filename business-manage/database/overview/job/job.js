Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      business_data: null,
      tab_array: [
        { label: '资源总览', url: './resource-overview.html', active: false },
        { label: '内存分析', url: './memory-analysis.html', active: false },
        { label: '表空间', url: './table-space.html', active: false },
        { label: '数据文件', url: './data-file.html', active: false },
        { label: '会话', url: './conversation.html', active: false },
        { label: 'JOB', url: './job.html', active: true },
        { label: '重做日志', url: './redo-log.html', active: false },
        { label: '死锁检测', url: '', active: false },
        { label: '库缓存', url: './library-cache.html', active: false }
      ],
      process_tableData: [
        { pid: '125', name: '/', cpu_using: '0.02%', memory: '460kB', memory_using: '0.22%', line_count: 5, handle: 2, ghost_route: '/sbin/mingetty/dev/tty2', command_line: '/sbin/mingetty/dev/tty2' },
        { pid: '125', name: '/', cpu_using: '0.02%', memory: '460kB', memory_using: '0.22%', line_count: 5, handle: 2, ghost_route: '/sbin/mingetty/dev/tty2', command_line: '/sbin/mingetty/dev/tty2' },
        { pid: '125', name: '/', cpu_using: '0.02%', memory: '460kB', memory_using: '0.22%', line_count: 5, handle: 2, ghost_route: '/sbin/mingetty/dev/tty2', command_line: '/sbin/mingetty/dev/tty2' },
        { pid: '125', name: '/', cpu_using: '0.02%', memory: '460kB', memory_using: '0.22%', line_count: 5, handle: 2, ghost_route: '/sbin/mingetty/dev/tty2', command_line: '/sbin/mingetty/dev/tty2' },
        { pid: '125', name: '/', cpu_using: '0.02%', memory: '460kB', memory_using: '0.22%', line_count: 5, handle: 2, ghost_route: '/sbin/mingetty/dev/tty2', command_line: '/sbin/mingetty/dev/tty2' },
        { pid: '125', name: '/', cpu_using: '0.02%', memory: '460kB', memory_using: '0.22%', line_count: 5, handle: 2, ghost_route: '/sbin/mingetty/dev/tty2', command_line: '/sbin/mingetty/dev/tty2' },
        { pid: '125', name: '/', cpu_using: '0.02%', memory: '460kB', memory_using: '0.22%', line_count: 5, handle: 2, ghost_route: '/sbin/mingetty/dev/tty2', command_line: '/sbin/mingetty/dev/tty2' },
        { pid: '125', name: '/', cpu_using: '0.02%', memory: '460kB', memory_using: '0.22%', line_count: 5, handle: 2, ghost_route: '/sbin/mingetty/dev/tty2', command_line: '/sbin/mingetty/dev/tty2' },
      ],
      isActice: '1H',
      page_array: [
        { label: '总览', url: './resource-overview.html', active: true },
        { label: '资源告警', url: '../resource-alarm/resource-alarm.html', active: false },
        { label: '拓扑定位', url: '', active: false },
        { label: '关注定位', url: '../focus-position/focus-position.html', active: false },
      ],
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', safety_level: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
  },
  mounted() {
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