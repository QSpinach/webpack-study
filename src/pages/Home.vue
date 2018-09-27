<template>
  <div>
    <mt-swipe :auto="4000" :prevent="true">
      <mt-swipe-item v-for="(item, index) in swipes" :key="item.id">
        <img v-lazy="item.image" :alt="item.title" width="100%">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
              <img :src="'../../assets/images/menu1.png'" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img :src="'../../assets/images/menu2.png'" alt="">
              <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img :src="'../../assets/images/menu3.png'" alt="">
              <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img :src="'../../assets/images/menu4.png'" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img :src="'../../assets/images/menu5.png'" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img :src="'../../assets/images/menu6.png'" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "home",
  data: () => {
    return {
      swipes: [
        {
          id: 1,
          title: "1",
          image: ""
        },
        {
          id: 2,
          title: "2",
          image: ""
        },
        {
          id: 3,
          title: "3",
          image: ""
        }
      ]
    };
  },
  methods: {
    getSwiper() {
      this.$http
        .get("http://rap2api.taobao.org/app/mock/86300/api/swiper")
        .then(rs => rs.body)
        .then(result => {
          if (!result.isOk) {
            Toast({
              message: "轮播图加载失败",
              position: "bottom",
              duration: 3000
            });
            return;
          }
          this.swipes = result.data;
        })
        .catch(error => {
          Toast({
            message: "轮播图加载失败",
            position: "bottom",
            duration: 3000
          });
        });
    }
  },
  created() {
    this.getSwiper();
  }
};
</script>

<style scoped lang="less">
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img[lazy="loading"] {
      width: 40px;
      height: 200px;
      margin: auto;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
</style>
