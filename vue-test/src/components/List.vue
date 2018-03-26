
<template>
  <div class="list">
    hello
    <input type="text" v-model='msg' placeholder="请输入名字" v-on:keyup.enter='submit' style="border:1px #ccc solid;outline:none;">
    <mt-spinner type="triple-bounce"></mt-spinner>
	
	<div id="main" ref='input1' style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>

import { MessageBox } from 'mint-ui';
import echarts from 'echarts'

// 使用刚指定的配置项和数据显示图表。


export default {
  name: 'list',
  data() {
  	return {
  		msg: '',
  		// option: {
  		// 	title: {
		  //       text: 'ECharts 入门示例'
		  //   },
		  //   tooltip: {},
		  //   legend: {
		  //       data:['销量']
		  //   },
		  //   xAxis: {
		  //       data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		  //   },
		  //   yAxis: {},
		  //   series: [{
		  //       name: '销量',
		  //       type: 'bar',
		  //       data: [5, 20, 36, 10, 10, 20]
		  //   }]
  		// }
  		option :{
		    title: {
		        text: '柱状图动画延迟'
		    },
		    legend: {
		        data: ['bar', 'bar2'],
		        align: 'left'
		    },
		    toolbox: {
		        // y: 'bottom',
		        feature: {
		            magicType: {
		                type: ['stack', 'tiled']
		            },
		            dataView: {},
		            saveAsImage: {
		                pixelRatio: 2
		            }
		        }
		    },
		    tooltip: {},
		    xAxis: {
		        data: [],
		        silent: false,
		        splitLine: {
		            show: false
		        }
		    },
		    yAxis: {
		    },
		    series: [{
		        name: 'bar',
		        type: 'bar',
		        data: [],
		        animationDelay: function (idx) {
		            return idx * 10;
		        }
		    }, {
		        name: 'bar2',
		        type: 'bar',
		        data: [],
		        animationDelay: function (idx) {
		            return idx * 10 + 100;
		        }
		    }],
		    animationEasing: 'elasticOut',
		    animationDelayUpdate: function (idx) {
		        return idx * 5;
		    }
		}
  	}
  },

  mounted() {
  	// var xAxisData = [];
	// var data1 = [];
	// var data2 = [];
	for (var i = 0; i < 100; i++) {
	    this.option.xAxis.data.push('类目' + i);
	    this.option.series[0].data.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
	    this.option.series[1].data.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
	}
  	// var myChart = echarts.init(document.getElementById('main'));
  	var input1 = echarts.init(this.$refs.input1)
  	console.log(this.$refs.input1)
  	input1.setOption(this.option);
  	// myChart.setOption(option)
  },
  methods: {
  	submit() {
	  // onsole.log(111)
	  	let _this = this;
	  	MessageBox.prompt('Please tell me your name').then(({ value, action }) => {
		  MessageBox.alert('你的名字是' + value, '输入成功');
		  _this.msg = value
		});
	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
