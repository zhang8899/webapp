<template>
  <div class="wrap">
  <header>
    <div class="header">
      <router-link to="/">
        <img src="https://m.wlkgo.com/images/logo.png" class="logo" alt="" height="100%">
      </router-link>
      <input type="text" class="serach">
      <div class="daka">
        <a href="##">
          <img src="https://m.wlkgo.com/images/customerService.png" width="50" height="20" alt="">
        </a>
      </div>
    </div>
  </header>
  <section>
    <div class="banner">
      <div class="swiper-container">
				<div class="swiper-wrapper"  v-if="indexData">
					<div class="swiper-slide" v-for="(p,i) in indexData.bannerPic" :key="i">
					  <a @click.stop="">
              <img :src="p"  alt="">
            </a>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
    </div>
    <nav>
      <ul class="list" v-if="indexData">
        <li class="item" v-for="(item,im) in indexData.nav" :key="im">
          <a @click.stop="">
            <img :src="item.pic" alt="">
            <span v-text="item.title"></span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="pro1">
      <div class="item" v-for="(item,ip) in indexData.pro" :key="ip">
        <a @click.stop="">
          <img :src="item" alt="">
        </a>
      </div>
    </div>
    <div class="lft">
      <div class="tit" v-if="indexData&&indexData.lft" v-text="indexData.lft.title"></div>
      <div class="lftCon"  v-if="indexData&&indexData.lft">
        <div class="item" v-for="(item,tc) in indexData.lft.pic" :key="tc"  :class="tc == 1? 'br': ''">
          <a @click.stop="">
            <img :src="item" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="lft renqi">
      <div class="tit" v-if="indexData&&indexData.renqi" v-text="indexData.renqi.title"></div>
      <div class="swiper-container">
        <div class="swiper-wrapper" v-if="indexData&&indexData.renqi">
          <div class="swiper-slide" style="width: 125px" v-for="(item,sd) in indexData.renqi.goods" :key="sd">
            <a @click.stop="">
              <img :src="item.pic" class="pic" alt="">
            </a>
            <div class="title">
              <a @click.stop="" v-text="item.title"></a>
            </div>
            <div class="price">
              {{item.price}}
              <img :src="item.cart" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lft renqi xinpin">
      <div class="tit" v-if="indexData&&indexData.xinpin">
        {{indexData.xinpin.title}}
        <span>
          更多
        </span>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper" v-if="indexData&&indexData.xinpin">
          <div class="swiper-slide" style="width: 125px" v-for="(item,xd) in indexData.xinpin.goods" :key="xd">
            <a @click.stop="">
              <img :src="item.pic" class="pic" alt="">
            </a>
            <div class="title">
              <a @click.stop="">{{item.title}}</a>
            </div>
            <div class="price">
              {{item.price}}
              <img :src="item.cart" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="lft renqi temai">
      <div class="tit" v-if="indexData&&indexData.temai">
        {{indexData.temai.title}}
        <span>
          更多
        </span>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper" v-if="indexData&&indexData.temai">
          <div class="swiper-slide" style="width: 125px" v-for="(item,ed) in indexData.temai.goods" :key="ed">
            <a @click.stop="">
              <img :src="item.pic" class="pic" alt="">
            </a>
            <div class="title">
              <a @click.stop="">{{item.title}}</a>
            </div>
            <div class="price">
             {{item.price}}
              <img :src="item.cart" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ad">
      <ul v-if="indexData">
        <li v-for="(item,aid) in indexData.ad" :key="aid">
          <a @click.stop="">
            <img :src="item" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <p>© 2009-现在 wlkgo.com 版权所有 <a @click.stop="">浙B2-20160010</a></p>
      <p> 
        <a @click.stop="">营业执照</a> 
        <a @click.stop="">食品流通许可证</a> 
        <a @click.stop="">增值电信业务经营许可证</a>
      </p>
    </div>
  </section>
  <footer>
    <ul class="nav">
      <li class="on">
        <router-link to="/">
          <div>
            <i><img src="https://m.wlkgo.com/images/home_h.png" alt=""></i>
            首页
          </div>
        </router-link>
      </li>
       <li>
        <router-link to="/list">
           <div>
            <i><img src="https://m.wlkgo.com/images/type.png" alt=""></i>
            分类
          </div>
        </router-link>
      </li>
       <li>
         <router-link to="">
          <div>
            <i><img src="https://m.wlkgo.com/images/my.png" alt=""></i>
           我的窝
          </div>
        </router-link>
      </li>
      <li>
         <router-link to="">
          <div>
            <i><img src="https://m.wlkgo.com/images/wcm.png" alt=""></i>
           我的订单
          </div>
        </router-link>
      </li>
       <li>
        <router-link to="">
          <div>
            <i><img src="https://m.wlkgo.com/images/car.png" alt=""></i>
            购物车
          </div>
         </router-link>
      </li>
    </ul>
  </footer>
  </div>
</template>

<script>
import Swiper from "swiper"
import '../../node_modules/swiper/dist/css/swiper.css'
import DataApi from "@/api/DataApi"
export default {
  
  data () {
    return {
      indexData:{}
    }
  },
  updated(){
        this._initSwiper()
    },
  created(){
    this._initData()
  },
  mounted(){
    
  },
  methods:{
     //初始化Swiper插件
      _initSwiper(){
          var swiper = new Swiper('.banner .swiper-container', {
                  loop : true,
                  autoplay:{
                      delay: 3000,
                      stopOnLastSlide: false,
                      disableOnInteraction: false,
                  },
              pagination: {
                  el: '.swiper-pagination',
              },
          })
          var swiper2= new Swiper('.renqi .swiper-container', {
                scrollbarHide: false,
                slidesPerView: 3,
                spaceBetween: 0,
                
          });
          var swiper3 = new Swiper('.xinpin .swiper-container', {
                scrollbarHide: false,
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 0,
                loop: true,
                autoplay:{
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                      },
        });
        var swiper3 = new Swiper('.temai .swiper-container', {
              scrollbarHide: false,
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 0,
              loop: true,
              autoplay:{
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                    },
        });

      },
      //初始化数据
       _initData(){
            DataApi.getData(data=>{
                console.log(data)
                this.indexData = data.indexData
            })
        }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/index.styl"

</style>

