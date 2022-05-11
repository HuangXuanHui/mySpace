<template>
  <div data-v-ec76ab28 class="login-container">
    <div data-v-ec76ab28 class="login-box">
      <h1 data-v-ec76ab28 class="login-title">HI~</h1>
      <h1 data-v-ec76ab28 class="login-title">欢迎登录我的空间</h1>
      <form data-v-ec76ab28="" class="el-form login-form">
          <div data-v-ec76ab28="" class="el-form-item is-required el-form-item--medium"><!---->
            <div class="el-form-item__content">
              <div data-v-ec76ab28="" class="login-input el-input el-input--medium el-input--prefix">
                <!---->
                <input type="text" autocomplete="off" placeholder="请输入账号" class="el-input__inner">
                <span class="el-input__prefix">
                  <i class="el-input__icon el-icon-user"></i>
                </span><!----><!----><!---->
              </div><!---->
            </div>
          </div>
        <div data-v-ec76ab28 class="el-form-item password-form-item is-required el-form-item--medium"><!---->
          <div class="el-form-item__content">
            <div data-v-ec76ab28="" class="login-input el-input el-input--medium el-input--prefix el-input--suffix"><!---->
              <input type="password" autocomplete="off" placeholder="请输入密码" class="el-input__inner">
              <span class="el-input__prefix">
                <i class="el-input__icon el-icon-lock"></i>
              </span>
              <span class="el-input__suffix">
                <span class="el-input__suffix-inner"><!----><!----><!----><!---->
                </span><!---->
              </span><!----><!---->
            </div><!---->
          </div>
        </div>
        <div data-v-ec76ab28 class="el-form-item el-form-item--medium"><!---->
          <div class="el-form-item__content">
            <span data-v-ec76ab28 class="login-btn">
              <i data-v-ec76ab28 class="el-icon-loading" style="display: none;"></i>登录
            </span><!---->
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>
@import '../assets/css/app.css';
</style>
