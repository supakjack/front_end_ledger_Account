import { default as Vuex } from "./../store/State";
export default class FacebookServices {
  #store;
  constructor() {
    this.#store = Vuex;
  }
  setEnviroment() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "2553235831471994",
        cookie: true,
        xfbml: true,
        version: "v6.0"
      });

      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
  login() {
    FB.login(function(response) {
      if (response.status === "connected") {
        if (response.status === "connected") {
          this.#store.commit(
            "setAccessToken",
            response.authResponse.accessToken
          );
          console.log(this.#store.state.accessToken);
          this.#store.commit("setUserID", response.authResponse.userID);
          console.log(this.#store.state.userID);
          console.log(response);
          this.#store.commit("setUserID", response.authResponse.userID);
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
  }
  logout() {
    FB.logout(function(response) {
      console.log(response);
    });
  }
}
