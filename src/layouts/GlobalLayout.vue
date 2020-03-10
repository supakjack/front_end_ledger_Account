<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="bg-cyan">
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />

        <q-toolbar-title class style="margin-left: 20%;">Piggy Pocket</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <q-toolbar class="bg-cyan">
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" show-if-above :width="250" :breakpoint="600">
      <q-scroll-area
        style="height: calc(100% - 192px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item exact to="/authen" active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="img:statics/icons/catiden.png" />
            </q-item-section>

            <q-item-section>หน้าผูกบัญชี</q-item-section>
          </q-item>

          <q-item exact to="/home" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="img:statics/icons/home.png" />
            </q-item-section>

            <q-item-section>หน้าหลัก</q-item-section>
          </q-item>


          <q-item exact to="/list" active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="img:statics/icons/journal.png" />
            </q-item-section>

            <q-item-section>หน้าแสดงการบันทึกรายรับรายจ่าย</q-item-section>
          </q-item>

          <q-item exact to="/account" active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="img:statics/icons/ac.jpg" />
            </q-item-section>

            <q-item-section>หน้าบัญชี</q-item-section>
          </q-item>

           <q-item exact to="/authen" active clickable v-ripple>
            <q-item-section avatar>
              <q-img  width="25px" src="https://image.flaticon.com/icons/svg/2635/2635961.svg" />
            </q-item-section>

            <q-item-section class="text-red">ออกจากบัญชี</q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

      

      <div class="absolute-top bg-cyan row items-center" style="height: 150px;">
        <!-- <div class="bg-red"> -->
        <div class="row justify-around full-width">
          <q-avatar size="100px" class="q-mb-sm">
            <img src="statics/icons/cat3.png" />
          </q-avatar>
          <div class="column justify-center">
            <div class="text-weight-bold">1 บัญชี</div>
            <div class="text-weight-bold">1000.50 บาท</div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "GlobalLayout",
  methods: {},
  data() {
    return {
      leftDrawerOpen: true
    };
  }
};
</script>

<style scoped>
</style>
