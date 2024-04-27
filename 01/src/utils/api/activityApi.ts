// import { api } from './api_test';
import { api } from './api';

export default {
    /**
     * 활동 목록 조회
     * @param data 
     * @returns 
     */
    getActivityList: async (data: any) => {
        const params = { ...data };
        return api.get(`/api/v1/act/activity-list`, { params: params });
    },
    /**
     * 활동상세 조회
     * @param data 
     * @returns 
     */
    getActivity: async (data: any) => {
        const params = { ...data };
        return api.get(`/api/v1/act/activity-detail`, { params: params });
    },
    /**
     * 신고하기
     * @param data 
     * @returns 
     */
    report: async (data: any) => {
        return await api.post(`/api/v1/act/report`, data);
    },
    /**
     * 신고 사유 조회
     * @param data 
     * @returns 
     */
    getCodeList: async (data: any) => {
        return api.get(`/api/v1/common/code-list?codeUid=${data}`);
    },
    /**
     * 회원의 바우처 조회
     * @param data 
     * @returns 
     */
    getVoucherList: async (data: any) => {
        const params = { ...data };
        return api.get(`/api/v1/act/voucher-list`, { params: params });
    },
    /**
     * 활동 상세 피드백 목록 조회
     * @param data 
     * @returns 
     */
    getActivityFeedback: async (data: any) => {
        const params = { ...data };
        return api.get(`/api/v1/act/activity-feedback`, { params: params });
    },
    /**
     * 활동 피드백 저장
     * @param data 
     * @returns 
     */
    feedback: async (data: any) => {
        return await api.post(`/api/v1/act/feedback`, data);
    },

    /**
     * 활동 등록
     * @param data 
     * @returns 
     */
    postActivity: async (data: any) => {
        return await api.post(`/api/v1/act/activity`, data);
    },
    /**
     * 활동 수정
     * @param data 
     * @returns 
     */
    putActivity: async (data: any) => {
        return await api.put(`/api/v1/act/activity`, data);
    },
    /**
     * 결재하기(이용자 신청)
     * @param data 
     * @returns 
     */
    user: async (data: any) => {
        return await api.post(`/api/v1/act/user`, data);
    },
    /**
     * 제공자 신청
     * @param data 
     * @returns 
     */
    postOffer: async (data: any) => {
        return await api.post(`/api/v1/act/offer`, data);
    },
    /**
     * 바우처 사용하기(이용자 신청)
     * @param data 
     * @returns 
     */
    payVoucher: async (data: any) => {
        return await api.post(`/api/v1/act/pay-voucher`, data);
    },
    /**
     * 활동 좋아요
     * @param data 
     * @returns 
     */
    actLike: async (data: any) => {
        return await api.post(`/api/v1/act/act-like`, data);
    },
    /**
     * 이용자 취소요청
     * @param data 
     * @returns 
     */
    userCancelReq: async (data: any) => {
        return await api.post(`/api/v1/act/user-cancel-req`, data);
    },
    /**
     * 제공자 취소요청
     * @param data 
     * @returns 
     */
    offerCancelReq: async (data: any) => {
        return await api.post(`/api/v1/act/offer-cancel-req`, data);
    },
    /**
     * 결제 요청 전 초기 데이터 생성
     * @param data 
     * @returns 
     */
    payStart: async (data: any) => {
        return await api.post(`/api/v1/pay/pay-start`, data);
    },
    /**
     * 결제 승인
     * @param data 
     * @returns 
     */
    payEnd: async (data: any) => {
        return await api.post(`/api/v1/pay/pay-end`, data);
    },
    /**
     * 결제 실패
     * @param data 
     * @returns 
     */
    payFail: async (data: any) => {
        return await api.post(`/api/v1/pay/pay-fail`, data);
    },
    /**
     * 결제 취소
     * @param data 
     * @returns 
     */
    payCancel: async (data: any) => {
        return await api.post(`/api/v1/pay/pay-cancel`, data);
    },
    /**
     * 나의 활동 목록
     * @param data 
     * @returns 
     */
    getMyActivityList: async (data: any) => {
        const params = { ...data };
        return api.get(`/api/v1/act/my-activity-list`, { params: params });
    },
    /**
     * 찜한 활동 목록
     * @param data 
     * @returns 
     */
    getLikeActivityList: async (data: any) => {
        const params = { ...data };
        return api.get(`/api/v1/act/like-activity-list`, { params: params });
    },
    /**
     * 활동 신청 취소
     * @param data 
     * @returns 
     */
    cancelActivity: async (data: any) => {
        return await api.put(`/api/v1/act/cancel-Activity`, data);
    },
}

