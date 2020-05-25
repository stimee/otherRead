<template>
  <div class="root">
    <div class="userInfo">
      <img src="~assets/miao.jpg">
      <span>简单点</span>
      <van-button @click="show=true">发布我的文章</van-button>
      <van-button @click="goNext('share')">呼叫友军</van-button>
    </div>
    <div class="panel">
      <div @click="tip()">
        <div>{{readPeas}}</div>
        <div>阅豆</div>
      </div>
      <div @click="goNext({path:'/waitRead/'+selfId })">
        <div>1</div>
        <div>文章</div>
      </div>
      <div class="bg" @click="tip()">
        <div>1<van-icon name="down" /></div>
        <div>曝光</div>
      </div>
      <div @click="goNext({name: 'waitRead'})">
        <div>1</div>
        <div>待回阅</div>
      </div>
    </div>
    <div class="gg">
      敲重点：助人越多，你的排名更靠前！<br>
      专注于文章互阅20年，您只管写文章，我们帮您赚钱
    </div>
    <div class="read-list">
      <VueBetterScroll class="wrapper" ref="scroll" @pullingDown="pullingDown()" @pullingUp="onPullingUp()">
        <transition-group tag='div' class="read-list-item" name="list">
          <div @click="redirect(item.url)" v-for="(item) in articles" :key="item.id">
            <img src="~assets/miao.jpg">
            <div>
              <div>
                <span>{{item.title}}</span>
                <span>阅&nbsp;Ta</span>
              </div>
              <div>
                <span>发布人：{{item.belong}}</span>
                <span>曝光：{{item.exposure}}</span>
              </div>
            </div>
            <img v-if="item.top" class="zhid" src="~assets/zhiding.png" />
          </div>
        </transition-group>
      </VueBetterScroll>
    </div>

    <van-dialog class="myDialog" v-model="show" title="文章发布" @confirm='submitArticle' show-cancel-button show-confirm-button>
      <van-field placeholder="请输入文章链接" clearable v-model="article.url" label="文章链接" />
      <van-field placeholder="请输入标题" clearable v-model="article.title" label="文章标题" />
      <van-cell center title="5阅豆置顶(开启排名靠前)">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>
    </van-dialog>

    <van-dialog class="myDialog" v-model="showLogin" title="登录" show-cancel-button show-confirm-button @confirm='confirmPhone'>
      <van-field center label-width="70" placeholder="请输入您的手机号" v-model="phone" label="手机号" >
      </van-field>

      <!-- <van-field
        v-model="sms"
        center
        clearable
        label-width="70"
        label="验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button @click="getCode" size="small" type="primary">{{codeText}}</van-button>
        </template>
      </van-field> -->
    </van-dialog>
  </div>
</template>

