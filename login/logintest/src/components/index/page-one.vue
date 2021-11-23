<template>
  <div>
    <div style="width: 200px;margin: 0 auto">
      <DictElement v-model="agmtType" dict-type="agmt_sign_status" type="select" name="授权状态"></DictElement>
      <DictElement name="授权状态" v-model="agmtType" dict-type="agmt_sign_status" type="radio"></DictElement>
      <DictElement name="授权状态" v-model="agmtType" dict-type="agmt_sign_status" type="checkbox"></DictElement>
      <div style="border: 1px solid red;width: 200px;height: 200px;margin: 0 auto">
        {{agmtType}}
      </div>
    </div>

  </div>

</template>

<script>
  import DictElement from "../dict/dict-element";
  export default {
    name: "page-one",
    components: {DictElement},
    data() {
      return {
        agmtType: null
      }
    },
    created() {

    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
