<!--
 * @Author: marx
 * @Date: 2020-06-27 19:15:48
 * @LastEditTime: 2020-06-27 21:29:34
 * @Description: 功能入口
 * @FilePath: /tian-lu/src/components/PersonalCenter/FunctionEntry.vue
--> 
<template>
  <ul class="function-entry">
    <template v-for="entry in functionEntryList">
      <li class="function-entry__column" :key="entry.title">
        <img :src="entry.img" :srcset="entry.imgSize" alt />
        <p>{{entry.title}}</p>
      </li>
    </template>
  </ul>
</template>

<script >
export default {
  name: "FunctionEntry",
  data() {
    return {
      functionEntryList: [
        {
          img: require("@/assets/imgs/date_icon44.png"),
          imgSize: `${require("@/assets/imgs/date_icon44@2x.png")} 2x, ${require("@/assets/imgs/date_icon44@3x.png")} 3x`,
          title: "签到"
        },
        {
          img: require("@/assets/imgs/list_icon44.png"),
          imgSize: `${require("@/assets/imgs/list_icon44@2x.png")} 2x, ${require("@/assets/imgs/list_icon44@3x.png")} 3x`,
          title: "账单"
        },
        {
          img: require("@/assets/imgs/vip_icon44.png"),
          imgSize: `${require("@/assets/imgs/vip_icon44@2x.png")} 2x, ${require("@/assets/imgs/vip_icon44@3x.png")} 3x`,
          title: "会员中心"
        },
        {
          img: require("@/assets/imgs/card_icon44.png"),
          imgSize: `${require("@/assets/imgs/card_icon44@2x.png")} 2x, ${require("@/assets/imgs/card_icon44@3x.png")} 3x`,
          title: "卡卷包"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.function-entry {
  margin: 0 16px 16px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__column {
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      margin-bottom: 8px;
    }

    p{
      color: #666668;
      font-weight: 600;
    }
  }
}
</style>