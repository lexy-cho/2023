<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container" class="snbCase">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="lectureIndex">
          <ul>
            <li><router-link to="/mkup/lecture/index/mjedu"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample2.png`)" alt="" /></router-link></li>
            <li><router-link to="/mkup/openlec/freelec"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample7.png`)" alt="" /></router-link></li>
            <li><router-link to="/mkup/bbs/event/ing"><img :src="require(`@/assets/images/thumbnail/@mainBannerSample8.png`)" alt="" /></router-link></li>
          </ul>
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'Index',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
