<style scoped>
  * {
    margin: 0px;
    padding: 0;
  }

  .nav {
    height: 5vh;
    width: 100%;
    border: 1px solid red;
  }

  .footer {
    height: 5vh;
    width: 100%;
    border: 1px solid red;
  }

  .body {
    font-size: 0;
    height: 90vh;
    width: 100vw;
    background: aqua;
  }

  .sider {
    float: left;
    width: 10vw;
    height: 100%;
    background: red;
  }

  .content {
    float: left;
    width: 90vw;
    height: 100%;
    border: 1px solid black;
    background: #42b983;
    overflow-y: auto;
  }

  .content::-webkit-scrollbar {
    display: none;
  }
</style>
<template>
  <div>
    <div class="nav">asda</div>
    <div class="body">
      <div class="sider"></div>
      <div class="content">
        <div style="height: 1000px;margin: 2px ;border: 1px solid red">
          <div>
            <Button @click="internalTime" :disabled="disableval"  >{{mess}}</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" style="visibility:visible " >
      <Row type="flex" align="middle" justify="center" style="flex: 0 0 5%">
        <Col span="25">
          <span>北京银杉金服科技有限公司 Copyright © 2020 Aghoo.com</span>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        hidden:'visible',
        val: null,
        num: 60,
        mess: '发送验证码',
        disableval:false
      }
    }
    , methods: {
      internalTime() {
        this.val = null;
        const _this = this;
        let sss = setInterval(function () {
          _this.num--;
          if (_this.num < 0) {
            _this.num = 60;
            _this.mess = "重新发送验证码";
            _this.disableval =false;
            clearInterval(sss)
          } else {
            _this.disableval =true;
            _this.mess = "重新发送 "+_this.num+"s";
          }
        }, 1000)
      }
    }
  }
</script>

