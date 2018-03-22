
<template >
	<div class="main-class">

		<button @click="show = !show">
		    Toggle render
		</button>
	  	<transition 

    enter-active-class="animated bounceInDown box"
    leave-active-class="animated zoomOutDown"
	  	>
	    	<p v-if="show">hello</p>
	  	</transition>

	  	<!-- 加载实现的动画 -->
	  	<div class="spinner" v-show="dis">
		  <div class="bounce1"></div>
		  <div class="bounce2"></div>
		  <div class="bounce3"></div>
		</div>
		<p>{{bankName}}</p>
		<div><span>银行编号</span>{{count}} <span @click="newBankName">修改</span> <span @click="decrement" style="color: red">编号减少</span></div>
		<div>{{ bankInf.name }}</div>
		<p>{{ count1 }}</p>
	</div>
	
</template>

	

<script>
let jsonpAdapter = require('axios-jsonp');
import { mapState,mapActions} from 'vuex'
// console.log(this.$store.state)

export default {
  name: 'hello-main',
  data () {
    return {
    	show: true,
    	dis: true,
    	count: this.$store.state.bankInf.id
    }
  },
  mounted :function () {
  	this.sub()
  },
  computed: {
  	bankName() {
  		// console.log(this.$store)
  		return this.$store.state.bankInf.bankName
  	},
  	...mapState(['bankInf','count1']),
  },
  methods: {
  	...mapActions(['decrement']),
  	sub() {

  		let _this = this
  		this.$http({
		  url: 'http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=df846aab-51f0-4fbc-b3f8-499b2323b6ce&sort=pop&_=1521442066808',
		  jsonp: 'callback',
		  adapter: jsonpAdapter
		})
		.then(function(res) {
			// console.log(res)
			if(res) {
				// _this.dis = false
			}
		})
  	},
  	newBankName: function(){
  		if(this.count>=110){return false}
  		this.$store.commit('newBankName',this.count++)
  	}
  }
  	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to*/
	/* .slide-fade-leave-active for below version 2.1.8 */ 
	  /*transform: translateX(10px);
	  opacity: 0;*/

	/*.box{
		width: 100px;height: 100px;background: red;margin: 202px auto;z-index: -1;
	}
	*/

	.spinner {
	  margin: auto;
	  width: 150px;
  	  text-align: center;
	}
	.spinner .bounce1 {
	  -webkit-animation-delay: -0.32s;
	  animation-delay: -0.32s;
	}
	.spinner .bounce2 {
	  -webkit-animation-delay: -0.16s;
	  animation-delay: -0.16s;
	}
	.spinner > div {
	  width: 30px;
	  height: 30px;
	  background-color: #67CF22;
	  border-radius: 50%;
	  display: inline-block;
	  animation: bouncedelay 1.4s infinite ease-in-out;
	}
	@keyframes bouncedelay {
		0%,  100% {
			transform: scale(0.0);
		} 
		40% {
			transform: scale(1.0);
		}
	}
</style>

