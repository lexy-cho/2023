export const convActStat = (str: string) => {
  let returnVal = '';
  // 활동상태(A : 대기 B : 진행중, C : 마감, F: 거절)
  switch (str) {
    case 'A':
      returnVal = '대기';
      break;
    case 'B':
      returnVal = '진행중';
      break;
    case 'C':
      returnVal = '마감';
      break;
    case 'R':
      returnVal = '거절';
      break;
    case 'F':
      returnVal = '취소';
      break;
    default:
      returnVal = '';
  }
  return returnVal;
}



//memGender
export const convGender = (str: string) => {
  let returnVal = '';
  // 성별(M : 남, F : 여)
  switch (str) {
    case 'M':
      returnVal = '남';
      break;
    case 'F':
      returnVal = '여';
      break;
    default:
      returnVal = '';
  }
  return returnVal;
}

//memAbleType(A:해당없음, B:시각, C:청각, D:지체, E:감각/정신, F:복합)

export const convAbleType = (str: string) => {
  let returnVal = '';
  switch(str) {
    case 'A':
      returnVal = '해당없음';
      break;
    case 'B':
      returnVal = '시각';
      break;
    case 'C':
      returnVal = '청각';
      break;
    case 'D':
      returnVal = '지체';
      break;
    case 'E':
      returnVal = '감각/정신';
      break;
    case 'F':
      returnVal = '복합';
      break;
    default:
      returnVal = '';
  }
  return returnVal;
}
//memAbleStat 장애정도(A:경증, B:중증)
export const convAbleStat = (str: String) => {
  let returnVal = '';
  switch(str) {
    case 'A':
      returnVal = '경증';
      break;
    case 'B':
      returnVal = '중증';
      break;
  
    default:
      returnVal = '';
  }
  return returnVal;
}

export const convActType = (str: String) => {
  //활동구분(A: 동행, B: 교육) 
  let returnVal = '';
  switch(str) {
    case 'A':
      returnVal = '동행';
      break;
    case 'B':
      returnVal = '교육';
      break;
  
    default:
      returnVal = '';
  }
  return returnVal;
}

