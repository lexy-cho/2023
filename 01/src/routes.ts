
import React, { ReactNode } from "react";
export type route = {
  component?: ReactNode;
  layout?: ReactNode;
  name?: string;
  path?: string;
  routes?: route[];
};

//layout
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

//pub
const MainPub = React.lazy(() => import("./views/Main"));
const ContentPub = React.lazy(() => import("./views/Content"));
const UiPub = React.lazy(() => import("./views/Ui"));
const LoginPub = React.lazy(() => import("./views/Login"));
const Join1Pub = React.lazy(() => import("./views/Join1"));
const Join2Pub = React.lazy(() => import("./views/Join2"));
const Join3Pub = React.lazy(() => import("./views/Join3"));
const join3CheckPub = React.lazy(() => import("./views/join3Check"));
const Join4Pub = React.lazy(() => import("./views/Join4"));
const Join5Pub = React.lazy(() => import("./views/Join5"));
const JoinEndPub = React.lazy(() => import("./views/JoinEnd"));
const IdFindPub = React.lazy(() => import("./views/IdFind"));
const IdFindEndPub = React.lazy(() => import("./views/IdFindEnd"));
const PWFindPub = React.lazy(() => import("./views/PWFind"));
const PWResetPub = React.lazy(() => import("./views/PWReset"));
const PWResetEndPub = React.lazy(() => import("./views/PWResetEnd"));
const MorePub = React.lazy(() => import("./views/More"));
const ActivityPub = React.lazy(() => import("./views/Activity"));
const ActivityViewPub = React.lazy(() => import("./views/ActivityView"));
const ActivityWrite2Pub = React.lazy(() => import("./views/ActivityWrite2"));
const ActivityEndPub = React.lazy(() => import("./views/ActivityEnd"));
const AlarmPub = React.lazy(() => import("./views/Alarm"));
const NewsPub = React.lazy(() => import("./views/News"));
const NewsViewPub = React.lazy(() => import("./views/NewsView"));
const VoucherPub = React.lazy(() => import("./views/Voucher"));
const AccusePub = React.lazy(() => import("./views/Accuse"));
const PayPub = React.lazy(() => import("./views/Pay"));
const PrivacyPub = React.lazy(() => import("./views/Privacy"));
const FeedBackPub = React.lazy(() => import("./views/FeedBack"));

