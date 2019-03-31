Vue.component('v-chart', VueECharts);
var app = new Vue({
  el: '#homeIndex',
  data() {
    return {
      tab_array: [
        { label: '资源总览', url: './resource-overview.html', active: false },
        { label: '内存分析', url: './memory-analysis.html', active: false },
        { label: '表空间', url: './table-space.html', active: false },
        { label: '数据文件', url: './data-file.html', active: false },
        { label: '会话', url: './conversation.html', active: false },
        { label: 'JOB', url: './job.html', active: false },
        { label: '重做日志', url: './redo-log.html', active: true },
        { label: '死锁检测', url: '', active: false },
        { label: '库缓存', url: './library-cache.html', active: false }
      ],
      tableData5: [
        {
          id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333',
          children: [
            { id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333' },
            { id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333' },
            { id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333' },
          ]
        },
        {
          id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333',
          children: [
            { id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333' },
            { id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333' },
            { id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333' },
          ]
        },
        {
          id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333',
          children: [
            { id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333' },
            { id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333' },
            { id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333' },
          ]
        },
        {
          id: '12987122', name: '好滋好味鸡蛋仔', category: '江浙小吃、小吃零食', desc: '荷兰优质淡奶，奶香浓而不腻', address: '上海市普陀区真北路', shop: '王小虎夫妻店', shopId: '10333',
          children: []
        },
      ],
    }
  },
  created() { },
  mounted() { },
  methods: {
    toggleTab(evt) {
      window.location.href = evt.url;
    },
  }
});