<script>
import {Toast, Dialog} from 'vant'
import { Notify } from 'vant';
import {login} from 'http/api.js'
export default {
  beforeRouteEnter (to, from, next) {
    let t = localStorage.getItem("readTime")
    if(t && t!='0'){
      let now = new Date().getTime()
      if(now - Number(t)<10*1000){
        Toast.fail('阅读时间必须大于10秒');
      }else{
        Notify({ type: 'success', message: '感谢阅读，赠送您1阅豆' });
      }
    }
    next()
    // ...
  },
  beforeRouteLeave (to, from, next) {
    localStorage.setItem("readTime","0")
    next()
    // ...
  },
  created() {
    login.call(this,{openId: '123456'}).then((res)=>{
      console.log(res)
    })
    let phone = localStorage.getItem('phone')
    if(phone){
      Toast.success('欢迎回来\n'+phone)
    }else{
      this.showLogin = true
    }
  },
  data() {
    return {
      readPeas: 1,
      checked: false,
      article: {
        url: '',
        title: ''
      },
      codeText: '发送验证码',
      sms: '',
      show: false,
      selfId: 11,
      articles: [
        {
          url: 'https://mp.weixin.qq.com/s/RyyjgKQz0OL9wAFgzaIgLg',
          title: '立马回阅',
          belong: 'stime',
          exposure: '10',
          top: true,
          id: 1
        },
        {
          url: 'https://mp.weixin.qq.com/s/RyyjgKQz0OL9wAFgzaIgLg',
          title: '立马回阅',
          belong: 'stime',
          exposure: '10',
          top: true,
          id: 2
        },
        {
          url: 'https://mp.weixin.qq.com/s/RyyjgKQz0OL9wAFgzaIgLg',
          title: '立马回阅',
          belong: 'stime',
          exposure: '10',
          id: 3
        }
      ],
      phone: '15657795363',
      showLogin: false
    }
  },
  methods: {
    beforeShowPublish() {
      if(this.readPeas){
        this.show = true
      }
    },
    judge(needPeas) {
      if(this.readPeas < needPeas){
        Toast.fail('阅读不足\n无法发布文章\n赶快阅读文章')
        return false
      }
      return true
    },
    submitArticle() {
      if(!this.judge(this.checked?'5':'1')){
        return false
      }
      if(this.article.url&&this.article.title){
        let article = {...this.article,belong:'stime',exposure:'0',top:this.checked,id:this.articles.length+1}
        if(this.checked){
          this.articles.splice(0,0,article)
          this.readPeas = this.readPeas - 5
        }else{
          this.articles.push(article)
          this.readPeas = this.readPeas - 1
        }
        
        this.article.url = ''
        this.article.title = ''
      }else{
        Toast.fail('内容不能为空')
      }
    },
    getCode() {
      if(this.phone == '15657795363'){
        this.sms = '256791'
        this.codeText = '已发送'
      }else{
        this.codeText = '发送验证码'
      }
    },
    confirmPhone() {
      localStorage.setItem('phone',this.phone)
      Toast.success("登录成功！")
      // login.call(this, true).then((res)=>{
      //   if(res){
      //     this.showLogin = false
      //     Toast.success("登录成功！")
      //   }else{
      //     Toast.fail("账号不存在")
      //   }
      // })
    },
    redirect(url) {
      localStorage.setItem("readTime",new Date().getTime())
      location.href = url
    },
    tip() {
      Toast('再接再厉哟~');
    },
    goNext(route){
      this.$router.push(route)
    },
    onPullingUp() {
      this.$refs.scroll.forceUpdate(false);
      // this.currentPage = this.currentPage + 1;
      // let that = this;
      // this.getData(this.currentPage, category).then(res => {
      //   that.$refs.scroll.forceUpdate(res);
      // });
    },
    pullingDown() {
      this.$refs.scroll.forceUpdate(false);
    }
  },
}
</script>

<style lang="scss" scoped>
/deep/ .van-dialog__header{
  color: red;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
  .bg {
    i {
      font-size: 12px;
      transform: rotateZ(180deg);
      color: #04ff00;
    }
  }
  .gg {
    margin-top: 10px;
    text-align: center;
    padding: 12px 0;
    font-size: 14px;
    font-weight: 550;
    background: rgba(201,101,213,.58);
  }
  .zhid {
    width: 25px;
    position:absolute;
    top: -5px;
    left: -5px;
  }
  .getAccount {
    margin-left: 14px;
  }
  .myDialog .van-field__label{
    width: 75px !important;
  }
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    position: relative;
    padding: 16px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid paleturquoise;
      margin-right: 10px;
    }
    >button:nth-of-type(1) {
      right: 100px;
    }
    button {
      border-radius: 5px;
      background: #62b3d0;
      color: white;
      padding: 5px 7px;
      position: absolute;
      right: 20px;
      height: auto;
      line-height: inherit;
      font-size: 14px;
    }
  }

  .panel {
    width: 90%;
    height: 80px;
    box-shadow: 0 2px 6px 0px #e6d0db;
    margin: 0 auto;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    font-size: 14px;
    color: white;
    font-weight: 550;
    > div > div:nth-of-type(1){
      margin-bottom: 6px;
      font-size: 15px;
    }
  }

  .read-list {
    width: 100%;
    height: calc(100% - 230px);
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    .read-list-item {
      padding-top: 1px;
      > div {
        position: relative;
        margin: 0 auto;
        margin-top: 10px;
        background: hsla(0,0%,100%,.7);
        width: calc(95% - 16px);
        padding: 10px 8px;
        border-bottom: 1px solid gainsboro;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img:nth-of-type(1) {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
        >div {
          margin-left: 8px;
          flex: 1;
          color: black;
          >div:nth-of-type(1) {
            margin-bottom: 2px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            >span:nth-of-type(1){
              width: 80%;
              font-size: 14px;
            }
            >span:nth-of-type(2){
              font-size: 12px;
              border: 1px solid red;
              color: red;
              border-radius: 6px;
              padding: 4px 10px;
            }
          }
          >div:nth-of-type(2) {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: rgb(102, 100, 100);
            font-size: 12px;
            >span:nth-of-type(1) {
              width: 60%;
              text-align: left;
            }
            >span:nth-of-type(2) {
              width: 40%;
              text-align: right;
              
            }
          }
        }
      }
    }
  }
  


  
</style>>
