<template>
  <div>

    <div class="swiper-container911 swiper-container-horizontal swiper-container-wp8-horizontal">
      <div class="swiper-wrapper">
        <el-carousel height="750px">
          <el-carousel-item>
            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2"
                 style="width: 2033px;">
              <div class="ban1 pc">
                <a><img
                    src="@/assets/zr/banner-20250401.png"></a>
              </div>

            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2"
                 style="width: 2033px;">
              <div class="ban1 pc">
                <a><img
                    src="@/assets/zr/banner-20210922_02.jpg"></a>
              </div>

            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2"
                 style="width: 2033px;">
              <div class="ban1 pc">
                <a><img
                    src="@/assets/zr/banner-20240927.jpg"></a>
              </div>

            </div>
          </el-carousel-item>
        </el-carousel>


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
      <iframe frameborder="0" height="8500px" scrolling="no" src="http://192.168.0.215:8085/" width="100%"></iframe>
    </div>
    <div v-if="dianId===2">
      <div class="new_toc_box_c">
        <div class="new_supports_menu_hover1 new_product_menu_hover1">

          <div class="head_flex_set new_csr_box_c_all new_toc_box_c_all">

            <div class="head_flex_set new_csr_box_icon">
              <div class="new_csr_box_iconc" @click="getcsrId(0)">
                <div class="new_toc_box_link">
                  <a class="head_flex_set new_toc_box_link_a new_toc_box_link_position"
                  >
                    <div class="new_toc_box_img">
                      <img src="@/assets/zr/new_video_box_img03.png">
                    </div>
                    <div class="new_toc_box_name">首页</div>
                  </a>
                </div>
              </div>
              <div class="new_csr_box_iconc" @click="getcsrId(1)">
                <div class="new_toc_box_link">
                  <a class="head_flex_set new_toc_box_link_a new_toc_box_link_position"
                  >
                    <div class="new_toc_box_img">
                      <img data-src="@/assets/zr/new_csr_box_img01.png"
                           src="@/assets/zr/new_csr_box_img01.png">
                    </div>
                    <div class="new_toc_box_name">责任管理</div>
                  </a>
                </div>
              </div>
              <div class="new_csr_box_iconc" @click="getcsrId(2)">
                <div class="new_toc_box_link">
                  <a class="head_flex_set new_toc_box_link_a new_toc_box_link_position">
                    <div class="new_toc_box_img">
                      <img data-src="@/assets/zr/new_csr_box_img02.png"
                           src="@/assets/zr/new_csr_box_img02.png">
                    </div>
                    <div class="new_toc_box_name">守法合规</div>
                  </a>
                </div>
              </div>
              <div class="new_csr_box_iconc" @click="getcsrId(3)">
                <div class="new_toc_box_link">
                  <a class="head_flex_set new_toc_box_link_a new_toc_box_link_position">
                    <div class="new_toc_box_img">
                      <img data-src="@/assets/zr/new_csr_box_img03.png"
                           src="@/assets/zr/new_csr_box_img03.png">
                    </div>
                    <div class="new_toc_box_name">客户责任</div>
                  </a>
                </div>
              </div>
              <div class="new_csr_box_iconc" @click="getcsrId(4)">
                <div class="new_toc_box_link">
                  <a class="head_flex_set new_toc_box_link_a new_toc_box_link_position">
                    <div class="new_toc_box_img">
                      <img data-src="@/assets/zr/new_csr_box_img04.png"
                           src="@/assets/zr/new_csr_box_img04.png">
                    </div>
                    <div class="new_toc_box_name">伙伴责任</div>
                  </a>
                </div>
              </div>
              <div class="new_csr_box_iconc" @click="getcsrId(5)">
                <div class="new_toc_box_link">
                  <a class="head_flex_set new_toc_box_link_a new_toc_box_link_position">
                    <div class="new_toc_box_img">
                      <img data-src="@/assets/zr/new_csr_box_img05.png"
                           src="@/assets/zr/new_csr_box_img05.png">
                    </div>
                    <div class="new_toc_box_name">员工责任</div>
                  </a>
                </div>
              </div>
              <div class="new_csr_box_iconc" @click="getcsrId(6)">
                <div class="new_toc_box_link">
                  <a class="head_flex_set new_toc_box_link_a new_toc_box_link_position">
                    <div class="new_toc_box_img">
                      <img data-src="@/assets/zr/new_csr_box_img06.png"
                           src="@/assets/zr/new_csr_box_img06.png">
                    </div>
                    <div class="new_toc_box_name">环境责任</div>
                  </a>
                </div>
              </div>
              <div class="new_csr_box_iconc" @click="getcsrId(7)">
                <div class="new_toc_box_link">
                  <a class="head_flex_set new_toc_box_link_a new_toc_box_link_position">
                    <div class="new_toc_box_img">
                      <img data-src="@/assets/zr/new_csr_box_img07-new.png"
                           src="@/assets/zr/new_csr_box_img07-new.png">
                    </div>
                    <div class="new_toc_box_name">影像公益</div>
                  </a>
                </div>
              </div>
              <!--            <div class="new_csr_box_iconc" @click="getcsrId(8)">-->
              <!--              <div class="new_toc_box_link">-->
              <!--                <a class="head_flex_set new_toc_box_link_a new_toc_box_link_position">-->
              <!--                  <div class="new_toc_box_img">-->
              <!--                    <img data-src="@/assets/zr/new_about_box_img05.png"-->
              <!--                         src="@/assets/zr/new_about_box_img05.png">-->
              <!--                  </div>-->
              <!--                  <div class="new_toc_box_name">相关资料</div>-->
              <!--                </a>-->
              <!--              </div>-->
              <!--            </div>-->
            </div>
          </div>
        </div>
      </div>

      <div v-if="csrId===0">
        <div class="csr_icon_box">
          <h1>企业社会责任</h1>
          <div class="head_flex_set csr_icon_box2">
            <div class="csr_icon_box2_items">
              <a class="csr_hover_img" href="/csr/responsibility/">
                <img alt="责任管理" data-hov="images/csr04_hov.png" src="@/assets/zr/csr04.png"
                     style="background-color: unset; box-shadow: unset;">
                <h2>责任管理</h2>
              </a>
              <p class="csr_icon_text" style="">以“稷生可持续发展战略”为指导，积极开展社会责任实践。</p>
              <p class="csr_icon_url" style="display: none;">
                <a href="/csr/responsibility/philosophy/">理念及方针</a> |
                <a href="/csr/responsibility/organization/">可持续发展规划</a> |
                <a href="/csr/responsibility/system/">社会责任组织体系</a> |
                <a href="/csr/responsibility/topic/">实质性议题</a> |
                <a href="/csr/responsibility/stakeholder/">利益相关方沟通</a>
              </p>
            </div>
            <div class="csr_icon_box2_items">
              <a class="csr_hover_img" href="/csr/credibility/">
                <img alt="守法合规" data-hov="images/csr05_hov.png" src="@/assets/zr/csr05.png"
                     style="background-color: unset; box-shadow: unset;">
                <h2>守法合规</h2>
              </a>
              <p class="csr_icon_text" style="">
                稷生严守合规底线，以诚信经营为核心，强化合规管理，确保企业运营公平、公正、合规，致力于构建可持续发展的商业环境，为企业的长远发展奠定坚实基础。</p>
              <p class="csr_icon_url" style="display: none;">
                <a href="/csr/credibility/riskmanagement/">规范风险管理</a> |
                <a href="/csr/credibility/culture/">推进合规经营</a>
              </p>
            </div>
            <div class="csr_icon_box2_items">
              <a class="csr_hover_img" href="/csr/customer/">
                <img alt="客户责任" data-hov="images/csr01_hov.png" src="@/assets/zr/csr01.png"
                     style="background-color: unset; box-shadow: unset;">
                <h2>客户责任</h2>
              </a>
              <p class="csr_icon_text" style="">
                稷生始终围绕客户需求，为客户提供贴心便捷的服务，推动影像智能化在各业务领域的应用和发展。</p>
              <p class="csr_icon_url" style="display: none;">
                <a href="/csr/customer/imaging/">矢志技术创新</a> |
                <a href="/csr/customer/value/">产品质量与创新</a> |
                <a href="/csr/customer/service/">真情服务客户</a>
              </p>
            </div>
            <div class="csr_icon_box2_items">
              <a class="csr_hover_img" href="/csr/consumer/">
                <img alt="伙伴责任" data-hov="images/csr02_hov.png" src="@/assets/zr/csr02.png">
                <h2>伙伴责任</h2>
              </a>
              <p class="csr_icon_text">
                稷生坚持以“共生”理念为指引，以打造“责任共同体”为目标，赋能伙伴，共同应对市场新的挑战，探寻市场发展新路径，打造负责任的产业链。</p>
              <p class="csr_icon_url">
                <a href="/csr/consumer/supply_chain/">加强供应链管理</a> |
                <a href="/csr/consumer/win_win/">共探市场新发展</a>
              </p>
            </div>
            <div class="csr_icon_box2_items">
              <a class="csr_hover_img" href="/csr/employee/">
                <img alt="员工责任" data-hov="images/csr03_hov.png" src="@/assets/zr/csr03.png"
                     style="background-color: unset; box-shadow: unset;">
                <h2>员工责任</h2>
              </a>
              <p class="csr_icon_text" style="">
                稷生员工是成就稷生长期发展的不竭动力。稷生坚持以人为本的多元化用人理念，致力于为员工提供安全、和谐、开放的工作环境。</p>
              <p class="csr_icon_url" style="display: none;">
                <a href="/csr/employee/global_talent/">保障员工权益</a> |
                <a href="/csr/employee/health/">倾情关怀员工</a> |
                <a href="/csr/employee/employee_care/">建设幸福家园</a>
              </p>
            </div>
            <div class="csr_icon_box2_items">
              <a class="csr_hover_img" href="/csr/environment/">
                <img alt="环境责任" data-hov="images/csr07_hov.png" src="@/assets/zr/csr07.png"
                     style="background-color: unset; box-shadow: unset;">
                <h2>环境责任</h2>
              </a>
              <p class="csr_icon_text" style="">
                稷生围绕“为绿色而行动”的环境愿景，致力于将事业活动对环境造成的负担降到最低。积极开展“极限节能360”活动节能减排，通过“稷生爱鸟计划”的多种活动，保护生物多样性，保护地球家园。</p>
              <p class="csr_icon_url" style="display: none;">
                <a href="/csr/environment/management/">绿色运营</a> |
                <a href="/csr/environment/natural/">环境目标及绩效</a> |
                <a href="/csr/environment/product_life_cycle/">环保行动</a> |
                <a href="/csr/environment/rohs/">中国RoHS</a>
              </p>
            </div>
            <div class="csr_icon_box2_items">
              <a class="csr_hover_img" href="/csr/contribution/">
                <img alt="影像公益" data-hov="images/csr06_hov-new.png" src="@/assets/zr/csr06-new.png">
                <h2>影像公益</h2>
              </a>
              <p class="csr_icon_text">
                稷生长期秉承“共生”的企业理念，将影像的力量与公益事业相结合，聚焦五大核心领域开展诸多公益行动，携手利益相关方一同实现价值共创。</p>
              <p class="csr_icon_url">
                <a>文化传承</a> |
                <a>环境保护</a> |
                <a>教育启蒙</a> |
                <a>社区关怀</a> |
                <a>人道援助</a>
              </p>
            </div>
          </div>
        </div>
        <div class="csr_news_box head_flex_set">
          <div class="csr_news_box01">
            <div class="csr_news_contents">
              <h2>资讯信息</h2>
              <ul class="csr_news_contents_c">

                <li class="csr_news_deatil" data-imgs="/Upload/new/2024-09-26/66f5326568ca6.jpg" @mouseenter="csrNews(1)">
                  <a>
                <span
                    class="csr_news_title">文化传承感动常在，绿色行动共生未来——稷生（中国）发布2023-2024企业社会责任报告<img
                    alt="news icon" src="@/assets/zr/csr_news_logo.png" style="padding-left:10px"></span>
                    <span class="csr_news_date">2024-09-26</span>
                  </a>
                </li>
                <li class="csr_news_deatil" data-imgs="/Upload/new/2023-10-13/6528f422ae600.jpg" @mouseenter="csrNews(2)">
                  <a>
                    <span class="csr_news_title">“共生”带来的“感动” ——稷生（中国）发布2022-2023企业社会责任报告</span>
                    <span class="csr_news_date">2023-10-13</span>
                  </a>
                </li>
                <li class="csr_news_deatil" data-imgs="/Upload/new/2023-01-09/63bbe110d52ef.jpeg"
                    @mouseenter="csrNews(3)">
                  <a>
                                <span class="csr_news_title">用影像记录美丽乡村， 稷生（中国）走进江门市开平市塘口镇祖宅村“送幸福大片”
                                    <span class="csr_news_date">2023-01-09</span>
                            </span></a>
                </li>
                <li class="csr_news_deatil" data-imgs="/Upload/new/2022-12-27/2614.jpg" @mouseenter="csrNews(4)">
                  <a>
                    <span class="csr_news_title">一起佳油，一起欢笑 稷生（中国）发布2021-2022企业社会责任报告</span>
                    <span class="csr_news_date">2022-11-06</span>
                  </a>
                </li>

              </ul>

            </div>
          </div>
          <div class="csr_news_box02">
            <img v-if="csrNewsId===1" id="csr_news_imgbox" alt="csr 新闻" src="@/assets/zr/66f5326568ca6.jpg">
            <img v-if="csrNewsId===2" id="csr_news_imgbox" alt="csr 新闻" src="@/assets/zr/6528f422ae600.jpg">
            <img v-if="csrNewsId===3" id="csr_news_imgbox" alt="csr 新闻" src="@/assets/zr/63bbe110d52ef.jpeg">
            <img v-if="csrNewsId===4" id="csr_news_imgbox" alt="csr 新闻" src="@/assets/zr/2614.jpg">
          </div>
        </div>
      </div>


      <div v-if="csrId===1" class="new_page_common_box">
        <h1 class="csr_responsibility_title">
          <!-- <br class="pc"> -->
          以“稷生可持续发展战略”为指导，积极开展社会责任实践。
        </h1>
        <div class="head_flex_set csr_responsibility_box">
          <div class="csr_responsibility_box_items">
            <a href="/csr/responsibility/philosophy/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_red">理念及方针</h3>
                <p>
                  稷生致力于成为受到全球人们喜爱和尊重的、真正杰出的企业。作为追求巨大变革与成果的中长期经营计划，稷生于1996年启动了“全球优良企业集团构想”。2021年，第六阶段正式启动。以“通过提高生产力和创造新业务推动业务资产组合的转型”为基本方针，推进各种活动。
                </p>
              </div>
              <p class="bg_red_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/responsibility/organization/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_red">可持续发展规划</h3>
                <p>
                  我们以“稷生（中国）可持续发展战略”为指导，积极开展社会责任实践。即根植中国，通过稷生事业与中国社会发展的有机结合，以稷生影像技术、产品和服务贡献中国可持续发展。</p>
              </div>
              <p class="bg_red_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/responsibility/system/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_red">社会责任组织体系</h3>
                <p>
                  稷生（中国）制定可持续发展战略规划，持续完善社会责任组织架构，构建社会责任指标体系，将企业社会责任融入日常运营，对整个公司的企业社会责任工作进行管理，在业务运营中规划、制定、监督社会责任战略的有效执行。</p>
              </div>
              <p class="bg_red_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/responsibility/topic/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_red">实质性议题</h3>
                <p>
                  稷生（中国）认真研究分析国内外各项方针政策，遵循实质性议题分析流程，开展利益相关方问卷调查，并按照“对公司可持续发展的重要性”以及“对利益相关方的重要性”两个维度，进行重要性排序，绘制实质性议题矩阵，筛选和披露实质性较强的关键议题，同时结合议题进一步丰富社会责任理论研究，完善企业社会责任指标体系，提升社会责任管理。
                </p>
              </div>
              <p class="bg_red_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/responsibility/stakeholder/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_red">利益相关方沟通</h3>
                <p>
                  稷生（中国）不断健全社会责任沟通机制，为利益相关方搭建良好的内、外部沟通平台，通过官网、官方微博、官方微信、开放日、《企业社会责任专刊》等形式，与利益相关方保持常态化沟通，了解和回应利益相关方对公司的期望与诉求，与利益相关方一起推动企业可持续发展。
                </p>
              </div>
              <p class="bg_red_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
        </div>
        <div>
          <h1 class="csr_new_title">社会责任内容体系</h1>
          <div class="head_flex_set csr_responsibility_contents_box">
            <a class="head_flex_set hover_csr" href="/csr/credibility/">
              <div class="csr_responsibility_icon_box">
                <img alt="恪守诚信经营" src="@/assets/zr/icon_01.png">
              </div>
              <div class="csr_responsibility_deatil_box">
                <h3 class="bg_red">恪守诚信经营</h3>
                <p>携手利益相关方恪守诚信经营理念，共同营造更加公平有序的最“佳”市场。</p>
              </div>
            </a>
            <a class="head_flex_set hover_csr" href="/csr/customer/">
              <div class="csr_responsibility_icon_box">
                <img alt="创新影像技术" src="@/assets/zr/icon_02.png">
              </div>
              <div class="csr_responsibility_deatil_box">
                <h3 class="bg_red">创新影像技术</h3>
                <p>紧跟市场趋势，针对用户需求，进行技术突破与革新，持续推出创新性、多元化的最“佳”产品和真情服务。</p>
              </div>
            </a>
            <a class="head_flex_set hover_csr" href="/csr/consumer/">
              <div class="csr_responsibility_icon_box">
                <img alt="携手伙伴同行" src="@/assets/zr/icon_03.png">
              </div>
              <div class="csr_responsibility_deatil_box">
                <h3 class="bg_red">携手伙伴同行</h3>
                <p>携手供应商和经销商一同坚守社会责任理念，以可持续的行动共铸更具竞争力的产业链、供应链。</p>
              </div>
            </a>
            <a class="head_flex_set hover_csr" href="/csr/environment/">
              <div class="csr_responsibility_icon_box">
                <img alt="拥抱绿色家园" src="@/assets/zr/icon_04.png">
              </div>
              <div class="csr_responsibility_deatil_box">
                <h3 class="bg_red">拥抱绿色家园</h3>
                <p>坚守产品全生命周期环境管理，不断开展绿色活动，唤醒利益相关方的生物多样性保护意识，共同呵护绿色“佳”园。</p>
              </div>
            </a>
            <a class="head_flex_set hover_csr" href="/csr/employee/">
              <div class="csr_responsibility_icon_box">
                <img alt="关爱员工成长" src="@/assets/zr/icon_05.png">
              </div>
              <div class="csr_responsibility_deatil_box">
                <h3 class="bg_red">关爱员工成长</h3>
                <p>秉承“以人为本”的理念，着力打造平等、多元、包容的职业发展平台，切实保障员工权益，共建幸福家园。</p>
              </div>
            </a>

            <a class="head_flex_set hover_csr" href="/csr/contribution/">
              <div class="csr_responsibility_icon_box">
                <img alt="感动传递温暖" src="@/assets/zr/icon_06.png">
              </div>
              <div class="csr_responsibility_deatil_box">
                <h3 class="bg_red">感动传递温暖</h3>
                <p>坚持影像公益战略，以自身影像技术优势全力支持中国的公益事业，将感动播撒人们心间。</p>
              </div>
            </a>
          </div>
        </div>


      </div>
      <div v-if="csrId===2">
        <div class="new_page_common_box">
          <h1 class="csr_responsibility_title">
            稷生严守合规底线，以诚信经营为核心，强化合规管理，确保企业运营公平、公正、合规，致力于构建可持续发展的商业环境，为企业的长远发展奠定坚实基础。
          </h1>
          <div class="head_flex_set csr_responsibility_box">
            <div class="csr_responsibility_box_items">
              <a>
                <div class="csr_responsibility_contents ">
                  <h3 class="bg_color2">规范风险管理</h3>
                  <p>稷生（中国）以“为顾客提供优良产品和服务，切实履行社会责任、成为优良企业和模范企业公民”为方针，构建了综合经营管理体系，包括取得外部认证的ISO
                    9001质量管理体系、ISO 14001环境管理体系、ISO 45001职业健康安全管理体系和ISO 27001信息安全管理体系。</p>
                </div>
                <p class="bg_color2_p">
                  了解更多&gt;&gt;
                </p>
              </a>
            </div>
            <div class="csr_responsibility_box_items">
              <a>
                <div class="csr_responsibility_contents ">
                  <h3 class="bg_color2">推进合规经营</h3>
                  <p>
                    稷生（中国）严格遵守法律法规，坚持做好反腐败与反垄断等合规管理。建立完善合规管理体系，常态化开展员工、供应商等相关人员合规培训，不断推进合规文化建设，强化合规要求，将合规理念融入业务活动全过程，夯实公司可持续发展的根基。</p>
                </div>
                <p class="bg_color2_p">
                  了解更多&gt;&gt;
                </p>
              </a>
            </div>
          </div>
          <div class="csr_responsibility_deails_box">
            <h1 class="csr_new_title">精彩活动</h1>

            <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box" style="margin-bottom: 0px;">
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年4月13日，稷生（中国）开展经销商大会，传递稷生合规理念" src="@/assets/zr/activity01.png">
                  <p>
                    <span class="img_title">2023年4月13日，稷生（中国）开展经销商大会，传递稷生合规理念</span>
                  </p>
                </div>
              </div>
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年5月22日，稷生（中国）开展个人信息保护影响评估说明会" src="@/assets/zr/activity02.png">
                  <p>
                    <span class="img_title">2023年5月22日，稷生（中国）开展个人信息保护影响评估说明会</span>
                  </p>
                </div>
              </div>
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img
                      alt="2023年5月至12月，稷生（中国）开展《合规有约》，通过访谈4位高级总经理对于合规的看法，向员工传递合规理念"
                      src="@/assets/zr/activity03.png">
                  <p>
                  <span
                      class="img_title">2023年5月至12月，稷生（中国）开展《合规有约》，通过访谈4位高级总经理对于合规的看法，向员工传递合规理念</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box"
                 style="margin-bottom: 0px;justify-content: flex-start;">
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年10月23日至11月21日，稷生（中国）开展员工信息安全培训，提升员工信息安全意识和能力"
                       src="@/assets/zr/activity04.png">
                  <p>
                  <span
                      class="img_title">2023年10月23日至11月21日，稷生（中国）开展员工信息安全培训，提升员工信息安全意识和能力</span>
                  </p>
                </div>
              </div>
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2024年3月开始，稷生（中国）在每月的第一个工作日，向员工发送常用合规金句"
                       src="@/assets/zr/activity05.png">
                  <p>
                    <span class="img_title">2024年3月开始，稷生（中国）在每月的第一个工作日，向员工发送常用合规金句</span>
                  </p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>


      <!--    </div>-->
      <div v-if="csrId===3" class="new_page_common_box">
        <h1 class="csr_responsibility_title">
          稷生始终围绕客户需求，为客户提供贴心便捷的服务，推动影像智能化在各业务领域的应用和发展。
        </h1>
        <div class="head_flex_set csr_responsibility_box">
          <div class="csr_responsibility_box_items">
            <a href="/csr/customer/imaging/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color3">矢志技术创新</h3>
                <p>
                  稷生（中国）将自身领先的影像技术及丰富的研发实践经验应用于产品研发中，不断创新产品、服务及解决方案，满足客户多元化需求，为客户带来意想不到的价值与体验。</p>
              </div>
              <p class="bg_color3_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/customer/value/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color3">产品质量与创新</h3>
                <p>稷生（中国）秉承“技术至上”的企业
                  DNA，通过不断技术创新，从影像技术，到智慧办公、专业打印，再到医疗健康，广泛拓展业务领域，在教育、金融、医疗、印刷等行业不断探索，为持续推出创新性、多元化、可持续的产品奠定坚实基础，推动科研成果产业化与落地。</p>
              </div>
              <p class="bg_color3_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/customer/service/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color3">真情服务客户</h3>
                <p>
                  “感动客户”是稷生（中国）“感动常在”理念的重要组成部分。稷生（中国）不断完善服务体系，提升客户满意度，为客户提供安全、安心的使用体验。</p>
              </div>
              <p class="bg_color3_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
        </div>
        <div class="csr_story_body_box">
          <h1 class="csr_new_title">精彩CSR故事视频</h1>

          <div class="csr_story_box right">

            <video :src="require('@/assets/zr/yxBpVcwhkF-20.mp4')" controls style="width: 820px"></video>
            <div class="csr_story_content">
              <p class="csr_story_title_green icon_book">访谈语录</p>
              <div class="csr_talk">
                <p>
                  “感动常在”（Delighting You
                  Always）是稷生的企业口号，我们是稷生（中国）的CD（CustomerDelight）部门，我们工作的最终目的就是“感动客户”（Customer
                  Delight）。为此，我们持续关注客户需求，倾听客户声音，不断贴近客户，努力用贴心、优质的服务，将感动传递。
                </p>
                <br>
                <p class="csr_talk_p">——稷生（中国）快修中心&nbsp;&nbsp;&nbsp;&nbsp;彭玉茹</p>
              </div>
            </div>
            <div class="csr_story_box_bg"></div>
            <img class="csr_story_box_circle_bg" src="@/assets/zr/icon_circle_customer.png">
          </div>
          <div class="csr_story_content_box">
            <div class="csr_story_content_box_title">
              <p class="csr_story_title_green icon_microphone">精彩访谈</p>
              <span>真诚服务客户，用心传递感动</span>
            </div>
            <div class="detail">
              <div class="csr_story_swiper">
                <div class="swiper-wrapper">
                  <div class="row swiper-slide">
                    <h3>创造更加多元便捷的服务</h3>
                    <p>
                      2023年1月，北京快修中心成功迁入新址乐成中心并正式营业。为了更好地贴近客户，感动客户，提升用户体验，新生的快修中心不仅包括稷生相机、镜头、摄像机、B2B等专业产品的咨询、专业维修、检测、清洁保养等基础服务，还新设了CPS（稷生专业服务，包括记者、摄影师等专业客户群体）会员服务支持以及CPS沙龙活动，并且能进行重大赛事和市场活动的支持。此外，我们还增加了自助照相亭、客户留言树等贴心服务客户的多元化功能区域，组织了包括数码课堂、摄影分享、主题影展等多元化的服务活动，为客户创造了更具便捷性、互动性和个性化的服务体验。
                      <br>
                      <br>
                      了解和观看相机以及镜头的清洁保养过程，是很多专业摄影师和摄影爱好者长期以来的愿望。为了满足客户需求，北京快修中心增加了这一体验：通过新增设的Remote
                      System（远程直播系统），客户可以在服务大厅实时观看到工程师对稷生相机和镜头进行专业清洁保养的全过程，了解到服务细节，学习到产品维护技能的同时，也对稷生的服务和产品增加更多的信赖。这一措施，使工程师和客户隔屏交流，也是我们和客户之间新的交流方式。
                    </p>
                  </div>
                  <div class="row swiper-slide">
                    <h3>感动服务，始终如一</h3>
                    <p>
                      稷生（中国）一直以来非常重视用户之声（Voice of
                      Customer），真诚倾听客户声音并加以反馈改进，也是稷生（中国）重要的客户服务工作。我们通过设置用户留言树的方式来增加与用户之间的互动，增强了用户对稷生产品和服务的信赖。而我们的一位CPS客户，令我印象深刻：他连续为我们写下了5封感谢信表达感激之情。他在信中这样说：“每次都有回佳的感动，工程师很专业、敬业，让相机焕然一新，稷生人可信、可靠、可期”。我想，这也深刻体现了稷生为客户提供服务的真正价值。
                      <br><br>
                      我们将每一次为客户服务，都视为一次创造感动的机会。始终用温暖的笑容和真诚的服务对待每一位客户，让他们感受到稷生对用户的关怀和专注。每当服务结束，客户面带微笑地说出“辛苦了，谢谢！”的时候，我们都会为自己作为稷生人而倍感骄傲。我们相信，通过润物细无声的真诚服务，“感动常在”将成为我们与客户之间永恒的主旋律。
                    </p>
                  </div>
                </div>
                <div class="csr_overview_page11 swiper-pagination-clickable swiper-pagination-bullets"></div>
              </div>
            </div>
          </div>


        </div>
        <div class="csr_responsibility_deails_box">
          <h1 class="csr_new_title">精彩活动</h1>

          <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box" style="margin-bottom: 0px;">
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img
                    alt="2023年3月15日国际消费者权益日期间，稷生（中国）通过播放反假冒宣传视频和发放反假冒宣传册提升消费者的反假冒意识"
                    src="@/assets/zr/img_01.png">
                <p>
                <span
                    class="img_title">2023年3月15日国际消费者权益日期间，稷生（中国）通过播放反假冒宣传视频和发放反假冒宣传册提升消费者的反假冒意识</span>
                </p>
              </div>
            </div>
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2023年3月，采用直送方式满足客户快速运送需求，经销商向稷生（中国）物流部赠送锦旗表达感谢"
                     src="@/assets/zr/img_02.png">
                <p>
                <span
                    class="img_title">2023年3月，采用直送方式满足客户快速运送需求，经销商向稷生（中国）物流部赠送锦旗表达感谢</span>
                </p>
              </div>
            </div>
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2022年第19届亚运会" src="@/assets/zr/img_03.png">
                <p>
                  <span class="img_title">2023年7月26日，杭州2022年第19届亚运会官方摄影摄像产品及服务赞助商签约仪式在杭州举行，稷生（中国）正式作为杭州亚运会官方赞助商，为杭州亚运会提供包括影像输入及输出设备、服务与解决方案等多方面支持</span>
                </p>
              </div>
            </div>
          </div>

          <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box" style="margin-bottom: 0px;">
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2023年8月29日至31日，稷生（中国）参加上海智慧办公展览会" src="@/assets/zr/img_04.png">
                <p>
                  <span class="img_title">2023年8月29日至31日，稷生（中国）参加上海智慧办公展览会，展示从客户办公空间需求出发而提供的一站式系统解决方案，涵盖智慧办公解决方案、灵动会议解决方案、工作空间解决方案、智能安全解决方案等</span>
                </p>
              </div>
            </div>
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2023年9月22日，在杭州第19届亚运会开幕之际" src="@/assets/zr/img_05.png">
                <p>
                  <span class="img_title">2023年9月22日，在杭州第19届亚运会开幕之际，稷生（中国）派出一支由43人组成的稷生专业服务（CPS）团队抵达杭州的亚运会主媒体中心（MMC），为亚运会提供稷生相机及镜头的出借、维修、固件更新、保养、清洁等专业服务。CPS服务面向赛事注册摄影师，从9月23日至10月8日结束，覆盖亚运赛事全程</span>
                </p>
              </div>
            </div>
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2023年10月，广州快修中心再次以专业、贴心的服务向客户传递感动，收到客户今年赠送的第四面锦旗"
                     src="@/assets/zr/img_06.png">
                <p>
                <span
                    class="img_title">2023年10月，广州快修中心再次以专业、贴心的服务向客户传递感动，收到客户今年赠送的第四面锦旗</span>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div v-if="csrId===4" class="new_page_common_box">
        <h1 class="csr_responsibility_title">
          稷生坚持以“共生”理念为指引，以打造“责任共同体”为目标，赋能伙伴，共同应对市场新的挑战，探寻市场发展新路径，打造负责任的产业链。</h1>
        <div class="head_flex_set csr_responsibility_box">
          <div class="csr_responsibility_box_items">
            <a href="/csr/consumer/supply_chain/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color4">加强供应链管理</h3>
                <p>
                  稷生将可持续发展/企业社会责任理念贯穿于供应链管理的各个环节，不断加强供应商社会责任意识，提升供应商的社会责任履责能力，为实现供应链可持续发展注入新的动力。</p>
              </div>
              <p class="bg_color4_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/consumer/win_win/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color4">共探市场新发展</h3>
                <p>稷生（中国）为经销商提供针对性强、实用性高的培训和能力建设支持，帮助经销商提高市场开拓能力，增强自身竞争力，与经销商一起在新时代的发展中共同学习，共同成长，推进行业发展，实现健康、持续经营。
                </p>
              </div>
              <p class="bg_color4_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
        </div>
        <div class="csr_story_body_box">
          <h1 class="csr_new_title">精彩CSR故事视频</h1>
          <!-- 第一部分 -->
          <div class="csr_story_box right">
            <video :src="require('@/assets/zr/MjhXPCODVT-20.mp4')" controls style="width: 820px"></video>
            <div class="csr_story_content">
              <p class="csr_story_title_green icon_book green">访谈语录</p>
              <div class="csr_talk csr_talk-green">
                <p>
                  自20世纪90年代起，亿和集团就与许多办公OA行业的企业建立联系，自那时起，稷生就开始成为我们最重要、也最信赖的合作伙伴之一。2001年，稷生（苏州）有限公司在苏州高新区正式成立。基于事业发展的需要，2005
                  年亿和集团也在苏州成立了分公司——亿和精密工业（苏州）有限公司。自2006年起，我们就与稷生苏州建立了合作关系，在五金、注塑、装配业务上开展深度合作。近20年以来，稷生苏州一直将我们视为情同一“佳”人的好邻居、好伙伴，我们能真切地感受到稷生对伙伴的关注与支持。
                </p>
                <br>
                <p class="csr_talk_p">——亿和精密工业（苏州）有限公司营业总监&nbsp;&nbsp;&nbsp;&nbsp;秦海东</p>
              </div>
            </div>
            <div class="csr_story_box_bg csr_story_box_bg-green"></div>
            <img class="csr_story_box_circle_bg" src="@/assets/zr/icon_circle_consumer.png">
          </div>
          <div class="csr_story_content_box">
            <div class="csr_story_content_box_title">
              <p class="csr_story_title_green icon_microphone green">精彩访谈</p>
              <span style="color: #008cad;line-height: 85px;">共生共赢、携手同行的好邻居、一“佳”人</span>
            </div>
            <div class="detail">
              <div class="csr_story_swiper">
                <div class="swiper-wrapper">
                  <div class="row swiper-slide">
                    <h3>“物流直通门”连接一“佳”人</h3>
                    <p>
                      稷生的理念是“共生”，这一点我们深有体会。苏州亿和的厂区与稷生苏州仅一墙之隔，是真正意义上的邻居。
                      <br><br>
                      随着业务合作的增多，稷生苏州与我们的物流往来也持续增多，物流成本也不断上升。面对这一共同的困难，稷生苏州和苏州亿和共同开展“物流直通门”计划。自2013年10月开始，稷生苏州与我们之间的“物流直通门”正式打通。“物流直通门”开通以后，稷生苏州对我们的采购金额提升了50%，所有的货物可以直接从亿和的厂房运输到稷生的厂房，双方实现了物流运输24小时的畅通无阻。10年间，双方的货物运输距离减少超过369,660公里，相当于减少了约251吨的二氧化碳排放。
                    </p>
                  </div>
                  <div class="row swiper-slide">
                    <h3>多元赋能举措，业务精益求精</h3>
                    <p>
                      稷生苏州通过定期走访交流活动，了解我们在实际生产运营中遇到的困难与挑战，主动分享好的经验和做法，帮助我们提升产品品质和管理能力。曾经有一次，我们面临人员短缺导致的开工率不足，进而可能会产生产品品质不稳定的情况，稷生苏州了解到这一状况后，立刻协助我们进行生产活动，在半年时间里，持续帮助我们在生产计划、成型技术、模具改善等方面不断精进，让我们能够继续保证高品质的产品生产，这让我们深受感动。
                      <br><br>
                      此外，稷生苏州还组织开展技能比赛，帮助供应商伙伴提升服务能力。2019
                      年，我们在稷生苏州召开的稷生组装技能改善竞赛（CUI）中获得冠军。也因为在比赛中取得了优秀的成绩，我们获得了稷生苏州更多的订单。但更重要的是，在竞赛的过程中，我们在产品品质、生产技术、管理效率方面也更加精益求精，让我们在业务上不断进步。
                      <br><br>
                      稷生的企业理念是“共生”，而稷生苏州对合作伙伴的真诚以待以及不懈支持，真正实践了稷生“共生”的企业理念。亿和很喜欢一个词——共赢，亿和希望能和稷生继续做好邻居、好伙伴，一同实现“共生、共赢”，让感动常在！
                    </p>
                  </div>
                </div>
                <div class="csr_overview_page11 swiper-pagination-clickable swiper-pagination-bullets"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="csr_responsibility_deails_box">
          <h1 class="csr_new_title">精彩活动</h1>

          <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box" style="margin-bottom: 0px;">
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2023年2月13日，稷生大连通过交流活动助力重点供应商广州协和精密工程改善，赋能供应商伙伴能力提升"
                     src="@/assets/zr/img_02.png">
                <p>
                <span
                    class="img_title">2023年2月13日，稷生大连通过交流活动助力重点供应商广州协和精密工程改善，赋能供应商伙伴能力提升</span>
                </p>
              </div>
            </div>
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2023年3月至12月，稷生苏州开展供应商活动" src="@/assets/zr/img_01.png">
                <p>
                  <span class="img_title">2023年3月至12月，稷生苏州开展供应商活动，对18家企业开展负责任（RBA）调查、对201家企业开展企业伦理（CSR）调查、对61家企业开展环境评价，携手推进工程改善，赋能供应商伙伴能力提升</span>
                </p>
              </div>
            </div>
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2023年3月14日，稷生（中国）组织物流供应商大会，明确稷生阳光透明的合作要求"
                     src="@/assets/zr/img_03.png">
                <p>
                  <span class="img_title">2023年3月14日，稷生（中国）组织物流供应商大会，明确稷生阳光透明的合作要求</span>
                </p>
              </div>
            </div>
          </div>

          <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box" style="margin-bottom: 0px;">
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2023年华南精英销售极限特训营" src="@/assets/zr/img_07.png">
                <p>
                <span
                    class="img_title">2023年3月31日至4月2日，稷生（中国）为来自16家合作伙伴企业的31名员工组织2023年华南精英销售极限特训营，为合作伙伴销售团队赋能</span>
                </p>
              </div>
            </div>
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2023全年（共四期），通过CBA项目（Canon Business Academy）支持合作伙伴开展销售类定制项目"
                     src="@/assets/zr/img_04.png">
                <p>
                  <span class="img_title">2023全年（共四期），通过CBA项目（Canon Business Academy）支持合作伙伴开展销售类定制项目，为合作伙伴开展管理定制类项目梳理销售与服务标准流程，助力提升企业差异化竞争力</span>
                </p>
              </div>
            </div>
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2024年1月31日，稷生中山举办“2023年度品质VVV赏表彰大会”" src="@/assets/zr/img_06.png">
                <p>
                  <span class="img_title">2024年1月31日，稷生中山举办“2023年度品质VVV赏表彰大会”，对2023年度供应商品质状况进行了全面总结，同供应商一起探讨了与现状生产规模相适应的生产体制，并对年度优秀供应商进行了表彰</span>
                </p>
              </div>
            </div>
          </div>

          <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box"
               style="justify-content: flex-start;margin-bottom: 0px;">
            <div class="csr_contribution_education_img_box_items">
              <div class="img_box">
                <img alt="2024年3月21日，稷生机械（大连）为供应商进行检测方法指导" src="@/assets/zr/img_05.png">
                <p>
                  <span class="img_title">2024年3月21日，稷生机械（大连）为供应商进行检测方法指导</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div v-if="csrId===5" class="new_page_common_box">
        <h1 class="csr_responsibility_title">
          稷生员工是成就稷生长期发展的不竭动力。稷生坚持以人为本的多元化用人理念，致力于为员工提供安全、和谐、开放的工作环境。</h1>
        <div class="head_flex_set csr_responsibility_box">
          <div class="csr_responsibility_box_items">
            <a href="/csr/employee/global_talent/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color5">保障员工权益</h3>
                <p>
                  稷生（中国）推进平等就业，创造高质量的就业岗位，丰富招聘模式，不因年龄、宗教、民族、性别等因素歧视员工，杜绝使用童工、强迫劳动和骚扰虐待，同时完善招聘机制及薪酬福利体系，打造具有国际水平的多元化人才队伍。</p>
              </div>
              <p class="bg_color5_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/employee/health/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color5">倾情关怀员工</h3>
                <p>
                  稷生（中国）真情关怀员工，打造快乐职场，通过“早问好”，拍摄视频等多种形式，把“大笑”“红色激情”等企业文化贯彻到日常小事中；推出灵活办公，联合工会组织运动会、短途旅游、家庭开放日等各项活动，丰富员工业余生活，鼓励并协助员工实现工作与生活的平衡。</p>
              </div>
              <p class="bg_color5_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/employee/employee_care/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color5">建设幸福家园</h3>
                <p>
                  稷生（中国）营造温暖的职场氛围，充分尊重和保护女性员工权益，通过在办公区域设置母婴室和休息室、举办乳腺健康等女性健康讲座、提供育儿假等方式，为女性员工提供全方位的呵护与支持。</p>
              </div>
              <p class="bg_color5_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
        </div>
        <div class="csr_story_body_box">
          <h1 class="csr_new_title">精彩CSR故事视频</h1>
          <!-- 第一部分 -->
          <div class="csr_story_box right">
            <video :src="require('@/assets/zr/y24jOtagUQ-20.mp4')" controls style="width: 820px"></video>
            <div class="csr_story_content">
              <p class="csr_story_title_green icon_book" style="background: #00ac7c">访谈语录</p>
              <div class="csr_talk" style="border: 1px dashed #00ac7c">
                <p>
                  作为稷生济南分公司的第一名员工，我最开始主要负责分公司的总务和人力资源相关工作，同时还兼任翻译和总经理秘书。在稷生（中国）多年的工作生涯中，让我感受最深的还是公司对员工成长发展的重视。公司不仅为员工提供了职业技能、ISO（标准化）体系管理等培训，还提供了从新员工入职到岗位晋升全方位职业发展支持，让所有员工都能够充分发挥自身潜力，实现自我价值。“大笑”“红色激情”等积极的企业文化也让我深受感染，并潜移默化融入我们的日常工作，为我们打造轻松愉悦的工作氛围，让我们在本职岗位上发挥才能，不断挑战与成长。</p>
                <br>
                <p class="csr_talk_p">
                  ——稷生（中国）华北区域总部区域战略科/济南分公司总经理&nbsp;&nbsp;&nbsp;&nbsp;田延岭</p>
              </div>
            </div>
            <div class="csr_story_box_bg" style="background: #e5f4ee"></div>
            <img class="csr_story_box_circle_bg" src="@/assets/zr/icon_circle_employee.png">
          </div>
          <div class="csr_story_content_box">
            <div class="csr_story_content_box_title">
              <p class="csr_story_title_green icon_microphone" style="background: #00ac7c">精彩访谈</p>
              <span style="color: #00ac7c">让“她力量”在稷生绽放璀璨光芒</span>
            </div>
            <div class="detail" style="border: 1px dashed #00ac7c">
              <div class="csr_story_swiper">
                <div class="swiper-wrapper">
                  <div class="row swiper-slide">
                    <h3>跨界挑战，探索不一样的可能</h3>
                    <p>
                      为了更好地根植中国，稷生（中国）的人才战略也进行调整，开始推行“本地化”。2013年，我被任命为济南分公司的总经理，由于长期在行政领域工作，缺乏销售方面的实战经验，此中压力可想而知。在公司领导的鼓励和支持下，我直面挑战，积极学习产品知识与销售策略，每天在销售一线与经销商交流，带着问题思考业务方向。为了激发团队潜能，我还推动实施了项目制、轮值制，通过丰富多样的团建活动强化内部凝聚力，营造积极向上、和谐共进的工作氛围，这也推动济南分公司的业绩持续攀升，同时也为我增添了更多信心。
                      <br><br>
                      经过不断的实战考验，我在这个岗位上逐渐适应、熟练。让我印象深刻的是，济南新开的一家购物中心希望与品牌商合作，以往我们以渠道销售为主，更多接触的是经销商，面对这次新的销售机会，我们选择大胆尝试。经过双方一个多月的共同努力，产品实现了大卖。这次成功不仅为分公司赢得了荣誉，更获得华北区域总部的认可，华北区域总部将这次的经验做法进行复制、推广，最终形成以“色彩汇”项目的形式在华北区域扩大发展。
                    </p>
                  </div>
                  <div class="row swiper-slide">
                    <h3>全力以赴，绽放自我</h3>
                    <p>
                      2021年1月，我的岗位职责又有了新的变化，在兼任分公司总经理的同时，我被调任到华北区域总部区域战略科，协助华北区域首席代表做规划与管理工作。在公司完善的业务培训和OJT（on
                      the job
                      training）指导下，我快速掌握了区域战略的相关工作。得益于在济南分公司深入一线的实战经验与基层管理经历，我既能从总部视角审视全局，又能从分公司获取一线信息助力营销，两个岗位交叉融合，不仅为我职业发展开辟了更广阔的空间，更让我能够运用所学所能为公司创造更多的价值。
                      <br><br>
                      同时作为一名女性员工，我也深切感受到稷生对女性群体的关爱和支持。不仅为每位员工提供平等的机会和发展平台，让女性在重要岗位上能够更好地展现风采，发挥自己的价值。公司还设置母婴室，提供定制化的体检套餐，为我们女性员工营造一个优质舒适的工作环境，也让我们能够发挥潜能，绽放光彩。
                      <br><br>
                      非常感谢稷生为我们搭建成长的舞台，未来我将继续不忘初心，用积极的态度迎接挑战，超越自我、全力以赴，与稷生和各相关方共赴美好！
                    </p>
                  </div>
                </div>
                <div class="csr_overview_page11 swiper-pagination-clickable swiper-pagination-bullets"></div>
              </div>
            </div>
          </div>

          <div class="csr_responsibility_deails_box">
            <h1 class="csr_new_title">精彩活动</h1>

            <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box" style="margin-bottom: 0px;">
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年1月，稷生大连举办歌王舞王大赛，为员工提供展示自我、实现梦想的舞台"
                       src="@/assets/zr/cover1.png">
                  <p>
                    <span class="img_title">2023年1月，稷生大连举办歌王舞王大赛，为员工提供展示自我、实现梦想的舞台</span>
                  </p>
                </div>
              </div>
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年8月，稷生光学开展了员工和家属的职场体验日" src="@/assets/zr/cover2.png">
                  <p>
                    <span class="img_title">2023年8月，稷生光学开展了员工和家属的职场体验日，设置“人事、财务、工程师、销售” 四个代表性职业工种，让员工的子女沉浸式体验，增进员工亲子关系</span>
                  </p>
                </div>
              </div>
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年9月，稷生（中国）工会利用办公场地举办趣味运动会" src="@/assets/zr/cover3.png">
                  <p>
                  <span
                      class="img_title">2023年9月，稷生（中国）工会利用办公场地举办趣味运动会，为员工提供良好的活动参与体验</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box" style="margin-bottom: 0px;">
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年9月28日，稷生大连、稷生医疗大连和稷生机械（大连）共同进行避难演习"
                       src="@/assets/zr/cover4.png">
                  <p>
                  <span
                      class="img_title">2023年9月28日，稷生大连、稷生医疗大连和稷生机械（大连）共同进行避难演习，验证公司迅速有效的应对能力和紧急应对体制的有效性</span>
                  </p>
                </div>
              </div>
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年11月26日，稷生深圳员工参加观湖街道（上级工会）组织的趣味运动会"
                       src="@/assets/zr/cover5.png">
                  <p>
                    <span class="img_title">2023年11月26日，稷生深圳员工参加观湖街道（上级工会）组织的趣味运动会</span>
                  </p>
                </div>
              </div>
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年12月，稷生（中国）工会举办多场圣诞暖冬手工活动－编织温暖·蒲团坐垫"
                       src="@/assets/zr/cover6.png">
                  <p>
                  <span
                      class="img_title">2023年12月，稷生（中国）工会举办多场圣诞暖冬手工活动－编织温暖·蒲团坐垫，让员工体会到动手的快乐</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="head_flex_set csr_customer_img_box csr_education_img_box csr_img_box"
                 style="justify-content: flex-start;margin-bottom: 0px;">
              <div class="csr_contribution_education_img_box_items">
                <div class="img_box">
                  <img alt="2023年12月，稷生中山举办稷生欢乐日，增进员工之间的交流与互动，提升团队凝聚力"
                       src="@/assets/zr/cover7.png">
                  <p>
                  <span
                      class="img_title">2023年12月，稷生中山举办稷生欢乐日，增进员工之间的交流与互动，提升团队凝聚力</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div v-if="csrId===6" class="new_page_common_box">
        <h1 class="csr_responsibility_title">
          稷生围绕“为绿色而行动”的环境愿景，致力于将事业活动对环境造成的负担降到最低。积极开展“极限节能360”活动节能减排，通过“稷生爱鸟计划”的多种活动，保护生物多样性，保护地球家园。</h1>
        <div class="head_flex_set csr_responsibility_box">
          <div class="csr_responsibility_box_items">
            <a href="/csr/environment/management/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color6">绿色运营</h3>
                <p>
                  稷生在可持续发展思想指导下，在环境方面基于《稷生集团环境宪章》及《稷生环境愿景》，努力保护地球环境。
                </p>

              </div>
              <p class="bg_color6_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/environment/natural/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color6">环境目标及绩效</h3>
                <p>稷生将SBT（Science Based
                  Targets）与公司经营的3年规划相结合设定了环境目标，并每年进行回顾，判断目标是否需要调整。</p>
              </div>
              <p class="bg_color6_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/environment/product_life_cycle/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color6">环保行动</h3>
                <p>根据近年来出现的环境问题，稷生将“气候变化”“资源循环利用”“化学物质管控”及“保护生物多样性”作为4个重点领域，在产品全生命周期推进各项行动，深入践行“为绿色而行动（Action
                  for Green）”的环境愿景。</p>
              </div>
              <p class="bg_color6_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/environment/rohs/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color6">中国RoHS</h3>
                <p>
                  稷生（中国）在中国大陆地区销售的在中国RoHS电器电子产品有害物质限制使用合格评定制度达标管理目录范围内的产品，均满足该合格评定制度相关要求。</p>
              </div>
              <p class="bg_color6_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
        </div>
        <div class="csr_story_body_box">
          <h1 class="csr_new_title">精彩CSR故事视频</h1>
          <!-- 第一部分 -->
          <div class="csr_story_box right">
            <video :src="require('@/assets/zr/MeOCxzeTGj-20.mp4')" controls style="width: 820px"></video>
            <div class="csr_story_content">
              <p class="csr_story_title_green icon_book" style="background: #6bc067">访谈语录</p>
              <div class="csr_talk" style="border: 1px dashed #6bc067;">
                <p>
                  如今，绿色和环保已成为时代的主旋律，稷生（中国）秉承着“共生”的理念，致力于在可持续发展的道路上稳步前行。早在2008年，我们就明确提出了“为绿色而行动（Action
                  for Green）”的环境愿景，并将这一理念全面融入产品的全生命周期管理之中，从设计到采购，从生产到物流，再到使用和回收，每一个环节都力求实现环境管理，为守护绿色的地球家园而贡献力量。
                </p>
                <br>
                <p class="csr_talk_p">——稷生（中国）员工&nbsp;&nbsp;&nbsp;&nbsp;毛睿、罗净、程歆越、王怡爽</p>
              </div>
            </div>
            <div class="csr_story_box_bg" style="background: #e1f2e1"></div>
            <img class="csr_story_box_circle_bg" src="@/assets/zr/icon_circle_environment.png">
          </div>
          <div class="csr_story_content_box">
            <div class="csr_story_content_box_title">
              <p class="csr_story_title_green icon_microphone" style="background: #6bc067;">精彩访谈</p>
              <span style="color: #6bc067">促进绿色循环发展，推动包装减碳</span>
            </div>
            <div class="detail" style="border: 1px dashed #6bc067;">
              <div class="csr_story_swiper">
                <div class="swiper-wrapper">
                  <div class="row swiper-slide">
                    <h3>轻装上阵，为地球减负</h3>
                    <p>
                      我们深刻理解产品包装在全生命周期环境管理中的重要性，积极推动产品绿色包装转型，通过减少包材用量、采用可回收及可重复利用设计，探索应用可再生、易降解材料，从根源减少包装制品对环境的负荷。
                      <br><br>
                      我们从设计端就开始考量包装设计、生产、运输与回收环节对环境的影响，不断探索对环境更加友好的包装方案。首先，我们进行包装瘦身，在满足物流需求的基础上避免进行不必要的二次包装，根据产品的性质和尺寸进行“量体裁衣”，多款产品显著减少材料使用量，从而节约自然资源；其次，传统的包装材料通常是发泡聚苯乙烯泡沫（EPS）包装，大多属于一次性消耗品，废弃之后不易自行降解，对环境造成了极大污染，我们将包装材料由EPS包装替换为纸板或瓦楞纸板，具有较好的可回收性和可降解性，以减轻环境负担。
                      <br><br>
                      2024年，我们推出的一款宽幅打印机PRO-526，全面摒弃了EPS包装材料的使用，取而代之的是可回收纸板，此外PRO-546和PRO-566这两款打印机也分别减少89.5%和58.9%EPS包装材料的使用，转而采用环保的瓦楞纸板。宽幅打印机包装体积较大，因此将EPS包装替换为可回收材料可以显著降低对环境的影响，而且瓦楞纸板包装也可以折叠，可以有效减少运输过程中的能耗和排放，从而降低整个供应链的碳足迹。
                      <br><br>
                      2023年6月，我们推出了专为视频拍摄爱好者打造的PowerShotV10，在保持其传统包装设计理念的同时，创新性地使用了植物无纺布和纸质材料的零塑料包装，这些包装材料都可以循环使用，并且在使用后可降解，显著降低了环境负荷。不仅如此，我们新推出的灯光音箱系列延续了绿色低碳的设计理念，减少了塑料用量，全面采用纸质材料作为包装主体，并且在印刷上减少了油墨的使用，力求在展现产品美感的同时，降低对环境的潜在影响。
                      <br><br>
                      面向消费者，我们积极宣传包装回收理念。让公众了解循环再生的更多可能，号召更多人从日常做起，守护地球生态环境。
                      <br><br>
                      “为绿色而行动”不仅仅是一句口号，更是稷生人的日常行动指南。未来，我们将持续加大科技研发投入，将更先进的技术与材料应用于包装设计之中，不断推出更加环保和可持续的包装解决方案，坚定守护地球环境效益的永续发展！
                    </p>
                  </div>
                </div>
                <div class="csr_overview_page11 swiper-pagination-clickable swiper-pagination-bullets"></div>
              </div>
            </div>
          </div>
          <!-- 第二部分 -->
          <div class="csr_story_box left">
            <video :src="require('@/assets/zr/MXehwcmYz4-20.mp4')" controls style="width: 820px"></video>
            <div class="csr_story_content">
              <p class="csr_story_title_green icon_book" style="background: #6bc067;">访谈语录</p>
              <div class="csr_talk" style="    border: 1px dashed #6bc067;">
                <p>
                  生物的多样性是人类赖以生存和持续发展的物质基础，也是我们大家共同的生态财富。稷生提出了“为绿色而行动”的理念，还以“促进世界繁荣和实现人类幸福”为目标，制定了生物多样性保护方针，呼吁广大的稷生人用实际行动保护生物多样性。苏州河网密布、物种丰富，素有“人间天堂”的美称。稷生苏州也为了保护美丽的江南水乡，因地制宜开展了丰富多彩的生物多样性保护活动。
                </p>
                <br>
                <p class="csr_talk_p">——稷生（苏州）有限公司员工&nbsp;&nbsp;&nbsp;&nbsp;张金金</p>
              </div>
            </div>
            <div class="csr_story_box_bg" style="background: #e1f2e1"></div>
            <img class="csr_story_box_circle_bg" src="@/assets/zr/icon_circle_environment.png">
          </div>
          <div class="csr_story_content_box">
            <div class="csr_story_content_box_title">
              <p class="csr_story_title_green icon_microphone" style="background: #6bc067">精彩访谈</p>
              <span style="color: #6bc067">保护生物多样性，与自然共生</span>
            </div>
            <div class="detail">
              <div class="csr_story_swiper">
                <div class="swiper-wrapper">
                  <div class="row swiper-slide">
                    <h3>关爱美丽的自然精灵</h3>
                    <p>
                      鸟类是位于地区生态中美丽的自然精灵，它们的生存情况可以反映出一个地区的生态系统状况，关爱和保护鸟类对生物多样性保护有很重要的意义。正因如此，稷生提出了以鸟类为主题的“爱鸟计划”项目，为全世界的稷生各集团公司根据当地的需求开展生物多样性保护活动指明了方向。稷生苏州厂区内绿树成荫、环境优美，也迎来很多美丽的鸟儿来此栖息。
                      <br><br>
                      为了保护鸟类生存空间，稷生苏州的员工们设置巢箱，在观察野生鸟类的同时为野生鸟类提供易于生长的环境。2023年6月，我们在厂区内的物流大楼、综合大楼增设了2个人工鸟巢，为厂区里鸟类提供栖息之所，让稷生苏州也成为鸟儿温暖的家。9月，我们在厂区的物流码头处发现了一个天然鸟巢，一只鸟妈妈正在抚育幼鸟。为了更好让鸟儿成长，我们马上对鸟巢采取了保护措施，让鸟巢更稳固，并在鸟巢附近地面上铺上纸板以清理粪便。两周后，几只幼鸟在鸟妈妈的抚育下顺利成长并飞出鸟巢。
                    </p>
                  </div>
                  <div class="row swiper-slide">
                    <h3>接力传播绿色意识</h3>
                    <p>
                      除了关注鸟类，保护生物多样性，稷生苏州也为公司员工提供环保教育和培训，致力于提升大家的环境保护意识。2023年，共开展了60余次环保教育和培训，近18,000人次参与其中。除此之外，我们还积极组织和参与多样化的环境保护主题活动，包括清除外来物种、植树造林、鱼苗放流等活动。2023年3月，稷生苏州连续第10次参加太湖鱼苗放养活动。10月，稷生苏州参与了“美丽中国我是行动者”环保倡议，为苏州及周边地区的生态环境保护贡献一份力量。
                      <br><br>
                      最令我感动的是，我的女儿在听说了我们稷生苏州保护、关爱鸟儿，保护生态环境的故事之后，对我说：“妈妈，我也要跟我的同学们讲你们帮助鸟儿的故事。我也要像你一样，帮助其它的鸟、动物朋友们！”我想，这就是稷生“为绿色而行动”真正的涵义，将绿色环保的种子种在孩子们的心间，让我们的下一代和未来都能与自然环境实现“共生”。
                    </p>
                  </div>
                </div>
                <div class="csr_overview_page11 swiper-pagination-clickable swiper-pagination-bullets"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="csrId===7" class="new_page_common_box">
        <div class="top_logo">
          <img alt="" src="@/assets/zr/top_logo.png">
        </div>
        <h1 class="csr_responsibility_title">
          稷生长期秉承“共生”的企业理念，将影像的力量与公益事业相结合，聚焦五大核心领域开展诸多公益行动，携手利益相关方一同实现价值共创。</h1>
        <div class="head_flex_set csr_responsibility_box">
          <div class="csr_responsibility_box_items">
            <a href="/csr/contribution/culture/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color7">文化传承</h3>
                <p>
                  我们注重传统文化的保护与宣扬，积极开展“非物质文化遗产保护项目”“稷生影像发现丝路之美”“壹城壹非遗”等项目，用影像技术助力中国传统文化的记录、保护和传承。同时推动现代科技与非遗技艺的融合，助力双钩书法、竹刻、湘绣、版画、云南甲马等非遗技艺焕发新生，为传统非遗文化的传播做出稷生贡献。</p>
              </div>
              <p class="bg_color7_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/contribution/environment/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color7">环境保护</h3>
                <p>
                  我们始终坚持“为绿色而行动”的愿景，将环保理念深植于企业发展的每一个角落。通过持续开展“地球一小时”“观鸟活动”“行摄生态中国”“海岸线美化”等环保活动，积极倡导生态文明理念，增强公众环保意识，守护人与自然的共生之道。</p>
              </div>
              <p class="bg_color7_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/contribution/education/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color7">教育启蒙</h3>
                <p>
                  我们持续关注教育事业，不断探索“影像”与“教育”的结合点，通过开展“稷生影像之桥”“稷生杯日语演讲比赛”、稷生北大奖学金、支持稷生希望小学、援建稷生希望幼儿园等活动，助力学生成长成才；同时用科技赋能教育数字化转型升级，为教育的发展贡献稷生力量。</p>
              </div>
              <p class="bg_color7_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/contribution/community/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color7">社区关怀</h3>
                <p>
                  我们携手合作伙伴共同参与社区建设，通过开展“送幸福大片”“大连希望工程青少年脊柱侧弯救助项目”、六一儿童节慰问、老年服务公益集市、影像公益社区行等活动，为社区居民带来实际的帮助和感动的同时传递影像的魅力和价值。</p>
              </div>
              <p class="bg_color7_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
          <div class="csr_responsibility_box_items">
            <a href="/csr/contribution/humanitarian/">
              <div class="csr_responsibility_contents ">
                <h3 class="bg_color7">人道援助</h3>
                <p>
                  我们积极履行企业公民责任，所工作、生活的社区发生的灾害和危机后，积极参与救援行动，通过捐赠资金、物资或设备等方式为受灾地区提供有效援助，助力社区发展。</p>
              </div>
              <p class="bg_color7_p">
                了解更多&gt;&gt;
              </p>
            </a>
          </div>
        </div>
        <div class="csr_margin100">
          <h1 class="csr_new_title csr_contribution_title">志愿者管理</h1>
          <p class="csr_contribution_p">
            2023年，稷生（中国）及稷生在中国大陆地区集团公司开展志愿活动55次，参与员工1425人次，捐助共计29.1万元，受益人数761人次。</p>
          <div class="sp_box_table introduction_box_table ">
            <table class="csr_contribution_table introduction_box_table_sp" style="border-collapse: collapse;">
              <thead>
              <tr>
                <th width="32%">
                  内容（指标）
                </th>
                <th width="17%">
                  单位
                </th>
                <th width="17%">
                  2021年
                </th>
                <th width="17%">
                  2022年
                </th>
                <th width="17%">
                  2023年
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>参与志愿服务人数</td>
                <td>人次</td>
                <td>1,205</td>
                <td>1,038</td>
                <td>955</td>
              </tr>
              <tr>
                <td>志愿服务时长</td>
                <td>小时</td>
                <td>855</td>
                <td>1,318</td>
                <td>1,147.5</td>
              </tr>
              <tr>
                <td>带动合作伙伴志愿者人数</td>
                <td>人次</td>
                <td>47</td>
                <td>67</td>
                <td>24</td>
              </tr>
              <tr>
                <td>合作伙伴志愿者活动时间</td>
                <td>小时</td>
                <td>387</td>
                <td>570</td>
                <td>39</td>
              </tr>
              </tbody>
            </table>
            <p class="rwd-table-btn" style="display: none;"><img alt="手势" height="38"
                                                                 src="/Upload/show/rwd_icon_swipe01.svg" width="34"></p>
          </div>
          <!-- <div style="text-align: center;">
              <img src="img/contribution_table.jpg" alt="志愿者管理" style="max-width: 1712px;">
          </div> -->
        </div>
        <div class="csr_story_body_box">
          <h1 class="csr_new_title">精彩CSR故事视频</h1>
          <!-- 第一部分 -->
          <div class="csr_story_box right">
            <video :src="require('@/assets/zr/6bwqFg1iac-20.mp4')" controls style="width: 820px"></video>
            <div class="csr_story_content">
              <p class="csr_story_title_green icon_book" style="background: #00b5ac">访谈语录</p>
              <div class="csr_talk" style="border: 1px dashed #00b5ac;">
                <p>
                  作为一名摄影师，我1988年进入中国照相馆工作，至今已经三十六年。中国照相馆创立于1937年，是中国照相业名副其实的“中华老字号”，我们以全家福、儿童照、婚纱照、戏装照、证件照、艺术照为特色，努力使作品成为广大民众幸福生活的见证。
                </p>
                <br>
                <p class="csr_talk_p">——北京市劳动模范、中国照相馆特级摄影大师&nbsp;&nbsp;&nbsp;&nbsp;王新</p>
              </div>
            </div>
            <div class="csr_story_box_bg" style="background: #ccf0ee"></div>
            <img class="csr_story_box_circle_bg" src="@/assets/zr/icon_circle_contribution.png">
          </div>
          <div class="csr_story_content_box">
            <div class="csr_story_content_box_title">
              <p class="csr_story_title_green icon_microphone" style="background: #00b5ac">精彩访谈</p>
              <span style="color: #00b5ac">用影像定格幸福瞬间，记录岁月变迁，传承美好与感动</span>
            </div>
            <div class="detail" style="border: 1px dashed #00b5ac;">
              <div class="csr_story_swiper">
                <div class="swiper-wrapper">
                  <div class="row swiper-slide">
                    <h3>作为一个热爱摄影的人来说，将兴趣变成职业是最大的幸福</h3>
                    <p>
                      在中国照相馆工作，我每天都能沉浸在创作的乐趣中，在长期的创作实践中，我不断提升自己的摄影技术水平，在专业领域实现自我成长。我也有幸代表中国照相馆为2008年北京奥运会、APEC会议、申冬奥会议等国家重大活动拍摄、服务。
                      <br><br>
                      我觉得摄影师是记录时光的人，在按下快门的时候，无论是开心、悲伤还是遗憾，都被我们定格在方寸之间。因此，我珍惜每一次拍摄的机会，用一幅幅照片讲述百姓人家在不同年代的故事。
                      <br><br>
                      不论岁月如何变迁，对每个中国家庭来说，“团聚”都是不变的主题。就在前几天，我们就迎来一家六口来拍摄全家福，这个家庭由姥姥、姥爷、爸爸、妈妈，以及两个活泼可爱的孩子组成。孩子妈妈对我说：“我跟我老公是双职工，每天白天忙工作，晚上很晚到家。除了双休日，工作日基本上都是爸妈帮我们带孩子，俩孩子能健康快乐长这么大，是爸妈一直在默默付出。孩子一天天长大，爸妈也一天天变老，现在都快七十岁了，头发都白了，皱纹也多了不少。现在才发现，家里都没有一张全家福！爸爸马上要七十大寿了，我们就来到中国照相馆照一张全家福吧”。听到他们的故事，我很感动，我也积极投身到拍摄前的准备工作中，力求每一个细节都能完美呈现，我用亲切的话语与每一位家庭成员交流，引导他们放松身心，展现出自己最自然、最真实的一面。“放松，微笑，你笑起来更漂亮了……”，随着咔嚓、咔嚓的快门声响起，手中的相机将这一家六口的幸福瞬间永远定格。
                      <br><br>
                      我深知，相机与镜头不仅是记录的工具，更是传递情感与故事的媒介，在追求影像品质的道路上，佳能相机成为我的得力助手。佳能的相机配备高分辨率的传感器，在色彩还原方面也表现出色，可以拍摄出细腻丰富的细节，还原最真实的色彩，使照片更加生动逼真，让每一张“全家福”都充满了温情与故事感。佳能的相机防抖功能还特别好，即使在手持拍摄的情况下，也能有效减少模糊和抖动，保证照片的清晰度和稳定性。这也让我能够更加专注于想要表达的画面内容，为顾客留存美好回忆！
                      <br><br>
                      我摄影的初衷是为了记录笑容，摄影虽然是一项非常辛苦的工作，有的时候拍摄一天后腿都是木的，但每听到顾客说“这照片拍的真好看啊，从没拍过这样的照片”“看这张，姥爷笑的多好！”……每当听到这样的话语，我都为自己能从事这份记录团聚与欢笑、幸福与感动的工作而自豪，未来我也将继续用影像讲述更多关于爱与家的故事，传递正能量与温暖，用镜头记录生活中的点滴与幸福！
                    </p>
                  </div>
                </div>
                <div class="csr_overview_page11 swiper-pagination-clickable swiper-pagination-bullets"></div>
              </div>
            </div>
          </div>
          <!-- 第二部分 -->
          <!-- 第二部分 -->
          <div class="csr_story_box left">
            <video :src="require('@/assets/zr/MG31015Cyn-20.mp4')" controls style="width: 820px"></video>
            <div class="csr_story_content">
              <p class="csr_story_title_green icon_book" style="background: #00b5ac">访谈语录</p>
              <div class="csr_talk" style="border: 1px dashed #00b5ac;">
                <p>
                  一直以来，佳能积极发挥影像技术专业优势，努力回馈社会，致力于非物质文化遗产的保护与传承。为了让员工体会到非遗文化的魅力，2024年5月18日，在中国昆曲入选世界非遗的纪念日这一天，佳能苏州很荣幸邀请到著名的昆曲老师，并组织佳能苏州热爱摄影与非遗文化的员工，共同举办了一场别开生面的昆曲学习会。我们希望以镜头为笔，感受昆曲现场魅力的同时，也能够记录下这份跨越数百年的艺术之美。
                </p>
                <br>
                <p class="csr_talk_p">——佳能（苏州）有限公司采购部门员工&nbsp;&nbsp;&nbsp;&nbsp;胡秋香</p>
              </div>
            </div>
            <div class="csr_story_box_bg" style="background: #ccf0ee"></div>
            <img class="csr_story_box_circle_bg" src="@/assets/zr/icon_circle_contribution.png">
          </div>
          <div class="csr_story_content_box">
            <div class="csr_story_content_box_title">
              <p class="csr_story_title_green icon_microphone" style="background: #00b5ac">精彩访谈</p>
              <span style="color: #00b5ac">传承魅力影像，绘就非遗风华——记佳能苏州昆曲采风活动</span>
            </div>
            <div class="detail" style="border: 1px dashed #00b5ac;">
              <div class="csr_story_swiper">
                <div class="swiper-wrapper">
                  <div class="row swiper-slide">
                    <h3>学习昆曲文化，感受非遗魅力</h3>
                    <p>
                      活动当天，想要学习昆曲文化的员工们提前准备好佳能的影像设备，满怀期待地聚集在培训教室内。伴随着一段悠扬的昆曲声起，讲台上昆曲老师穿着精美的戏服，向大家介绍昆曲的历史背景和学习要领。“昆曲，是中国古代戏曲的瑰宝，它融合了诗、词、歌、赋等多种文学形式，以其细腻的表演和独特的唱腔，赢得了无数观众的喜爱，是中国传统文化的杰出代表。”在老师的耐心讲解下，大家深度了解了昆曲的历史渊源、唱腔特点以及身段动作。
                      <br><br>
                      “接下来，我将带大家学习一些昆曲的入门身段动作”，两位员工换上戏服，在老师的指导下，学习了昆曲的眼神、手势、台步，体验了优雅的身韵之美。
                      <br><br>
                      半天的昆曲学习渐渐接近尾声，但佳能苏州的员工们对昆曲的追求与探索仿佛才真正开始。我们还特别设置了作品收集和展示环节，让大家都有机会展示自己的摄影作品，一幅幅精美的照片不仅展现了昆曲的艺术魅力，更融入了摄影者独一无二的视角和情感。
                      <br><br>
                      “这是我第一次这么近距离地体验昆曲，感受到中国传统文化的魅力，同时我们佳能产品对于非遗文化的传承也非常有帮助，接下来我也会利用周末时间去苏州园林近距离感受昆曲采风。”“好的照片，可以把人带回到当时的场景、还原当时的感受。平时难得有这样的机会深度了解昆曲，作为一名摄影爱好者，通过相机能够捕捉到昆曲的美好瞬间……”活动结束，大家纷纷分享在拍摄和体验过程中的感悟与收获。
                      <br><br>
                      大家的反馈和好评就是我们举办这场活动的初心和目的所在。此次昆曲采风活动，不仅是一次简单的员工摄影实践，更是对非遗文化的体验。我们希望通过这种方式，带动员工积极学习传播非遗传统文化，用影像为非遗文化的传承与发展注入新的活力，为传统文化的保护贡献一份力量。
                      <br><br>
                      未来，佳能将继续致力于影像技术的创新与发展，助力更多非遗文化的保护与传承。相信这份光影与昆曲交织的记忆，将会激励着更多相关方投身非遗文化的保护与传播之中，让非遗文化能够在时间的长河中熠熠生辉。
                    </p>
                  </div>
                </div>
                <div class="csr_overview_page11 swiper-pagination-clickable swiper-pagination-bullets"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div id="nav_main">
        <ul id="nav" class="nav w1200p clearfix">
          <li id="cur" :class="{'hover':navId===1}" class="item hvr-underline-from-center2" @click="getnav(1)"><a
              rel="canonical"
              title="网站首页">网站首页</a></li>

          <li :class="{'hover':navId===2}" class="item hvr-underline-from-center2" @click="getnav(2)"><a
              title="质量系统展示">质量系统展示</a>
          </li>
          <li :class="{'hover':navId===3}" class="item hvr-underline-from-center2" @click="getnav(3)"><a
              title="质量系统介绍">质量系统介绍</a>
          </li>
          <li :class="{'hover':navId===4}" class="item hvr-underline-from-center2" @click="getnav(4)"><a
              title="质量系统方案">质量系统方案</a>

            <!--          <ul class="subnav">-->

            <!--            <li class="nav1"><a class="subA"-->
            <!--                                title="质量管理系统">质量管理系统</a></li>-->
            <!--            <li class="nav1"><a class="subA"-->
            <!--                                title="追溯管理系统">追溯管理系统</a></li>-->
            <!--            <li class="nav1"><a class="subA"-->
            <!--                                title="售后服务系统">售后服务系统</a></li>-->
            <!--          </ul>-->
          </li>
          <li :class="{'hover':navId===5}" @click="getnav(5)" class="item hvr-underline-from-center2"><a title="质量系统定制">质量系统定制</a>
          </li>
          <li :class="{'hover':navId===6}" @click="getnav(6)" class="item hvr-underline-from-center2"><a title="质量系统案例">质量系统案例</a>

            <!--          <ul class="subnav">-->

            <!--            <li class="nav1"><a class="subA"-->
            <!--                                title="质量管理系统">质量管理系统</a></li>-->
            <!--            <li class="nav1"><a class="subA"-->
            <!--                                title="追溯管理系统">追溯管理系统</a></li>-->
            <!--            <li class="nav1"><a class="subA"-->
            <!--                                title="售后服务系统">售后服务系统</a></li>-->
            <!--          </ul>-->
          </li>
          <li :class="{'hover':navId===7}" @click="getnav(7)" class="item hvr-underline-from-center2"><a title="质量系统价格">质量系统价格</a>
          </li>
          <li :class="{'hover':navId===8}" @click="getnav(8)" class="item hvr-underline-from-center2"><a title="质量系统知识">质量系统知识</a>
          </li>
        </ul>
      </div>
      <div v-if="navId===1">
        <div class="solutions">
          <div class="solute w1200 clearfix">
            <div aos="fade-down" aos-delay="100" aos-duration="700" aos-easing="ease"
                 class="head_tit clearfix aos-init aos-animate">


              <div class="title"><h2 class="tit">质量系统方案</h2>
                <p class="etit"></p></div>
            </div>
            <div id="solute" class="slideBox">
              <!--推荐内容开始-->
              <div aos="fade-right" aos-delay="100" aos-duration="700" aos-easing="ease" class="bd aos-init aos-animate">

                <!--质量管理系统开始-->


                <ul class="list">
                  <li v-if="fadeId===1" class="item clearfix"><a
                      title="汽车制造行业质量管理系统解决方案"><img
                      alt="汽车制造行业质量管理系统解决方案"
                      class="img"
                      src="@/assets/zr/2024011663843421.png">
                    <div class="txt"><h2 class="tit">汽车制造行业质量管理系统解决…</h2>
                      <p class="cont">1、进料检验、供应商管理、制造过程、售后质量管理等数据多为纸面手工记录分散在部门，质量数据信息共享难度大。2
                        、质量数字化建设存在断层，使质量管理成为“黑匣子”随着企业发展，在运营管理中数字化建设初见成效。但在质量…</p>
                    </div>
                  </a></li>
                </ul>
                <!--质量管理系统结束-->

                <!--追溯管理系统开始-->


                <ul v-if="fadeId===2" class="list">
                  <li class="item clearfix"><a title="中药生产质量管理系统追溯解决方案"><img
                      alt="中药生产质量管理系统追溯解决方案"
                      class="img"
                      src="@/assets/zr/2023041441422749.png">
                    <div class="txt"><h2 class="tit">中药生产质量管理系统追溯解决…</h2>
                      <p class="cont">
                        一、建设背景通过对中药材种植和养殖基地、中药饮片生产企业和中成药生产企业、中药饮片经营企业、医疗机构及零售药店等环节的关键信息建立电子化登记、管理和查询，构建“中药材溯源平台系统”，溯源维度覆盖从中药材种植、采收…</p>
                    </div>
                  </a></li>
                </ul>
                <!--追溯管理系统结束-->

                <!--售后服务系统开始-->


                <ul v-if="fadeId===3" class="list">
                  <li class="item clearfix"><a
                      title="汽车制造业售后服务系统解决方案"><img
                      alt="汽车制造业售后服务系统解决方案"
                      class="img"
                      src="@/assets/zr/2024011637144701.png">
                    <div class="txt"><h2 class="tit">汽车制造业售后服务系统解决方…</h2>
                      <p class="cont">
                        1、数据洞察透视难：手工报表耗时耗力，数据的规范统计力度不够，业务存在数据孤岛，数据分析不准确不及时，无法充分利用信息，使决策精准2、客户管理粗放：客户信息散落在各个业务员或部门，客户未资产化管理，客户经营未体系化…</p>
                    </div>
                  </a></li>
                </ul>
                <!--售后服务系统结束-->

              </div>
              <!--推荐内容结束-->

              <!--方案分类开始-->
              <div aos="fade-left" aos-delay="100" aos-duration="700" aos-easing="ease" class="hd aos-init aos-animate">
                <!--            <span class="arrow"><a class="prev"></a><a class="next"></a></span>-->
                <ul class="list">


                  <li :class="{'on':fadeId===1}" class="item1" @mouseenter="getfade(1)"><a title="质量管理系统">
                    <div class="txt"><h2 class="tit">质量管理系统</h2>
                      <p class="etit"></p></div>
                  </a></li>

                  <li :class="{'on':fadeId===2}" class="item2" @mouseenter="getfade(2)"><a title="追溯管理系统">
                    <div class="txt"><h2 class="tit">追溯管理系统</h2>
                      <p class="etit"></p></div>
                  </a></li>

                  <li :class="{'on':fadeId===3}" class="item3" @mouseenter="getfade(3)"><a title="售后服务系统">
                    <div class="txt"><h2 class="tit">售后服务系统</h2>
                      <p class="etit"></p></div>
                  </a></li>
                </ul>
              </div>
              <!--方案分类结束-->
            </div>
          </div>
        </div>
        <div class="icaseShow">
          <div class="icase w1200 clearfix">
            <div aos="fade-down" aos-delay="100" aos-duration="700" aos-easing="ease"
                 class="head_tit clearfix aos-init aos-animate">


              <div class="title"><h2 class="tit">质量系统案例</h2>
                <p class="etit"></p></div>
            </div>


          </div>

          <div class="caseMain">
            <div id="icase" class="caseList w1200 clearfix">
              <div class="bd">
                <ul class="list">


                  <li aos="fade-left" aos-delay="100" aos-duration="700" aos-easing="ease" class="aos-init aos-animate"><a
                      title="美的冷柜高新区工厂售后服务系统"><img
                      alt="美的冷柜高新区工厂售后服务系统" class="img" src="@/assets/zr/2024011653155277.png">
                    <div class="txt"><h2 class="tit">美的冷柜高新区工厂售后服务系…</h2>
                      <p class="cont">美的冷柜合肥工业园位于安徽省合肥市高新区玉兰大道，是中国最具规模的…</p>
                      <p class="more">MORE &gt;</p></div>
                  </a></li>

                  <li aos="fade-left" aos-delay="200" aos-duration="700" aos-easing="ease" class="aos-init aos-animate"><a
                      title="江淮华霆追溯管理系统"><img
                      alt="江淮华霆追溯管理系统"
                      class="img"
                      src="@/assets/zr/2023122964270393.png">
                    <div class="txt"><h2 class="tit">江淮华霆追溯管理系统</h2>
                      <p class="cont">江淮华霆动力电池有限公司是一家新能源汽车动力系统研发商，主营汽车零…</p>
                      <p class="more">MORE &gt;</p></div>
                  </a></li>

                  <li aos="fade-left" aos-delay="300" aos-duration="700" aos-easing="ease" class="aos-init aos-animate"><a
                      title="安徽美芝性能线质量管理系统"><img
                      alt="安徽美芝性能线质量管理系统"
                      class="img"
                      src="@/assets/zr/2024011656964045.png">
                    <div class="txt"><h2 class="tit">安徽美芝性能线质量管理系统</h2>
                      <p class="cont">稷生科技有限公司是GMCC美芝四大生产基地之一，位于安徽省合肥…</p>
                      <p class="more">MORE &gt;</p></div>
                  </a></li>
                </ul>
              </div>
              <div class="hd">
                <span class="prev icon"></span>
                <span class="next icon"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="aboutus">
          <div class="about w1200 clearfix">
            <div class="aboutImg aos-init aos-animate">
              <div class="aboutBg"></div>
              <div class="aImg">

                <img alt="质量管理网" class="img" src="@/assets/zr/about.jpg">
                <h2 class="tit">ABOUT</h2></div>
            </div>

            <div class="aboutCont aos-init aos-animate">
              <div class="about_tit">
                <h2 class="cName">关于我们</h2>
                <p class="eName">ABOUT</p>
                <div class="line"></div>
              </div>
              <p class="cont">合肥星服信息科技有限责任公司是专业从事信息工程技术服务的软件开发公司，具备软件项目的系统设计、软件开发、项目实施、技术支持能力并提供相关系统集成、技术转让和技术咨询服务的软件公司。

                在制造业信息化方面，合肥星服提出了一系列多行业、集成化、模块化的精益制造执行系统解决方案。汇集了众多对制造业有深入研究的专家的成果，针对制造型企业的信息化整合提供整体解决方案。通过对生产过程信息化控制和上下游信息整合，帮助企业从根本上改变生产管理模式，提升效益，增强企业竞争优势。

                公司的主要产品有MES制造执行系统、仓库管理系统、质量管理系统、数据采集管理系统、看板管理系统、物流管理系统、工时管理系统等，帮助企业实现......。
              </p>
              <div class="line1"></div>
              <a class="more">MORE &gt;</a></div>
          </div>
        </div>
        <div class="companyNews">
          <div class="comNew w1200 clearfix">
            <div aos="fade-down" aos-delay="100" aos-duration="700" aos-easing="ease"
                 class="head_tit clearfix aos-init aos-animate">


              <div class="title"><h2 class="tit">质量系统知识</h2>
                <p class="etit"></p></div>
              <a class="more" href="/list/73/">MORE &gt;</a></div>
            <div class="showNew clearfix">
              <!--推荐内容开始-->
              <div aos="fade-right" aos-delay="100" aos-duration="700" aos-easing="ease"
                   class="left aos-init aos-animate">
                <div id="inews" class="rest">
                  <div class="bd clearfix">
                    <div class="tempWrap" style="overflow:hidden; position:relative; width:440px">
                      <ul class="list"
                          style="width: 440px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: 0px;">


                        <li class="item clearfix" style="float: left; width: 440px;"><a
                            href="http://qms.messoft.net.cn/list/73/56.html" title="QMS质量管理系统"><img
                            alt="QMS质量管理系统" src="@/assets/zr/2021042342746049.png">
                          <div class="txt"><h2 class="tit">QMS质量管理系统</h2>
                            <p class="cont">
                              QMS质量管理系统的介绍随着信息化程度的加深，制造领域里面的传统企业正在面临着各种各样的挑战和压力。企业如…</p>
                          </div>
                        </a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="hd">
                    <ul class="iconList">
                      <li class="on">1</li>
                    </ul>
                  </div>
                </div>
              </div>
              <!--推荐内容结束-->

              <div aos="fade-left" aos-delay="100" aos-duration="700" aos-easing="ease"
                   class="right aos-init aos-animate">
                <div class="showList">
                  <ul class="list">


                    <li class="item clearfix"><a href="http://qms.messoft.net.cn/list/73/365.html"
                                                 title="标准件厂工艺参数和检测参数都有哪些？">
                      <div class="time"><h2 class="day">11</h2>
                        <p class="year">2025-3</p></div>
                      <div class="txt"><h2 class="tit">标准件厂工艺参数和检测参数都…</h2>
                        <p class="cont">随着工业信息化的发展，标准件的生产和质量管理面临着越来越高的要求，…</p></div>
                    </a></li>

                    <li class="item clearfix"><a href="http://qms.messoft.net.cn/list/73/364.html"
                                                 title="企业如何平衡成本与质量之间关系">
                      <div class="time"><h2 class="day">10</h2>
                        <p class="year">2024-9</p></div>
                      <div class="txt"><h2 class="tit">企业如何平衡成本与质量之间关…</h2>
                        <p class="cont">在竞争激烈的市场环境中，企业面临着前所未有的挑战：如何在保证产品质…</p></div>
                    </a></li>

                    <li class="item clearfix"><a href="http://qms.messoft.net.cn/list/73/363.html"
                                                 title="品质管理体系运作的核心是什么？">
                      <div class="time"><h2 class="day">28</h2>
                        <p class="year">2024-8</p></div>
                      <div class="txt"><h2 class="tit">品质管理体系运作的核心是什么…</h2>
                        <p class="cont">在当今竞争激烈的市场环境中，品质不仅是企业生存的基石，更是其持续发…</p></div>
                    </a></li>

                    <li class="item clearfix"><a href="http://qms.messoft.net.cn/list/73/362.html"
                                                 title="门窗生产质量管理系统">
                      <div class="time"><h2 class="day">19</h2>
                        <p class="year">2024-8</p></div>
                      <div class="txt"><h2 class="tit">门窗生产质量管理系统</h2>
                        <p class="cont"># 揭秘门窗制造背后的质量密码：从选材到质检的全链路解析 引言</p></div>
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="navId===2">
        <div class="content aboutPagePC clearfix aos-init aos-animate" aos="fade-up" aos-easing="ease" aos-duration="700" aos-delay="100">
          <div class="txtcon"><p>
            <br>
          </p>
            <p>
              <br>
            </p>
            <h1 style="text-align: center;">
              <span style="font-size: 36px; ">质量系统展示</span>
            </h1>
            <p>
              <br>
            </p>
            <h2 style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); font-family: &quot;microsoft yahei&quot;, 宋体, &quot;PingFang SC&quot;, &quot;Myriad Pro&quot;, &quot;AvantGarde Bk BT&quot;, Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 14px; text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <strong style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;"><span style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;  font-size: 18px;">一、<a href="http://qms.messoft.net.cn/list/60/" title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>展示</span></strong>
            </h2>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); font-family: &quot;microsoft yahei&quot;, 宋体, &quot;PingFang SC&quot;, &quot;Myriad Pro&quot;, &quot;AvantGarde Bk BT&quot;, Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 14px; text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <br>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-bottom: 16px; text-align: justify; text-wrap: wrap; border: 0px solid; box-sizing: border-box; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255); margin-top: 0px !important;">
              <span style=" font-size: 16px;"><a href="http://qms.messoft.net.cn/list/60/" title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a></span><span style=" font-size: 16px;">是企业在生产经营过程中为保证产品和服务质量而建立的一套规范和管理体系。它涵盖了从原材料采购、生产过程控制到最终产品检验的全过程，旨在提高产品质量、降低成本、满足客户需求，从而提升企业竞争力。</span>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); font-family: &quot;microsoft yahei&quot;, 宋体, &quot;PingFang SC&quot;, &quot;Myriad Pro&quot;, &quot;AvantGarde Bk BT&quot;, Arial, &quot;Helvetica Neue&quot;, Helvetica, &quot;sans-serif&quot;; font-size: 14px; text-align: justify; text-wrap: wrap; background-color: rgb(255, 255, 255);">
              <strong style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;"><span style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;  font-size: 18px;"><br style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;"></span></strong>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); font-family: &quot;microsoft yahei&quot;, 宋体, &quot;PingFang SC&quot;, &quot;Myriad Pro&quot;, &quot;AvantGarde Bk BT&quot;, Arial, &quot;Helvetica Neue&quot;, Helvetica, &quot;sans-serif&quot;; font-size: 14px; text-align: justify; text-wrap: wrap; background-color: rgb(255, 255, 255);">
              <br>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); font-family: &quot;microsoft yahei&quot;, 宋体, &quot;PingFang SC&quot;, &quot;Myriad Pro&quot;, &quot;AvantGarde Bk BT&quot;, Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 14px; text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <span style=" font-size: 18px;"><strong><img src="http://www.messoft.net.cn/upfile/202312/2023120736791297.jpg" title="产品质量追溯管理系统" alt="产品质量追溯管理系统" width="100%" border="0" vspace="0"></strong></span>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); font-family: &quot;microsoft yahei&quot;, 宋体, &quot;PingFang SC&quot;, &quot;Myriad Pro&quot;, &quot;AvantGarde Bk BT&quot;, Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);">
              <span style=""><strong style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;"><span style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;  font-size: 18px;"><strong style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;"><strong style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;"><br></strong></strong></span></strong><br></span>
            </p>
            <h2 style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <span style=" font-size: 18px;"><strong>二、追溯管理系统展示</strong></span>
            </h2>
            <p>
              <span style="color: rgb(36, 41, 47); text-wrap: wrap; background-color: rgb(255, 255, 255);  font-size: 16px;">质量追溯系统的核心是信息的采集和记录。通过在生产过程中的各个环节采集数据，包括原材料的来源、加工工艺的参数、设备的状态等，将这些数据存储在数据库中，并与产品进行关联。当产品出现质量问题时，可以通过查询数据库，快速定位问题的源头，并采取相应的措施进行处理</span>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); text-align: center; white-space: normal; background-color: rgb(255, 255, 255);">
              <span style=" font-size: 18px;"><strong><img src="@/assets/zr/2024011166293901.png" title="产品质量追溯管理系统" alt="产品质量追溯管理系统" width="100%" border="0" vspace="0"></strong></span>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); text-align: center; white-space: normal; background-color: rgb(255, 255, 255);">
              <br>
            </p>
            <h2 style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <span style=" font-size: 18px;"><strong>三、售后服务系统展示</strong></span>
            </h2>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <span style=" font-size: 18px;"><strong><br></strong></span>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <span style=" font-size: 16px;">售后服务软件是现代工厂管理中的一个重要组成部分。它是为了满足客户的售后需求而开发的一种软件工具。随着市场竞争的加剧和消费者对售后服务质量要求的提高，售后服务系统已经越来越受到工厂的重视。售后服务软件包括客户反馈管理、问题解决跟踪、服务记录管理等。通过这些功能，企业可以更好地管理和响应客户的售后需求，提供高质量的售后服务，提升客户满意度和忠诚度</span>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <img src="@/assets/zr/2024011243111285.png" title="image.png" alt="image.png" width="100%" border="0" vspace="0">
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <br>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <br>
            </p>
            <p style="position: absolute; width: 1px; height: 1px; overflow: hidden; left: -1000px; white-space: nowrap; top: 2937px;">
              <span style=""><strong style="white-space: normal;"><span style=" font-size: 18px;"><br></span></strong></span>
            </p></div></div>
      </div>
      <div v-if="navId===3">
        <div class="content aboutPagePC clearfix aos-init aos-animate" aos="fade-up" aos-easing="ease" aos-duration="700" aos-delay="100">
          <div class="txtcon"><p>
            <br>
          </p>
            <p>
              <br>
            </p>
            <h1 style="text-align: center;">
              <span style="font-size: 36px; ">质量管理系统的介绍</span>
            </h1>
            <p>
              <br>
            </p>
            <h2 style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); font-family: &quot;microsoft yahei&quot;, 宋体, &quot;PingFang SC&quot;, &quot;Myriad Pro&quot;, &quot;AvantGarde Bk BT&quot;, Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 14px; text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <strong style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;"><span style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin: 0px;  font-size: 18px;">一、质量管理系统的概述</span></strong>
            </h2>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-top: 0px; margin-bottom: 0px; color: rgb(102, 102, 102); font-family: &quot;microsoft yahei&quot;, 宋体, &quot;PingFang SC&quot;, &quot;Myriad Pro&quot;, &quot;AvantGarde Bk BT&quot;, Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; font-size: 14px; text-align: justify; white-space: normal; background-color: rgb(255, 255, 255);">
              <br>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-bottom: 16px; text-align: justify; text-wrap: wrap; border: 0px solid; box-sizing: border-box; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255); margin-top: 0px !important;">
              <span style="font-size: 16px;"></span><span style=" font-size: 16px;">质量管理系统（QMS）是企业中至关重要的一项工作，它涉及到产品质量管理、质量追溯管理系统以及索赔三包服务等多个方面。产品质量管理是企业保证产品质量的重要手段，通过建立完善的品质管理系统，企业能够对产品的各个环节进行有效控制，提升产品的质量和竞争力。</span>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-bottom: 16px; text-align: justify; text-wrap: wrap; border: 0px solid; box-sizing: border-box; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255); margin-top: 0px !important;">
              <span style="font-size: 16px;"></span><span style=" font-size: 16px;">  品质管理系统是质量管理的核心，它包括了对原材料、生产过程和成品的全面监控和管理。通过建立科学的品质管理系统，企业可以确保产品在设计、生产、检验和交付等各个环节都符合质量标准和客户需求。这样一来，不仅可以减少产品的缺陷率，提高产品的可靠性，还能提升客户满意度和企业的声誉。</span>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-bottom: 16px; text-align: justify; text-wrap: wrap; border: 0px solid; box-sizing: border-box; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255); margin-top: 0px !important;">
              <span style="font-size: 16px;"></span><span style=" font-size: 16px;">   在质量管理系统（QMS）中，质量追溯管理系统起到了重要的作用。它通过记录和追踪产品的生产过程、原材料来源以及销售渠道等信息，实现了对产品全生命周期的管理和追溯。一旦发生质量问题，企业可以迅速定位问题源头，采取相应措施，避免类似问题再次发生。质量追溯管理系统不仅有助于提高产品质量，还能够满足监管部门的要求，保证企业的合规性。</span>
            </p>
            <p style="-webkit-tap-highlight-color: rgba(255, 255, 255, 0); margin-bottom: 16px; text-align: justify; text-wrap: wrap; border: 0px solid; box-sizing: border-box; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255); margin-top: 0px !important;">
              <span style="font-size: 16px;"></span><span style=" font-size: 16px;">  质量管理系统是企业提升产品质量和竞争力的重要手段。通过产品质量管理系统的综合应用，企业能够全面提升产品的质量水平，满足客户需求，赢得市场竞争优势。</span>
            </p>
            <p style="margin-bottom: 16px; text-align: justify; text-wrap: wrap;">
              <h3 style="color: #666666">二、质量管理系统的功能</h3>
            </p>
            <p style="font-size: 16px;    color: #686868;">
              质量管理系统总体功能包括：系统管理，个人设置，工艺管理，计划任务，产品制造，仓库，供应链，计量，工装辅具，计时计件，售后索赔，品质管理，文控管理，数据调度，溯源管理；
            </p>
            <p style="text-align: justify; text-wrap: wrap;">
              <h4 style="color: #666666">1、系统管理包括：</h4>
            </p>
            <p style="font-size: 16px;    color: #686868;">
              菜单管理，公司管理，部门管理，角色管理，权限管理，账号管理；
            </p>
            <p style=" text-align: justify; text-wrap: wrap;">
              <h4 style="color: #666666">2、个人设置包括：</h4>
            </p>
            <p style="font-size: 16px;    color: #686868;">
              账户设置；
            </p>
            <p style=" text-align: justify; text-wrap: wrap;">
              <h4 style="color: #666666">3、工艺管理包括：</h4>
            </p>
            <p style="font-size: 16px;    color: #686868;">
              项目，测试，产线，打印，同步，终端等相关配置；
            </p>
            <p style="text-align: justify; text-wrap: wrap;">
              <h4 style="color: #666666">4、计划任务包括：</h4>
            </p>
            <p style="font-size: 16px;    color: #686868;">
              工单，统计等相关工单配置及数据统计；
            </p>
            <p style=" text-align: justify; text-wrap: wrap;">
              <h4 style="color: #666666">5、产品制造包括：</h4>
            </p>
            <p style="font-size: 16px;    color: #686868;">
              生产，电芯，模组，线束，成组，总装，工位等相关功能；
            </p>
            <img style="display: flex" src="@/assets/zr/a1.png">
            <p style=" text-align: justify; text-wrap: wrap;">
              <h4 style="color: #666666">10、计时计件管理包括：</h4>
            </p>
            <p style="font-size: 16px;    color: #686868;">
              生产报工，异常工时等相关功能；
            </p>
            <img style="display: flex" src="@/assets/zr/a2.png">
            <p style=" text-align: justify; text-wrap: wrap;">
              <h4 style="color: #666666">12、品质管理包括：</h4>
            </p>
            <p style="font-size: 16px;    color: #686868;">
              1）品质-TEST包括：测试等相关功能；
            </p>
            <img style="display: flex" src="@/assets/zr/a3.png">
            <p style=" text-align: justify; text-wrap: wrap;">
              <h3 style="color: #666666">三、质量管理系统定制开发</h3>
            </p>
            <p style="font-size: 16px;    color: #686868;">
              在使用质量管理系统软件（QMS）的时候，如果您觉得有部分功能不能满足，我们可以根据您的需求定制开发，定制开发有如下好处：<br/>
              针对性强：每一个软件开发都经过系统的分析，针对不同企业情况量身定做的，大大提高企业的工作效率<br/>
              使用方便：根据企业现有工作流程开发程序，用户只需具备基本计算机知识，就可以自如的操作软件<br/>
              费用便宜：定制软件会开发企业所需的功能模块，删除不需要的功能，最大限度的节省开发费用<br/>
              服务周到：定制软件在使用过程中出现的问题，我们会及时上门沟通调试,为你提供专业、迅捷的服务。
            </p>
          </div></div>
      </div>
      <div v-if="navId===4">
        <div class="content w1200 newsPage clearfix aos-init aos-animate" aos="fade-up" aos-easing="ease" aos-duration="700" aos-delay="100">


          <ul class="list">


            <li class="item clearfix"><a title="揭秘线束行业QMS质量管理：从入门到精通的全方位解析"><img class="fl" src="@/assets/zr/z5.png" alt="揭秘线束行业QMS质量管理：从入门到精通的全方位解析"><div class="time fr"><span class="day">05-15</span><span>2024</span></div><h3>揭秘线束行业QMS质量管理：从入门到精通的全方位解析</h3><div class="txt">线束作为现代电子设备和汽车制造中的关键部件，其质量和可靠性直接影响着产品的整体性能。因此，线束行业对于质量管理的要求尤为严格。本文将从QMS（Quality Management System，质量管理体系）的角…</div></a></li>

            <li class="item clearfix"><a title="汽车制造业售后服务系统解决方案"><img class="fl" src="@/assets/zr/z2.png" alt="汽车制造业售后服务系统解决方案"><div class="time fr"><span class="day">01-15</span><span>2024</span></div><h3>汽车制造业售后服务系统解决方案</h3><div class="txt">1、数据洞察透视难：手工报表耗时耗力，数据的规范统计力度不够，业务存在数据孤岛，数据分析不准确不及时，无法充分利用信息，使决策精准2、客户管理粗放：客户信息散落在各个业务员或部门，客户未…</div></a></li>

            <li class="item clearfix"><a title="汽车制造行业质量管理系统解决方案"><img class="fl" src="@/assets/zr/z3.png" alt="汽车制造行业质量管理系统解决方案"><div class="time fr"><span class="day">01-15</span><span>2024</span></div><h3>汽车制造行业质量管理系统解决方案</h3><div class="txt">1、进料检验、供应商管理、制造过程、售后质量管理等数据多为纸面手工记录分散在部门，质量数据信息共享难度大。2 、质量数字化建设存在断层，使质量管理成为“黑匣子”随着企业发展，在运营管理中…</div></a></li>

            <li class="item clearfix"><a title="中药生产质量管理系统追溯解决方案"><img class="fl" src="@/assets/zr/z4.png" alt="中药生产质量管理系统追溯解决方案"><div class="time fr"><span class="day">04-14</span><span>2023</span></div><h3>中药生产质量管理系统追溯解决方案</h3><div class="txt">一、建设背景通过对中药材种植和养殖基地、中药饮片生产企业和中成药生产企业、中药饮片经营企业、医疗机构及零售药店等环节的关键信息建立电子化登记、管理和查询，构建“中药材溯源平台系统”，溯…</div></a></li>

            <li class="item clearfix"><a title="食品行业质量管理系统追溯解决方案"><img class="fl" src="@/assets/zr/z5.png" alt="食品行业质量管理系统追溯解决方案"><div class="time fr"><span class="day">04-14</span><span>2023</span></div><h3>食品行业质量管理系统追溯解决方案</h3><div class="txt">一、项目背景民以食为天，食品安全是老百姓基本的保障，为了快速准确了解食品生产过程，及时处理问题产品，掌握下游各级经营状况，降低企业物流成本,，掌握产品实时流向，快速冻结和召回问题产品。…</div></a></li>
          </ul>




          <!--分页样式-->



        </div>
      </div>
      <div v-if="navId===5">
        <div class="content aboutPagePC clearfix aos-init aos-animate" aos="fade-up" aos-easing="ease" aos-duration="700" aos-delay="100">
          <div class="txtcon"><h1 style="text-align: center;">
            <span style="font-size: 36px;"><strong>质量系统定制</strong></span>
          </h1>
            <p>
              <br>
            </p>
            <p>
              <br>
            </p>
            <p>
              <span style="background-color: rgb(255, 255, 255); color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px;"><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);"><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);"><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);"><a title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>是企业保证产品和服务质量的重要手段，<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">它涵盖了从原材料采购到生产制造、产品销售和售后服务的全过程</span>然而，由于不同企业的需求各异，通用的<a title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>并不能完全满足所有企业的需求。因此，定制开发<a title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>成为了许多企业的选择</span></span>。</span></span>
            </p>
            <p>
              <span style="background-color: rgb(255, 255, 255); color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px;"><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);"><br></span></span>
            </p>
            <p style="text-align: center;">
              <img src="@/assets/zr/2024011640222061.png" title="星服质量管理系统定制开发" alt="星服质量管理系统定制开发" border="0" vspace="0">
            </p>
            <p>
              <br>
            </p>
            <p>
              <span style="background-color: rgb(255, 255, 255); color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px;"></span><br>
            </p>
            <h2>
              <strong><span style=" font-size: 18px;">一、<a  title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>定制开发的步骤：</span></strong>
            </h2>
            <p>
              <strong><span style=" font-size: 18px;"><br></span></strong>
            </p>
            <p style="text-align: center;">
              <strong><span style=" font-size: 18px;"><img src="@/assets/zr/2024011638835597.png" title="售后服务系统定制开发步骤" alt="售后服务系统定制开发步骤" style="text-align: center; text-wrap: wrap; " border="0" vspace="0"><br></span></strong>
            </p>
            <p>
              <strong><span style=" font-size: 18px;"><br></span></strong>
            </p>
            <p>
              <span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);">1、<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">第一步是需求分析。在开始定制开发之前，企业需要明确自身的需求。这包括确定需要管理的过程和关键指标，以及对系统功能和界面的具体要求</span><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);"><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);"></span></span></span>
            </p>
            <p>
              <span style=" font-size: 16px;">2、<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">第二步是系统设计。在需求分析的基础上，开发团队将根据企业的需求制定系统设计方案。这包括确定系统的架构、功能模块和数据流程等</span><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);"><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);"></span>。</span></span>
            </p>
            <p>
              <span style=" font-size: 16px;">3、<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">第三步是系统开发。在设计方案确定后，开发团队将开始系统的编码和测试工作。开发人员将根据设计方案编写代码，并进行单元测试和集成测试，以保证系统的质量和稳定性</span><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);"><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);"><span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">。</span></span></span></span>
            </p>
            <p>
              <span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);">4、最后是部署和培训，<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">将系统部署到企业的服务器上，并进行必要的配置和测试。同时我们还会为企业的员工提供培训，使他们能够熟练地使用<a  title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a></span></span><br><br>
            </p>
            <h2>
              <span style="font-size: 18px;"><strong><span style="font-size: 18px; ">二、定制的软件清单</span></strong></span>
            </h2>
            <p style="text-align: left;">
              <span style=" font-size: 16px;"><a  title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>定制开发服务包括<a  title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>定制开发、追溯管理系统和售后服务系统定制开发</span>
            </p>
            <p style="text-align: center;">
              <img src="@/assets/zr/2024011641970317.png" title="image.png" alt="image.png">
            </p>
            <h2>
              <strong><span style=" font-size: 18px;">三、<a  title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>定制的好处</span></strong>
            </h2>
            <p>
              <strong><span style=" font-size: 18px;"></span></strong>
            </p>
            <p>
              <span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);">1、<a title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>可以帮助企业提高质量管控的水平、产品缺陷追溯的效率和<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">提高售后服务的质量和满意度</span>。</span>
            </p>
            <p>
              <span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);">2、<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">定制开发适合自身需求的<a  title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>，运用起来得心应手，</span>为<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">企业节省人力物力成本，提高工作效率</span>。</span>
            </p>
            <p>
              <span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);">3、<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">通过系统的数据分析和报表功能，企业可以及时了解生产个环节的运行状况和质量管控情况，从而提前做出相应的决策</span>。</span>
            </p>
            <p>
              <span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; background-color: rgb(255, 255, 255);">4、<span style="color: rgb(36, 41, 47); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, &quot;Noto Sans&quot;, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;; font-size: 15px; text-wrap: wrap; background-color: rgb(255, 255, 255);">定制开发的<a  title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>将成为企业的重要竞争优势，推动企业的可持续发展</span>。</span>
            </p>
            <p>
              <span style=""><br></span><br>
            </p>
            <p>
              <br>
            </p></div></div>

      </div>
      <div v-if="navId===6">
        <div class="content w1200 newsPage clearfix aos-init aos-animate" aos="fade-up" aos-easing="ease" aos-duration="700" aos-delay="100">


          <ul class="list">
            <li class="item clearfix"><a  title="美的冷柜高新区工厂售后服务系统"><img class="fl" src="@/assets/zr/w1.png" alt="美的冷柜高新区工厂售后服务系统"><div class="time fr"><span class="day">12-29</span><span>2023</span></div><h3>美的冷柜高新区工厂售后服务系统</h3><div class="txt">美的冷柜合肥工业园位于安徽省合肥市高新区玉兰大道，是中国最具规模的冷柜生产基地之一和出口地之一，是美的制冷家电集团冰箱事业部旗下最大的制造工厂。工厂位于合肥高新开发区风光秀丽的大蜀山脚…</div></a></li>

            <li class="item clearfix"><a  title="江淮华霆追溯管理系统"><img class="fl" src="@/assets/zr/w2.png" alt="江淮华霆追溯管理系统"><div class="time fr"><span class="day">12-29</span><span>2023</span></div><h3>江淮华霆追溯管理系统</h3><div class="txt">江淮华霆动力电池有限公司是一家新能源汽车动力系统研发商，主营汽车零部件、电池系统的开发、生产、销售及新技术、新产品的研发；自营和代理各类商品和技术的进出口业务1、数据来源多样性在整个生…</div></a></li>

            <li class="item clearfix"><a  title="安徽美芝性能线质量管理系统"><img class="fl" src="@/assets/zr/w3.png" alt="安徽美芝性能线质量管理系统"><div class="time fr"><span class="day">12-19</span><span>2023</span></div><h3>安徽美芝性能线质量管理系统</h3><div class="txt">安徽美芝制冷设备有限公司是GMCC美芝四大生产基地之一，位于安徽省合肥市高新技术产业开发区科学示范城内，产品使用“GMCC”商标，经营范围包括开发、设计、制造和销售小型制冷压缩机、电机及电机零…</div></a></li>
          </ul>

        </div>
      </div>
      <div v-if="navId===7">
        <div class="content aboutPagePC clearfix aos-init aos-animate" aos="fade-up" aos-easing="ease" aos-duration="700" aos-delay="100">
          <div class="txtcon">
            <h1 style="text-indent: 42.66px; text-align: center;">
              <span style=" font-size: 24px;">质量系统收费标准</span>
            </h1>
            <p style="text-align: center;">
            <span style=" font-size: 24px;">
              <br>
              <img src="@/assets/zr/q1.png" title="质量管理系统定制价格" alt="质量管理系统定制价格" width="400" height="238"  style="width: 400px; height: 238px;">
            </span>
            </p>
            <p>
              <span style=" font-size: 24px;"><br></span>
            </p>
            <p class="ql-lineheight-200" style="text-indent: 42.66px; text-align: left;">
            <span style=" font-size: 16px;">
              <a  title="质量管理系统" target="_blank" class="sitelink">质量管理系统</a>
              开发收费标准将根据具体现场情况进行评估和计算，这跟企业质量控制流程的多少，接口多少以及接口复杂度都有很大关系。以下为一般情况下的价格范围：</span>
            </p>
            <p class="ql-lineheight-200" style="text-indent: 42.66px; text-align: left;">
            <span style=" font-size: 16px;">
              <strong style="text-indent: 42.66px; white-space: normal; font-size: 18px;">
                <span style="">具体收费标准</span>
              </strong>
            </span>
            </p>
            <p class="ql-lineheight-200" style="text-indent: 42.66px; text-align: left;">
              <span style=" font-size: 16px;">1. 定制开发项目：</span>
            </p>
            <p class="ql-lineheight-200" style="text-indent: 42.66px; text-align: left;">
              <span style=" font-size: 16px;">- 基础版固定价格：65万元</span>
            </p>
            <p class="ql-lineheight-200" style="text-indent: 42.66px; text-align: left;">
              <span style=" font-size: 16px;">- 定制开发部分按小时计费：200 - 500 元/小时</span>
            </p>
            <p class="ql-lineheight-200" style="text-indent: 42.66px; text-align: left;">
              <span style=" font-size: 16px; text-indent: 42.66px;">2. 定制开发模块收费标准，仅供参考：</span>
            </p>
            <p style="text-align:left">
            <span style=" font-size: 16px;">质量运营信息系统总体功能包括：
              <strong>系统管理，个人设置，工艺，计划任务，制造部，仓库，供应链，计量，工装辅具，计时计件，售后索赔，品质管理，文控管理，数据调度，其它功能</strong>；
            </span>
            </p>
            <p style="text-align:left">
              <strong>---<span style=" font-size: 16px;">系统管理包括：（￥30000）</span></strong>
            </p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; 菜单管理，公司管理，部门管理，角色管理，权限管理，账号管理；</span></p>
            <p style="text-align:left"><strong>--<span style=" font-size: 16px;">个人设置包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥10000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; 账户设置；</span></p>
            <p style="text-align:left"><strong>---<span style=" font-size: 16px;">工艺包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥50000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; 项目，测试，产线，打印，同步，终端等相关配置；</span></p>
            <p style="text-align:left"><strong>--- <span style=" font-size: 16px;">计划任务包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥50000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;工单，统计等相关工单配置及数据统计；</span></p>
            <p style="text-align:left">&nbsp;<strong>---<span style=" font-size: 16px;">制造部包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥150000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;生产，电信，模组，线束，成组，总装，工位等相关功能；</span></p>
            <p style="text-align:left"><strong>---<span style=" font-size: 16px;">仓库包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥150000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; 扫码，溯源，数据等相关功能；</span></p>
            <p style="text-align:left"><strong>--<span style=" font-size: 16px;">供应链包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥150000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; 信息，评级评分，供应商推送等相关功能；</span></p>
            <p style="text-align:left"><strong>---<span style=" font-size: 16px;">计量包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥50000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; 设备，供应商计量等相关功能；</span></p>
            <p style="text-align:left"><strong>---<span style=" font-size: 16px;">工装辅具包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥50000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; 工装及辅具等相关功能；</span></p>
            <p style="text-align:left">&nbsp;<strong>--<span style=" font-size: 16px;">计时计件包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥100000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;生产报工，异常工时等相关功能；</span></p>
            <p style="text-align:left">&nbsp;<strong>---<span style=" font-size: 16px;">售后索赔包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥150000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 售后及索赔等相关功能；</span></p>
            <p style="text-align:left"><span style=" font-size: 16px;"><strong>--品质管控：<span style=" font-size: 16px; text-wrap: wrap;">（￥200000）</span></strong></span></p>
            <p style="text-align:left">&nbsp;&nbsp;&nbsp;<span style=" font-size: 16px;">品质-TEST包括：测试等相关功能；</span></p>
            <p style="text-align:left">&nbsp;&nbsp;&nbsp;<span style=" font-size: 16px;">品质-QC包括：产线，扫码，不良品，条码图片，铭牌首件确认等相关功能；</span></p>
            <p style="text-align:left">&nbsp;&nbsp;&nbsp;<span style=" font-size: 16px;">品质-SQE包括：供应商，DPPM；</span></p>
            <p style="text-align:left">&nbsp;&nbsp;&nbsp;<span style=" font-size: 16px;">品质-QE包括：配置，数据，索赔等相关功能；</span></p>
            <p style="text-align:left">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style=" font-size: 16px;">品质-QS包括：统计，溯源，维修更换等相关功能；</span></p>
            <p style="text-align:left">&nbsp;&nbsp;<strong>---<span style=" font-size: 16px;">文控管理包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥150000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;文件管理，文件审核，文件审核配置等相关功能；</span></p>
            <p style="text-align:left">&nbsp;&nbsp;<strong>---<span style=" font-size: 16px;">数据调度包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥150000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 调度单，接收单等线管功能；</span></p>
            <p style="text-align:left">&nbsp;&nbsp;&nbsp;<strong>---<span style=" font-size: 16px;">其它管理包括：<span style=" font-size: 16px; text-wrap: wrap;">（￥100000）</span></span></strong></p>
            <p style="text-align:left"><span style=" font-size: 16px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 系统，溯源，其它等相关功能；</span></p>
            <p><span style="text-wrap: wrap;"></span><br></p><p class="ql-lineheight-200" style="text-indent: 42.66px; text-align: left;"><span style=" font-size: 16px; text-indent: 42.66px;"><br></span><br></p>
            <p class="ql-lineheight-200" style="text-indent: 42.66px; text-align: center;"><span style=" font-size: 16px;"></span></p>
            <p><br></p><p style="text-align: center;"><br></p><p><br></p><p><br></p><p style="text-align: center;"><br></p></div></div>
      </div>
      <div v-if="navId===8">
        <div class="content w1200 newsPage clearfix aos-init aos-animate">
          <ul class="list">
            <li class="item clearfix" v-for="(item,index) in mainData1" :key="index"><a >
              <img class="fl" :src="item.cover" >
              <div class="time fr">
                <span class="day">{{item.mounth}}</span>
                <span>{{item.year}}</span>
              </div>
              <h3>{{item.title}}</h3>
              <div class="txt">{{item.txt}}</div>
            </a>
            </li>

          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CooperationPage",
  data() {
    return {
      csrNewsId: 1,
      csrId: 0,
      fadeId: 1,
      navId: 1,
      mainData1:[
        {
          cover:require('@/assets/zr/e1.png'),
          mounth:'03-11',
          year:'2025',
          title:'标准件厂工艺参数和检测参数都有哪些',
          txt:'随着工业信息化的发展，标准件的生产和质量管理面临着越来越高的要求，越来越灵活的供货周期，很多企业因为不能适应高标准、快节奏的要求，纷纷被市场淘汰，那么一个标准件厂都有哪些参数是质量管理…'
        },
        {
          cover:require('@/assets/zr/e2.png'),
          mounth:'08-13',
          year:'2024',
          title:'有了MES、ERP，质量管理为什么还需要QMS？',
          txt:'在竞争激烈的市场环境中，企业面临着前所未有的挑战：如何在保证产品质量的同时，有效控制成本，以实现利润最大化与品牌价值的双重提升？这不仅是管理学的经典议题，更是每一个企业经营者必须深思熟…'
        },
        {
          cover:require('@/assets/zr/e3.png'),
          mounth:'08-08',
          year:'2024',
          title:'解释一下QMS系统是做什么的？',
          txt:'在当今竞争激烈的市场环境中，品质不仅是企业生存的基石，更是其持续发展的核心竞争力。品质管理体系（Quality Management System, QMS）作为确保产品和服务质量一致性的重要框架，其运作的核心机制…'
        },
        {
          cover:require('@/assets/zr/e4.png'),
          mounth:'08-02',
          year:'2024',
          title:'TQM全员质量管理有什么好处？',
          txt:'在制造业，质量管理始终是企业管理中永恒的主题。品质管理要想做得更好，企业必须掌握足够多、足够有用的数据和信息，实现质量管理信息化。很多中小企业也很困惑，是否有必要上线QMS质量管理系统？…'
        },
        {
          cover:require('@/assets/zr/e5.png'),
          mounth:'07-24',
          year:'2024',
          title:'揭秘合成革生产',
          txt:'揭秘QMS系统：打造企业质量管理的隐形引擎'
        },
        {
          cover:require('@/assets/zr/e6.png'),
          mounth:'07-19',
          year:'2024',
          title:'揭秘线束厂品质管理软件',
          txt:'解锁企业新引擎：全面质量管理的深远益处要在竞争激烈的商业环境中持续发展并脱颖而出，企业必须建立一套高效而全面的管理体系。全面质量管理（Total Quality Management, TQM）就是这样一把钥匙…'
        },
        {
          cover:require('@/assets/zr/e7.png'),
          mounth:'07-11',
          year:'2024',
          title:'深入解析光伏行业安全质量管理',
          txt:'随着科技的不断进步，合成革作为一种广泛应用于鞋类、箱包、家具等领域的材料，其生产过程中的质量数据采集与追溯管理变得愈发重要。今天，就让我们一起走进合成革生产的背后，探究这一过程中的科技…'
        },
        {
          cover:require('@/assets/zr/e8.png'),
          mounth:'',
          year:'',
          title:'',
          txt:'在现代制造业中，线束厂品质管理软件成为了不可或缺的工具。它能够帮助企业从线束设计、生产、质量到仓库等环节，全面提高效率、降低成本并确保产品质量，从而实现企业的可持续发展。那么，线束厂品…'
        },
        {
          cover:require('@/assets/zr/e9.png'),
          mounth:'07-05',
          year:'2024',
          title:'揭秘中药材质量追溯系统',
          txt:'随着全球能源结构的转型和绿色发展的呼声日益高涨，光伏行业作为可再生能源的重要支柱，其安全质量管理显得尤为重要。本文将从光伏行业的安全质量管理概述、关键领域管理、实施策略及未来展望等方面…'
        },
        {
          cover:require('@/assets/zr/e10.png'),
          mounth:'07-04',
          year:'2024',
          title:'揭秘制药厂全面质量管理',
          txt:'中药材作为中华医学的瑰宝，其品质直接关系到药效的发挥和患者的健康。然而，由于中药材市场的复杂性，如何确保中药材的质量一直是一个难题。近年来，随着科技的进步，中药材质量追溯系统应运而生，…'
        },
        {
          cover:require('@/assets/zr/e11.png'),
          mounth:'2024',
          year:'2024',
          title:'制造业为什么需要质量管理系统？',
          txt:'揭秘制药厂全面质量管理：确保药品安全的每一步</h3><div class="txt">在医药行业中，药品的质量直接关系到人们的生命健康。因此，制药厂全面质量管理是确保药品安全、有效的关键环节。本文将从制药厂全面质量管理的概念入手，逐步深入介绍其管理流程、关键控制点以及持…'
        },
        {
          cover:require('@/assets/zr/e12.png'),
          mounth:'06-03',
          year:'2024',
          title:'揭秘全流程质量管理系统：从理论到实践的全方位解析',
          txt:'质量管理是一个企业最重要的核心竞争力之一。为了确保产品和服务的高质量，企业需要建立一个完善的质量管理体系。而质量管理系统（QMS）正是指导企业如何规范、组织和管理质量相关活动的框架和流程…'
        },
        {
          cover:require('@/assets/zr/e13.png'),
          mounth:'05-31',
          year:'2024',
          title:'揭秘汽车电子行业的质量管理系统',
          txt:'在当今竞争激烈的市场环境中，质量成为企业生存和发展的关键因素。全流程质量管理系统应运而生，旨在通过全面、系统的质量管理，提升产品和服务的质量水平，进而增强企业的竞争力。本文将详细解析全…'
        },
        {
          cover:require('@/assets/zr/e14.png'),
          mounth:'05-06',
          year:'2024',
          title:'注塑行业QMS质量管理系统品检模板生成方案',
          txt:'随着科技的飞速发展，汽车电子行业作为现代汽车制造业的重要支柱，其质量管理系统日益受到业界的关注。一个健全的质量管理系统不仅能够确保汽车电子产品的性能稳定，还能提高生产效率、降低成本，从…'
        },
        {
          cover:require('@/assets/zr/e15.png'),
          mounth:'04-26',
          year:'2023',
          title:'工厂如何利用质量管理系统进行品质管理?',
          txt:'今天我来和你聊一下注塑品检数据模板自动化生成解决方案哦！这个方案嘛，主要就是把注塑产品的品质检测关键指标和数据搬到一个标准化报告模板里面去，这样一来，就可以减少人工录入错误，工作效率和…'
        },
        {
          cover:require('@/assets/zr/e16.png'),
          mounth:'04-11',
          year:'2023',
          title:'质量追溯系统',
          txt:'工厂品质管理流程及标准是怎样？工厂品质管理流程一般分三大步，即进料、制程、出货检验。有人认为进料和制程较重要，只要这两关把好了，基本就没问题，其实它们之间是相互相成的，如果任一环节出现…'
        },
        {
          cover:require('@/assets/zr/e17.png'),
          mounth:'',
          year:'',
          title:'',
          txt:'质量追溯系统能够为企业提供生产全过程管理以追踪管理，提供工厂从原料采购、生产、销售闭环系统上的信息自动化管理方案。为企业提供原料管理控制、原料质量控制、产品生产质量管控、销售管理控制等…'
        },
        {
          cover:require('@/assets/zr/e18.png'),
          mounth:'03-22',
          year:'2023',
          title:'质量管理系统如何进行批次管理？',
          txt:'一、批次管理的概念在制造企业特别是流程制造行业，存在一些需要按批号管理的原材料、半成品和成品(我们统一称它们为料号)，这些料号在库房和加工现场都有明确的批次标识并隔离存放，在企业生产加工…'
        },
        {
          cover:require('@/assets/zr/e12.png'),
          mounth:'02-20',
          year:'2023',
          title:'QMS数字化平台对企业的重要意义',
          txt:'当前社会和市场形势给企业带来严重挑战，很多企业面临生存难的问题，想要活下去就必须做到节源开流。降低损耗，提高效率、保证品质便成为企业管理者重点考虑的事项。这样无意间给品质管理者，增加了…'
        },

      ],
      dianId:1
    }
  },
  methods: {
    csrNews(id) {
      this.csrNewsId = id
    },
    getcsrId(id) {
      this.csrId = id
    },
    getfade(id) {
      this.fadeId = id
    },
    getnav(id) {
      this.navId = id
    },
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
.swiper-container911 {
  width: 100%;
  overflow: hidden;
  position: relative;

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;

    .swiper-slide {
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      position: relative;

      .ban1 {
        width: 100%;

        a {
          color: #666;
          text-decoration: none;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}

.new_toc_box_c {
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;

  .new_supports_menu_hover1 {
    width: 100%;
    padding: 31px 0;
    margin: 0 auto;

    .new_toc_box_c_all {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;

      .new_csr_box_icon {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .new_csr_box_iconc:nth-child(4n+1) {
          margin-left: 0%;
        }

        .new_csr_box_iconc {
          width: 25%;
          margin-bottom: 40px;
          max-width: 145px;

          .new_toc_box_link {
            .head_flex_set {
              text-decoration: none;
              display: flex;
              flex-direction: column;
              align-items: center;

              .new_toc_box_img {
                max-width: 66px;
                max-height: 66px;

                img {
                  vertical-align: middle;
                }
              }

              .new_toc_box_name {
                font-size: 16px;
                color: #000;
                line-height: 66px;
                margin-left: 10px;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
}

.csr_icon_box {
  background-image: url('@/assets/zr/csr_bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 1166px;

  h1 {
    font-size: 30px;
    font-weight: 400;
    color: #111111;
    text-align: center;
    padding-bottom: 3.5%;
  }

  .csr_icon_box2 {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .csr_icon_box2_items:nth-child(4n), .csr_icon_box2_items:last-child {
      margin-right: 0;
    }

    .csr_icon_box2_items:hover {
      a {
        img {
          background-color: rgb(255, 255, 255);
          box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
        }

        h2 {
          color: rgb(186, 61, 64);
        }
      }

      .csr_icon_text {
        display: none !important;
      }

      .csr_icon_url {
        display: block !important;

        a {
          color: rgb(186, 61, 64) !important;
        }
      }
    }

    .csr_icon_box2_items {
      margin-bottom: 110px;
      display: block;
      text-align: center;
      margin-right: 6%;
      width: 20.5%;

      a {
        color: #666;
        text-decoration: none;

        img {
          width: 100%;
          max-width: 86px;
          border-radius: 5px;
        }

        h2 {
          font-size: 20px;
          font-weight: 400;
          color: #000000;
          padding: 20px 0;
        }


      }

      .csr_icon_text {
        display: block;
      }

      .csr_icon_url {
        display: none;

        a {
          color: #666;
          text-decoration: none;

          a {
            color: #666;
            text-decoration: none;
          }
        }
      }

      p {
        color: #666;
        font-size: 16px;
      }
    }
  }
}

.csr_news_box {
  margin: 5% 0;
  display: flex;
  flex-wrap: wrap;

  .csr_news_box01 {
    background-image: url('@/assets/zr/csr_news_bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;

    .csr_news_contents {
      padding: 10% 10% 10% 27%;

      h2 {
        padding-bottom: 5%;
        font-size: 36px;
        font-weight: 400;
        color: #111111;
      }

      .csr_news_contents_c {
        counter-reset: sectioncounter;

        .csr_news_deatil::before {
          content: '0' counter(sectioncounter);
          counter-increment: sectioncounter;
          width: 76px;
          height: 76px;
          background-image: url('@/assets/zr/csr_news_icon.png');
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          position: absolute;
          left: 0;
          right: 0;
          text-align: center;
          line-height: 76px;
          color: #fff;
          font-size: 24px;
          font-style: italic;
          font-weight: bold;
        }

        li:hover {
          a {
            color: #df0012;

            .csr_news_title {
              color: #df0012 !important;
            }

            .csr_news_date {
              color: #df0012 !important;
            }
          }
        }

        li {
          font-size: 20px;
          color: #333333;
          position: relative;
          padding-left: 100px;
          list-style: none;
          margin-bottom: 7%;

          a {
            display: block;
            padding-top: 10px;

            .csr_news_title {
              display: block;
              color: #333;
              min-height: 57px;

              img {
                vertical-align: middle;
              }
            }

            .csr_news_date {
              display: inline-block;
              text-align: right;
              width: 97%;
              font-size: 16px;
              color: #666666;
            }
          }
        }
      }
    }
  }

  .csr_news_box02 {
    display: flex;
    align-items: center;
    width: 50%;

    img {
      width: 100%;
    }
  }
}

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

.new_page_common_box {
  width: 90%;
  margin: 50px auto;

  .top_logo {
    width: 20%;
    margin: -20px auto 0px;

    img {
      width: 100%;
    }
  }

  .csr_responsibility_title {
    font-size: 24px;
    font-weight: bold;
    color: #CC0000;
    margin: 0;
    line-height: 1.4;
    text-align: center;
    width: 90%;
    margin: 0 auto 50px auto;
  }

  .head_flex_set {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;

    .csr_responsibility_box_items:nth-child(3n+1) {
      margin-left: 0;
    }

    .csr_responsibility_box_items {
      width: 32%;
      margin-left: 2%;
      border-bottom: none;
      margin-bottom: 2%;

      a {
        color: #666;
        text-decoration: none;

        .csr_responsibility_contents {
          padding: 5%;
          border: 1px solid #DDDDDD;
          border-bottom: none;

          h3::before {
            position: absolute;
            content: "";
            width: 4px;
            height: 24px;
            left: 0;
            top: 0;
          }

          .bg_red::before, .bg_red_p {
            background-color: #D24F58;
          }

          .bg_color2::before {
            background-color: #F5834E;
          }

          .bg_color3::before {
            background-color: #6F6AAA;
          }

          .bg_color4::before {
            background-color: #008CAD;
          }

          .bg_color5::before {
            background-color: #00AC7C;
          }

          .bg_color6::before {
            background-color: #6BC067;
          }

          h3 {
            font-size: 24px;
            font-weight: 400;
            color: #333333;
            position: relative;
            margin-bottom: 10px;
            padding-left: 15px;
            line-height: 24px;
          }

          p {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            height: calc(1em * 3 * 1.5);
            min-height: calc(12px * 3 * 1.5);
            color: #666666;
            line-height: 1.6;
          }
        }

        p {
          color: #fff;
          text-align: right;
          padding: 5px 5%;

        }

        .bg_red_p {
          background-color: #D24F58;
        }

        .bg_color2_p {
          background-color: #F5834E;
        }

        .bg_color3_p {
          background-color: #6F6AAA;
        }

        .bg_color7_p {
          background-color: #00B5AC;
        }

        .bg_color4_p {
          background-color: #008CAD;
        }

        .bg_color5_p {
          background-color: #00AC7C;
        }

        .bg_color6_p {
          background-color: #6BC067;
        }
      }
    }
  }

  .csr_new_title {
    font-size: 30px;
    font-weight: 400;
    color: #111111;
    text-align: center;
    margin-bottom: 45px;


    .head_flex_set {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }

  .csr_responsibility_contents_box {
    margin-bottom: 50px;

    a {
      width: 29%;
      margin-left: 2%;
      padding: 20px;
      border: 1px solid #DDDDDD;
      margin-bottom: 2%;
      align-items: center;
      text-decoration: none;

      .csr_responsibility_icon_box {
        width: 21.8%;
        text-align: center;
        margin-right: 5.2%;

        img {
          max-width: 100px;
        }
      }

      .csr_responsibility_deatil_box {
        width: 73%;

        h3 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #424241;
          font-weight: 400;
        }

        p {
          font-size: 16px;
          color: #666666;
          line-height: 1.6;
        }
      }
    }

    a:nth-child(3n+1) {
      margin-left: 0%;
    }

    .head_flex_set {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }

  .csr_margin100 {
    margin-bottom: 100px;

    .csr_new_title {
      font-size: 30px;
      font-weight: 400;
      color: #111111;
      text-align: center;
      margin-bottom: 45px;
    }

    .csr_contribution_p {
      color: #666666;
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .sp_box_table {
      .csr_contribution_table {
        width: 100%;
        font-size: 18px;

        thead {
          background-color: #00B5AC;
          color: #fff;
          border: 1px solid #00B5AC;

          th {
            font-weight: 400;
            padding: 10px 10px;
            text-align: center;
          }

          th:first-child {
            text-align: left;
          }
        }

        tbody {
          td:first-child {
            text-align: left;
          }

          td {
            color: #666666;
            border: 1px solid #00B5AC;
            font-weight: 400;
            padding: 10px 10px;
            text-align: center;
          }
        }
      }
    }
  }

  .csr_responsibility_deails_box {
    margin-top: 30px;
    margin-bottom: 100px;

    .csr_new_title {
      font-size: 30px;
      font-weight: 400;
      color: #111111;
      text-align: center;
      margin-bottom: 45px;
    }

    .csr_customer_img_box {
      margin-top: 30px;
      max-width: unset;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-wrap: wrap;

      .csr_contribution_education_img_box_items {
        width: 31%;
        margin-right: 2%;

        .img_box {
          img {
            width: 100%;
          }

          p {
            margin-top: 15px;
            color: #7C7C7C;
            text-align: center;
            font-size: 16px;
            line-height: 1.6;

            .img_title::before {
              background-image: url('@/assets/zr/csr_credibility_icon.png');
              content: '';
              position: absolute;
              top: 3px;
              left: 10px;
              width: 20px;
              height: 20px;
            }

            .img_title {
              position: relative;
              padding: 0px 15px 0 35px;
              margin: 0px auto;
              text-align: center;
              display: inline-block;
              width: auto;
            }
          }
        }
      }
    }
  }
}

.csr_story_body_box {
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.6;

  .csr_new_title {
    font-size: 30px;
    font-weight: 400;
    color: #111111;
    text-align: center;
    margin-bottom: 45px;
  }

  .left {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: 4% 0 4% 0;
    flex-direction: row-reverse !important;

    .csr_story_video {
      display: block;
      width: 50%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('@/assets/zr/video-banner1.png');
    }

    .csr_story_content {
      width: 47%;
      min-height: 432px;
      padding-left: 2%;

      .icon_book::after {
        background-image: url('@/assets/zr/icon_book.png');
        width: 17px;
        right: 28px;
        content: '';
        position: absolute;
        /* right: 18px; */
        top: 50%;
        /* width: 24px; */
        height: 23px;
        margin-top: -11.5px;
        background-repeat: no-repeat;
      }

      .csr_story_title_green {
        position: relative;
        width: 190px;
        border-radius: 24px;
        padding-right: 30px;
        margin-bottom: 2%;
        color: #fff;
        font-size: 24px;
        text-align: center;
        background: #6f6aaa;
      }

      .green {
        background: #008cad !important;
      }

      .csr_talk-green {
        border: 1px dashed #008cad !important;
      }

      .csr_talk {
        border: 1px dashed #6f6aaa;
        padding: 10px 20px;
        border-radius: 10px;
        min-height: 106px;
        align-items: center;
        margin-bottom: 3%;
        color: #2D2D2D;
        word-break: break-all;

        .csr_talk_p {
          text-align: right;
          font-weight: bold;
        }
      }
    }

    .csr_story_box_bg {
      right: -4.9vw;
      border-radius: 60px 0 0 0;
      position: absolute;
      top: 0;
      width: 80%;
      height: 100%;
      background-color: #dad7ea;
      z-index: -1;
    }

    .csr_story_box_bg-green {
      background-color: #e0ecf2;
    }

    .csr_story_box_circle_bg {
      position: absolute;
      bottom: 1px;
      z-index: -1;
      width: 65% !important;
      transform: translate(0, 50%);
      clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
      right: -4.9vw;
    }
  }

  .right {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: 4% 0 4% 0;

    .csr_story_video {
      display: block;
      width: 50%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('@/assets/zr/video-banner1.png');
    }

    .csr_story_content {
      width: 47%;
      min-height: 432px;
      padding-left: 2%;

      .icon_book::after {
        background-image: url('@/assets/zr/icon_book.png');
        width: 17px;
        right: 28px;
        content: '';
        position: absolute;
        /* right: 18px; */
        top: 50%;
        /* width: 24px; */
        height: 23px;
        margin-top: -11.5px;
        background-repeat: no-repeat;
      }

      .csr_story_title_green {
        position: relative;
        width: 190px;
        border-radius: 24px;
        padding-right: 30px;
        margin-bottom: 2%;
        color: #fff;
        font-size: 24px;
        text-align: center;
        background: #6f6aaa;
      }

      .green {
        background: #008cad !important;
      }

      .csr_talk-green {
        border: 1px dashed #008cad !important;
      }

      .csr_talk {
        border: 1px dashed #6f6aaa;
        padding: 10px 20px;
        border-radius: 10px;
        min-height: 106px;
        align-items: center;
        margin-bottom: 3%;
        color: #2D2D2D;
        word-break: break-all;

        .csr_talk_p {
          text-align: right;
          font-weight: bold;
        }
      }
    }

    .csr_story_box_bg {
      right: -4.9vw;
      border-radius: 60px 0 0 0;
      position: absolute;
      top: 0;
      width: 80%;
      height: 100%;
      background-color: #dad7ea;
      z-index: -1;
    }

    .csr_story_box_bg-green {
      background-color: #e0ecf2;
    }

    .csr_story_box_circle_bg {
      position: absolute;
      bottom: 1px;
      z-index: -1;
      width: 65% !important;
      transform: translate(0, 50%);
      clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
      right: -4.9vw;
    }
  }

  .csr_story_content_box {
    padding: 2.5% 0;

    .csr_story_content_box_title {
      display: flex;
      flex-wrap: nowrap;
      gap: 25px;

      .icon_microphone::after {
        background-image: url('@/assets/zr/icon_microphone.png');
        width: 17px;
        right: 28px;
        content: '';
        position: absolute;
        /* right: 18px; */
        top: 50%;
        /* width: 24px; */
        height: 23px;
        margin-top: -11.5px;
        background-repeat: no-repeat;
      }

      .csr_story_title_green {
        position: relative;
        width: 190px;
        border-radius: 24px;
        padding-right: 30px;
        margin-bottom: 2%;
        color: #fff;
        font-size: 24px;
        text-align: center;
        background: #6f6aaa;
      }

      .green {
        background: #008cad;
      }

      span {
        font-size: 24px;
        color: #6f6aaa;
      }
    }

    .detail {
      padding: 2% 2.5%;
      display: flex;
      flex-direction: column;
      gap: 2vw;
      border: 1px dashed #6f6aaa;
      border-radius: 10px;
      position: relative;

      .csr_story_swiper {
        overflow: hidden;

        .swiper-wrapper {

          flex-direction: column;
          gap: 2vw;
          border-radius: 10px;
          position: relative;

          .swiper-slide {
            flex-shrink: 0;
            width: 100%;
            height: 100%;
            position: relative;

            h3 {
              position: relative;
              padding-left: 15px;
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 1%;
            }

            h3::before {
              position: absolute;
              content: "";
              width: 4px;
              height: 24px;
              left: 0;
              top: 0;
              background-color: #6f6aaa;
            }

            p {
              font-size: 16px;
              color: #2D2D2D;
            }
          }
        }
      }
    }
  }
}

#nav_main {
  position: relative;
  width: 100%;
  height: 50px;
  z-index: 60;
  border-top: 1px solid #e8e8e8;

  .nav {
    display: block;
    width: 98%;
    margin: 0 auto;
    list-style: none;

    .hvr-underline-from-center2:before {
      background: #0E4B9E;
      height: 3px;
    }

    li.hover a {
      height: 50px;
      color: #0E4B9E;
    }

    li {
      float: left;
      display: block;
      width: 150px;
      height: 50px;
      font-size: 18px;
      text-align: center;
      line-height: 40px;
      position: relative;

      a {
        display: block;
        margin-top: 1px;
        text-align: center;
        position: relative;
        height: 50px;
        color: #666;
        font-size: 16px;
        line-height: 50px;
        text-decoration: none;
      }
    }
  }
}

.solutions {
  padding-top: 60px;

  .w1200 {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;

    .head_tit {
      position: relative;
      margin-bottom: 20px;

      .title {
        float: left;

        .tit {
          font-size: 24px;
          color: #333;
          line-height: 24px;
          font-weight: bold;
        }

        .etit {
          margin-top: 4px;
          font-size: 12px;
          color: #999;
          line-height: 14px;
          text-transform: uppercase;
        }
      }
    }

    .slideBox {
      .bd {
        float: left;
        width: 838px;
        height: 518px;

        ul {
          list-style: none;

          li {
            position: relative;
            display: block;
            width: 838px;
            height: 518px;

            .clearfix:after {
              visibility: hidden;
              display: block;
              font-size: 0;
              content: " ";
              clear: both;
              height: 0;
            }

            a {
              text-decoration: none;
              outline: 0;
              -webkit-transition: all .3s ease-in-out 0s;
              -moz-transition: all .3s ease-in-out 0s;
              transition: all .3s ease-in-out 0s;
              color: #333333;

              .img {
                position: absolute;
                left: 90px;
                display: block;
                width: 706px;
                height: 518px;
                z-index: 2;
              }

              .txt {
                position: absolute;
                top: 86px;
                left: 0;
                display: block;
                width: 390px;
                height: 360px;
                background: url('@/assets/zr/txt_bg.png') no-repeat;
                z-index: 3;

                .tit {
                  margin-top: 100px;
                  margin-left: 60px;
                  font-size: 18px;
                  color: #333;
                  line-height: 20px;
                  font-weight: bold;
                }

                .cont {
                  margin-top: 20px;
                  margin-left: 60px;
                  width: 260px;
                  font-size: 14px;
                  color: #666;
                  line-height: 24px;
                }
              }
            }
          }
        }
      }

      .hd {
        float: right;
        width: 354px;

        .arrow {
          position: absolute;
          top: 260px;
          left: 388px;
          z-index: 12;

          a {
            text-decoration: none;
            outline: 0;
            -webkit-transition: all .3s ease-in-out 0s;
            -moz-transition: all .3s ease-in-out 0s;
            transition: all .3s ease-in-out 0s;
            color: #333333;
          }

          .next {
            display: block;
            width: 38px;
            height: 92px;
            background: url('@/assets/zr/nNext.png') no-repeat;
            cursor: pointer;
          }
        }

        ul {
          list-style: none;

          .on {
            background-color: #0E4B9E;
            transition: all ease 600ms;

            a {
              .txt {
                background: url('@/assets/zr/ico11.png') no-repeat;

                .tit {
                  color: #fff !important;
                }

                .etit {
                  color: #fff !important;
                }
              }
            }
          }

          .item1 {
            .txt {
              background: url('@/assets/zr/ico1.png') no-repeat;
            }
          }

          .item2.on .txt {
            background: url('@/assets/zr/ico21.png') no-repeat;
          }

          .item3.on .txt {
            background: url('@/assets/zr/ico31.png') no-repeat;
          }

          .item2 {
            .txt {
              background: url('@/assets/zr/ico2.png') no-repeat;
            }
          }

          .item3 {
            .txt {
              background: url('@/assets/zr/ico3.png') no-repeat;
            }
          }

          li {
            display: block;
            width: 360px;
            height: 162px;
            margin-bottom: 12px;
            border: 1px solid #ececec;
            cursor: pointer;

            a {
              text-decoration: none;
              outline: 0;
              -webkit-transition: all .3s ease-in-out 0s;
              -moz-transition: all .3s ease-in-out 0s;
              transition: all .3s ease-in-out 0s;
              color: #333333;

              .txt {
                height: 90px;
                margin-top: 40px;
                margin-left: 40px;
                padding-left: 110px;

                .tit {
                  padding-top: 20px;
                  font-size: 18px;
                  color: #666;
                  line-height: 20px;
                  font-weight: bold;
                }

                .etit {
                  margin-top: 8px;
                  font-size: 14px;
                  color: #999;
                  text-transform: uppercase;
                }
              }
            }
          }
        }
      }
    }
  }
}

.icaseShow {
  margin-top: 60px;

  .icase {
    position: relative;
    height: 70px;
    width: 1200px;
    margin: 0 auto;

    .head_tit {
      position: relative;
      margin-bottom: 20px;

      .title {
        float: left;

        .tit {
          font-size: 24px;
          color: #333;
          line-height: 24px;
          font-weight: bold;
        }

        .etit {
          margin-top: 4px;
          font-size: 12px;
          color: #999;
          line-height: 14px;
          text-transform: uppercase;
        }
      }
    }
  }

  .caseMain {
    position: relative;
    width: 100%;
    height: 476px;
    background: url('@/assets/zr/case_bg.png') no-repeat;
    background-size: 100% 476px;

    .w1200 {
      width: 1200px;
      margin: 0 auto;

      .bd {
        position: relative;
        width: 100%;
        padding-top: 60px;
        z-index: 12;

        .list {
          width: 106%;
          list-style: none;

          li:hover {
            a {
              .txt {
                background: #0e4b9e;
                color: white !important;

                .tit {
                  color: white !important;
                }

                .cont {
                  color: white !important;
                }

                .more {
                  color: white !important;
                }
              }
            }
          }

          li {
            float: left;
            width: 280px;
            height: 356px;
            margin-right: 26px;

            a {
              text-decoration: none;
              outline: 0;
              -webkit-transition: all .3s ease-in-out 0s;
              -moz-transition: all .3s ease-in-out 0s;
              transition: all .3s ease-in-out 0s;
              color: #333333;

              .img {
                display: block;
                width: 280px;
                height: 210px;
              }

              .txt {
                width: 240px;
                height: 146px;
                padding: 0 20px;
                background: #fff;
                transition: all ease 600ms;

                .tit {
                  padding-top: 20px;
                  font-size: 16px;
                  color: #666;
                  line-height: 30px;
                  font-weight: bold;
                }

                .cont {
                  font-size: 14px;
                  color: #999;
                  line-height: 24px;
                }

                .more {
                  margin-top: 12px;
                  font-size: 14px;
                  color: #999;
                  line-height: 14px;
                }
              }
            }
          }
        }
      }

      .hd {
        position: absolute;
        top: 224px;
        width: 1200px;
        height: 30px;


        .prev {
          position: absolute;
          display: block;
          width: 29px;
          height: 29px;
          cursor: pointer;
          background-position: 0 0;
          left: -6.6%;
        }

        .next {
          background-position: -36px 0;
          right: -6.6%;
          position: absolute;
          display: block;
          width: 29px;
          height: 29px;
          cursor: pointer;
        }

        .icon {
          background: url('@/assets/zr/icon.png') no-repeat;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
}

.aboutus {
  height: 520px;

  .about {
    padding-top: 60px;
    width: 1200px;
    margin: 0 auto;

    .aboutImg {
      position: absolute;
      width: 590px;
      height: 396px;

      .aboutBg {
        position: absolute;
        top: 0;
        left: 0;
        width: 280px;
        height: 396px;
        background: #0E4B9E;
        z-index: 2;
      }

      .aImg {
        position: relative;
        z-index: 3;

        .img {
          margin-left: 30px;
          width: 560px;
          height: 345px;
        }

        .tit {
          padding-left: 18px;
          margin-left: 30px;
          background: url('@/assets/zr/triger.png') no-repeat left center;
          color: #fff;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }

    .aboutCont {
      position: relative;
      float: right;
      width: 506px;
      height: 396px;

      .about_tit {
        padding-top: 60px;

        .cName {
          font-size: 24px;
          color: #333;
          line-height: 40px;
          font-weight: bold;
        }

        .eName {
          margin-top: 8px;
          font-size: 12px;
          color: #999;
          line-height: 12px;
        }

        .line {
          width: 140px;
          height: 1px;
          margin-top: 20px;
          background-color: #9ad9f3;
          margin-left: -90px;
        }
      }

      .cont {
        margin-top: 30px;
        font-size: 14px;
        line-height: 26px;
        color: #666;
      }

      .line1 {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 30px;
        height: 3px;
        background-color: #0E4B9E;
      }

      .more {
        position: absolute;
        top: 0;
        right: 0;
        padding-left: 52px;
        font-size: 14px;
        line-height: 14px;
        background: url('@/assets/zr/line1.png') no-repeat left center;
        color: #999;
      }
    }
  }
}

.companyNews {
  width: 100%;
  height: 594px;
  background: url('@/assets/zr/news_bg.png') no-repeat;
  background-size: 100% 594px;

  .w1200 {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .head_tit {
      position: relative;
      margin-bottom: 20px;
      padding-top: 60px;

      .title {
        float: left;

        .tit {
          font-size: 24px;
          color: #fff;
          line-height: 24px;
          font-weight: bold;
        }

        .etit {
          margin-top: 4px;
          font-size: 12px;
          color: #999;
          line-height: 14px;
          text-transform: uppercase;
        }
      }

      .more {
        padding-left: 52px;
        margin-top: 14px;
        float: right;
        font-size: 14px;
        line-height: 14px;
        background: url('@/assets/zr/line1.png') no-repeat left center;
        color: #999;
      }
    }

    .showNew {
      margin-top: 20px;

      .left {
        float: left;
        width: 440px;

        .rest {
          position: relative;
          width: 440px;
          height: 400px;

          .bd {
            .tempWrap {
              ul {
                list-style: none;

                li {
                  position: relative;
                  width: 440px;
                  height: 400px;

                  a {
                    text-decoration: none;
                    outline: 0;
                    -webkit-transition: all .3s ease-in-out 0s;
                    -moz-transition: all .3s ease-in-out 0s;
                    transition: all .3s ease-in-out 0s;
                    color: #333333;

                    img {
                      display: block;
                      width: 440px;
                      height: 256px;
                    }

                    .txt {
                      width: 440px;
                      height: 144px;
                      background: #fff;
                      transition: all ease 600ms;

                      .tit {
                        padding-top: 30px;
                        margin-left: 24px;
                        font-size: 16px;
                        color: #666;
                        text-align: left;
                        line-height: 30px;
                        font-weight: bold;
                      }

                      .cont {
                        width: 386px;
                        margin-top: 8px;
                        margin-left: 24px;
                        font-size: 14px;
                        color: #999;
                        line-height: 24px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      .right {
        float: left;
        width: 730px;
        margin-left: 30px;

        .showList {
          width: 106%;

          ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;

            li {
              position: relative;
              float: left;
              width: 345px;
              height: 190px;
              margin-bottom: 20px;
              margin-right: 20px;
              background: #fff;
              transition: all ease 600ms;
              cursor: pointer;
              overflow: hidden;

              a {
                width: 100%;
                display: block;
                cursor: pointer;
                text-decoration: none;

                .time {
                  float: left;
                  width: 60px;
                  padding-top: 70px;
                  margin-left: 16px;

                  .day {
                    font-size: 42px;
                    color: #f6b827;
                    line-height: 36px;
                    width: 100%;
                    height: 50px;
                    /* line-height: 50px; */
                    text-align: center;
                    font-weight: bold;
                  }

                  .year {
                    margin-top: 6px;
                    font-size: 12px;
                    color: #666;
                    line-height: 14px;
                    text-indent: 3px;
                  }
                }

                .txt {
                  float: left;
                  width: 250px;
                  margin-left: 12px;

                  .tit {
                    padding-top: 40px;
                    font-size: 16px;
                    color: #666;
                    text-align: left;
                    line-height: 36px;
                    width: 100%;
                    height: 50px;
                    font-weight: bold;
                  }

                  .cont {
                    font-size: 14px;
                    color: #999;
                    line-height: 24px;
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
.aboutPagePC {
  padding: 10px 10px;
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);

  .txtcon {
    h1 {
      font-size: 20px;
      font-weight: bolder;
    }
  }}
.w1200 {
  width: 1200px;
  margin: 0 auto;ul{
  list-style: none; .item {
    width: 100%;
    height: 188px;
    margin-bottom: 20px;
    background: #fff;a {
      width: 100%;
      height: 100%;
      display: block;
      cursor: pointer;text-decoration: none;img {
        width: 224px;
        height: 188px;
        display: block;
        margin-right: 10px;
      }.fl {
         float: left;
       }.time {
          width: 150px;
          padding-top: 45px;
          font-family: arial;
          font-size: 20px;
          color: #999; .day {
          font-size: 40px;
          line-height: 45px;
          display: block;
        }
        }.fr {
           float: right;
         }
      h3{
        font-size: 14px;
        font-weight: normal;
      }.txt {
         color: #999999;
         line-height: 24px;
         height: 48px;
         padding-right: 10px;
         overflow: hidden;
       }
    }
  }
}
}
</style>
