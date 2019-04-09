Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      business_data: null,
      tab_array: [
        { label: '资源总览', url: './resource-overview.html', active: false },
        { label: '端口列表', url: './cpu.html', active: false },
        { label: '地址表', url: './network.html', active: false },
        { label: 'APP表', url: './process.html', active: true },
        { label: '路由表', url: './service.html', active: false },
        { label: 'MPLS VPN表', url: './disk.html', active: false },
        { label: 'VLAN表', url: './storage.html', active: false }
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
      ],
    }
  },
  created() {
    this.business_data = { business_id: '11', label: 'Openstack V3', healthy: '98%', status: '1', safety_level: '2', response: '37ms', busyness: '2%', using: '100%', downtime_cs: '0', downtime_sc: '16分23秒', mttr: '16分23秒', mtbf: '16分23秒', used_capacity: '58.31GB/339.99GB', calc_capacity: '33%' }
  },
  mounted() {},
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
  }
});