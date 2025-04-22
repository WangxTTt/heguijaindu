<template>
  <div>
    <div id="p_lt_ctl06_pphContent_p_lt_ctl00_HeroPanel_divHeroBG" class="panel hero-panel bg-image"
    >
      <div class="container">
        <div class="row">
          <div id="p_lt_ctl06_pphContent_p_lt_ctl00_HeroPanel_divColumn" class="img-responsive col-sm-8">
            <h1>全生命周期质量智能</h1> 专业订制，高屋建瓴，智能掌控企业质量全貌

          </div>
        </div>
      </div>
    </div>

    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_ImageRow3_paneldiv" class="panel image-row equal-height white"
         style="height: 850px">
      <div class="container ">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h2>找到符合需求的正确质量控制解决方案</h2>

              <p>
                从生产部门到管理层，从供应商到客户，对企业而言，质量都是头等大事。请根据需求的紧要程度，了解盈飞无限质量智能解决方案是如何为您提供帮助的。</p>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="clearfix visible-lg visible-md visible-sm"></div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a h>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_ImageRow3_ImageRow3_resources_0_ImageTile_divImageTile"
                   :style="{ backgroundImage: `url(${require('@/assets/zhil/a1.jpg')})` }"
                   class="image-tile">
                <div class="description">
                  拥有战略视野
                  <br>
                  <br> 不论是繁忙的生产一线还是管理层会议室，盈飞无限都将帮您轻松采集、管理、应用质量数据。
                  <br> &nbsp;
                  <p><span class="btn">了解更多</span></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_ImageRow3_ImageRow3_resources_1_ImageTile3_divImageTile"
                   :style="{ backgroundImage: `url(${require('@/assets/zhil/a2.jpg')})` }"
                   class="image-tile">
                <div class="description">
                  优化质量过程
                  <br>
                  <br> 通过盈飞无限制造业智能解决方案实现运营效率最大化。
                  <br> &nbsp;
                  <p><span class="btn">了解更多</span></p>
                </div>
              </div>
            </a>
          </div>
          <div class="clearfix visible-lg visible-md visible-sm"></div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_ImageRow3_ImageRow3_resources_2_ImageTile4_divImageTile"
                   :style="{ backgroundImage: `url(${require('@/assets/zhil/a3.jpg')})` }"
                   class="image-tile">
                <div class="description">
                  降低成本 &amp; 规避风险
                  <br>
                  <br> 盈飞无限质量管理解决方案是被实践验证的科学的方法工具，切实帮您实现质量优先，有效降低成本、规避风险。
                  <br> &nbsp;
                  <p><span class="btn">了解更多</span></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a href="/yourneeds/compliance/">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_ImageRow3_ImageRow3_resources_3_ImageTile5_divImageTile"
                   :style="{ backgroundImage: `url(${require('@/assets/zhil/a4.jpg')})` }"
                   class="image-tile">
                <div class="description">
                  提高产品一致性 &amp; 满足行业合规
                  <br>
                  <br> 在盈飞无限质量智能工具的帮助下，简化行业合规过程，符合乃至超越行业质量标准。
                  <br> &nbsp;
                  <p><span class="btn">了解更多</span></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_TwoColumnMediaPanel1_paneldiv" class="panel two-column-media-panel light">
      <div class="container ">
        <div class="row eh-sm">
          <div class="col-sm-6 valign-middle-important header-text"><img alt="智能生产现场实施" height="360"
                                                                         src="@/assets/zhil/a5.jpg"
                                                                         title="智能制造"
                                                                         width="640">

          </div>
          <div class="col-sm-5 col-sm-offset-1 valign-middle-important header-text">
            <h3>以企业级视角了解所有质量数据。盈飞无限质量智能解决方案，赋予数据二次生命。</h3>

            <p>想要从生产线上挤出更多利润？希望对质量问题防患于未然？看盈飞无限质量智能解决方案如何让您的数据会说话。</p>

          </div>
        </div>
      </div>
    </div>
    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_TabPanel_paneldiv" class="panel tab-panel white">
      <div class="container ">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h2>改用正确质量管理工具，支持企业达成不同目标</h2> 提高质量，就是提高所有关联团队的整体效率。

            </div>
          </div>
        </div>
        <div class="tab-container">
          <ul class="nav nav-tabs responsive nav-justified nav-justified-xs m_hidden" role="tablist">
            <li :class="{'active':tabId===1}" class="light-blue" @click="getTabId(1)"><a aria-expanded="false"
                                                                                         data-toggle="tab"

                                                                                         role="tab">质量团队<span
                class="arrow"></span></a></li>
            <li :class="{'active':tabId===2}" class="dark-blue" @click="getTabId(2)"><a aria-expanded="true"
                                                                                        data-toggle="tab"
                                                                                        role="tab">生产团队<span
                class="arrow"></span></a></li>
            <li :class="{'active':tabId===3}" class="maroon" @click="getTabId(3)"><a data-toggle="tab" role="tab">管理团队<span
                class="arrow"></span></a></li>
            <li :class="{'active':tabId===4}" class="red" @click="getTabId(4)"><a data-toggle="tab"
                                                                                  role="tab">IT团队<span
                class="arrow"></span></a></li>
            <li :class="{'active':tabId===5}" class="purple" @click="getTabId(5)"><a data-toggle="tab" role="tab">企业高层<span
                class="arrow"></span></a></li>
          </ul>
          <div class="tab-content responsive m_hidden">
            <div v-if="tabId===1" id="Quality-team" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div
                    class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6">
                  <img alt="Support your Quality Team" src="@/assets/zhil/ImgTile_718x274_QualityTeam.jpg"
                       style="width: 548px; height: 209px;"></div>
                <div
                    class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  您需要多种评估、监控产品过程质量的方法，既节省时间、又可降低潜在质量隐患。
                  <ul>
                    <li>自动化、标准化<a href="/ourcapabilities/Features/monitoring/">质量控制分析</a> 与 <a
                        href="/ourcapabilities/Features/reportingsuite/">报表</a>。
                    </li>
                    <li>提供您所需的实时数据报告。</li>
                    <li>保证您对历史数据可深入分析，任意比对。</li>
                    <li>满足日益严苛的产品标准和不断提高的客户需求。</li>
                  </ul>
                  <a class="btn" href="/quality-re-imagined/engage/solu-quality-team">了解更多</a></div>
              </div>
            </div>
            <div v-if="tabId===2" id="Manufacturing-team" class="tab-pane fade active in" role="tabpanel">
              <div class="row">
                <div
                    class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Support your Manufacturing team"
                    src="@/assets/zhil/ImgTile_718x274_ManufacturingTeam.jpg"
                    style="width: 548px; height: 209px;"></div>
                <div
                    class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  详细掌握您的生产质量过程，避免可能出现的问题，确保生产线稳定运行。
                  <ul>
                    <li>优化生产。</li>
                    <li>自动数据采集。</li>
                    <li>降低成本，规避风险，避免停线。</li>
                  </ul>
                  <a class="btn" href="/quality-re-imagined/engage/solu-manufacturing-team">了解更多</a></div>
              </div>
            </div>
            <div v-if="tabId===3" id="Management-team" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div
                    class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Support your Management team" src="@/assets/zhil/ImgTile_718x274_MgmtTeam.jpg"
                    style="width: 548px; height: 209px;"></div>
                <div
                    class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  满足质量项目（精益、6Σ）以及行业合规要求，降低成本，提高产量。
                  <ul>
                    <li>提高产品行业合规水平。</li>
                    <li>降低<a href="/yourneeds/cost/">不良成本</a>（COPQ）。</li>
                    <li>提高产量。</li>
                  </ul>
                  <a class="btn" href="/quality-re-imagined/engage/solu-management-team">了解更多</a></div>
              </div>
            </div>
            <div v-if="tabId===4" id="IT-team" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Support your IT team" src="@/assets/zhil/ImgTile_718x274_ITTeam.jpg"
                    style="width: 548px; height: 209px;"></div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  在保证数据安全且不牺牲产品功能前提下，减轻IT团队负担。
                  <ul>
                    <li>轻松集成新解决方案。</li>
                    <li>降低IT资源需求。</li>
                    <li>保障数据安全。</li>
                    <li>简单部署，轻松维护。</li>
                  </ul>
                  <a class="btn" href="/quality-re-imagined/engage/solu-it-team">了解更多</a></div>
              </div>
            </div>
            <div v-if="tabId===5" id="Executive-team" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Support your Executive team" src="@/assets/zhil/ImgTile_718x274_ExecMgmtTeam.jpg"
                    style="width: 548px; height: 209px;"></div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  对您而言，质量是困扰还是机遇？将卓越质量理念完美融入企业各流程细节中，以品质为基点，实现业务转型。
                  <ul>
                    <li>改善产品品质，提高品牌忠诚度。</li>
                    <li>满足或超越客户心理预期。</li>
                    <li>提高<a href="/yourneeds/compliance/">行业合规</a>水平，规避召回风险。</li>
                  </ul>
                  <a class="btn" href="/quality-re-imagined/engage/solu-executive-management">了解更多</a></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_TabPanel3_paneldiv" class="panel tab-panel white">
      <div class="container ">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2"><h2 style="text-align: center;"> 核心优势</h2>

              <p>
                盈飞无限ProFicient是一款成熟的统计过程控制（SPC）软件解决方案，它通过制造业智能助力企业提高质量、降低成本、并帮助企业管理者以数据为支撑做出更明智的商业决策。整套软件功能全面，在生产过程的每个关键关节均可帮您实现有效质量控制。</p>


            </div>
          </div>
        </div>
        <div class="summary">
          <div class="row">
            <div class="img-responsive col-sm-10 col-sm-offset-1">
              <center>
                <picture><img alt="Uncover the features of ProFicient by InfinityQS"
                              src="@/assets/zhil/Platform.png" style="height: 256px;"></picture>
              </center>
              <br>
              &nbsp;


            </div>
          </div>
        </div>
        <div class="tab-container">
          <ul class="nav nav-tabs responsive nav-justified nav-justified-xs m_hidden" role="tablist">
            <li :class="{'active':tabId2===1}" class="light-blue" @click="getTabId2(1)"><a aria-expanded="true"
                                                                                           data-toggle="tab"

                                                                                           role="tab">统一的中央数据库<span
                class="arrow"></span></a></li>
            <li :class="{'active':tabId2===2}" class="light-blue" @click="getTabId2(2)"><a aria-expanded="false"
                                                                                           data-toggle="tab"

                                                                                           role="tab">数据采集和集成<span
                class="arrow"></span></a></li>
            <li :class="{'active':tabId2===3}" class="light-blue" @click="getTabId2(3)"><a aria-expanded="false"
                                                                                           data-toggle="tab"

                                                                                           role="tab">实时监控与分析<span
                class="arrow"></span></a></li>
            <li :class="{'active':tabId2===4}" class="light-blue" @click="getTabId2(4)"><a aria-expanded="false"
                                                                                           data-toggle="tab"

                                                                                           role="tab">工作流管理<span
                class="arrow"></span></a></li>
            <li :class="{'active':tabId2===5}" class="light-blue" @click="getTabId2(5)"><a aria-expanded="false"
                                                                                           data-toggle="tab"

                                                                                           role="tab">高级报表套装<span
                class="arrow"></span></a></li>
          </ul>

          <div class="tab-content responsive m_hidden">
            <div v-if="tabId2===1" id="Unified-Data-Repository" class="tab-pane fade active in" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="InfinityQS ProFicient Unified Data Repository"
                    src="@/assets/zhil/ProFicient-Platform-UnifiedData.png">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  无论是在某家工厂单独设置独立部门，还是整合各地分支机构的制造数据，ProFicient统一的中央数据库都是处理和管控数据的强大统计引擎。是标准化的质量数据中心。
                  <br>&nbsp;
                  <ul>
                    <li>数据库维护简单。</li>
                    <li>更快、更轻松地访问所有质量相关数据。</li>
                    <li>节约时间和资源，特别是IT资源。</li>
                    <li>改进分析和报告。</li>
                  </ul>
                  <a class="btn" href="/ourcapabilities/Features/repository">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="tabId2===2" id="Data-Collection-Integration" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="InfinityQS ProFicient Data Collection &amp; Integration"
                    src="@/assets/zhil/ProFicient-Platform-DataCollection.png">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  简化数据收集并与制造车间软件和设备进行无缝集成。操作友好的用户界面是完全可定制、直观、高度可视化的。 <br>&nbsp;
                  <ul>
                    <li>简单部署，快速实施。</li>
                    <li>获得生产/运营的全景图。</li>
                    <li>完美兼容现有基础设施。</li>
                    <li>自动扩展数据采集。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="tabId2===3" id="Real-Time-Monitoring-Analysis" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="InfinityQS ProFicient Real-Time Monitoring &amp; Analysis"
                    src="@/assets/zhil/ProFicient-Platform-Real-Time.png">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  通过ProFicient丰富的图表、报告和看板实现质量数据的实时可视化。让员工变被动为主动地控制生产流程，时刻走在质量问题之前。
                  <br>&nbsp;
                  <ul>
                    <li>通过统计图表和可视化提高认知。</li>
                    <li>根据角色与目的自定义各类图表。</li>
                    <li>让关键团队成员掌握第一手质量动态。</li>
                  </ul>
                  <a class="btn" href="/ourcapabilities/Features/monitoring">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="tabId2===4" id="Workflow-Management" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="InfinityQS ProFicient Workflow Management"
                    src="@/assets/zhil/ProFicient-Platform-workflow.png">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  通过自动化工作流（提醒、计时器和预警）提高团队效率，创建标准化方法采集企业关键数据。<br>&nbsp;
                  <ul>
                    <li>提高数据采集的可靠性。</li>
                    <li>自动化工作流以提高效率。</li>
                    <li>通过提醒、计时器和预警保证行业合规。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="tabId2===5" id="Advanced-Reporting-Suite" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="InfinityQS ProFicient Advanced Reporting Suite"
                    src="@/assets/zhil/ProFicient-Platform-Reporting.png">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  通过实时生成的自定义报表，帮助企业实现制造业智能和过程管控，满足精益与六西格玛需求，实现企业持续质量改进。
                  <ul>
                    <li>对整个企业质量情况进行监控。</li>
                    <li>不论何时何地，根据需求快速创建自定义报告。</li>
                    <li>根据受众角色提供不同可视化生产管控。</li>
                    <li>推动持续改善和正确的战略决策制订。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_SlidingTabPanel_paneldiv" class="panel slider-tab-panel design white">
      <div class="container">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h2>ProFicient产品概述</h2>
              <a id="product-tour" class="pageanchor" name="product-tour"></a>

            </div>
          </div>
        </div>
      </div>
      <div class="slick-slider-tabs">
        <div class="container">
          <div class="tab-slide-header"></div>
        </div>
        <div class="tab-slide-container"
             data-slick="{&quot;dots&quot;: true, &quot;arrows&quot;: false, &quot;autoplay&quot;: false, &quot;infinite&quot;: false}">
          <div class="tab-slide-item">
            <div class="tab-slide">
              <div class="container slide-header-container red">
                <div class="slide-header">
                  <div class="text">质量预警系统定位专家</div>
                </div>
              </div>
              <div id="p_lt_ctl04_pphBC_p_lt_ctl01_SlidingTabPanel_SlidingTabPanel_0_SlidingTabPanelContent_slidediv"
                   class="panel slide dark-grey infinity white-text">
                <div class="container slide-container">
                  <div class="row">
                    <div
                        class="tabcontent img-responsive  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6">
                      <h3 style="text-align: center;"><img alt="Monitor all manufacturing processes"
                                                           src="@/assets/zhil/proficient-cover.png"
                                                           style="width: 551px; height: 420px;"></h3>

                    </div>
                    <div
                        class="tabcontent img-responsive  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                      <h3 style="text-align: center;">排名的实时SPC软件</h3>

                      <p style="text-align: center;">
                        ProFicient™,是先进的实时质量智能解决方案。卓越的企业级架构，让ProFicient远超基于现场的传统质量管理工具。盈飞无限特有的中央数据库分析引擎可对所有质量和过程数据进行汇总，因此盈飞无限可帮助您企业的所有员工实现制造业智能，有效提升效率、降低成本，并以数据为驱动，帮助企业制订更正确的商业决策。得益于强大的自动数据采集和分析功能，盈飞无限可为任何规模制造企业提供全面的质量管理解决方案。众多世界领袖级制造企业皆已通过于ProFicient实现了质量标准化。<br><br><a
                          class="btn inlinecta" href="/ourcapabilities/products/ProFicient/">了解更多</a></p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_IconTileRow2_paneldiv" class="panel icon-row-panel light">
      <div class="container ">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2"><h2 style="text-align: center;">盈飞无限配套产品</h2>

              <div style="text-align: center;">如同您的生产线均致力于创造优质产品一般，盈飞无限的全系列产品既可以独立工作，也可以与ProFicient
                SPC软件组合，共同构建完整、全面的制造业智能解决方案。
                详细了解盈飞无限全系列产品。
              </div>


            </div>
          </div>
        </div>
        <div class="row" style="height: 500px;margin-top: 120px;">
          <div class="clearfix visible-lg visible-md visible-sm visible-ms"></div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile"
          >
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title">质量事件看板
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">盈飞无限质量事件看板可实时查看整个企业的质量事件。让管理者、质量主管和其他关键质量团队人员快速了解在特定时间内相关过程事件的直观信息。
              &nbsp;<u>更多详情 &gt;&gt;</u></div>
          </a></div>
          <div class="clearfix visible-ms"></div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile"
          >
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title">控制图看板
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">盈飞无限spc软件单一可配置接口，帮助一线操作员或质量经理实时进行生产质量监控。
              &nbsp;<u>更多详情 &gt;&gt;</u></div>
          </a></div>
          <div class="clearfix visible-ms"></div>


          <div class="col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile"
          >
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title">数据管理系统/数据采集服务
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">将来自众多数据源的数据进行采集和整合，助您真正了解关键过程参数对产品过程及质量的影响。&nbsp;<u>更多详情
              &gt;&gt;</u></div>
          </a></div>
          <div class="clearfix visible-ms"></div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile"
          >
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title">量具管理系统
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">
              量具跟踪及校准系统(GTS)能对量具活动及校准要求进行跟踪、维护的综合性系统；测量系统分析(MSA)能将SPC软件和量具可重复性&amp;可再现性研究完全整合起来的产品。
              &nbsp;<u>更多详情 &gt;&gt;</u></div>
          </a></div>
          <div class="clearfix visible-ms"></div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile"
          >
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title">动态抽样方案
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">基于用户的生产计划提醒用户进行数据采集，以确保不错过任何一个质量检查。一旦发生异常，动态抽样方案将自动发送报警通知，并基于具体违反事件动态调整数据采集标准。
              &nbsp;<u>更多详情 &gt;&gt;</u></div>
          </a></div>
          <div class="clearfix visible-ms"></div>
          <div class="col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile"
          >
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title">远程报警监控服务（RAMS）/远程事件监控服务（REMS）
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">通过实时事件记录自动监控车间数据。基于异常事件管理质量，无需人工干预，实现闭环过程控制。
              &nbsp;<u>更多详情 &gt;&gt;</u></div>
          </a></div>
          <div class="clearfix visible-ms"></div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile"
          >
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title">企业整合服务（EIS）
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">将分布在各个工厂，从工作站到特定设备，以及互联网上的质量数据进行路径管理并分享。&nbsp;<u>更多详情
              &gt;&gt;</u></div>
          </a></div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile"
          >
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title">移动数据采集
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">无需额外安装软件，制造企业和供应商便可轻松将数据录入至任意移动设备或Web浏览器中。
              &nbsp;<u>更多详情 &gt;&gt;</u></div>
          </a></div>
          <div class="clearfix visible-ms"></div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile"
          >
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title">InSight
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">ProFicient InSight可提供基于智能制造的数据汇总看板及报告，帮助领导层以数据为驱动，做出正确决策。&nbsp;<u>更多详情
              &gt;&gt;</u></div>
          </a></div>
          <div class="clearfix visible-ms"></div>


        </div>
      </div>
    </div>
    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_IconTileRow2_paneldiv"
         class="panel icon-row-panel icon-filled icon-centered title-uppercase title-centered description-centered light">
      <div class="container " style="height: 650px">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h2>盈飞无限产品应用场景</h2>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon"
                   :style="{
    background: `url(${require('@/assets/zhil/q1.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">质量报表：再也不用加班作报告
              </div>
            </a>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon"
                   :style="{
    background: `url(${require('@/assets/zhil/q2.gif')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">质量看板：实时掌握质量全貌
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon"
                   :style="{
    background: `url(${require('@/assets/zhil/q3.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">质量预警：质量问题哪里跑？
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon"
                   :style="{
    background: `url(${require('@/assets/zhil/q4.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">抽样提醒：说服领导的理由都在这里
              </div>
            </a>
          </div>

        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon"
                   :style="{
    background: `url(${require('@/assets/zhil/q5.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">来料检验 : 用技术守护你的供应链
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon"
                   :style="{
    background: `url(${require('@/assets/zhil/q6.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">数据分析 : 实时分析，下手快！准！稳！
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon"
                   :style="{
    background: `url(${require('@/assets/zhil/q6.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">质量云 : 车间现场随时随地想看就看！
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon"
                   :style="{
    background: `url(${require('@/assets/zhil/q7.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">质量追溯 : 与盈飞无限一起同质量谈恋爱
              </div>
            </a>
          </div>

        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon"
                   :style="{
    background: `url(${require('@/assets/zhil/q8.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">供应商管理：几招搞定！不信来看
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon" :style="{
    background: `url(${require('@/assets/zhil/q9.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">质量系统：给质量开外挂，就问你要不要
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon" :style="{
    background: `url(${require('@/assets/zhil/q10.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">质量工具：完美兼容|轻松整合|数据共享
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-ms-12 col-xs-12">
            <a class="icon-tile">
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divIcon" :style="{
    background: `url(${require('@/assets/zhil/q11.jpg')}) center center no-repeat`,
    backgroundSize: '100%',
    height: '150px',
    border: '1px solid #999'
  }"></div>
              <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow_IconTileRow_resources_0_IconTile_divTitle"
                   class="title">质量管理 : 不是我的黑锅我不背！
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_TextPanel_paneldiv" class="panel text-panel light" style="height: 120px">
      <div class="container">
        <div class="row">
          <div class="text-column col-lg-12 col-md-12 col-sm-12 col-ms-12 col-xs-12" style="width: 100%"><h2
              style="text-align: center;font-weight:700;font-size: 28px;">质量重塑与企业变革</h2>


            <div style="text-align: center;">
              如果质量不仅是那张最终检验单；如果质量是您供应链各环节与过程不可分割的一部分，那它将怎样实现卓越？不论企业质量水平如何，也不论质量在产品生命周期中发挥怎样的作用，只要您有持续改善的愿望，盈飞无限质量智能解决方案，都将帮您实现质量重塑。让企业实现从优秀到卓越的转变。
            </div>


          </div>
        </div>
      </div>
    </div>
    <div id="p_lt_ctl06_pphContent_p_lt_ctl00_OneColumnCTAPanelInset_divPanelBG"
         class="panel single-inline-cta-panel light white-text" style="padding-top: 320px;">
      <div class="container">
        <div id="p_lt_ctl06_pphContent_p_lt_ctl00_OneColumnCTAPanelInset_divInsetBG" class="cta-container"
        >
          <div class="header">
            <div class="row">
              <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <h2>如果像我们这样做……</h2>

                <p>你了解制造业，我们了解质量。
                  您了解制造业，我们了解质量。 看盈飞无限怎样帮您实现质量变革。
                </p>
                <a class="btn youtubemodal-large">播放视频</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_TabPanel_paneldiv" class="panel tab-panel white">
      <div class="container ">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2"><h2>真正实现产品卓越</h2>
              制造企业一直在寻找质量改善方法？生产质量控制包括整合、统一生产现场及从供应商到终端客户的全部过程质量数据，从而实现更高的质量可视水平。通过完整的历史数据和实时质量报告，以及全新的制造业智能，盈飞无限将赋予您全新战略视角，区分不同阶段质量优先级别，变质量为企业战略资源与终极目标。
            </div>
          </div>
        </div>
        <div class="tab-container">
          <ul class="nav nav-tabs responsive nav-justified nav-justified-xs"
              style="display: flex;justify-content: space-between;align-items: center;margin-top: 130px;">
            <li :class="{'active':navId===1}" class="li2" style="width: 33%" @click="navChange(1)"><a
                aria-expanded="false" data-toggle="tab"
                role="tab">企业级可视化</a>
            </li>
            <li :class="{'active':navId===2}" class="li2" style="width: 33%" @click="navChange(2)"><a
                aria-expanded="false" data-toggle="tab"
                role="tab">卓越的运营视角</a>
            </li>
            <li :class="{'active':navId===3}" class="li2" style="width: 33%" @click="navChange(3)"><a
                aria-expanded="true" data-toggle="tab"
                role="tab">推动整体性改善</a></li>

          </ul>
          <div class="tab-content responsive">
            <div v-if="navId===1" id="ENTERPRISE-VISIBILITY" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="企业级可视化 | InfinityQS Excellence Loop"
                    src="@/assets/zhil/excellencelop-entvis.png" style="width: 548px; height: 382px;">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  您不可能只用几颗棋子解决一道谜题
                  ，您也不可能只通过一个工厂或过程的孤立数据实现真正卓越。盈飞无限质量智能解决方案通过直观，自定义的可视化界面及同现有软件/系统和设备的完美无缝兼容，大大简化了质量数据的采集工作。
                  <ul>
                    <li>简单的数据采集。</li>
                    <li>大幅缩短质量事件响应时间。</li>
                    <li>轻松整合现有基础设施。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="navId===2" id="OPERATIONAL-INSIGHT" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Operational Insight | InfinityQS Excellence Loop"
                    src="@/assets/zhil/excellencelop-opinsight.png" style="width: 548px; height: 382px;">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  得益于供应链及产品线各项数据的统一和轻松访问，您将拥有前所未有的卓越运营视角。实时生产质量控制的应用让更多工厂、产线、过程和产品参与到最佳实践的同时，也大幅提升了企业的质量分析和报告能力。
                  <ul>
                    <li>通过智能分析，鉴别机会领域。</li>
                    <li>提升行业合规，满足标准需求。</li>
                    <li>质量报告标准化。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="navId===3" id="GLOBAL-TRANSFORMATION" class="tab-pane fade active in" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Global Transformation | InfinityQS Excellence Loop"
                    src="@/assets/zhil/excellencelop-globaltrans.png" style="width: 548px; height: 382px;">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  通过企业级可视化平台及卓越运营视角，您可实现单条产线、单个工厂及多工厂的生产流程及组织优化，实现过程改进。统一、集中、基于历史数据而得的运营视角将开启您的持续改善之旅，推动运营变革。
                  <ul>
                    <li>不断推升客户满意度。</li>
                    <li>满足每一个生产变化要求。</li>
                    <li>决策制订变被动为主动。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_TabPanel2_paneldiv" class="panel tab-panel white">
      <div class="container ">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2"><h2>全面支持团队成长</h2>
              看您的团队如何因盈飞无限质量智能解决方案而受益。<br>
              &nbsp;


            </div>
          </div>
        </div>
        <div class="tab-container">
          <ul class="nav nav-tabs responsive nav-justified nav-justified-xs m_hidden" role="tablist">
            <li :class="{'active':tabId3===1}" class=" " @click="getTabId3(1)"><a data-toggle="tab"
                                                                                  role="tab">质量团队<span
                class="arrow"></span></a>
            </li>
            <li :class="{'active':tabId3===2}" class="" @click="getTabId3(2)"><a data-toggle="tab"
                                                                                 role="tab">生产团队<span
                class="arrow"></span></a>
            </li>
            <li :class="{'active':tabId3===3}" class="" @click="getTabId3(3)"><a data-toggle="tab"
                                                                                 role="tab">管理团队<span
                class="arrow"></span></a>
            </li>
            <li :class="{'active':tabId3===4}" class="" @click="getTabId3(4)"><a data-toggle="tab"
                                                                                 role="tab">IT 团队<span
                class="arrow"></span></a></li>
            <li :class="{'active':tabId3===5}" class="" @click="getTabId3(5)"><a data-toggle="tab"
                                                                                 role="tab">企业高层<span
                class="arrow"></span></a>
            </li>
          </ul>
          <div class="tab-content responsive m_hidden">
            <div v-if="tabId3===1" id="Quality-team" class="tab-pane fade in active" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Support your Quality team" src="@/assets/zhil/ImgTile_718x274_QualityTeam.jpg"
                    style="width: 548px; height: 209px;">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  生产质量控制在节约时间及降低潜在质量隐患的前提下，需要通过多种方法评估和监控产品及过程的精确度。
                  <ul>
                    <li>自动生成标准化质量报告。</li>
                    <li>提供您所需的实时质量数据报表。</li>
                    <li>为深入分析提供历史数据支撑。</li>
                    <li>满足不断增长的产品及客户需求。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="tabId3===2" id="Manufacturing-team" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Support your Manufacturing team"
                    src="@/assets/zhil/ImgTile_718x274_ManufacturingTeam.jpg"
                    style="width: 548px; height: 209px;">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  拥有生产质量控制过程的卓越洞察力，通过数据管理软件发现生产质量改进的方法，防止潜在隐患发生，保证生产稳定。
                  <ul>
                    <li>优化生产过程。</li>
                    <li>自动化数据采集。</li>
                    <li>降低成本规避风险</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="tabId3===3" id="Management-team" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Support your Management team" src="@/assets/zhil/ImgTile_718x274_MgmtTeam.jpg"
                    style="width: 548px; height: 209px;">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  满足精益生产及六西格玛等质量项目的需求，在提升产量、降低成本同时，满足标准要求，保证行业合规。
                  <ul>
                    <li>提升产品合规性。</li>
                    <li>降低成本。</li>
                    <li>提升产量。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="tabId3===4" id="IT-team" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Support your IT team" src="@/assets/zhil/ImgTile_718x274_ITTeam.jpg"
                    style="width: 548px; height: 209px;">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  无需降低产品安全性，牺牲产品功能，便可减轻IT团队成员负担。
                  <ul>
                    <li>轻松整合现有系统设施。</li>
                    <li>减少IT资源需求。</li>
                    <li>满足企业安全需求。</li>
                    <li>简单部署轻松实施。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
            <div v-if="tabId3===5" id="Executive-team" class="tab-pane fade" role="tabpanel">
              <div class="row">
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-push-6 col-md-push-6 col-sm-push-6"><img
                    alt="Support your Executive team" src="@/assets/zhil/ImgTile_718x274_ExecMgmtTeam.jpg"
                    style="width: 548px; height: 209px;">


                </div>
                <div class="tabcontent  col-lg-6 col-md-6 col-sm-6 col-lg-pull-6 col-md-pull-6 col-sm-pull-6">
                  在您看来，质量是问题还是机遇？将质量融入企业每一个细胞后，您将看到企业的惊人转变。
                  <ul>
                    <li>提升产品质量及品牌忠诚度。</li>
                    <li>满足日益增长的客户需求。</li>
                    <li>提升行业合规，规避召回风险。</li>
                  </ul>
                  <a class="btn">了解更多</a>


                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="tiny-slider-tabs" style="    padding-top: 0;">
      <div class="container">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h2>盈飞无限质量管理系统（QMS）</h2>


            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="textbox">
      <div class="container">
        <div class="left">
          <div class="name">盈飞无限质量管理系统</div>
          <div class="text">
            盈飞无限质量管理系统（QMS）是基于ISO/IATF体系管理要求设计开发的质量管理信息系统。旨在帮助制造企业实现质量管理的持续改进与提升，推动质量信息化跨越发展，提升产品质量保证能力，提升质量可靠性，实现质量成本精细化管理。质量管理系统（QMS）可智能化地实现供应商来料、生产制程、客户服务全过程质量保证、质量控制、质量管理，满足产品制造全过程质量信息收集、分析，并形成质量问题反馈工作流，让您实时掌握过程质量及质量管理体系准确表现。将质量信息分散汇总、逐级传递的传统模式升级为统一平台的平行信息实时共享，实现企业全生命周期的质量智能。
          </div>
        </div>
        <div class="right">
          <img src="@/assets/zhil/infinityqsqes.png"/>
        </div>
      </div>

    </div>
    <div id="p_lt_ctl04_pphBC_p_lt_ctl01_IconTileRow1_paneldiv" class="panel icon-row-panel light"
         style="padding-bottom:0px;">
      <div class="container ">
        <div class="header">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h2>盈飞无限质量管理系统配套产品</h2> 盈飞无限质量管理系统（QMS）是满足制造企业应用需求的质量信息化智能工作平台。

            </div>
          </div>
        </div>
        <div class="row" style=" height: 1250px;">
          <div class="clearfix visible-lg visible-md visible-sm visible-ms"></div>

          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>供应商质量管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">对外部提供的过程、产品和服务控制中的供应商实施动态管理，实现供应商档案、供应商评价、来料检验标准等业务IT固化，达到供应商的可控、可管、可查的目的。
              &nbsp;
            </div>
          </a></div>
          <div class="clearfix visible-ms"></div>

          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>制程质量管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">
              包括产线质量目标管理、质量计划管理、检验、不合格品审理、质量问题处理、质量动态监控、质量统计分析、质量报告等内容。以质量跟踪为主线，对加工、组装、检验等环节进行策划、引导和控制。
            </div>
          </a></div>
          <div class="clearfix visible-ms"></div>


          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>客户质量管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">
              包括客户文件、报告管理、客户投诉管理、8D报告等模块。在售后服务过程中，收集、分析产品使用质量信息，实现售后质量问题控制，帮助企业把握售后质量水平和问题分布规律，指导生产、设计持续改进。
            </div>
          </a></div>
          <div class="clearfix visible-ms"></div>

          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>不合格品管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">
              其他业务环节产生的不合格品、可疑品可触发不合格品处理流程，该模块包含来料不合格品处理流程、生产过程不合格处理处理流程、废品管理等内容，采用了工作流技术。
            </div>
          </a></div>
          <div class="clearfix visible-ms"></div>
          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>质量体系管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">包括体系审核、产品审核、过程审核、管理评审模块，建立规范的质量体系业务流程，实现质量管理的顶层策划、监督和改进，有效保证质量体系的持续适宜性、充分性和有效性。
            </div>
          </a></div>
          <div class="clearfix visible-ms"></div>
          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>实验室管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">
              包括计量器具台账管理、检定管理、状态管理、计量资料库管理模块。实现器具的实时跟踪追溯，确保器具按时送检。此外，还包括化学品管理、留样管理等业务，帮助工作人员提高效率、降低出错率。
            </div>
          </a></div>
          <div class="clearfix visible-ms"></div>

          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>质量异常管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">对各业务环节产生的质量问题、异常点实施管理，建立从问题报送到问题归零结束的在线过程管理，解决各类质量问题，保证产品实现过程的质量受控。
            </div>
          </a></div>

          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>质量改进管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">质量改进管理是质量管理系统中重要的功能，它确保对在质量管理过程中发现的问题能够得到合理、及时、有效的处理。
            </div>
          </a></div>
          <div class="clearfix visible-ms"></div>

          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>质量成本管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">包括内部质量失效成本和外部质量失效成本管理。精准管控质量成本，实现质量部从成本中心向利润中心转变的第一步。
            </div>
          </a></div>
          <div class="clearfix visible-ms"></div>

          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>综合质量分析
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">包括综合质量分析、质量报告、多维分析模型、多维报表等模块。根据需要进行跨系统数据统计和分析，用层次化、指标化、可视化方式向各级管理人员实时全面展示企业各环节质量状态。
            </div>
          </a></div>
          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>质量知识/经验管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">
              对涉及各个过程的工作方法、工具、实践和经验信息进行整理、审核和归档，建立质量知识和经验集合库，实现知识经验的全员共享，为产品生产全过程的问题预防和解决提供依据及参考借鉴。
            </div>
          </a></div>
          <div class="col-sm-6 col-ms-6 col-xs-12" style="height:190px;"><a class="icon-tile">
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divTitle"
                 class="title"><span class="red_drop"></span>质量文档管理
            </div>
            <div id="p_lt_ctl06_pphContent_p_lt_ctl00_IconTileRow1_IconTileRow1_resources_0_IconTile_divDescription"
                 class="description">对质量文件、检验规范、检验记录等文档进行分类组织及分级管理，做到完整、有效，便于归档、追溯。保证质量文档的安全性、可靠性和一致性，方便用户对质量文档信息的检索和查询。
            </div>
          </a></div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "zhilPage",
  data() {
    return {
      tabId: 1,
      tabId2: 1,
      tabId3: 1,
      navId: 1
    }
  },
  methods: {
    getTabId(id) {
      this.tabId = id
    },
    getTabId2(id) {
      this.tabId2 = id
    },
    getTabId3(id) {
      this.tabId3 = id
    },
    navChange(id) {
      this.navId = id
    }
  }
}
</script>
<style lang="scss" scoped>
.panel.bg-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  min-height: 200px;
  padding: 100px 0;
  font-size: 24px;
  background-image: url('@/assets/zhil/qeszlzxxt.png');

  .container {
    width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    .row {
      margin-right: -15px;
      margin-left: -15px;

      .col-sm-8 {
        width: 66.66666667%;
        float: left;
        color: white;

        h1 {
          color: #fff;
          font-size: 48px;
          margin: 0 0 0px;
          font-weight: 500;
        }
      }
    }
  }
}

.tiny-slider-tabs {
  padding-bottom: 0;
  padding-top: 75px;

  .container {
    width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    .header {
      padding-bottom: 50px;
      text-align: center;

      .row {
        margin-right: -15px;
        margin-left: -15px;

        .col-sm-offset-2 {
          margin-left: 16.66666667%;
          width: 66.66666667%;
          float: left;
          position: relative;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;

          h2 {
            font-weight: 700;
            font-size: 28px;
            line-height: 1.5;
          }
        }
      }
    }

    .tab-slide-header {
      margin: 0 0 -3px;
      padding: 5px 0 0;
      position: relative;
      z-index: 10;

      .tns-ovh {
        height: 100% !important;

        #tns1-iw {
          margin: 0px;

          #tns1 {
            width: calc(100%);
            transition-duration: 0.3s;
            white-space: nowrap;
            display: flex;
            padding: 0 !important;

            .tns-item {
              display: inline-block;
              vertical-align: top;
              white-space: normal;
              font-size: 16px;
              float: left;

              .tab-slide {
                .slide.blue {
                  background-color: #55c0e9;
                  padding: 50px 0;

                  .container {
                    width: 1170px;
                    padding-right: 15px;
                    padding-left: 15px;
                    margin-right: auto;
                    margin-left: auto;

                    .row {
                      margin-right: -15px;
                      margin-left: -15px;

                      .col-lg-push-6 {
                        left: 50%;
                        width: 50%;
                        float: left;
                        position: relative;
                        min-height: 1px;
                        padding-right: 15px;
                        padding-left: 15px;

                        img {
                          max-width: 100%;
                          height: auto !important;
                          display: inline-block;
                        }
                      }

                      .col-lg-pull-6 {
                        right: 50%;
                        width: 50%;
                        float: left;
                        position: relative;
                        min-height: 1px;
                        padding-right: 15px;
                        padding-left: 15px;

                        h2 {
                          font-weight: 700;
                          margin: 0 0 15px;
                          color: white;
                        }

                        p {
                          color: #fff;
                          margin: 0 0 10px;
                          font-size: 16px;
                          line-height: 1.5;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.light {
  background-color: #f5f5f5 !important;
}

.panel {
  padding-top: 75px;
  padding-bottom: 75px;
  background: #fff;
  //display: flex;


  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 1170px;

    .header {
      padding-bottom: 50px;
      text-align: center;

      .row {
        margin-right: -15px;
        margin-left: -15px;

        .col-sm-offset-2 {
          margin-left: 16.66666667%;
          width: 66.66666667%;
          float: left;
          position: relative;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;

          h2 {
            font-weight: 700;
            font-size: 28px;
            line-height: 1.5;
            letter-spacing: 5px;
            margin-bottom: 10px;
          }

          p {
            font-size: 14px;
            line-height: 1.5;
            color: #3b3b3b;
            margin: 0 0 10px;
          }
        }
      }
    }

    .eh-sm {
      display: table;
      table-layout: fixed;
      height: 100%;
      min-width: 100%;
    }

    .row {
      margin-right: -15px;
      margin-left: -15px;

      .visible-lg {
        display: block !important;
      }

      .col-sm-6 {
        display: table-cell;
        height: 100%;
        float: none;
        width: 50%;
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;

        img {
          max-width: 100%;
          height: auto !important;
          display: inline-block;
        }
      }

      .col-sm-5 {
        width: 50%;
        max-width: 50%;
        margin-left: 0;
        padding-left: 8.33333%;
        display: table-cell;
        height: 100%;
        float: none;
        min-height: 1px;
        padding-right: 15px;
        position: relative;

        h3 {
          font-weight: 700;
          font-size: 28px;
          line-height: 1.5;
          letter-spacing: 5px;
          margin-bottom: 10px;
        }

        p {
          font-size: 14px;
          line-height: 1.5;
          color: #3b3b3b;
        }
      }

      .col-ms-12 {
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
        width: 47%;
        float: left;

        a {
          color: #DE131A;
          transition: background-color .15s linear, color .15s linear, border-color .15s linear;
          text-decoration: none;

          .image-tile {
            padding-top: 56px;
            padding-bottom: 56px;
            border-radius: 5px;
            position: relative;
            min-height: 250px;
            display: table;
            margin-bottom: 30px;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50%;

            .description {
              color: #fff;
              font-size: 16px;
              line-height: 1.5;
              z-index: 3;
              position: relative;
              text-align: center;
              padding-left: 8.33333%;
              padding-right: 8.33333%;
              display: table-cell;
              width: 100%;

              p {
                font-size: 14px;
                line-height: 1.5;
                margin: 0 0 10px;
                color: #fff;

                .btn {
                  border-color: #fff;
                  color: #fff;
                  background-color: transparent;
                  text-transform: uppercase;
                  font-size: 14px;
                  line-height: 14px;
                  font-weight: 700;
                  padding: 15px 20px;
                  white-space: normal;
                  margin: 0 20px 10px 0;
                  background: transparent;
                  border: 3px solid #000;
                  border-radius: 5px;
                  transition: background-color .2s linear, color .2s linear, border-color .2s;
                  display: inline-block;
                  text-align: center;
                  vertical-align: middle;
                  touch-action: manipulation;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }

      .col-lg-4 {
        width: 30.33333333%;
        position: relative;
        min-height: 1px;
        padding-left: 15px;
        padding-right: 15px;
        float: left;

        .icon-tile {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          padding-bottom: 35px;
          transition: background-color .1s linear, color .1s linear, border-color .1s linear;

          .title {
            font-weight: 700;
            font-size: 16px;
            padding-top: 10px;
            color: #3b3b3b;
            line-height: 24px;
            width: 100%;
            display: block;
          }

          .description {
            font-size: 14px;
            color: #3b3b3b;
            padding-top: 10px;
            width: 100%;
            display: block;
          }
        }
      }

      .col-lg-3 {
        width: 22%;
        float: left;

        .icon-tile {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
          padding-bottom: 35px;
          transition: background-color .1s linear, color .1s linear, border-color .1s linear;

          .title {
            color: #3b3b3b;
            font-size: 14px;
            line-height: 20px;
            padding-top: 10px;
            text-align: center;
            font-weight: 700;
            width: 100%;
            display: block;
          }
        }
      }

      .col-ms-6 {
        position: relative;
        min-height: 1px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        float: left;
        width: 46%;

        .icon-tile {
          display: block;
          width: 100%;
          height: 100%;
          padding-bottom: 15px;
          text-decoration: none;

          .title {
            font-weight: 700;
            font-size: 16px;
            color: #3b3b3b;
            padding-top: 10px;
            width: 100%;
            display: block;
            line-height: 24px;

            .red_drop {
              width: 8px;
              height: 8px;
              border-radius: 4px;
              background-color: #D1191C;
              display: inline-block;
              margin-right: 4px;
            }
          }

          .description {
            font-size: 14px;
            color: #3b3b3b;
            padding-top: 10px;
            width: 100%;
            display: block;
            line-height: 22px;
          }
        }
      }
    }

    .tab-container {
      .nav-tabs {
        border-bottom: 1px solid #e3e3e3;
        margin-bottom: 20px;
        width: 100%;
        list-style: none;
        padding-left: 0;
        margin-top: 90px;

        .active {
          a {
            border-bottom: 3px solid #445364 !important;
            background: transparent;
            border-radius: 0;
            position: relative;
            color: #3b3b3b !important;
            border: 0;

            .arrow {
              background: url('@/assets/zhil/arrow_blue.png') 0 0 no-repeat;
            }
          }
        }

        .li2 {

          line-height: 1.1;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          color: #a9a9a9;
          margin-bottom: 10px;
          vertical-align: bottom;
          display: table-cell;
          width: 1%;
          float: none;
        }

        li {
          line-height: 1.1;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          color: #a9a9a9;
          margin-bottom: 10px;
          vertical-align: bottom;
          display: table-cell;
          width: 1%;
          float: none;

          a {
            line-height: 1.1;
            border: 0;
            border-bottom: 3px solid transparent;
            color: #a9a9a9;
            margin-bottom: 0;
            min-height: 51px;
            padding-bottom: 4px;
            border-radius: 4px 4px 0 0;
            text-decoration: none;
            text-align: center;
            position: relative;
            display: block;
            padding: 10px 15px;
            transition: background-color .15s linear, color .15s linear, border-color .15s linear;

            .arrow {
              display: none;
              width: 18px;
              height: 9px;
              position: absolute;
              bottom: -12px;
              left: 50%;
              margin-left: -9px;
              background: url('@/assets/zhil/arrow_lightblue.png') 0 0 no-repeat;
            }
          }
        }
      }
    }

    .tab-content {
      .tab-pane {
        .row {
          margin-right: -15px;
          margin-left: -15px;
          display: flex;
          flex-direction: row-reverse;

          .tabcontent {
            margin-top: 15px;
            margin-bottom: 15px;

            width: 50%;
            position: relative;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;

            img {
              max-width: 100%;
              height: auto !important;
            }
          }

          .col-lg-pull-6 {
            //right: 50% !important;
            width: 50%;
            //float: left;

            ul {
              list-style-image: url('@/assets/zhil/ul-bullet.png');
              margin-bottom: 20px;

              li {
                a {
                  text-decoration: none;
                }
              }
            }

            .btn {
              color: #de131a;
              text-transform: uppercase;
              font-size: 14px;
              line-height: 14px;
              font-weight: 700;
              padding: 15px 20px;
              white-space: normal;
              margin: 0 20px 10px 0;
              background: transparent;
              border: 3px solid #de131a;
              border-radius: 5px;
              transition: background-color .2s linear, color .2s linear, border-color .2s;
            }
          }
        }
      }
    }

    .cta-container {
      padding: 75px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
      border: 1px solid #cfcfcf;
      border-radius: 5px;
      background-color: #fff;
      background-image: url('@/assets/zhil/quaility-reimagined-video-inset-bg.jpg');
      height: 150px;

      .header {
        margin-bottom: 0;
        padding-bottom: 0;
        text-align: center;

        .row {
          margin-right: -15px;
          margin-left: -15px;

          .col-md-offset-2 {
            margin-left: 16.66666667%;
            width: 66.66666667%;
            position: relative;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
            float: left;

            h2 {
              font-weight: 700;
              font-size: 28px;
              line-height: 1.5;
              letter-spacing: 2px;
              margin-top: 0;
              color: #fff;
            }

            p {
              font-size: 14px;
              line-height: 1.5;
              color: white;
              margin: 0 0 10px;
            }

            .btn {
              background-color: transparent;
              color: #fff;
              border-color: #fff;
              margin-top: 30px;
              margin-right: 0;
              text-transform: uppercase;
              font-size: 14px;
              line-height: 14px;
              font-weight: 700;
              padding: 15px 20px;
              white-space: normal;
              margin: 0 20px 10px 0;
              background: transparent;
              border: 3px solid #000;
              border-radius: 5px;
              /* color: #000; */
              transition: background-color .2s linear, color .2s linear, border-color .2s;
              text-align: center;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}


.slider-tab-panel {
  padding-bottom: 0;
  padding-top: 75px;
  background: #fff;

  .container {
    width: 1170px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    .header {
      padding-bottom: 50px;
      text-align: center;

      .row {
        margin-right: -15px;
        margin-left: -15px;

        .col-sm-offset-2 {
          margin-left: 16.66666667%;
          width: 66.66666667%;
          float: left;

          h2 {
            font-weight: 700;
            font-size: 28px;
            line-height: 1.5;
            letter-spacing: 1px;
          }

          a {
            color: #DE131A;
            transition: background-color .15s linear, color .15s linear, border-color .15s linear;
            text-decoration: none;
          }
        }
      }
    }
  }

  .slick-slider-tabs {

    .container {
      width: 1170px;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;

      .tab-slide-header {
        border-top: 1px solid #e3e3e3;
        margin: 0 0 -3px;
        padding: 20px 0 0;
        position: relative;
        z-index: 10;
      }
    }

    .tab-slide-container {
      .tab-slide-item {
        .tab-slide {
          .red {
            border-bottom: 3px solid #de131a;
            position: relative;
            width: 1170px;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;

            .slide-header {
              padding: 35px 0 5px;
              display: inline-block;

              .text {
                font-weight: 700;
                font-size: 24px;
                line-height: 1.2;
              }
            }
          }

          .infinity {
            background-image: url('@/assets/zhil/bg_dark_grey_infinity.png');
            color: #fff;
            padding: 50px 0;
            background-color: #3b3b3b;
            height: 400px;

            .container {
              width: 1170px;
              padding-right: 15px;
              padding-left: 15px;
              margin-right: auto;
              margin-left: auto;

              .row {
                margin-right: -15px;
                margin-left: -15px;
                display: flex;

                .col-lg-push-6 {
                  left: 50%;
                }

                .col-lg-pull-6 {
                  right: 50%;
                }

                .col-lg-6 {
                  width: 50%;
                  float: left;

                  h3 {
                    color: #fff;
                    font-weight: 500;
                    margin: 0 0 15px;
                    font-size: 24px;

                    img {
                      max-width: 100%;
                      height: auto !important;
                      display: inline-block;
                    }
                  }

                  p {
                    color: #fff;
                    font-size: 14px;
                    line-height: 1.5;
                    font-size: 14px;
                    line-height: 1.5;

                    .btn {
                      text-transform: uppercase;
                      line-height: 14px;
                      font-weight: 700;
                      padding: 15px 20px;
                      white-space: normal;
                      margin: 0 20px 10px 0;
                      font-size: 16px;
                      background: transparent;
                      border: 3px solid #ffffff;
                      border-radius: 5px;
                      color: #ffffff;
                      transition: background-color .2s linear, color .2s linear, border-color .2s;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

.textbox {
  width: 100%;
  background: #55c0e9;
  margin-top: 50px;

  .container {
    width: 1170px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    align-items: center;

    .left {
      color: white;
      text-align: left;
      width: 45%;

      .name {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }

    .right {
      width: 45%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
