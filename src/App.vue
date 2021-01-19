<template>
    <div id="app">
        <div id="nav" class="app-header">
            <header_bar></header_bar>
        </div>
        <div class="app-main">
            <router-view />
        </div>
        <div class="app-footer">

        </div>
    </div>
</template>

<script>
import header_bar from '@/components/HeaderBar/header_bar'

export default {
    components: {
        header_bar
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss">
// #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
// }

// #nav {
//     padding: 30px;

//     a {
//         font-weight: bold;
//         color: #2c3e50;

//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
</style>

<style lang="scss" scoped>
#app {
    overflow-x: hidden;
    .app-header {
    }
    .app-main {
        margin-top: 100px;
    }
    .app-footer {
    }
}
</style>