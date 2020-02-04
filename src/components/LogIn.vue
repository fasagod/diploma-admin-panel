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

export default Vue.extend({
  data() {
      let validUsername: boolean = false;
      let validPassword: boolean = false;
      const validateUsername = (rule: any, value: string, callback: any) => {
        if (value === '') {
          callback(new Error('Please input the username'));
        } else if (value.length <= 4) {
          callback(new Error('Username must be 4+ char'));
        } else {
          validUsername = true;
          callback();
        }
      };
      const validatePass = (rule: any, value: string, callback: any) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value.length < 6) {
          callback(new Error('Pass must be 6+ char'));
        } else {
          validPassword = true;
          callback();
        }
      };
      function isFormValid(): boolean {
        return (validUsername && validPassword);
      }
      return {
        labelPosition: 'right',
        loginForm: {
          username: '',
          pass: '',
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' },
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      login() {
        alert('login');
      },
    },
});
</script>

<style scoped>
div.loginForm {
  margin: 20% 35% 15% 35%;
}
</style>