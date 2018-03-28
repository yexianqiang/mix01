
<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
	    <!-- slides -->
	    <swiper-slide>I'm Slide 1</swiper-slide>
	    <swiper-slide>I'm Slide 2</swiper-slide>
	    <swiper-slide>I'm Slide 3</swiper-slide>
	    <swiper-slide>I'm Slide 4</swiper-slide>
	    <swiper-slide>I'm Slide 5</swiper-slide>
	    <swiper-slide>I'm Slide 6</swiper-slide>
	    <swiper-slide>I'm Slide 7</swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	    <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div>
	    <div class="swiper-scrollbar"   slot="scrollbar"></div>
	  </swiper>

	  <!-- 实现上拉刷新 下拉加载 -->
		<ul>
			<li v-for="(item,topIndex) in selectedStarsIndex">
				<div>
					<ul>
						<li v-for="index in 5" class="fl" :class="{unselect:item.sel < index,selected:item.sel >=index}" @click="selectStar(topIndex,index)">{{ index }}</li>
					</ul>
				</div>
			</li>
		</ul>
		
		<div @click='switchList'>跳转list页面</div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
  name: 'list',
  data() {
  	return {
  		swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          autoplay:3000,
          loop:true,
          setWrapperSize :true,
          pagination:'.swiper-pagination',
          paginationClickable:true,
          autoHeight:true,
          mousewheelControl: true,
          autoplayDisableOnInteraction:false,
          prevButton:'.swiper-button-prev',   // 这里用的是 swiper 3  npm 用的是 2.6.7版本
          nextButton:'.swiper-button-next',
        },
        selectedStarsIndex: [{},{},{},{}],
  	}
  },
	mounted() {
		// console.log(this.selectedStarsIndex[topIndex].sel)
		this.selectedStarsIndex.forEach((item,index)=>{
			item.sel = 0
			this.$set(this.selectedStarsIndex,index,item)
		})

	},
  	methods: {
  		selectStar(topIndex,index) {
  			// console.log("hello")
  			this.selectedStarsIndex[topIndex].sel = index
  			this.$set(this.selectedStarsIndex,topIndex,this.selectedStarsIndex[topIndex]);
  			// console.log(this.selectedStarsIndex)
  		},
  		switchList() {
	  		// console.log(this.$router)
	  		this.$router.push({ path: 'goodsDetail' })
	  	},
  	},
  	
}
</script>
<style>
	.unselect{color: pink}
	.selected{color: red}
	
	.fl{display: inline-block;}
	ul,li{list-style: none;margin-left: 20px;font-size: 20px}
</style>
