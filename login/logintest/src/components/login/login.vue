<style scoped>
  .login {
    margin: 200px auto;
    width: 400px;
  }

</style>
<template>
  <div>
    <div class="login">
      <p style="margin-bottom: 20px;font-size: 24px">登录页面</p>
      <Input placeholder="账号" v-model="param.userName"></Input>
      <Input placeholder="密码" type="password" v-model="param.password" style="margin-top: 10px"></Input>
      <Button style="margin-top: 10px" size="large" @click="login">登录</Button>
    </div>
  </div>
</template>

<script>
  import {postloan} from "../../assets/js/http";

  export default {
    name: "login",
    data() {
      return {
        param: {
          loginType: '1'
        }
      }
    },
    methods: {
      login() {
        postloan("102304", this.param).then(res => {
          if (res.data.RetMsg) {
            this.$Message.success({
              background: true,
              content: '登录成功'
            })
            window.sessionStorage.setItem("loginSign",true)
            this.$router.replace("/")
          }
        }).catch(err => {
          console.log(err)
          this.$Message.error({
            background: true,
            content: '登录失败！'
          })
        })
      }
    }
  }
</script>


