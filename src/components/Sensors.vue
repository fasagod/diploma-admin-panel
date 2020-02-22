<template>
  <el-container>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from 'vue-property-decorator';
@Component({})

export default class Sensors extends Vue {};
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    flex-grow: 1;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

</style>