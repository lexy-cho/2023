// import { api } from "./api_test";
import { api } from "./api";

export default {

  /**
   * 뉴스 목록 조회
   * @param data 
   * @returns 
   */
  getNewsList: (data: any) => {
    const params = { ...data };
    return api.get("/api/v1/setting/news-list", { params: params });
  },

  /**
   * 뉴스 상세 조회
   * @param data 
   * @returns 
   */
  getNewsDetail: (data: any) => {
    const params = { ...data };
    return api.get("/api/v1/setting/news-detail", { params: params });
  },

  /**
   * 결재 목록 조회
   * @param data 
   * @returns 
   */
  getPayList: (data: any) => {
    const params = { ...data };
    return api.get("/api/v1/setting/pay-list", { params: params });
  },

  /**
   * 바우처 목록 조회
   * @param data 
   * @returns 
   */
  getVoucherList: (data: any) => {
    const params = { ...data };
    return api.get("/api/v1/setting/voucher-list", { params: params });
  },

  /**
   * 바우처 사용 내역 조회
   * @param data 
   * @returns 
   */
  getVoucherUseList: (data: any) => {
    const params = { ...data };
    return api.get("/api/v1/setting/voucher-use-list", { params: params });
  },

  /**
   * 마이 서로 조회
   * @param data 
   * @returns 
   */
  getMypage: (data: any) => {
    const params = { ...data };
    return api.get("/api/v1/setting/mypage", { params: params });
  },

  /**
   * 기본 정보 수정
   * @param data 
   * @returns 
   */
  chgInfo: async (data: any) => {
    return await api.put('/api/v1/setting/info', data);
  },

  /**
   * 추가 정보 수정
   * @param data 
   * @returns 
   */
  chgAddInfo: async (data: any) => {
    return await api.put('/api/v1/setting/add-info', data);
  },

  /**
   * 회원사진 수정
   * @param data 
   * @returns 
   */
  chgMemPic: async (data: any) => {
    return await api.put('/api/v1/setting/mem-pic', data);
  },

  /**
   * 비밀번호 재설정
   * @param data 
   * @returns 
   */
  chgPwd: async (data: any) => {
    return await api.put('/api/v1/setting/chg-pwd', data);
  },

  /**
   * 회원 탈퇴
   * @param data 
   * @returns 
   */
  memOut: async (data: any) => {
    return await api.post('/api/v1/setting/mem-out', data);
  },

  /**
   * 알림 읽음 처리
   * @param data 
   * @returns 
   */
  notiStat: async (data: any) => {
    return await api.put('/api/v1/setting/noti-stat', data);
  },

  /**
   * 알림 목록
   * @param data 
   * @returns 
   */
  getNotiList: (data: any) => {
    const params = { ...data };
    return api.get("/api/v1/setting/noti-list", { params: params });
  },


};
