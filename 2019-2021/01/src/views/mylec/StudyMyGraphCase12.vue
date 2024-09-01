<template lang="html">
  <div class="yearCase">
    <div class="graphData listData4Line">
      <Echart
        :option="bar12"
        :loading="loading"
      />
    </div>
    <div class="unitTxt">&lt; 단위 : 수강 강의 수(강) / 수강 강의시간(hh:mm) &gt;</div>
    <div class="listData">
      <table class="pix kind">
        <thead>
          <tr>
            <th class="backslash"><div>월(month)</div>과목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="dot">나의 강좌 중에서 1등/ 강좌 명을 표시합니다</td>
          </tr>
          <tr>
            <td class="dot puplue">나의 강좌 중에서 2등/ 강좌 명을 표시합니다</td>
          </tr>
          <tr>
            <td class="dot yellow">나의 강좌 중에서 3등/ 강좌 명을 표시합니다</td>
          </tr>
          <tr>
            <td class="dot blue">나의 강좌 중에서 4등/ 강좌 명을 표시합니다</td>
          </tr>
          <tr>
            <td class="dot pink">나의 강좌 중에서 5등/ 강좌 명을 표시합니다</td>
          </tr>
          <tr>
            <td class="dot darkpink">나의 강좌 중에서 6등/ 강좌 명을 표시합니다</td>
          </tr>
          <tr>
            <td>나의 강좌 중에서 7등/ 강좌 명을 표시합니다</td>
          </tr>
          <tr>
            <td>나의 강좌 중에서 8등/ 강좌 명을 표시합니다</td>
          </tr>
          <tr>
            <td>나의 강좌 중에서 9등/ 강좌 명을 표시합니다</td>
          </tr>
          <tr>
            <td>나의 강좌 중에서 10등/ 강좌 명을 표시합니다</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>합계</td>
          </tr>
        </tfoot>
      </table>
      <div class="scroll">
        <table>
          <thead>
            <tr>
              <th>1월</th>
              <th>2월</th>
              <th>3월</th>
              <th>4월</th>
              <th>5월</th>
              <th>6월</th>
              <th>7월</th>
              <th>8월</th>
              <th>9월</th>
              <th>10월</th>
              <th>11월</th>
              <th>12월</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
            <tr>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
              <td>99<span>(00:00:00)</span></td>
            </tr>
          </tbody>
          <tfoot>
          <tr>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          </tfoot>
        </table>
      </div>
      <table class="pix total">
        <thead>
          <tr>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>99<span>(00:00:00)</span></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'StudyMyGraphCase12',
  components: {
  },
  data() {
    return {
      loading: false,
      bar12: {
        backgroundColor:'transparent',
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            show: false,
            right: '0',
            bottom: '0',
            width: '200',
        },
        grid: {
            left: '20px',
            right: '0',
            bottom: '10%',
            top: '13%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
        },
        yAxis: [
          {
            type: 'value',
            show: true,
            name: "강의 수",
            nameTextStyle: {
              fontWeight: "bold",
              lineHeight: 30,
              color: "#999",
              align: "left"
            },
            nameLocation: "middle",
            nameGap: 20
          }
        ],
        series: [
            {
                name: '나의 강좌 중에서 1등/ 강좌 명을 표시합니다',
                type: 'bar',
                itemStyle: {
                  color: '#86CF7E'
                },
                data: [132,145,101,0,0,0,0,0,0,0,0,0],
                label: {
                  show: false,
                  position: "insideTop",
                  distance: 12,
                  color: '#ffffff'
                }
            },
            {
                name: '나의 강좌 중에서 2등/ 강좌 명을 표시합니다',
                type: 'bar',
                itemStyle: {
                  color: '#7583FF'
                },
                data: [88,130,97,0,0,0,0,0,0,0,0,0],
                label: {
                  show: false,
                  position: "insideTop",
                  distance: 12,
                  color: '#ffffff'
                }
            },
            {
                name: '나의 강좌 중에서 3등/ 강좌 명을 표시합니다',
                type: 'bar',
                itemStyle: {
                  color: '#FFE74E'
                },
                data: [88,130,97,0,0,0,0,0,0,0,0,0],
                label: {
                  show: false,
                  position: "insideTop",
                  distance: 12,
                  color: '#ffffff'
                }
            },
            {
                name: '나의 강좌 중에서 4등/ 강좌 명을 표시합니다',
                type: 'bar',
                itemStyle: {
                  color: '#428FBB'
                },
                data: [6,4,8,5,5,7,6,2,0,4,0,0],
                label: {
                  show: false,
                  position: "insideTop",
                  distance: 12,
                  color: '#ffffff'
                }
            },
            {
                name: '나의 강좌 중에서 5등/ 강좌 명을 표시합니다',
                type: 'bar',
                itemStyle: {
                  color: '#CB4EFF'
                },
                data: [3,0,1,3,2,3,3,0,1,3,2,3],
                label: {
                  show: false,
                  position: "insideTop",
                  distance: 12,
                  color: '#ffffff'
                }
            }
        ]
      }
    }
  },
}
</script>
