// import { api } from "./api_test";
import { api } from "./api";

export default {
  /**
   * 배너 목록 조회
   * @param data 
   * @returns 
   */
  getBanner: (data?: any) => {
    const params = { ...data };
    return api.get("/api/v1/main/banner-list", { params });
  },
  /**
   * 활동 이용내역 조회
   * @param data 
   * @returns 
   */
  getMyActList: (data?: any) => {
    const params = { ...data };
    return api.get("/api/v1/main/my-activity", { params });
  },
  /**
   * 활동 목록 조회
   * @param data 
   * @returns 
   */
  getActivityList: async (data: any) => {
    const params = { ...data };
    return api.get(`/api/v1/main/activity-list`, { params: params });
  },
  /**
   * 활동상세 조회
   * @param data 
   * @returns 
   */
  getActivity: async (data: any) => {
    const params = { ...data };
    return api.get(`/api/v1/main/activity-detail`, { params: params });
  },
};
