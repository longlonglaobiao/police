import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        dataXlsx: [],
        MF: [
            {
                title: "组织机构",
                icon: "s01.png",
                to: "/organization",
                child: ["组织机构"]
            },
            {
                title: "业务办理",
                icon: "s02.png",
                to: "/process",
                child: [
                    {
                        title: "户政业务办理",
                        icon: "s5.png",
                        child: [
                            {
                                title: "出生登记",
                                icon: "er.png",
                                child: [
                                    { title: "国外出生婴儿入户", icon: "s23.png", child: ["国外出生婴儿入户"] },
                                    { title: "国内新生儿入户", icon: "s24.png", child: ["国内新生儿入户"] },
                                ]
                            },
                            {
                                title: "户口注销",
                                icon: "del.png",
                                child: [
                                    { title: "应征入伍注销户口", icon: "s27.png", child: ["应征入伍注销户口"] },
                                    { title: "出国（境）定居注销户口", icon: "churu.png", child: ["出国（境）定居注销户口"] },
                                    { title: "死亡注销户口", icon: "del.png", child: ["死亡注销户口"] },
                                ]
                            },
                            {
                                title: "户口迁入",
                                icon: "s7.png",
                                child: [
                                    { title: "父母与成年子女相互投靠（征地冻结地区除外）", icon: "s28.png", child: ["父母与成年子女相互投靠（征地冻结地区除外）"] },
                                    { title: "未成年子女投靠父母", icon: "s29.png", child: ["未成年子女投靠父母"] },
                                    { title: "大中专学生升学户口迁入", icon: "s30.png", child: ["大中专学生升学户口迁入"] },
                                    { title: "大中专学生毕业户口迁入", icon: "s31.png", child: ["大中专学生毕业户口迁入"] },
                                    { title: "夫妻投靠入户", icon: "s32.png", child: ["夫妻投靠入户"] },
                                    { title: "购房迁移入户", icon: "s33.png", child: ["购房迁移入户"] },
                                    { title: "技术人才引进入户", icon: "s34.png", child: ["技术人才引进入户"] },
                                ]
                            },
                            {
                                title: "户口迁出",
                                icon: "s12.png",
                                child: [
                                    { title: "跨省户口迁出", icon: "s35.png", child: [] },
                                    { title: "大中专学生毕业户口迁出", icon: "s30.png", child: [] },
                                    { title: "大中专学生升学户口迁出", icon: "s31.png", child: [] },
                                ]
                            },
                            {
                                title: "非主项变更",
                                icon: "s9.png",
                                child: [
                                    { title: "血型变更", icon: "s36.png", child: [] },
                                    { title: "兵役状况变更", icon: "s37.png", child: [] },
                                    { title: "文化程度变更", icon: "s38.png", child: [] },
                                    { title: "职业、服务处所变更", icon: "s7.png", child: [] },
                                    { title: "婚姻状况变更", icon: "hun.png", child: [] },
                                ]
                            },
                            {
                                title: "户口簿遗失补办",
                                icon: "hukou.png",
                                child: [
                                    { title: "户口簿遗失补办", child: [] },
                                ]
                            },
                            {
                                title: "居住证申请",
                                icon: "s9.png",
                                child: [
                                    { title: "港澳台居民居住证申请", icon: "s39.png", child: [] },
                                    { title: "大陆居民居住证申请", icon: "s40.png", child: [] },
                                ]
                            }

                        ]
                    },
                    {
                        title: "身份证办理",
                        icon: "shenfen.png",
                        child: [
                            {
                                title: "到期办理",
                                icon: "s9.png",
                                child: [
                                ]
                            },
                            {
                                title: "初办",
                                icon: "s15.png",
                                child: [
                                ]
                            },
                            {
                                title: "遗失补办",
                                icon: "s5.png",
                                child: [
                                ]
                            },
                        ]
                    },
                    {
                        title: "出入境",
                        icon: "churu.png",
                        child: [

                        ]
                    },
                    {
                        title: "交管业务办理",
                        icon: "s14.png",
                        child: [

                        ]
                    },
                ]
            },
            {
                title: "警务公开",
                icon: "s03.png",
                to: "/process",
                child: [
                    {
                        title: "身份证收费",
                        icon: "s15.png",
                        child: [
                            {
                                title: "身份证收费",
                                icon: "s15.png",
                            }

                        ]
                    },
                    {
                        title: "收费标准",
                        icon: "s16.png",
                        child: [
                            "收费标准"
                        ]
                    },
                    {
                        title: "户口收费",
                        icon: "hukou.png",
                        child: [
                            "户口收费"
                        ]
                    },
                    {
                        title: "案件回访流程",
                        icon: "s7.png",
                        child: [
                            "案件回访流程"
                        ]
                    },
                    {
                        title: "安全感满意度测评",
                        icon: "s6.png",
                        child: [
                            "安全感满意度测评"
                        ]
                    },
                    {
                        title: "党风廉政建设测评",
                        icon: "s19.png",
                        child: [
                            "党风廉政建设测评"
                        ]
                    },
                    {
                        title: "举报投诉方式",
                        icon: "s20.png",
                        child: [
                            "举报投诉方式"
                        ]
                    }
                ]
            },
            {
                title: "执法办案",
                to: "/process",
                icon: "s04.png",
                child: [
                    {
                        title: "民事案件办理流程",
                        icon: "s17.png",
                        child: [
                            "民事案件办理流程"
                        ]
                    },
                    {
                        title: "刑事案件办理流程",
                        icon: "s21.png",
                        child: [
                            "刑事案件办理流程"
                        ]
                    },
                    {
                        title: "矛盾纠纷化解流程",
                        icon: "s22.png",
                        child: [
                            "矛盾纠纷化解流程"
                        ]
                    }
                ]
            }

        ]
    },
    mutations: {
        setDataXlsx(state, val) {
            state.dataXlsx = val;
        }
    }
})