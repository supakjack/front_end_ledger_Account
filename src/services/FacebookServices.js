import $store from "../store/State";

export default class FacebookServices {
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
          $store.state.facebookId = response.authResponse.userID;
          console.log("facebookId : " + $store.state.facebookId);
          //logic to login with facebook
          /*
            1. check fb id
            2. if not exits create authen
            3. get full state to $state
          */ 
          //logic to login with facebook
        }
      } else {
        console.log("fail");
      }
    });
  }
  logout() {
    FB.logout(function(response) {
      console.log(response);
    });
  }
}
