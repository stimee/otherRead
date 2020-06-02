<template>
  <div class="root">
    <img src="~assets/fanhuis.jpg" @click="$router.back()" class="back">
    <div class="userInfo">
      <img src="~assets/miao.jpg">
      <span>简单点</span>
    </div>
    <div class="waitReadMsg">这些小可爱都阅读了你，请尽快回阅他们哦<br/>不然您的排名会降低哟~</div>
    <div class="read-list">
      <VueBetterScroll class="wrapper" ref="scroll" @pullingDown="pullingDown()" @pullingUp="onPullingUp()">
        <div class="read-list-item">
          <div @click="goNext({path:'/waitRead/'+index })" v-for="(item,index) in articles" :key="index">
            <img src="~assets/miao.jpg">
            <div>
              <div>
                <span>stime</span>
                <span>回&nbsp;阅</span>
              </div>
              <div>
                <span>发布人：stime</span>
                <span>曝光：10</span>
              </div>
            </div>
          </div>
        </div>
      </VueBetterScroll>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {},{},{},{}
      ]
    }
  },
  methods: {
    goNext(route){
      this.$router.push(route)
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
