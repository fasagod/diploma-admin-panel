<template>
  <div>
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
        <el-button type="primary" @click="submitForm('loginForm')">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
      const validateUsername = (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('Please input the username'));
        } else {
          callback();
        }
      };
      const validatePass = (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else {
          callback();
        }
      };
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
          checkPass: [
            { validator: validatePass, trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      submitForm(formName: string) {
        (this.$refs[formName]as any).validate((valid: any) => {
          if (valid) {
            alert('submit!');
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },
    },
});
</script>