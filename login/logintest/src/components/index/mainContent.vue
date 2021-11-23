<style scoped>
  .header {
    height: 8vh;
    width: 100%;
  }

  .sider {
    border-top: 2px solid #2c3e50;
    width: 10vw;
    height: 87vh;
    background: #515a6e;
    box-sizing: border-box;
  }

  .footer {
    height: 5vh;
    width: 100%;
  }

  .content {
    background: rgba(125, 55, 55, 0.05);
    width: 90vw;
    height: 87vh;
  }
</style>

<template>
  <div>
    <Layout>
      <Header class="header">
        <div style="display: flex;justify-content: space-between"><p style="font-size: large;color: white ">主页 </p>
          <p @click="outlogin" style="color: white"> 退出</p>
        </div>
      </Header>
      <Layout>
        <Sider class="sider">
          <div>
            <Menu width="100%" theme="dark">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-paper"/>
                  内容管理
                </template>
                <MenuItem name="pageone" to="/pageone">
                  1
                </MenuItem>
                <MenuItem name="pagetwo" to="/pagetwo">
                  2
                </MenuItem>
              </Submenu>
            </Menu>
          </div>
        </Sider>
        <Content class="content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </Content>
      </Layout>
      <footer class="footer">footer</footer>
    </Layout>
  </div>
</template>

<script>
  export default {
    name: "mainContent",
    methods: {
      outlogin() {
        window.sessionStorage.clear()
        this.$router.replace("/login")
      }
    },
    created() {
    }
  }
</script>

