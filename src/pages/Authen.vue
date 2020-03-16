<template>
  <q-page padding>
    <!-- content -->

    <br />
    <br />
    <br />
    <!-- start icon Piggy bank -->
    <!-- start col 2-->
    <center>
      <div class="col-2" style="width:200px">
        <q-img src="https://image.flaticon.com/icons/svg/1660/1660899.svg" :ratio="1" />
      </div>
    </center>
    <!-- end icon Piggy bank -->

    <br />
    <div style="font-size:20px ">
      <center>
        <font color="#6495ED">
          <b style="font-family:cursive;">Piggy Pocket</b>
        </font>
      </center>
    </div>

    <br />
    <!-- start button facebook -->
    <center>
      <div class="q-pa-md q-gutter-sm">
        <b>
          <q-btn
            class="glossy"
            style="font-family:cursive; font-size:16px;"
            rounded
            color="blue-14"
            label=" Log in With Facebook "
            @click="loginFb()"
          />
          <!-- <q-btn
            class="glossy"
            style="font-family:cursive; font-size:16px;"
            rounded
            color="blue-14"
            label="ผูกกับ Facebook "
            @click="checkLoginState()"
          />-->
          <br />
          <br />
          <!-- <q-btn
            class="glossy"
            style="font-family:cursive; font-size:16px;"
            rounded
            color="red-14"
            label="Log Out Facebook "
            @click="logoutFb()"
          />-->
          <!-- <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button> -->
        </b>
        <!-- <q-img
          v-if="isLogin"
          :src="fbPicUrl"
          style="width: 150px"
          :ratio="1"
          basic
          spinner-color="white"
          class="rounded-borders"
        ></q-img>-->
        <!-- <img :src="fbPicUrl" /> -->
      </div>
    </center>
    <!-- end button facebook -->
  </q-page>
</template>

<script>
import FacadeServices from "./../services/FacadeServices";
import $store from "../store/State";
const facebook = new FacadeServices().makeFacebok();

export default {
  name: "Authen",
  async mounted() {
    console.log("facebookId : " + $store.state.facebookId);
    $store.state.testState = 5678;
    console.log("testState change to 5678 : " + $store.state.testState);
    new facebook().setEnviroment();
  },
  methods: {
    loginFb() {
      new facebook().login();
    }
  },
  data: function() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="stylus" scoped></style>
