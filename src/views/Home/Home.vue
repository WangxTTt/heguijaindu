<template>
  <div>
    <div class="banner">
      <img alt="" src="../../assets/home/banner.png"/>
    </div>

    <div class="embox">
      <div class="emtitle">合规管理体系</div>
      <embed src="@/assets/home/合规管理体系2.svg.full.svg" style="width: 1200px;margin: auto" type=""/>
    </div>
    <div class="embox">
      <div class="emtitle">合规体系文化</div>
      <embed src="@/assets/home/合规文化2.svg.full.svg" style="width: 1200px;margin: auto" type=""/>
    </div>
    <div class="embox">
      <div class="emtitle">合规体系设计模块</div>
      <embed src="@/assets/home/合规体系设计模块2.svg.full.svg" style="width: 1200px;margin: auto" type=""/>
    </div>
    <div class="embox">
      <div class="emtitle">合规管理目标</div>
      <embed src="@/assets/home/合规管理目标.svg.full.svg" style="width: 1200px;margin: auto" type=""/>
    </div>
    <div class="embox">
      <div class="emtitle">合规风险应对措施</div>
      <embed src="@/assets/home/合规风险应对措施.svg.full.svg" style="width: 1200px;margin: auto" type=""/>
    </div>
    <div class="embox" style="    margin-bottom: 70px;">
      <div class="emtitle">合规风险管理</div>
      <embed src="@/assets/home/合规风险管理.svg.full.svg" style="width: 1200px;margin: auto" type=""/>
    </div>
    <div class="embox" style="    margin-bottom: 70px;">
      <div class="emtitle">大合规体系协同模式</div>
      <embed src="@/assets/home/大合规体系协同模式.svg.full.svg" style="width: 1200px;margin: auto" type=""/>
    </div>
    <div class="embox" style="    margin-bottom: 70px;">
      <div class="emtitle">合规管理体系框架</div>
      <embed src="@/assets/home/合规管理体系框架.svg.full.svg" style="width: 1200px;margin: auto" type=""/>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style lang="scss" scoped>

.banner {
  width: 100%;
  height: 750px;

  img {
    width: 100%;
    height: 750px;
  }
}


.embox {
  width: 1200px;
  margin: auto;

  .emtitle {
    font-size: 30px !important;
    text-align: center;
    line-height: 48px !important;
    color: #333;
    font-weight: bold;
    margin: 50px 0;
  }
}
</style>
