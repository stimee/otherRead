<template>
  <div class="root">
    <img src="~assets/fanhuis.jpg" @click="$router.back()" class="back" />
    <div>
      呼叫友军立刻获得5阅豆
      <br />感谢您为这个大家庭做出的贡献
    </div>
    <div>
      已为你生成专属海报,欢迎分享。
      <br />以下图片长按即可保存。
    </div>
    <img class="hb" src="~assets/haibao.jpg" />
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.back {
  position: fixed;
  top: 5px;
  left: 8px;
  z-index: 2;
  transform: scale(0.6);
}
.root {
  text-align: center;
  > div:nth-of-type(1) {
    font-size: 14px;
    background-color: purple;
    padding: 10px 54px;
  }
  > div:nth-of-type(2) {
    font-size: 14px;
    padding: 10px 0;
    position: absolute;
    width: 100%;
    color: #00f1da;
  }
}
.hb {
  width: 100%;
}
</style>>
