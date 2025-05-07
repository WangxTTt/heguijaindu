<template>
  <div>

    <div id="banner">
      <img alt="" src="@/assets/compliance/24172318rjiq.jpg">
      <div class="content-inner">
        <div class="banner-tit">内控合规风险一体化管理平台</div>
        <div class="banner-sub">
          内控合规风险一体化管理平台聚焦战略，基于“强内控、防风险、促合规”的管控目标，构建以法规制度为基础依据，风险管理为导向，内控流程为纽带，合规规则为落脚点的一体化融合体系。
        </div>
      </div>
    </div>
    <div class="dianbox">
      <div class="dian" @click="getdian(1)">
        1
      </div>
      <div class="dian" @click="getdian(2)">
        2
      </div>
    </div>
    <div v-if="dianId===1">
      <iframe frameborder="0" height="8500px" scrolling="no" src="http://192.168.0.215:8081/" width="100%"></iframe>
    </div>
    <div v-if="dianId===2">
      <div class="main2">
        <div class="whiteModule">
          <div class="content-inner">
            <div class="prod-bg">
              <div class="title">背景概况</div>
              <div class="con"><p>
                在全球化背景下，各国政府、国际组织对企业竞争监管显著加强，依法合规管理开始提到国家层面高度关注，持续加强企业合规管理已成为一种新趋势。党中央、国务院也高度重视国有企业内控管理和风险管理，加快提升企业内控管理水平和依法合规经营管理水平，着力打造法治央企，保障企业持续健康发展，积极加强企业在后疫情时代中的内控、风险及合规的一体化管理，是深入贯彻落实全面依法治国战略的必然要求。</p>
                <p>
                  为进一步提升国有企业防范化解重大风险能力，推动国有企业高质量发展，国务院国资委要求中央企业要进一步树立管理制度化、制度流程化、流程信息化的内控理念，建立健全以风险管理为导向、合规管理监督为重点，严格、规范、全面、有效的内控体系；要加强内控信息化建设力度，将内控体系管控措施嵌入各类业务信息系统，逐步实现内控体系与业务信息系统互联互通、有机融合，实现“强内控、防风险、促合规”的管控目标，加快实现高质量发展。</p>
              </div>
            </div>
            <div class="prod-mod-img"><p style="text-align: center"><img src="@/assets/compliance/071509234kux.jpg"
                                                                         style="max-width:750px"></p>
              <p style="text-align: center"><br></p></div>
          </div>
        </div>
        <div id="grayModule">
          <div class="content-inner">

            <!--大标题-->
            <div class="module-tit"><p class="name">系统概述</p>
              <p class="eng">System overview</p></div><!--介绍文字-->
            <div class="prod-mod-txt"><p>
              内控合规风险一体化管理平台聚焦战略，基于“强内控、防风险、促合规”的管控目标，构建以法规制度为基础依据，风险管理为导向，内控流程为纽带，合规规则为落脚点的一体化融合体系。</p>
              <p>
                通过以内控合规风险一体化管理功能为基础，构建形成结构化、模块化的统一数字化平台，实现平台“统”一的目标。通过将内控合规风险管理要求以信息化手段融入集团企业内各业务流程和重点环节，形成“多点联控”，实现管理“融”合的目标。通过基于数据挖掘提取分析的结果和规则校验的结果，构建量化评估模型和智能分析评价模型，对重点领域、关键节点开展实时动态监测，对预警情况进行反馈分析，并提供“管理驾驶舱”对内控、合规、风险管理进行多维度、场景化展示，做到“中心管控”，实现监控“智”能的目标。</p>
              <p>
                通过本平台，企业可以实现对其全域全级次、各业务的全覆盖、闭环式管控，全面提高企业数字化管控能力，促进企业数字化转型。</p>
            </div>
          </div>
        </div>
        <div id="blueModule">
          <div class="content-inner">
            <div class="module-tit"><p class="name">产品功能</p>
              <p class="eng">Product function</p></div><!--一行两列 item-two -->
            <ul class="prod-mod-item appl-item item-three list-paddingleft-2">
              <li><p><img src="@/assets/compliance/20160242lo7i.png"></p>
                <h1>合规管理</h1>
                <p>
                  用于对国家、行业、国际法律规范和企业内部管理规章制度进行线上化管理，并支持对外法内规形成的数字化合规规则进行在线管理。</p>
              </li>
              <li><p><img src="@/assets/compliance/20160242zo0q.png"></p>
                <h1>内控管理</h1>
                <p>用于管理风险控制矩阵、内部控制点，支持关联企业各业务系统业务流程，实现管控嵌入业务。</p></li>
              <li><p><img src="@/assets/compliance/icon-t3-03.png"></p>
                <h1>风险管理</h1>
                <p>
                  通过“风险监测-风险识别-风险评估-风险应对-风险报告”实现对企业全域内风险的管控；通过风险库实现对风险的分级、分类管理，实现有针对性地识别风险、应对风险；支持对重大经营风险事件进行在线跟踪、提示；支持对风险处置情况进行跟踪、督办。</p>
              </li>
              <li><p><img src="@/assets/compliance/icon-t3-04.png"></p>
                <h1>模型库管理</h1>
                <p>
                  包含数据质量分析模型库和业务合规分析模型库两大模型库，对企业全域全级次进行全覆盖、闭环式监测，实现快速、准确、有效地识别风险、阻断风险。支持模型配置、模型关联业务等功能。</p>
              </li>
              <li><p><img src="@/assets/compliance/icon-t3-05.png"></p>
                <h1>报告管理</h1>
                <p>
                  满足企业及各级分支子企业周期性的汇报场景需求，对于内控、合规、风险管理过程中涉及到的报告环节进行统一管理，支持报告生成、报告编辑、报告查询、报告导出、报告上报等功能。</p>
              </li>
              <li><p><img src="@/assets/compliance/icon-t3-06.png"></p>
                <h1>管理驾驶舱</h1>
                <p>
                  整合企业全域内数据，为企业提供全域内控合规风险工作情况全景图；支持根据历史数据生成风险预测与风险趋势分析；支持自定义配置管理驾驶舱模块。</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="whiteModule">
          <div class="content-inner">
            <!--大标题-->
            <div class="module-tit"><p class="name">用户价值</p>
              <p class="eng">user value</p></div><!--一行两列 item-two -->
            <ul class="prod-mod-item val-item item-two list-paddingleft-2">
              <li><p><img src="@/assets/compliance/201602428woy.png"></p>
                <h1>搭建统一平台，奠定管控基础</h1>
                <p>
                  基于“强内控、防风险、促合规”三位一体化管理理念，建立从集团到基层单位多级风险防控组织体系，实现对企业全域全级次的覆盖、闭环式管控，全面提高企业数字化管控能力，助力企业数字化转型。</p>
              </li>
              <li><p><img src="@/assets/compliance/201602428woy.png"></p>
                <h1>管控融入业务，形成多点联控</h1>
                <p>
                  根据国家、行业、国际法律规范和企业内部管理规章制度，梳理风险控制矩阵清单，形成具有强关联的合规规则、内控点和风险点，进而建立覆盖全业务的数据质量分析模型库和业务合规分析模型库，并将模型融入企业业务信息系统中，帮助企业及时准确地捕捉合规风险，并快速响应。实现企业对其重要经营管理决策和执行活动全留痕、可追溯、易检查，做到“多点联控”。</p>
              </li>
            </ul><!--一行两列 item-two -->
            <ul class="prod-mod-item val-item item-two list-paddingleft-2">
              <li><p><img src="@/assets/compliance/201602428woy.png"></p>
                <h1>智能监督分析，实现全域监管</h1>
                <p>
                  建立企业合规风险动态监测体系，做到及时、有效地发现风险、提示风险、阻断风险，并对重大风险进行预警和单独管理；建立报告体系，为企业提供详细的风险分析结果与应对措施建议，帮助企业清晰了解风险、合理处置风险、有效防范风险；建立“管理驾驶舱”，整合企业全域数据，一方面实现对企业当前内控合规风险管理工作的清晰展现，另一方面实现对企业全域内各业务潜在风险的预测，为企业领导提供风险决策辅助。</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="t_sert_l">
          <div class="t_sert_l01">内控一体化管理系统</div>
        </div>
        <div class="n_bottom"></div>
        <div class="n_fuwu_nr c">
          <div class="page_about_jj_con_name c">概览</div>
          <div class="show_page c">
            内控一体化平台功能主要包括预算管理、收支管理、资产管理、采购管理、建设项目管理、<br>
            合同管理、支付管理、财务核算、绩效管理等业务。系统将实现各个业务功能的数据互通，<br>
            以预算为主线，收支管理为核心，绩效管理为目标，真正实现有预算有支出。
          </div>
          <div class="show_page img"><img src="@/assets/compliance/cut7.jpg" style="width: 100%;">
          </div>
        </div>
        <div class="n_fuwu_nr_height c">
          <div class="page_about_jj_conl">
            <div class="page_about_jj_conl">
              <div class="page_about_jj_con_name c">预算管理</div>
              <div class="n_bottom"></div>
              <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
                &nbsp;预算编制应遵循程序规范、方法科学、编制及时、内容完整、项目细化、数据精准要求。<br>
                &nbsp; &nbsp; &nbsp;
              </div>
            </div>
            <div class="page_about_jj_img"><img src="@/assets/compliance/cut8.jpg" style="width: 100%;"></div>
          </div>
          <div class="page_about_jj_con">
            <div class="page_about_jj_con">
              <div class="page_about_jj_con_name c">费用管理</div>
              <div class="n_bottom"></div>
              <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
                &nbsp;支出业务覆盖单位内所有部门，涉及单位所有业务，不同类型的支出事项各具特点，系统<br>
                设计从合法、合规、厉行节约、收支及时准确等方面考虑出发。<br>
                &nbsp; &nbsp; &nbsp;
              </div>
            </div>
            <div class="page_about_jj_imgr"><img src="@/assets/compliance/cut9.jpg" style="width: 100%;"></div>
          </div>
        </div>
        <div class="n_fuwu_nr_height c">
          <div class="page_about_jj_conl">
            <div class="page_about_jj_conl">
              <div class="page_about_jj_con_name c">合同管理</div>
              <div class="n_bottom"></div>
              <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
                &nbsp;合同管理主要包括合同文本审查、合同履行、合同归档等环节，旨在明确合同订立、<br>
                执行、风险防范等环节的程序和要求，定期检查和评价合同管理薄弱点，采取相应控制措施<br>
                促进合同有效履行，切实维护单位的合法权益。<br>
                &nbsp; &nbsp; &nbsp;
              </div>
            </div>
            <div class="page_about_jj_img"><img src="@/assets/compliance/cut12.jpg" style="width: 100%;"></div>
          </div>
          <div class="page_about_jj_con">
            <div class="page_about_jj_con">
              <div class="page_about_jj_con_name c">项目管理</div>
              <div class="n_bottom"></div>
              <div id="maximg" class="page_about_jj_con_js c">&nbsp; &nbsp; &nbsp;
                &nbsp;项目管理从预算申请与审批、财政资金拨付、项目执行、项目结算全过程进行把控。<br>
                &nbsp; &nbsp; &nbsp;
              </div>
            </div>
            <div class="page_about_jj_imgr"><img src="@/assets/compliance/cut11.jpg" style="width: 100%;"></div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "SolutionPage",
  data() {
    return {
      dianId: 1
    }
  },
  methods: {
    getdian(id) {
      this.dianId = id
    },
  }
}
</script>

