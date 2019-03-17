<template>
    <div class="wrap">
        <header>
            <div class="header">
              
                <a @click.stop="" class="back">
                    <img src="https://m.wlkgo.com/images/h_back.png" alt=""/>
                </a>
                <i>用户登录</i>
             
                <a @click.stop="" class="reg">注册</a>
               
            </div>
        </header>
        <div class="login">
            <p> 账号 ：<input type="text" placeholder="手机号/邮箱"></p>
            <p> 密码 ：<input type="password"></p>
            <div class="des">
                <span>
                    <input type="checkbox" name="" id="">自动登录
                </span>
                <a href="" class="forget">忘记密码？</a>
            </div>
            <input type="button" value="登录" class="btn">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.wrap
    header 
        width 100%
        .header
            height .38rem
            padding 5px .1rem
            box-shadow 0 0 5px #afafaf
            text-align center 
            display flex
            justify-content space-between
            align-items center
            font-size .18rem
            color #530000
            .back
                img 
                    width .31rem
            .reg
                color #8c8b8b
                font-size .16rem
    .login
        margin-top .68rem
        padding 0 .42rem
        font-size .16rem
        color #7a7a7a
        p
            text-align center
            padding 10px 0
            input 
                height .42rem
                width 80%
                border 1px solid #898989
                border-radius 5px
                text-indent 10px
        .des
            padding 10px 0
            display flex
            justify-content space-between
            align-items center
            input
                vertical-align middle
            a
                text-decoration underline
        .btn
            width 100%
            border none 
            height .4rem
            background #ff0000
            color #ffffff
            font-size .18rem
            line-height .4rem
            text-align center
</style>

