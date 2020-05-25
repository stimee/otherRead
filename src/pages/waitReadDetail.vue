<template>
  <div class="root">
    <img src="~assets/fanhuis.png" @click="$router.back()" class="back">
    <div class="userInfo">
      <img src="~assets/miao.jpg">
      <span>简单点</span>
    </div>
    <div class="waitReadMsg">{{$route.params.id == '11'?'我':'他'}}一共发布了n篇文章</div>
    <div class="read-list">
      <VueBetterScroll class="wrapper" ref="scroll" @pullingDown="pullingDown()" @pullingUp="onPullingUp()">
        <div class="read-list-item">
          <div @click="redirect(item.url)" v-for="(item,index) in articles" :key="index">
            <img src="~assets/miao.jpg">
            <div>
              <div>
                 <span>{{item.title}}</span>
                <van-button @click="deleteArticle()">{{$route.params.id == '11'?'下 架':'阅 Ta'}}</van-button>
              </div>
              <div>
                <span>发布人：{{item.belong}}</span>
                <span>曝光：{{item.exposure}}</span>
              </div>
            </div>
          </div>
        </div>
      </VueBetterScroll>
    </div>
  </div>
</template>

<script>
import { Dialog,Toast,Notify } from 'vant';
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
  data() {
    return {
      articles: [
        {
          url: 'https://mp.weixin.qq.com/s/RyyjgKQz0OL9wAFgzaIgLg',
          title: '立马回阅',
          belong: 'stime',
          exposure: '10'
        }
      ]
    }
  },
  methods: {
    redirect(url) {
      localStorage.setItem("readTime",new Date().getTime())
      location.href = url
    },
    deleteArticle() {
      if(this.$route.params.id == '11'){
        Dialog.confirm({
          title: '提示',
          message: '确认删除该文章吗'
        }).then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        });
      }
    },
    // getData(page, category) {
    //   let that = this;
    //   let data = {
    //     area: "",
    //     subArea: "",
    //     keyword: "",
    //     merchantId: "",
    //     pageSize: "10",
    //     pageNum: page,
    //   };
    //   return new Promise((resolve) => {
    //     searchMerchantList(that, data, function(res) {
    //       if (that.currentPage == 1) {
    //         that.sjitems = [];
    //       }
    //       if (that.currentPage <= res.data.data.lastPage) {
    //         that.sjitems.push(...res.data.data.list);
    //         resolve(true);
    //       } else {
    //         resolve(false);
    //       }
    //     });
    //   });
    // },
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
  .back {
    position:fixed;
    top: 10px;
    left: 10px;
    z-index: 2;
    transform: scale(0.8);
  }
  .waitReadMsg {
    color: white;
    padding: 11px;
    font-weight: 550;
    text-align: center;
    border-bottom: 1px solid #006280;
    font-size: 14px;
    background: rgba(201, 101, 213, 0.58);
  }
  .userInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 16px;
    position: relative;
    padding: 16px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid paleturquoise;
      margin-bottom: 10px;
    }
    div {
      border-radius: 5px;
      background: #62b3d0;
      color: white;
      padding: 3px 6px;
      position: absolute;
      right: 20px;
    }
  }

  .read-list {
    width: 100%;
    height: calc(100% - 185px);
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
        img {
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
            }
            button{
              font-size: 12px;
              border: 1px solid red;
              color: red;
              border-radius: 6px;
              padding: 4px 10px;
              background: transparent;
              height: auto;
              line-height: inherit;
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
