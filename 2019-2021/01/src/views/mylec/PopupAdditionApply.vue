<template lang="html">
  <div>
    <h2>신청할 강좌</h2>
    <span class="selectSet wFull">
      <select name="" id="" @change="onChange($event)">
        <option>강의를 선택해 주세요.</option>
        <option value="kind01">80점 도약 모의고사반</option>
        <option value="kind02">80점 도약 모의고사반 (유료)</option>
      </select>
    </span>
    <p class="fRed" v-if="kindType == 0">※ 무료 보강 신청 대상임</p>
    <h2 class="pt15">신청할 강의</h2>
    <span class="selectSet wFull">
      <select name="" id="">
        <option value="">강의를 선택해 주세요.</option>
        <option value="">80점 도약 모의고사반</option>
      </select>
    </span>
    <div class="additionInfo" v-if="kindType == 0">
      <dl>
        <dt>무료 보강 이용안내</dt>
        <dd>학원 수업이 진행되고 동영상강의 업데이트가 완료된 이후 신청 가능합니다.</dd>
        <dd>보강 신청 횟수는 강의 진행 기간에 따라 산정됩니다.<br/>(ex. 1개월 강의 기준 1회, 2개월 강의 기준 2회 신청 가능합니다.)</dd>
        <dd>보충강의 수강 시간은 온라인 강의와 동일합니다.</dd>
        <dd>수업자료는 인쇄전용 자료로 제공됩니다.</dd>
        <dd>보강은 학원강의 종강 후 10일 이내까지만 신청 가능합니다.</dd>
        <dd>신청/ 승인 날짜로부터 8일간 수강 가능합니다.</dd>
        <dd>신청하신 보강은 취소가 불가능합니다.</dd>
      </dl>
    </div>
    <div class="additionInfo payCase" v-if="kindType == 1">
      <dl>
        <dt>유료 보강 이용안내</dt>
        <dd>무료보강 횟수가 소진된 이후부터 신청 가능합니다.</dd>
        <dd>유료보강 신청 횟수는 강의 진행 기간에 따라 산정됩니다. <br/>(ex. 1개월 강의 기준 1회, 2개월 강의 기준 2회 신청 가능합니다.) </dd>
        <dd>보충강의 수강 시간은 온라인 강의와 동일합니다.</dd>
        <dd>수업자료는 인쇄전용 자료로 제공됩니다.</dd>
        <dd>유료보강은 학원강의 종강 후 20일 이내까지만 신청/결제 가능합니다.</dd>
        <dd>신청/ 승인 날짜로부터 8일간 수강 가능합니다.</dd>
        <dd>결제하신 유료보강은 취소 및 환불이 불가능합니다.</dd>
      </dl>
    </div>
    <span class="checkSet">
      <input type="checkbox" />
      <label for=""><i></i>이용안내를 확인하고 신청합니다.</label>
    </span>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PopupBonusApply',
  components: {
  },
  data() {
    return {
      kindType:0,
    }
  },
  methods: {
    onChange(event) {
      let value = event.target.value;
      if (value == 'kind01') this.kindType = 0;
      else this.kindType = 1;
    },
  },
}
</script>
