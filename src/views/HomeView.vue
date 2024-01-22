<style>
.header{
  width: 100%;
  height: 90px;
  line-height: 90px;
  background: white;
  text-align: center;
}
.header div{
  height: 100%;
}

.center{
  background: #FADAEF;
  height:calc(100vh - 200px);
  width: 100%;
  background-image: url("@/assets/center.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.form-login{
  width: 30%;
  height: 80%;
  background: white;
  position: relative;
  top: 10%;
  left: 62%;
  border-radius: 2%;
  text-align: center;
}
.tab-login{
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #CCCCCC;
}
.tab-login-span{
  font-size: larger;
  font-weight: bold;
}
.tab-login-span-active{
  color: #B72C2E;
}
.tab-login-span-one{
}
.tab-login-span-two{
}
.demo-login{
  width: 400px;
  margin: 0 auto !important;
}
.demo-auto-login{
  margin-bottom: 24px;
  text-align: left;
}
.demo-auto-login a{
  float: right;
}
</style>
<template>
  <div class="header">
    <Row>
      <Col span="9">
        <div>
          <img src="@/assets/yh-logo2.273bd23c.png"  style="padding:25px;height: 100%" alt="">
        </div>
      </Col>
      <Col span="6" offset="7">
        <div>
          <Button type="error" ghost>返回首页</Button>
        </div>
      </Col>

    </Row>
  </div>
  <div class="center">

    <div class="form-login">
      <div class="tab-login">
        <Row>
          <Col span="12" @click="toggle($event)">
            <span class="tab-login-span tab-login-span-active" v-if="tabActive">用户名登录</span>
            <span class="tab-login-span" v-else>用户名登录</span>
          </Col>
          <Col span="12" @click="toggle($event)">
            <span class="tab-login-span tab-login-span-active" v-if="!tabActive">手机号登录</span>
            <span class="tab-login-span" v-else>手机号登录</span>
          </Col>
        </Row>
      </div>
    </div>
  </div>
  <div></div>
</template>
<script>
export default {
  data () {
    return {
      autoLogin: true,
      tabActive:true,
    }
  },
  methods: {
    toggle(event){
      this.tabActive=!this.tabActive;
      // const clickedElement = event.target;
      // if (clickedElement.classList.contains('tab-login-span-active')){
      //   this.tabActive=true
      //   // 515A6E
      // }else {
      //   this.tabActive=false
      // }
      // clickedElement.classList.add('tab-login-span-active')
      // // 检查点击的元素是否包含指定的类
      // if (clickedElement.classList.contains('tab-login-span')) {
      // clickedElement.style.color="#B72C2E";
      // } else {
      //   console.log('Did not find the target class.');
      // }
    }
  }
}
</script>
