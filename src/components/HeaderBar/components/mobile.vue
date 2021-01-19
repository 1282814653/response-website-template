<template>
    <div class="mobile">
        <!-- 移动端 -->
        <el-row class="row-col-mobile">
            <el-col :xs="12" class="col-mobile-logo">
                <img src="../../../assets/logo.png" alt="Logo" class="item-img">
            </el-col>
            <el-col :xs="12" class="col-mobile-btn">
                <div @click="openMobileNav" class="info-item">
                    <div class="item-line">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" v-show="isShowMobileNav" class="col-mobile-nav">
                <el-menu menu-trigger='hover' :default-active="$route.path" router mode="vertical" class="mobile-menu">
                    <el-menu-item index="/index" class="menu-item">首页 </el-menu-item>
                    <el-submenu index="/about" class="menu-item">
                        <template slot="title" class="menu-item">关于</template>
                        <el-menu-item index="/about/company" class="item-list">关于公司</el-menu-item>
                        <el-menu-item index="/about/us" class="item-list">关于我们</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="/address" class="menu-item">地址 </el-menu-item>
                    <el-menu-item index="/other" class="menu-item">其他 </el-menu-item>
                    <el-menu-item index="/contact" class="menu-item">联系 </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Mobile',
    components: {

    },
    data() {
        return {
            isShowMobileNav: false,
            currentElement: '',
            topHeight: 0
        };
    },
    methods: {
        // 打开 移动端 导航菜单
        openMobileNav() {
            this.topHeight = this.theTopHeight
            this.isShowMobileNav = !this.isShowMobileNav
            this.currentElement = document.querySelector('.info-item')
            const menu = document.querySelector('.mobile-menu')
            if (this.isShowMobileNav == true) {
                this.currentElement.classList.add('info-item-active')
                menu.classList.add('mobile-menu-show')
                menu.classList.remove('mobile-menu-hidden')
            } else {
                this.currentElement.classList.remove('info-item-active')
                menu.classList.add('mobile-menu-hidden')
                menu.classList.remove('mobile-menu-show')
            }
            console.log("this.topHeight---->", this.topHeight)
            // console.log('距离顶部的高度--->', this.theTopHeight)
        },
        ...mapActions({
            currentTopHeight: "wide_high/resetCurrentTopHeight"
        })
    },
    created() {
        this.currentTopHeight()
    },
    mounted() {

    },
    computed: {
        ...mapGetters({
            theTopHeight: "wide_high/theCurrentTopHeight"
        })
    },
    watch: {
        // 跳转 后 关闭 导航列表
        $route(to, from) {
            if (to) {
                this.isShowMobileNav = false
                // 如果 路由跳转了 并且当前元素存在 就移除当前样式 
                if (this.currentElement) {
                    this.currentElement.classList.remove("info-item-active")
                }
            }
        },
        // 打开 菜单 滚动 屏幕的 时候 关闭 导航菜单
        theTopHeight: function (newVal, oldVal) {
            if (newVal > this.topHeight) {
                this.isShowMobileNav = false
                this.currentElement.classList.remove("info-item-active")
            }
        }




    }
};
</script>

<style scoped lang="scss">
@import '@/styles/index.scss';
.mobile {
    // 移动端 导航
    .row-col-mobile {
        width: 100%;
        height: 100%;
        @include flex-style(nowrap, stretch, space-around, row, stretch);
        padding: 0 30px;
        // 左边的  logo
        .col-mobile-logo {
            height: 5.375rem;
            @include flex-style(wrap, center, flex-start, row, space-around);

            // 左边的图片
            .item-img {
                // width: 100%;
            }
        }
        // 右边的 菜单按钮
        .col-mobile-btn {
            @include flex-style(nowrap, center, flex-end, row, stretch);
            .info-item {
                width: 3.75rem;
                height: 3rem;
                background-color: orangered;
                transition: all 1s ease-in;
                .item-line {
                    transition: all 1s ease-in;
                    transform: rotate(0deg);
                    width: 3rem;
                    height: 3rem;
                    margin: 0 auto;
                    @include flex-style(
                        wrap,
                        center,
                        center,
                        row,
                        space-evenly
                    );
                    .line {
                        display: block;
                        width: 3rem;
                        height: 0.375rem;
                        background-color: #fff;
                    }
                }
            }
            // 显示 导航 菜单的 动画
            .info-item-active {
                width: 3rem;
                height: 3.75rem;
                background-color: rgb(42, 138, 248);
                @include flex-style(nowrap, center, center, row, stretch);
                transition: all 1s ease-in;
                .item-line {
                    transition: all 1s ease-in;
                    transform: rotate(90deg);
                }
            }
        }
        // 移动端 导航 列表
        .col-mobile-nav {
            position: fixed;
            top: 87px;
            z-index: 2;
            border-top: 1px solid rgb(179, 175, 175);
            .mobile-menu {
                .menu-item {
                    border-bottom: 1px solid rgb(182, 181, 181);
                    .item-list {
                        border-bottom: 1px solid rgb(182, 181, 181);
                    }
                    &:nth-child(2) {
                        border: none;
                    }
                }
            }
            .mobile-menu-show {
                animation: delayshows 1s;
            }
            .mobile-menu-hidden {
                animation: delayhidden 1s;
                
            }
        }
    }
}
@keyframes delayshows {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes delayhidden {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
