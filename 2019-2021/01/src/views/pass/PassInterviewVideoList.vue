<template lang="html">
  <div>
    <div class="pivVideoList">
      <ul>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/배지윤] 전북 합격자</strong>
          <em>“김현 선생님을 믿고 따르세요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경기 합격자</strong>
          <em>“누구든지 합격할 수 있습니다.”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“포기하지 않았던 이유 5가지”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“모든 범위를 많이 보는 것이 중요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/배지윤] 전북 합격자</strong>
          <em>“김현 선생님을 믿고 따르세요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경기 합격자</strong>
          <em>“누구든지 합격할 수 있습니다.”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“포기하지 않았던 이유 5가지”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“모든 범위를 많이 보는 것이 중요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/배지윤] 전북 합격자</strong>
          <em>“김현 선생님을 믿고 따르세요”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경기 합격자</strong>
          <em>“누구든지 합격할 수 있습니다.”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“포기하지 않았던 이유 5가지”</em>
        </li>
        <li @click="videoPopTrigger01 = true">
          <span><img :src="require(`@/assets/images/thumbnail/@tmp_pass_interview.png`)" alt="" /></span>
          <strong>[유아/ 배지윤] 경북 합격자</strong>
          <em>“모든 범위를 많이 보는 것이 중요”</em>
        </li>
      </ul>
      <Paginate />
    </div>

    <!-- 영상팝업 샘플  -->
    <VideoPopup v-if='videoPopTrigger01' @close="videoPopTrigger01 = false"></VideoPopup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PassInterviewVideoList',
  components: {
  },
  data() {
    return {
      videoPopTrigger01: false,
    }
  },
}
</script>
<style lang="css" scoped>
#wrapBack.mDevice .passInterview .pivVideoList li:nth-child(n+11):nth-child(-n+20) {display:none;}
</style>