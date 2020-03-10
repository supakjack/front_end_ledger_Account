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

    <br>
    <div style="font-size:20px ">
      <center>
        <font color="#6495ED">
          <b style="font-family:cursive;">Piggy Pocket</b>
        </font>
      </center>
    </div>

    <br/>
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
          <br> <br>
          <!-- <q-btn
            class="glossy"
            style="font-family:cursive; font-size:16px;"
            rounded
            color="red-14"
            label="Log Out Facebook "
            @click="logoutFb()"
          /> -->
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
        ></q-img> -->
        <!-- <img :src="fbPicUrl" /> -->
      </div>
    </center>
    <!-- end button facebook -->
  </q-page>
</template>

<script>
import { default as store } from "./../store/State";
export default {
  name: "Authen",
  async mounted() {
    //  this.fbPicUrl = await `http://graph.facebook.com/${store.state.userID}/picture?type=normal`;
    // console.log(await this.fbPicUrl);
    // this.isLogin = await store.state.userID != 0 ? store.state.userID : 0;
  },
  methods: {
    // rePicFb() {
    //   this.isLogin = store.state.userID != 0 ? store.state.userID : 0;
    // },
    // checkLoginState() {
    //   // this.fbPicUrl = `http://graph.facebook.com/${store.state.userID}/picture?type=normal`;
    //   // console.log(this.fbPicUrl);
    // },
    loginFb() {
      FB.login(function(response) {
        if (response.status === "connected") {
          if (response.status === "connected") {
            store.commit("setAccessToken", response.authResponse.accessToken);
            console.log(store.state.accessToken);
            store.commit("setUserID", response.authResponse.userID);
            console.log(store.state.userID);
            console.log(response);
            store.commit("setUserID", response.authResponse.userID);
            // this.fbPicUrl = `http://graph.facebook.com/${response.authResponse.userID}/picture?type=normal`;
            // console.log(this.fbPicUrl);
            // this.mounted();
            //
            //
          }
        } else {
          console.log("fail");

          // The person is not logged into your webpage or we are unable to tell.
        }
      });
    },
    logoutFb() {
      FB.logout(function(response) {
        console.log(response);
      });
    }
  },
  data: function() {
    return {
      text: "",
      // fbPicUrl: "",
      // isLogin: false
    };
  }
};
</script>

<style lang="stylus" scoped></style>
