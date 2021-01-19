<template>
    <div class="home">
        <h1 class="title">这是 Home 页面 </h1>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
    name: 'Home',
    components: {

    },
    data() {
        return {

        };
    },
    methods: {
        // 初始化当前页面的宽度
        initCurrentWidth() {
            this.$store.dispatch("wide_high/resetCurrentWidth")
        },
        // 初始化距离顶部的高度
        initCurrentTopHeight() {
            this.$store.dispatch("wide_high/resetCurrentTopHeight")
        },


    },
    created() {
        this.initCurrentWidth()
        this.initCurrentTopHeight()
    },
    mounted() {


    },
    computed: {
        // 获取宽度 与 高度
        ...mapGetters({
            currentWidths: "wide_high/theCurrentWidth",
            currentTopHeights: "wide_high/theCurrentTopHeight",
        }),
        ...mapState({

        })
    },
    watch: {
        // currentTopHeights: function (newVal, oldVal) {
        // }
    }
};
</script>

<style scoped lang="scss">
.home {
    height: 75rem;
    .title {
        // margin: 300px;
        // font-size: 16px;
        font-size: 1rem;
    }
}
</style>
