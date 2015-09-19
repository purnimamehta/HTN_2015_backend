// <script>
//   window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '1634407773470693',
//       xfbml      : true,
//       version    : 'v2.4'
//     });
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
// </script>


var Firebase = require('firebase');
var firebaseURL = new Firebase("htnb.firebaseIO.com");

var fbgraph = require("fbgraph");
fbgraph.setAccessToken("1504a2c742c5b1637f23d76149f3d2ec");