//pages
const Login = React.lazy(() => import("./pages/Login"));
const LoginUpgradeCheck = React.lazy(() => import("./pages/LoginUpgradeCheck"));
const LoginUpgrade = React.lazy(() => import("./pages/LoginUpgrade"));
const Join1 = React.lazy(() => import("./pages/Join1"));
const Join2 = React.lazy(() => import("./pages/Join2"));
const Join3 = React.lazy(() => import("./pages/Join3"));
const Join3Check = React.lazy(() => import("./pages/Join3Check"));
const Join4Normal = React.lazy(() => import("./pages/Join4Normal"));
const Join5Normal = React.lazy(() => import("./pages/Join5Normal"));
const Join4Provider = React.lazy(() => import("./pages/Join4Provider"));
const Join5Provider = React.lazy(() => import("./pages/Join5Provider"));
const JoinEnd = React.lazy(() => import("./pages/JoinEnd"));
const IdFind = React.lazy(() => import("./pages/IdFind"));
const IdFindEnd = React.lazy(() => import("./pages/IdFindEnd"));
const PWFind = React.lazy(() => import("./pages/PWFind"));
const PWReset = React.lazy(() => import("./pages/PWReset"));
const PWResetEnd = React.lazy(() => import("./pages/PWResetEnd"));
const MyPage = React.lazy(() => import("./pages/MyPage"));
const MyPageNormal = React.lazy(() => import("./pages/MyPageNormal"));
const MyPageProvider = React.lazy(() => import("./pages/MyPageProvider"));
const MyPageAddNormal = React.lazy(() => import("./pages/MyPageAddNormal"));
const MyPageAddProvider = React.lazy(() => import("./pages/MyPageAddProvider"));
const Main = React.lazy(() => import("./pages/Main"));
const ActivityWrite1 = React.lazy(() => import("./pages/ActivityWrite1"));
const ActivityWrite2 = React.lazy(() => import("./pages/ActivityWrite2"));
const ActivityList = React.lazy(() => import("./pages/ActivityList"));
const ActivityView = React.lazy(() => import("./pages/ActivityView"));
const ActivityUser = React.lazy(() => import("./pages/ActivityUser"));
const ActivityApply= React.lazy(() => import("./pages/ActivityApply"));
const More = React.lazy(() => import("./pages/More"));
const Notice = React.lazy(() => import("./pages/Notice"));
const News = React.lazy(() => import("./pages/News"));
const NewsView = React.lazy(() => import("./pages/NewsView"));
const Voucher = React.lazy(() => import("./pages/Voucher"));
const VoucherHistory = React.lazy(() => import("./pages/VoucherHistory"));
const Accuse = React.lazy(() => import("./pages/Accuse"));
const Pay = React.lazy(() => import("./pages/Pay"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const ActivityPayment = React.lazy(() => import("./pages/ActivityPayment"));
const ActivitySuccess = React.lazy(() => import("./pages/ActivitySuccess"));
const ActivityPhoto = React.lazy(() => import("./pages/ActivityPhoto"));
const AddProfile = React.lazy(() => import("./pages/AddProfile"));
const ActivityRegEnd = React.lazy(() => import("./pages/ActivityRegEnd"));
const FeedBack = React.lazy(() => import("./pages/FeedBack"));
const ActivityModify = React.lazy(() => import("./pages/ActivityModify"));

const Error = React.lazy(() => import("./pages/error/Error"));
const Error404 = React.lazy(() => import("./pages/error/404"));

const Checkout = React.lazy(() => import("./pages/Checkout"));
const Success = React.lazy(() => import("./pages/Success"));
const Fail = React.lazy(() => import("./pages/Fail"));

const PreviewActivityList = React.lazy(() => import("./pages/PreviewActivityList"));
const PreviewActivityView = React.lazy(() => import("./pages/PreviewActivityView"));
const MyActivityList = React.lazy(() => import("./pages/MyActivityList"));
const LikeActivityList = React.lazy(() => import("./pages/LikeActivityList"));

const routes = [
  //seoro-pub
  { path: "/pub", name: "", component: MainPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/content", name: "", component: ContentPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/ui", name: "", component: UiPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/login", name: "", component: LoginPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/join", name: "", component: Join1Pub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/join2", name: "", component: Join2Pub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/join3", name: "", component: Join3Pub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/join3Check", name: "", component: join3CheckPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/join4", name: "", component: Join4Pub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/join5", name: "", component: Join5Pub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/joinEnd", name: "", component: JoinEndPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/idFind", name: "", component: IdFindPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/idFindEnd", name: "", component: IdFindEndPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/pwFind", name: "", component: PWFindPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/pwReset", name: "", component: PWResetPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/pwResetEnd", name: "", component: PWResetEndPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/more", name: "", component: MorePub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/activity", name: "", component: ActivityPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/activityView", name: "", component: ActivityViewPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/privacy", name: "", component: PrivacyPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/alarm", name: "", component: AlarmPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/news", name: "", component: NewsPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/newsView", name: "", component: NewsViewPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/voucher", name: "", component: VoucherPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/accuse", name: "", component: AccusePub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/pay", name: "", component: PayPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/activityWrite2", name: "", component: ActivityWrite2Pub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/activityEnd", name: "", component: ActivityEndPub, layout: DefaultLayout, nonAuthentication: true },
  { path: "/pub/feedBack", name: "", component: FeedBackPub, layout: DefaultLayout, nonAuthentication: true },


  //seoro-page
  { path: "/", name: "Main", component: Main, layout: DefaultLayout, nonAuthentication: true },
  { path: "/login", name: "Login", component: Login, layout: DefaultLayout, nonAuthentication: true, singlePage:true},
  { path: "/login/check", name: "Login", component: LoginUpgradeCheck, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/login/upgrade", name: "Login", component: LoginUpgrade, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/join", name: "Join1", component: Join1, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/join2", name: "Join2", component: Join2, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/join3", name: "Join3", component: Join3, layout: DefaultLayout, nonAuthentication: true, singlePage:true},
  { path: "/join3Check", name: "Join3Check", component: Join3Check, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/join4Normal", name: "Join4Normal", component: Join4Normal, layout: DefaultLayout, nonAuthentication: true, singlePage:true},
  { path: "/join5Normal", name: "Join5Normal", component: Join5Normal, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/join4Provider", name: "Join4Provider", component: Join4Provider, layout: DefaultLayout, nonAuthentication: true, singlePage:true},
  { path: "/join5Provider", name: "Join5Provider", component: Join5Provider, layout: DefaultLayout, nonAuthentication: true, singlePage:true},
  { path: "/joinEnd", name: "JoinEnd", component: JoinEnd, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/idFind", name: "IdFind", component: IdFind, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/idFindEnd", name: "IdFindEnd", component: IdFindEnd, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/pwFind", name: "PWFind", component: PWFind, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/pwReset", name: "PWReset", component: PWReset, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/pwResetEnd", name: "PWResetEnd", component: PWResetEnd, layout: DefaultLayout, nonAuthentication: true, singlePage:true },
  { path: "/accuse/:type", name: "Accuse", component: Accuse, layout: DefaultLayout, nonAuthentication: true}, 
  { path: "/p/activity", name: "PreviewActivityList", component: PreviewActivityList,  nonAuthentication: true, layout: DefaultLayout },
  { path: "/p/activity/:id", name: "PreviewActivityView", component: PreviewActivityView, nonAuthentication: true, layout: DefaultLayout },

  { path: "/myPage", name: "MyPage", component: MyPage, layout: DefaultLayout },
  { path: "/myPage/normal", name: "MyPageNormal", component: MyPageNormal, layout: DefaultLayout },
  { path: "/myPage/provider", name: "MyPageProvider", component: MyPageProvider, layout: DefaultLayout },
  { path: "/MyPage/addNormal", name: "MyPageAddNormal", component: MyPageAddNormal, layout: DefaultLayout },
  { path: "/MyPage/addProvider", name: "MyPageAddProvider", component: MyPageAddProvider, layout: DefaultLayout },
  { path: "/activityWrite1", name: "ActivityWrite1", component: ActivityWrite1, layout: DefaultLayout, singlePage:true  },
  { path: "/activityWrite2/:regType", name: "ActivityWrite2", component: ActivityWrite2, layout: DefaultLayout, singlePage:true  },
  { path: "/addProfile", name: "AddProfile", component: AddProfile, layout: DefaultLayout },
  { path: "/activityPhoto", name: "ActivityPhoto", component: ActivityPhoto, layout: DefaultLayout },
  { path: "/activity", name: "ActivityList", component: ActivityList, layout: DefaultLayout },
  { path: "/activity/:id/success", name: "ActivitySuccess", component: ActivitySuccess, layout: DefaultLayout },
  { path: "/activity/:id", name: "ActivityView", component: ActivityView, layout: DefaultLayout },
  { path: "/activity/:id/user", name: "ActivityUser", component: ActivityUser, layout: DefaultLayout },
  { path: "/activity/:id/pay/:type", name: "ActivityPayment", component: ActivityPayment, layout: DefaultLayout },
  { path: "/more", name: "More", component: More, layout: DefaultLayout },
  { path: "/myActivity", name: "MyActivity", component: MyActivityList, layout: DefaultLayout },
  { path: "/like", name: "LikeActivity", component: LikeActivityList, layout: DefaultLayout },
  { path: "/notice", name: "Notice", component: Notice, layout: DefaultLayout },
  { path: "/news", name: "News", component: News, layout: DefaultLayout },
  { path: "/news/:id", name: "NewsView", component: NewsView, layout: DefaultLayout },
  { path: "/voucher", name: "Voucher", component: Voucher, layout: DefaultLayout },
  { path: "/voucherHistory", name: "VoucherHistory", component: VoucherHistory, layout: DefaultLayout },
  { path: "/pay", name: "Pay", component: Pay, layout: DefaultLayout },
  { path: "/privacy", name: "Privacy", component: Privacy, layout: DefaultLayout },
  { path: "/terms", name: "Terms", component: Terms, layout: DefaultLayout },  
  { path: "/activityApply/:id", name: "activityApply", component: ActivityApply, layout: DefaultLayout },
  { path: "/activityRegEnd", name: "ActivityRegEnd", component: ActivityRegEnd, layout: DefaultLayout },
  { path: "/feedBack/:id", name: "FeedBack", component: FeedBack, layout: DefaultLayout },
  { path: "/activity/:id/modify", name: "activityModify", component: ActivityModify, layout: DefaultLayout },
  
  { path: "/checkout", name: "Checkout", component: Checkout, layout: DefaultLayout },
  { path: "/success", name: "Success", component: Success, layout: DefaultLayout },
  { path: "/fail", name: "Fail", component: Fail, layout: DefaultLayout },
  
  { path: "/error", name: "error", component: Error, layout: DefaultLayout, nonAuthentication: true },
  { path: "/*", name: "404", component: Error404, layout: DefaultLayout, nonAuthentication: true },
];

export default routes;
