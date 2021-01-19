<template>
    <div class="header">
        <!-- pc 导航 -->
        <computer_nav v-if="isMobile"></computer_nav>
        <!-- 移动导航 -->
        <mobile_nav v-else></mobile_nav>
    </div>
</template>

<script>
import computer_nav from './components/computer'
import mobile_nav from './components/mobile'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Header_Bar',
    components: {
        computer_nav,
        mobile_nav
    },
    data() {
        return {
            isMobile: true,
        };
    },
    methods: {

        ...mapActions({
            initCurrentWidthFun: "wide_high/resetCurrentWidth"
        }),
        // 初始化当前页面的宽度
        // initCurrentWidthFun() {
        //     this.$store.dispatch("wide_high/resetCurrentWidth")
        // },

    },
    created() {

    },
    mounted() {
        this.initCurrentWidthFun()
    },
    computed: {
        ...mapGetters({
            currentwide_high: "wide_high/theCurrentWidth"
        })
    },
    watch: {
        currentwide_high: function (newVal, oldVal) {
            if (newVal <= 767) {
                this.isMobile = false
            } else {
                this.isMobile = true
            }
        },

    }
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
.header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 5.375rem;
    background-color: papayawhip;
}
</style>
