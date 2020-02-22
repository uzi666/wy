<template lang="html">
<div>
  <div class="topNav">
    <div class="left" @click="FLAG_slideNav = true">
      <i class="iconfont icon-shouqi" />
    </div>
    <div class="center">
      <!-- <img src="../assets/logo.png" /> -->
    </div>
    <!-- <div class="right">
        <a href="http://www.xcharge.com/en/">
          EN
        </a>
    </div>  -->
  </div>
  <div :class="['slide-nav',{slideActive: FLAG_slideNav}]">
    <div :class="['content',{contentActive: FLAG_slideNav}]">
      <div class="close" @click="FLAG_slideNav = false">
        <i class="iconfont icon-Path"/>
      </div>
      <div
        v-for="(item,index) in navList"
        :key="item.name"
        @click="_blankPage(item,index)"
        class="model">
        <div :class="{isActive:isActiveNum == index}">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      FLAG_slideNav:false,
      isActiveNum:0,
      navList: [
        {
          name: "首页",
          path: "/index"
        },
        {
          name: "库存管理",
          path: "/inventory"
        },
        {
          name: "工作管理",
          path: "/work"
        },
        {
          name: "费用管理",
          path: "/cost"
        },
        {
          name: "采购管理",
          path: "/procurement"
        },
        {
          name: "车辆管理",
          path: "/vehicle"
        },
        {
          name: "公章管理",
          path: "/chapter"
        },
        {
          name: "退出",
          path: "/"
        },
      ]
    };
  },
  methods: {
    // 跳转到其他页面
    _blankPage(item,index) {
      this.isActiveNum = index;
      this.FLAG_slideNav=false;
      this.$router.push(item.path);
    },
  }
};
</script>

<style lang="scss" scoped>
  .topNav {
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    align-items: center;
    width: 750px;
    height: 100px;
    transform: translateX(-50%);
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    .left,
    .center,
    .right {
      width: 33.333%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .left {
      justify-content: flex-start;
      .iconfont {
        font-size: 36px;
        margin-left: 30px;
      }
    }
    .center {
      justify-content: center;
      img {
        display: block;
        width: 344px;
        height: 46px;
      }
    }
    .right{
      display: flex;
      justify-content: flex-end;
      a{
        margin-right: 20px;
      }
    }
  }
  .slideActive {
    left: 0 !important;
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
  .contentActive {
    left: 0 !important;
  }
  body .slide-nav .content .slideDis{
    pointer-events: none;
    color: #ccc;
  }
  .slide-nav {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    transition: background 300ms;
    z-index: 3;
    .content {
      position: fixed;
      top: 0;
      left: -100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 340px;
      height: 100%;
      background: #fff;
      transition: left 300ms;
      .close {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 102px;
        align-items: center;
        .iconfont {
          font-size: 36px;
          margin-left: 30px;
        }
      }
      .model {
        position: relative;
        display: flex;
        align-items: center;
        width: 280px;
        height: 125px;
        font-size: 32px;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        &:after {
          position: absolute;
          content: " ";
          left: 0;
          bottom: 0;
          right: 0;
          border-bottom: 1px solid #eee;
          height: 1px;
          transform: scaleY(0.5);
          transform-origin: 0 0;
        }
        .isActive {
          color: #000;
        }
        &:active {
          background-color: #ddd;
        }
        &:last-child:after {
          display: none;
        }
      }
    }
  }
</style>