<style lang="scss" scoped>
.dianbox {
  width: 200px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;


  .dian {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #b3d4fb;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
  }
}

.n_banner {
  width: 100%;
  height: 360px;
  background-attachment: fixed !important;
  font-size: 80px;
  color: #fff;
  text-align: center;
  position: relative;
  background: url('@/assets/compliance/banner6.jpg');

  .n_btxt {
    width: 100%;
    text-align: left;
    padding-top: 100px;

    .n_btxt01 {
      max-width: 1280px;
      margin: 0 auto;

      .n_btxt02 {
        width: 100%;
        font-size: 40px;
        font-weight: bold;
      }

      .n_btxt04 {
        width: 100%;
        padding: 20px 0;

        .n_btxt05 {
          width: 100px;
          border-bottom: 1px #fff solid;
        }
      }

      .n_btxt03 {
        width: 100%;
        font-size: 16px;
        line-height: 1.6;
      }
    }


  }
}

#banner {
  position: relative;

  img {
    display: block;
    width: 100%;
  }

  .content-inner {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1300px;
    margin: 0 auto;

    .banner-tit {
      font-size: 50px;
      color: #fff;
      margin-bottom: 20px;
      font-weight: 400;
    }

    .banner-sub {
      font-size: 16px;
      color: #FFFFFF;
      line-height: 30px;
      width: 670px;
      font-weight: 400;
    }
  }
}

