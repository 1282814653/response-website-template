
const wide_high = {
    namespaced: true,
    state: {
        currentWidths: 0,
        currentTopHeights: 0
    },
    mutations: {
        // 获取当前浏览器宽度/页面宽度
        currentWidth(state) {
            // 网页可见区域宽
            state.currentWidths = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            // 网页正文全文宽
            // state.currentWidth = window.outerWidth || document.documentElement.scrollWidth || document.body.scrollWidth;
            // 屏幕分辨率的宽
            // state.currentWidth = window.screen.width
        },
        // 获取当前距离顶部的高度
        currentTopHeight(state) {
            state.currentTopHeights = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        },

    },

    actions: {
        // 重新计算当前的高度
        resetCurrentWidth({ commit }) {
            commit("currentWidth")
            window.onresize = function windowResize() {
                commit("currentWidth")
            };
        },
        // 获取 距离顶部的高度
        resetCurrentTopHeight({ state, commit }) {
            window.addEventListener("scroll", () => {
                commit("currentTopHeight")
            })
        }
    },
    getters: {
        // 当前的宽度
        theCurrentWidth: function (state) {
            return state.currentWidths
        },
        // 当前距离顶部的高度
        theCurrentTopHeight: function (state) {
            return state.currentTopHeights
        }
    }
    // 简单的获取 当前元素距离顶部的高度 在使用页面使用
    // console.log(this.$refs.myBox.getBoundingClientRect().top)
}

export default wide_high