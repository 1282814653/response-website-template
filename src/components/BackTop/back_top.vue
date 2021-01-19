<template>
    <div class="back hidden-xs-only">
        <el-backtop :bottom="100" class="back-top">
            <div class="top-style font-o-two">
                顶部
            </div>
        </el-backtop>
    </div>
</template>

<script>
export default {
    name: 'Back_Top',
    components: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
.back {
    .back-top {
        .top-style {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
        }
    }
}
</style>