.main {
  width: 1280px;
  margin: auto;

  .t_sert_l {
    display: flex;
    max-width: 1280px;


    .t_sert_l01 {
      width: 100%;
      font-size: 40px;
      color: #333333;
      text-align: center;
    }
  }

  .n_bottom {
    width: 100%;
    height: 1px;
    border-bottom: 1px #cacfd5 solid;
    padding-bottom: 20px;
  }

  .n_fuwu_nr {
    width: 100%;
    padding-top: 20px;

    .page_about_jj_con_name {
      color: #000000;
      font-size: 30px;
    }

    .show_page {
      margin-bottom: 30px;

      img {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        vertical-align: middle;
        border: 0;
      }
    }
  }

  .n_fuwu_nr_height {
    width: 100%;
    height: 650px;
    padding-top: 20px;

    .page_about_jj_conl {
      width: 595px;
      float: left;

      .page_about_jj_conl {
        width: 595px;
        float: left;

        .page_about_jj_con_name {
          color: #000000;
          font-size: 30px;
        }

        .n_bottom {
          width: 100%;
          height: 1px;
          border-bottom: 1px #cacfd5 solid;
          padding-bottom: 20px;
        }

        .page_about_jj_con_js {
          margin-top: 15px;
          font-size: 14px;
          color: #666666;
          line-height: 30px;
        }

      }

      .page_about_jj_img {
        width: 595px;
        height: 323px;
        float: left;

        img {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          vertical-align: middle;
          border: 0;
        }
      }
    }

    .page_about_jj_con {
      width: 595px;
      float: right;

      .page_about_jj_con {
        width: 595px;
        float: right;

        .page_about_jj_con_name {
          color: #000000;
          font-size: 30px;
        }

        .n_bottom {
          width: 100%;
          height: 1px;
          border-bottom: 1px #cacfd5 solid;
          padding-bottom: 20px;
        }

        .page_about_jj_con_js {
          margin-top: 15px;
          font-size: 14px;
          color: #666666;
          line-height: 30px;
        }
      }

      .page_about_jj_imgr {
        width: 595px;
        height: 323px;
        float: right;

        .page_about_jj_imgr {
          width: 595px;
          height: 323px;
          float: right;
        }
      }
    }
  }
}

