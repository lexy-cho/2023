<template lang="html">
  <div>
    <!-- 과목별 선생님 목록 -->
    <div class="ssKindSet">
      <strong class="tit">교육학</strong>
      <!--Loop-->
      <span class="checkSet">
        <input type="checkbox" id="ssscheck1" />
        <label for="sscheck1">
          <i></i><span><strong>김현</strong>키워주기 위한 교육학</span>
          <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice01.png`)" alt=""/>
        </label>
      </span>
      <!--//Loop-->
      <span class="checkSet">
        <input type="checkbox" id="ssscheck1" />
        <label for="sscheck1">
          <i></i><span><strong>권구현</strong>EBS 교육학 논술 전문가의 적중 강의</span>
          <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice02.png`)" alt=""/>
        </label>
      </span>
      <span class="checkSet">
        <input type="checkbox" id="ssscheck1" />
        <label for="sscheck1">
          <i></i><span><strong>윤중샘</strong>이해중심! 쉽게 설명하는 교육학!</span>
          <em>신규입성</em>
          <img :src="require(`@/assets/images/thumbnail/@tmp_smartChoice03.png`)" alt=""/>
        </label>
      </span>
    </div>
    <!-- //과목별 선생님 목록 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SmartSubjectKindList',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
