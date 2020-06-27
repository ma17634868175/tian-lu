<!--
 * @Author: marx
 * @Date: 2020-06-27 19:05:41
 * @LastEditTime: 2020-06-27 22:40:35
 * @Description: 个人中心
 * @FilePath: /tian-lu/src/view/PersonalCenter.vue
--> 
<template>
  <div>
    <!-- 基本信息 -->
    <BaseInfo class="base-info" />
    <!-- 功能入口 -->
    <FunctionEntry />
    <!-- 功能列表 -->
    <FunctionList />
  </div>
</template>

<script >
import BaseInfo from "@/components/PersonalCenter/BaseInfo.vue";
import FunctionEntry from "@/components/PersonalCenter/FunctionEntry.vue";
import FunctionList from "@/components/PersonalCenter/FunctionList.vue";
export default {
  name: "PersonalCenter",
  components: {
    BaseInfo,
    FunctionEntry,
    FunctionList
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.base-info {
  height: 300px;
  background-image: -webkit-image-set(
    url("../assets/imgs/nav_bg.png") 1x,
    url("../assets/imgs/nav_bg@2x.png") 2x,
    url("../assets/imgs/nav_bg@3x.png") 3x
  );
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
