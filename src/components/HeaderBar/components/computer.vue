<template>
    <!-- pc 端  -->
    <div class="computer">
        <el-row :gutter="10" class="row-col">
            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="col-info">
                <div class="into-item">
                    <img src="../../../assets/logo.png" alt="Logo" class="item-img">
                </div>
            </el-col>

            <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="hidden-xs-only col-info">
                <el-menu menu-trigger='hover' router :default-active="$route.path" mode="horizontal" class="info-menu">
                    <el-menu-item index="/index" class="menu-item">首页</el-menu-item>
                    <el-submenu index="/about" class="menu-item">
                        <template slot="title">关于</template>
                        <el-menu-item index="/about/company">关于公司</el-menu-item>
                        <el-menu-item index="/about/us">关于我们</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/address" class="menu-item">地址</el-menu-item>
                    <el-menu-item index="/other" class="menu-item">其他</el-menu-item>
                    <el-menu-item index="/contact" class="menu-item">联系</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'Computer',
    components: {

    },
    data() {
        return {
            activeIndex: '/',
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
// pc 导航
.computer {
    .row-col {
        height: 5.375rem;
        @include flex-style(wrap, center, space-around, row, stretch);
        // 左边 logo
        .into-item {
            padding-left: 30px;
            @include flex-style(nowrap, center, flex-start, row, stretch);
            .item-img {
                width: 20%;
                height: 5.375rem;
            }
        }
        // 右边 导航
        .info-menu {
            border-bottom: none;
            background-color: transparent;
            @include flex-style(nowrap, center, space-between, row, stretch);
            .menu-item {
                padding: 0 20px;
                &:nth-child(2) {
                    padding: 0;
                }
            }
        }
    }
}
</style>
