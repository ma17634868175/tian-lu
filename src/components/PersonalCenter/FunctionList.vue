<!--
 * @Author: marx
 * @Date: 2020-06-27 19:16:08
 * @LastEditTime: 2020-06-27 21:30:43
 * @Description: 功能列表
 * @FilePath: /tian-lu/src/components/PersonalCenter/FunctionList.vue
--> 
<template>
  <ul class="function-list">
    <template v-for="list in functionList">
      <li class="function-list__column" :key="list.title">
        <div class="function-list__column__l">
          <img :src="list.img" :srcset="list.imgSize" alt />
          <span>{{list.title}}</span>
        </div>
        <div class="function-list__column__r">
          <span>{{list.tips}}</span>
          <img :src="list.icon" :srcset="list.iconSize" alt />
        </div>
      </li>
    </template>
  </ul>
</template>

<script >
export default {
  name: "FunctionList",
  data() {
    return {
      functionList: [
        {
          img: require("@/assets/imgs/financial_icon32.png"),
          imgSize: `${require("@/assets/imgs/financial_icon32@2x.png")} 2x, ${require("@/assets/imgs/financial_icon32@3x.png")} 3x`,
          title: "我的理财",
          tips: "连续15天看涨",
          icon: require("@/assets/imgs/GO-ICON.png"),
          iconSize: `${require("@/assets/imgs/GO-ICON@2x.png")} 2x, ${require("@/assets/imgs/GO-ICON@3x.png")} 3x`
        },
        {
          img: require("@/assets/imgs/insurance_icon32.png"),
          imgSize: `${require("@/assets/imgs/insurance_icon32@2x.png")} 2x, ${require("@/assets/imgs/insurance_icon32@3x.png")} 3x`,
          title: "我的保险",
          tips: "1份即将过期",
          icon: require("@/assets/imgs/GO-ICON.png"),
          iconSize: `${require("@/assets/imgs/GO-ICON@2x.png")} 2x, ${require("@/assets/imgs/GO-ICON@3x.png")} 3x`
        },
        {
          img: require("@/assets/imgs/collection_icon32.png"),
          imgSize: `${require("@/assets/imgs/collection_icon32@2x.png")} 2x, ${require("@/assets/imgs/collection_icon32@3x.png")} 3x`,
          title: "我的收藏",
          tips: "5份即将售空",
          icon: require("@/assets/imgs/GO-ICON.png"),
          iconSize: `${require("@/assets/imgs/GO-ICON@2x.png")} 2x, ${require("@/assets/imgs/GO-ICON@3x.png")} 3x`
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.function-list {
  &__column {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #efeff0;

    &:last-child {
      border-bottom: none;
    }

    &__l,
    &__r {
      display: flex;
      align-items: center;
    }

    &__l {
      img {
        margin-right: 16px;
      }

      span {
        color: #333334;
        font-size: 14px;
      }
    }

    &__r {
      span {
        color: #99999b;
        font-size: 11px;
      }
    }
  }
}
</style>