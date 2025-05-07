<template>
  <div>
    <div class="banner-kj">
      <div class="banner">
        <div class="bg-dw">
          <p class="b-title1">稷生法治体系</p>
          <p class="b-title2">民主政治、立法科学、法律权威</p>
          <p class="b-title3">合规门户 / 合规运营 / 合规制度 / 合规培训</p>

        </div>
      </div>
    </div>
    <!--    <div class="part02-kj">-->
    <!--      <div class="part02">-->
    <!--        <h3>高质量合规管理亟需破解3大痛点</h3>-->
    <!--        <div class="neirong wenzicenter">数字化时代，新技术在众多合规场景得到应用，但提升的空间还很大，新痛点亟需解决：-->
    <!--        </div>-->
    <!--        <div class="tongdian clearfix">-->
    <!--          <ul>-->
    <!--            <li class="p01">-->
    <!--              <p class="t01">合规信息共享难</p>-->
    <!--              <p class="t02">-->
    <!--                合规风险信息分散在不同的业务及职能部门、合规管理部门和监督部门的系统中，容易形成信息孤岛，导致难以识别和发现合规风险。</p>-->
    <!--            </li>-->
    <!--            <li class="p02">-->
    <!--              <p class="t01">合规协同效率低</p>-->
    <!--              <p class="t02">-->
    <!--                企业的合规主体多，董事会、监事会和企业内控、合规、风控、审计以及纪检监察部门，各自工作流程没有拉通，导致跨部门的协作效率拉低。</p>-->
    <!--            </li>-->
    <!--            <li class="p03">-->
    <!--              <p class="t01">合规创新应用慢</p>-->
    <!--              <p class="t02">-->
    <!--                不同行业、企业的合规需求差别大，如何通过敏捷开发快速满足合规管理创新的数字化应用需求，并高效集成AI等新兴技术，正成为企业刚需。</p>-->
    <!--            </li>-->
    <!--          </ul>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "FazhiPage"
}
</script>
<style lang="scss" scoped>
.banner-kj {
  width: 100%;
  height: 460px;
  text-align: center;
  background: #4285f4 url('@/assets/compliance/banner.jpg') center top no-repeat;
  background-size: 1920px 460px;

  .banner {
    width: 1200px;
    height: 460px;
    margin: 0 auto;
    padding: 90px 0 0 0;
    text-align: left;

    .bg-dw {
      .b-title1 {
        font-size: 32px;
        line-height: 30px;
        color: #fff;
        margin-bottom: 20px;
      }

      .b-title2 {
        font-size: 46px;
        line-height: 60px;
        color: #fff;
        font-weight: bold;
        margin-bottom: 30px;
      }

      .b-title3 {
        font-size: 18px;
        line-height: 28px;
        color: #fff;
      }
    }
  }
}

.part02-kj {
  background-color: #fff;
  padding: 80px 0;
  border-bottom: 1px solid #e4e4e4;

  .part02 {
    width: 1200px;
    margin: 0 auto;

    h3 {
      text-align: center;
      color: #20242b;
      font-size: 30px;
      line-height: 30px;
      font-weight: 400;
    }

    .neirong {
      width: 1000px;
      margin: 30px auto;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #737c8b;
    }

    .tongdian {
      width: 830px;
      height: 310px;
      margin: 40px auto 0;

      ul {
        padding: 0;
        list-style: none;

        .p01 {
          background: #fff url('@/assets/zr/td01.png') center 45px no-repeat;
          background-size: 65px;
        }

        .p02 {
          background: #fff url('@/assets/zr/td02.png') center 45px no-repeat;
          background-size: 73px;
        }

        li:last-child {
          margin-right: 0;
        }

        .p03 {
          background: #fff url('@/assets/zr/td03.png') center 45px no-repeat;
          background-size: 62px;
        }

        li {
          list-style: none;
          float: left;
          width: 240px;
          height: 310px;
          margin-right: 55px;
          padding: 140px 25px 20px;
          box-sizing: border-box;
          border-radius: 10px;
          border: 1px solid #e4e4e4;
          transition: height 0.5s, padding-top 0.5s, background-position 0.5s, box-shadow 0.5s;

          .t01 {
            color: #363f4e;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            margin-bottom: 10px;
          }

          .t02 {
            color: #555;
            font-size: 14px;
            line-height: 22px;
          }
        }
      }
    }
  }
}
</style>
