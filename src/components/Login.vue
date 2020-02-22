<template>
  <div class="loginForm">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="120px"
      class="loginForm"
    >
      <el-form-item label="Username" prop="username">
        <el-input type="username" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="!isFormValid" v-on:click="login()">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({})
export default class Login extends Vue {
  validUsername: boolean = false;
  validPassword: boolean = false;

  labelPosition: string = "right";
  loginForm: any = {
    username: "",
    pass: ""
  };
  get isFormValid(): boolean {
    let ok = true;
    let c = (error: any) => {
      if (error) ok = false;
    };

    this.rules.username[0].validator(null, this.loginForm.username, c);
    this.rules.pass[0].validator(null, this.loginForm.pass, c);
    return ok;
  }
  validateUsername = (rule: any, value: string, callback: any) => {
    if (value === "") {
      callback(new Error("Please input the username"));
    } else if (value.length <= 4) {
      callback(new Error("Username must be 4+ char"));
    } else {
      this.validUsername = true;
      callback();
    }
  };
  validatePass = (rule: any, value: string, callback: any) => {
    if (value === "") {
      callback(new Error("Please input the password again"));
    } else if (value.length < 6) {
      callback(new Error("Pass must be 6+ char"));
    } else {
      this.validPassword = true;
      callback();
    }
  };
  rules: any = {
    username: [{ validator: this.validateUsername, trigger: "blur" }],
    pass: [{ validator: this.validatePass, trigger: "blur" }]
  };
}
</script>

<style scoped>
div.loginForm {
  margin: 20% 35% 15% 35%;
}
html {
  overflow: hidden;
}
</style>