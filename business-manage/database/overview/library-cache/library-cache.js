Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      business_data: null,
      tab_array: [
        { label: '资源总览', url: './resource-overview.html', active: false },
        { label: '内存分析', url: '', active: false },
        { label: '表空间', url: './table-space.html', active: false },
        { label: '数据文件', url: './data-file.html', active: false },
        { label: '会话', url: './conversation.html', active: false },
        { label: 'JOB', url: './job.html', active: false },
        { label: '重做日志', url: '', active: false },
        { label: '死锁检测', url: '', active: false },
        { label: '库缓存', url: './library-cache.html', active: true }
      ],
      service_tableData: [
        { name: '应用层网关服务', desc: '如果此服务被停止，进程外请求不到将得不到处理', current_status: '0', run_status: '1', route: 'C:\window\system32' },
        { name: '应用标示', desc: '如果此服务被停止，进程外请求不到将得不到处理', current_status: '1', run_status: '0', route: 'C:\window\system32' },
        { name: '应用标示', desc: '如果此服务被停止，进程外请求不到将得不到处理', current_status: '0', run_status: '1', route: 'C:\window\system32' },
        { name: '应用层网关服务', desc: '如果此服务被停止，进程外请求不到将得不到处理', current_status: '2', run_status: '2', route: 'C:\window\system32' },
      ],
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
  mounted() { },
  methods: {
    togglePage(evt) {
      window.location.href = evt.url;
    },
    toggleTab(evt) {
      window.location.href = evt.url;
    },
  }
});