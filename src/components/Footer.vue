<template>
  <div>
    <!-- footer -->
    <div class="footer">
      <div class="footer-box">
        <div class="footer-left">
          <div class="left-img">
            <img alt="" src="@/assets/footer/logo.png"/>
          </div>
          <div class="name">稷生科技</div>
          <div class="desc">让世界更有创意 ！</div>
        </div>
        <div class="footer-right">
          <div class="right-item1">
            <div class="right-item-title">推荐产品</div>
            <ul>
              <li>稷生喵影</li>
              <li>稷生播报</li>
              <!-- <li>稷生录演</li>
              <li>稷生图示</li>
              <li>稷生脑图</li>
              <li>稷生PDF</li>
              <li>稷生恢复专家</li>
              <li>所有产品</li> -->
            </ul>
          </div>
          <div class="right-item1">
            <div class="right-item-title">关于稷生</div>
            <ul>
              <li>公司简介</li>
              <li>新闻中心</li>
              <!-- <li>人才招聘</li>
              <li>创业历程</li>
              <li>投资者关系</li> -->
            </ul>
          </div>
          <div class="right-item1">
            <div class="right-item-title">服务支持</div>
            <ul>
              <li>政企服务</li>
              <li>合作伙伴</li>
              <!-- <li>联系我们</li> -->
            </ul>
          </div>
          <div class="right-item2">
            <div class="right-item-title2">
              关注并联系我们<br/>
              添加稷生公众号、小程序，云资讯<br/>
              添加可移动管理云服务。
            </div>
            <ul>
              <li>
                <img
                    alt=""
                    src="@/assets/footer/QR-code1.jpg"
                />
              </li>
              <li>
                <img
                    alt=""
                    src="@/assets/footer/QR-code2.jpg"
                />
              </li>
              <li><img alt="" src="@/assets/footer/QR-code3.png"/></li>
            </ul>
          </div>
        </div>
      </div>
      <hr style="color: #474747; margin-top: 0px; font-weight: lighter"/>
      <div class="footer-under">
        <div class="under-left">
          <div class="left-top">
            Copyright © 2024 JSKJ All Rights Reserved&ensp;&ensp;稷生科技<br/>
            <div class="left-text">
              稷生旗下云平台，相关服务主体：广州稷生科技有限公司及其关联子公司及特许人。<br/>
              ICP备案/许可证号：粤ICP备2023111644号-1
              广东公安联网备案：44130202000015
            </div>
          </div>
        </div>
        <div class="under-right">
          <div class="right-box1">中国互联网举报中心</div>
          <div class="right-box2">
            <a href="">法律声明&ensp;&ensp;|&ensp;&ensp;</a
            ><a href="">隐私政策&ensp;&ensp;|&ensp;&ensp;</a
          ><a href="">许可协议</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// 底部
.footer {

  width: 100%;
  height: 630px;
  background-color: #000;
  margin: 0 auto;

  .footer-box {
    width: 1350px;
    margin: 0 auto;
    display: flex;

    justify-content: space-between;

    // border: 1px solid #fff;
    .footer-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 250px;
      height: 479px;
      // border: 1px solid red;

      .left-img {
        margin: 30px 0;
        margin-top: 50px;
        width: 70px;
        height: 70px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .name {
        // text-align: center;
        font-size: 23px;
        font-weight: bolder;
        color: #fff;
      }

      .desc {
        // text-align: center;
        margin-top: 30px;
        font-size: 18px;
        color: #fff;
      }
    }

    .footer-right {
      width: 900px;
      height: 479px;
      // border: 1px solid blue;
      display: flex;
      justify-content: space-between;

      .right-item-title {
        font-size: 18px;
        padding: 10px;
        padding-top: 50px;
        color: #fff;
      }

      .right-item1 {
        // border: 1px solid white;

        ul {
          li {
            font-size: 16px;
            list-style-type: none;
            padding: 10px;
            color: #c7c3c3;
            cursor: pointer;
          }
        }
      }

      .right-item2 {
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        // border: 1px solid white;
        .right-item-title2 {
          font-size: 18px;
          padding: 10px;
          padding-top: 50px;
          color: #fff;
          line-height: 32px;
        }

        ul {
          width: 320px;
          display: flex;
          justify-content: space-between;

          li {
            list-style-type: none;

            // text-align: center;
            img {
              margin-top: 10px;
              width: 80px;
              height: 80px;
            }
          }
        }
      }
    }
  }

  .footer-under {
    width: 1200px;
    margin: 0 auto;
    // border: 1px solid #fff;
    margin-top: 25px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    .under-left {
      width: 55%;

      // border: 1px solid #fff;
      // margin-left: 200px;
      .left-top {
        margin-top: 30px;
        font-size: 16px;
        color: #ffffffb3;

        .left-text {
          margin-top: 10px;
          line-height: 20px;
          font-size: 12px;
        }

        // line-height: 2em;
      }
    }

    .under-right {
      text-align: center;
      width: 43%;
      // border: 1px solid #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .right-box1 {
        margin-left: 76px;
        font-size: 16px;
        color: #ffffffb3;
      }

      .right-box2 {
        display: flex;
        align-items: center;

        a {
          text-decoration: none;
          color: #ffffffb3;
        }
      }
    }
  }
}
</style>
