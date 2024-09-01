<template lang="html">
  <transition name="modal">
    <div class="modalDim videoLayerPop">
      <div class="modalWrapper">
        <div class="modalContainer">
          <div class="modalbody">
            <div class="pcPlayer">
              <img :src="require(`@/assets/images/img_playerPc01.png`)" alt="" v-if="playerEnd == 0" @click="playerEnd = 1" />
              <img :src="require(`@/assets/images/img_playerPc02.png`)" alt="" v-if="playerEnd == 1" @click="$emit('close')"/>
            </div>
            <div class="mobilePlayer">
              <div>
                <img :src="require(`@/assets/images/img_playerMobile01.png`)" alt="" @click="playerEnd = 2" />
                <img :src="require(`@/assets/images/img_playerMobile02.png`)" alt="" v-if=" playerEnd == 2" @click="$emit('close')"/>
              </div>
              <span>
                <img :src="require(`@/assets/images/img_playerMobile03.png`)" alt="" @click="playerEnd = 3" />
                <img :src="require(`@/assets/images/img_playerMobile04.png`)" alt="" v-if="playerEnd == 3" @click="$emit('close')"/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      playerEnd: 0,
    }
  }
}
</script>
