<template lang="html">
  <div>
    <button class="btnMBack" v-if="this.mobile" @click="$router.go(-1)">이전</button>
    <!-- container -->
    <div id="container">
    <section>
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="realHitView">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>리얼적중</h3>
          </div>
          <!-- //서브 타이틀 -->
          <!-- 내용영역 -->
          <div class="boardView onlyData">
            <RealHitView />
          </div>
          <!-- //내용영역 -->
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
import RealHitView from '@/views/event/realHit/20211102/01/Index.vue';

export default {
  mixins: [Mixin],
  name: 'RealHitViewC',
  data() {
    return {
      
    }
  },
  methods: {
  },
  components: {
    RealHitView,
  }
}
</script>