.main2 {
  .whiteModule {
    background: #ffffff;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    padding-bottom: 70px;

    .content-inner {
      width: 1300px;
      margin: 0 auto;

      .prod-bg {
        position: relative;
        background: #f2f6ff;
        padding: 20px 25px 20px 100px;
        min-height: 150px;
        margin-top: 40px;
        display: flex;

        .title {
          font-size: 26px;
          color: #fff;
          background: linear-gradient(to right, #5987FF, #749CFF);
          width: 40px;
          position: absolute;
          height: 100%;
          top: 0;
          left: 0;
          text-align: center;
          padding: 10px 20px;
          writing-mode: vertical-rl;
          letter-spacing: 4px;
        }

        .con {
          font-size: 16px;
          color: #666;
          line-height: 30px;

          p {
            padding-bottom: 5px;
          }
        }
      }

      .prod-mod-img {
        text-align: center;

        img {
          max-width: 96%;
          margin: 30px 0;
        }
      }

      .module-tit {
        text-align: center;
        padding: 60px 0;

        .name {
          font-size: 40px;
          color: black;
          line-height: 0px;
        }

        .eng {
          font-size: 24px;
          font-weight: 300;
          color: black;
          line-height: 24px;
          text-transform: uppercase;
        }
      }

      .prod-mod-item {
        display: flex;
        flex-wrap: wrap;
        list-style: none;

        li {
          margin: 25px 25px 0 0;
          position: relative;
          padding: 25px;
          border-radius: 6px;
          text-align: left;
          background: #F7F9FF;
          box-shadow: 0 0px 15px #d6ddeb;
          width: calc(50% - 75px);

          p {
            font-size: 16px;
            color: #666;
            line-height: 30px;
            padding-bottom: 5px;
          }

          h1 {
            font-size: 22px;
            text-align: center;
            margin-bottom: 20px;
            line-height: 35px;
            color: #005BFF;
          }
        }
      }
    }
  }

  #grayModule {
    background: #F7F9FF;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    padding-bottom: 70px;

    .content-inner {
      width: 1300px;
      margin: 0 auto;

      .module-tit {
        text-align: center;
        padding: 60px 0;

        .name {
          font-size: 40px;
          color: #222222;
          line-height: 0px;
        }

        .eng {
          font-size: 24px;
          font-weight: 300;
          color: #999999;
          line-height: 24px;
          text-transform: uppercase;
        }
      }

      .prod-mod-txt {
        color: #333;
        font-size: 16px;
        line-height: 30px;

        p {
          padding-bottom: 20px;
        }
      }
    }
  }

  #blueModule {
    width: 100%;
    min-height: 64px;
    background: #407EFF url('@/assets/compliance/productDetailBG.png') no-repeat left bottom;
    background-size: 100% auto;
    font-size: 16px;
    padding-bottom: 70px;

    .content-inner {
      width: 1300px;
      margin: 0 auto;

      .module-tit {
        text-align: center;
        padding: 60px 0;

        .name {
          font-size: 40px;
          color: white;
          line-height: 0px;
        }

        .eng {
          font-size: 24px;
          font-weight: 300;
          color: white;
          line-height: 24px;
          text-transform: uppercase;
        }
      }

      .prod-mod-item {
        display: flex;
        flex-wrap: wrap;
        list-style: none;


        li {
          margin: 25px 25px 0 0;
          position: relative;
          padding: 25px;
          background: #fff;
          border-radius: 6px;
          text-align: left;
          width: calc(33.3% - 75px);
          box-shadow: 0px 0 15px #e8ecf3 inset;

          p {
            font-size: 16px;
            color: #666;
            line-height: 30px;
            padding-bottom: 5px;

            img {
              display: block;
              margin: 0 auto 20px auto;
              width: 80px;
            }
          }

          h1 {
            font-size: 22px;
            color: #222;
            text-align: center;
            margin-bottom: 20px;
            line-height: 35px;
          }
        }

      }
    }
  }


}

</style>
