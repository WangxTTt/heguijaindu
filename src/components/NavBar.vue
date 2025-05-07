<template>
  <div>
    <!-- 导航部分 -->
    <div class="nav">
      <div class="nav-box">
        <div class="nav-left" @click="clickNav(navData[0])">
          <div class="nav-logo">
            <img alt="" src="../assets/footer/logo.png"/>
          </div>
          <span class="nav-logo-span">合规法治平台&nbsp;&nbsp;</span>
          <span class="nav-logo-spanDescribe">|&nbsp;&nbsp;稷生旗下产品</span>
        </div>
        <div class="nav-right">
          <div
              v-for="(item, index) in navData"
              :key="item.id"
              :class="{ navActiveStyle: navActiveState === item.path }"
              class="right-box"
              @click="clickNav(item, index)"
          >
            {{ item.title }}
          </div>
          <div class="right-btn">
            <button class="btnStyle">登录</button>
            <span class="btnLine"> | </span>
            <button class="btnStyle">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {nextTick} from "vue";

export default {
  name: "NavBarPage",
  data() {
    return {
      navData: [
        {
          id: 1,
          title: "首页",
          path: "/Home",
          pathName: "Home",
        },
        {
          id: 2,
          title: "合规体系",
          path: "/Compliance",
          pathName: "Compliance",
        },
        {
          id: 3,
          title: "内控体系",
          path: "/Solution",
          pathName: "Solution",
        },
        {
          id: 4,
          title: "审计体系",
          path: "/Technology",
          pathName: "Technology",
        },
        {
          id: 5,
          title: "责任体系",
          path: "/Cooperation",
          pathName: "Cooperation",
        },
        {
          id: 9,
          title: "质量体系",
          path: "/zhil",
          pathName: "zhil",
        },
        {
          id: 6,
          title: "法务体系",
          path: "/Emergency",
          pathName: "Emergency",
        },
        {
          id: 7,
          title: "监督体系",
          path: "/Transition",
          pathName: "Transition",
        },
        {
          id: 8,
          title: "法治体系",
          path: "/Fazhi",
          pathName: "Fazhi",
        },
      ],
      navActiveState: "",
    };
  },
  mounted() {
    let activeNav = localStorage.getItem("activeNav");
    this.navActiveState = activeNav;

    nextTick(() => {
      if (activeNav === null) {
        localStorage.setItem("activeNav", this.$route.fullPath);
        this.navActiveState = this.$route.fullPath;
      }
    });
  },
  methods: {
    // 点击了导航栏
    clickNav(item) {
      console.log("item", item);
      this.navActiveState = item.path;
      localStorage.setItem("activeNav", item.path);
      // 使用 this.$router 代替 router
      this.$router.push({name: item.pathName});
    },
  },
};
</script>
<style lang="scss" scoped>
// 导航栏部分
.nav {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;

  .nav-box {
    width: 1500px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    //   justify-content: space-between;

    .nav-left {
      cursor: pointer;
      display: flex;
      align-items: center;

      .nav-logo {
        margin-top: 5px;
        width: 50px;
        height: 50px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .nav-logo-span {
        margin-left: 12px;
        vertical-align: middle;
        color: #006699;
        text-shadow: 0.3px 0.3px 0.3px rgba($color: #000000, $alpha: 1);
        font-size: 22px;
        font-weight: 700;
      }
    }

    .nav-right {
      display: flex;
      // border: 1px solid #fff
      align-items: center;

      .right-box {
        transition: all 0.2s;
        padding: 0px 15px;
        color: #000;
        font-size: 16px;
        cursor: pointer;
      }

      .navActiveStyle {
        font-size: 18px;
        color: #0f5583;
        font-weight: 700;
      }

      .right-btn {
        width: 130px;
        height: 35px;
        margin-left: 20px;
        background: #006699;
        display: flex;
        align-items: center;

        .btnStyle {
          cursor: pointer;
          width: 50%;
          height: 100%;
          background-color: #006699;
          font-size: 16px;
          font-weight: 700;
          border: 0;
          color: #fff;
        }

        .btnLine {
          margin-bottom: 2px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
