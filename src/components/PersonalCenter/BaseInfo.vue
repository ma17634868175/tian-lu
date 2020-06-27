<!--
 * @Author: marx
 * @Date: 2020-06-27 19:15:26
 * @LastEditTime: 2020-06-27 22:41:55
 * @Description: 基本信息
 * @FilePath: /tian-lu/src/components/PersonalCenter/BaseInfo.vue
--> 
<template>
  <div class="base-info">
    <div class="base-info__nav">
      <img
        src="@/assets/imgs/message_icon24.png"
        srcset="@/assets/imgs/message_icon24@2x.png 2x, @/assets/imgs/message_icon24@3x.png 3x"
        alt
      />
    </div>

    <div class="base-info__user">
      <div class="base-info__portrait">
        <img
          src="@/assets/imgs/v1_tag.png"
          srcset="@/assets/imgs/v1_tag@2x.png 2x, @/assets/imgs/v1_tag@3x.png 3x"
          alt
        />
      </div>

      <div>
        <div class="base-info__name-state">
          <p class="base-info__name">喵斯特</p>
          <img
            src="@/assets/imgs/realname_icon14.png"
            srcset="@/assets/imgs/realname_icon14@2x.png 2x, @/assets/imgs/realname_icon14@3x.png 3x"
            alt
          />
          <p class="base-info__state">已实名</p>
        </div>
        <img
          src="@/assets/imgs/VIP_tag.png"
          srcset="@/assets/imgs/VIP_tag@2x.png 2x, @/assets/imgs/VIP_tag@3x.png 3x"
          alt
        />
      </div>

      <img
        class="base-info__recommend-btn"
        src="@/assets/imgs/sale_tag.png"
        srcset="@/assets/imgs/sale_tag@2x.png 2x, @/assets/imgs/sale_tag@3x.png 3x"
        alt
      />
    </div>

    <div class="base-info__account-bg">
      <ul class="base-info__card-bg">
        <li class="base-info__card__row-1">
          <p class="base-info__card__key">
            总资产(元)
            <img
              src="@/assets/imgs/hidden_icon16.png"
              srcset="@/assets/imgs/hidden_icon16@2x.png 2x, @/assets/imgs/hidden_icon16@3x.png 3x"
              alt
            />
          </p>
          <p class="base-info__card__val">50,000.00</p>
        </li>
        <li class="base-info__card__row-2">
          <div>
            <p class="base-info__card__key">昨日收益(元)</p>
            <p class="base-info__card__val">33.20</p>
          </div>
          <div>
            <p class="base-info__card__key">累计收益(元)</p>
            <p class="base-info__card__val">4,869.20</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
export default {
  name: "BaseInfo",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.base-info {
  &__nav {
    padding: 10px 16px;
    display: flex;
    justify-content: flex-end;

    img {
      width: 24px;
    }
  }

  &__user {
    display: flex;
    padding: 16px;
    position: relative;
    margin-bottom: 8px;
  }

  &__portrait {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #000;
    margin-right: 8px;

    position: relative;

    img {
      position: absolute;
      top: 55%;
      right: 0;
    }
  }

  &__name-state {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  &__name {
    margin-right: 8px;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
  }

  &__state {
    font-size: 9px;
    color: #b1fff4;
  }

  &__recommend-btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  &__account-bg {
    padding: 0px 16px 18px;
    background-image: -webkit-image-set(
      url("../../assets/imgs/shadow.png") 1x,
      url("../../assets/imgs/shadow@2x.png") 2x,
      url("../../assets/imgs/shadow@3x.png") 3x
    );
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
  }

  &__card {
    &-bg {
      padding: 16px 16px 24px;
      background-image: -webkit-image-set(
        url("../../assets/imgs/moneycard_bg.png") 1x,
        url("../../assets/imgs/moneycard_bg@2x.png") 2x,
        url("../../assets/imgs/moneycard_bg@3x.png") 3x
      );
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center center;
    }

    &__key {
      margin-bottom: 8px;
      font-size: 12px;
      color: #99999b;
    }

    &__val {
      font-size: 20px;
      font-family: "DINPro-Bold";
    }

    &__row-1 {
      margin-bottom: 16px;

      .base-info__card__key {
        display: flex;
        align-items: center;

        img {
          margin-left: 12px;
        }
      }

      .base-info__card__val {
        font-size: 28px;
      }
    }

    &__row-2 {
      display: flex;

      & > div {
        width: 50%;
      }
    }
  }
}
</style>