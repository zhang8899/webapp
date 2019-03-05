<template>
    <div class="wrap">
        <header>
            <div class="header">
                <router-link to="/">
                    <img src="https://m.wlkgo.com/images/logo.png" class="logo" alt="" height="100%">
                </router-link>
            <input  class="serach">
            <div class="h3dian">
                <a @click.stop="">
                <img src="https://m.wlkgo.com/images/h3dian.png?v=20160505" alt="">
                </a>
            </div>
            </div>
        </header>
           <section>
            <div class="nav-left">
                <a @click="showId(i)" v-for="(data,i) in listData.nav" :key="i" :nid="i" :class="[nid == i? 'on':'']">{{data}}</a>  
                </div>
                <div class="type" v-if="[cid&& nid ? 'cid = nid' :'']">
                    <div class="item" v-for="(data,c) in listData.list[cid]" :key="c" >
                        <a @click.stop="">
                            <div class="tit">
                                <i>{{data.title}}</i>
                            </div>
                        </a>
                        <div class="des">
                            <a @click.stop="" v-for="(data,eid) in data.items" :key="eid">{{data}}</a>
                        </div>
                    </div>
                </div>
        </section>  
        <footer>
            <ul class="nav">
                <li >
                    <router-link to="/">
                    <div>
                        <i><img src="https://m.wlkgo.com/images/home.png" alt=""></i>
                        首页
                    </div>
                    </router-link>
                </li>
                <li class="on">
                    <router-link to="/list">
                    <div>
                        <i><img src="https://m.wlkgo.com/images/type_h.png" alt=""></i>
                        分类
                    </div>
                    </router-link>
                </li>
                <li>
                    <a href="">
                    <div>
                        <i><img src="https://m.wlkgo.com/images/my.png" alt=""></i>
                    我的窝
                    </div>
                    </a>
                </li>
                <li>
                    <a href="">
                    <div>
                        <i><img src="https://m.wlkgo.com/images/wcm.png" alt=""></i>
                    我的订单
                    </div>
                    </a>
                </li>
                <li>
                    <a href="">
                    <div>
                        <i><img src="https://m.wlkgo.com/images/car.png" alt=""></i>
                        购物车
                    </div>
                    </a>
                </li>
            </ul>

        </footer>
    </div>
</template>

<script>
import DataApi from "@/api/DataApi"
export default {
     data () {
        return {
            listData:{},
            nid:0,
            cid:0
        }
  },
    created(){
    this._initData()
  },
  mounted(){
    
  },
  watch:{
   
  },
  methods:{
       //初始化数据
       _initData(){
            DataApi.getData(data=>{
                console.log(data.listData)
                 
                this.listData = data.listData
            })
        },
        showId(i){
            this.nid = this.cid = i
        }
       
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/list.styl"
    footer 
        position fixed
        bottom 0
</style>
