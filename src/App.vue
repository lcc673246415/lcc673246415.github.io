<template>
  <div id="app">
    <mt-navbar v-model="path">
      <mt-tab-item id="/single">
        <router-link  tag="div" to="/single">单选题</router-link>
      </mt-tab-item>
      <mt-tab-item id="/many">
        <router-link  tag="div" to="/many">多选题</router-link>
      </mt-tab-item>
      <mt-tab-item id="/judge">
        <router-link  tag="div" to="/judge">判断题</router-link>
      </mt-tab-item>
    </mt-navbar>
    <router-view style="margin:20px 10px 0 10px"  />
  </div>
</template>
<script>
export default {
  data() {
    return {
      path:this.$route.path
    };
  },
  created() {
    

  }
};
</script>

<style lang="scss">
body,html{
  margin:0;
  padding:0;
}
#app .mint-checkbox-label {
  font-size: 24px;
}
#app .mint-radio-label{
  font-size: 24px  ;
}
</style>
