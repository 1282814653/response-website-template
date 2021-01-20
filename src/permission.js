
import router from '@/router'
import { Message } from 'element-ui'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


router.beforeEach((to, from, next) => {
    NProgress.start() // 开始
    next()
})

router.afterEach(() => {
    NProgress.done() // 结束
})