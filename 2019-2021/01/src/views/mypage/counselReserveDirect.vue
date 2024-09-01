<template lang="html">
  <div>
    <div class="reserveLine">
      <div class="col">
        <dl :class="{on:choice01===true}">
          <dt>{{ checkedNames }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind01" id="kind11" v-model="checkedNames" value="교육학" @click="onChange()"/><label for="kind11">교육학</label></li>
              <li><input type="radio" name="kind01" id="kind12" v-model="checkedNames" value="논술면접" @click="onChange()"/><label for="kind12">논술면접</label></li>
              <li><input type="radio" name="kind01" id="kind13" v-model="checkedNames" value="한국사능력검정시험" @click="onChange()"/><label for="kind13">한국사능력검정시험</label></li>
              <li><input type="radio" name="kind01" id="kind14" v-model="checkedNames" value="유아" @click="onChange()"/><label for="kind14">유아</label></li>
              <li><input type="radio" name="kind01" id="kind15" v-model="checkedNames" value="초등" @click="onChange()"/><label for="kind15">초등</label></li>
              <li><input type="radio" name="kind01" id="kind16" v-model="checkedNames" value="국어" @click="onChange()"/><label for="kind16">국어</label></li>
              <li><input type="radio" name="kind01" id="kind17" v-model="checkedNames" value="영어" @click="onChange()"/><label for="kind17">영어</label></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="col">
        <dl>
          <dt>{{ date }}</dt>
          <dd>
            <VCalendar v-model="date" color="green" title-position="left" :min-date="new Date()" is-expanded></VCalendar>
          </dd>
        </dl>
      </div>
      <div class="col time">
        <dl :class="{on:choice03===true}">
          <dt>{{ checkedNames3 }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind03" id="kind31" v-model="checkedNames3" value="12:00 ~ 12:30" @click="onChange3()" /><label for="kind31">12:00 ~ 12:30</label></li>
              <li><input type="radio" name="kind03" id="kind32" v-model="checkedNames3" value="12:30 ~ 13:00" @click="onChange3()" /><label for="kind32">12:30 ~ 13:00</label></li>
              <li><input type="radio" name="kind03" id="kind33" v-model="checkedNames3" value="13:00 ~ 13:30" @click="onChange3()" /><label for="kind33">13:00 ~ 13:30</label></li>
              <li><input type="radio" name="kind03" id="kind34" v-model="checkedNames3" value="13:30 ~ 14:00" @click="onChange3()" /><label for="kind34">13:30 ~ 14:00</label></li>
              <li><input type="radio" name="kind03" id="kind35" v-model="checkedNames3" value="14:00 ~ 14:30" @click="onChange3()" /><label for="kind35">14:00 ~ 14:30</label></li>
              <li><input type="radio" name="kind03" id="kind36" v-model="checkedNames3" value="14:30 ~ 15:00" @click="onChange3()" /><label for="kind36">14:30 ~ 15:00</label></li>
              <li><input type="radio" name="kind03" id="kind37" v-model="checkedNames3" value="15:00 ~ 15:30" @click="onChange3()" /><label for="kind37">15:00 ~ 15:30</label></li>
              <li><input type="radio" name="kind03" id="kind38" v-model="checkedNames3" value="15:30 ~ 16:00" @click="onChange3()" /><label for="kind38">15:30 ~ 16:00</label></li>
              <li><input type="radio" name="kind03" id="kind39" v-model="checkedNames3" value="16:00 ~ 16:30" @click="onChange3()" /><label for="kind39">16:00 ~ 16:30</label></li>
              <li><input type="radio" name="kind03" id="kind40" v-model="checkedNames3" value="16:30 ~ 16:00" @click="onChange3()" /><label for="kind40">16:30 ~ 16:00</label></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="col short">
        <dl :class="{on:choice06===true}">
          <dt>{{ checkedNames6 }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind06" id="kind61" v-model="checkedNames6" value="1:1 방문 상담" @click="onChange6()" /><label for="kind61">1:1 방문 상담</label></li>
              <li><input type="radio" name="kind06" id="kind62" v-model="checkedNames6" value="전화 상담" @click="onChange6()" /><label for="kind62">전화 상담</label></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="col how">
        <dl :class="{on:choice02===true}">
          <dt>{{ checkedNames2 }}</dt>
          <dd>
            <ul class="choiceReserve">
              <li><input type="radio" name="kind02" id="kind21" v-model="checkedNames2" value="서울 이데아관" @click="onChange2()" /><label for="kind21">서울 이데아관</label></li>
              <li><input type="radio" name="kind02" id="kind22" v-model="checkedNames2" value="서울 아이비관" @click="onChange2()" /><label for="kind22">서울 아이비관</label></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'counselReserveDirect',
  components: {
  },
  data() {
    return {
      checkedNames: '상담과목',
      checkedNames2: '상담장소',
      checkedNames3: '상담시간',
      checkedNames6: '상담방법',
      choice01: false,
      choice02: false,
      choice03: false,
      choice06: false,
      //datedNames: 상담일자,
      date: '상담일자',
      onChange() {
        this.choice01 = true;
      },
      onChange2() {
        this.choice02 = true;
      },
      onChange3() {
        this.choice03 = true;
      },
      onChange6() {
        this.choice06 = true;
      },
    }
  },
  mounted() {
  },
}
</script>
