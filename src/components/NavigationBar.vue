<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/">Sensors</el-menu-item>
      <el-menu-item index="/Info">Info</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component({})

export default class NavigationBar extends Vue {

}
</script>
