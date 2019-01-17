<template>
  <div id="app">
    <div class="network" v-if="!network">
      <h3>我没网了!!!</h3>
      <div class="btn" @click="onRefresh">点击刷新</div>
    </div>

    <router-view/>

  </div>
</template>

<script>
    import { mapState, mapActions} from 'vuex';
    export default {
        name: 'App',
        computed: {
            ...mapState(['network'])
        },
        methods: {
            ...mapActions(['aChangeNetwork']),
            // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
            onRefresh () {
                this.$router.replace('/refresh'); //浏览器刷新方法  window.location.reload();//刷新页面
                this.aChangeNetwork(true);//先将网络状态改成有网，如果刷新页面的时候还回去请求数据，如果还是没网，会自动改为false。
            }
        },

    }
</script>

<style>
#app {
/*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  */
  width: 100%;
  height: 100%;
}
.network{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3000;
  width: 50%;
  height: 200px;
  background: gray;
}
.btn{
  width: 200px;
  background: yellow;
}

</style>
