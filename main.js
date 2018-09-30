$(document).ready(function(){
console.log("JQUERY Works");

    $(".user_button").on("click",function(){
        $(".user_button").hide();
        $("#home_button").show();
        $(".fb-login-button").hide();
    });

    $("#home_button").on("click",function(){
        $(".user_button").show();
        $("#home_button").hide();
        $(".info").hide();
        $(".fb-login-button").show();
    });

    $("#deli_button").on("click",function(){
        //deli div show 
        $("#deli_info").show();
    });

    $("#hairstylist_button").on("click",function(){
        //hairstylist div show 
        $("#hairstylist_info").show();
    });

    $("#chemist_button").on("click",function(){
        //chemist div show 
        $("#chemist_info").show();
    });

    $("#supermarket_button").on("click",function(){
        //supermarket div show 
        $("#supermarket_info").show();
    });

    $("#taco_button").on("click",function(){
        //taco div show 
        $("#taco_info").show();
    });
            
    $("#halal_button").on("click",function(){
        //halal div show 
        $("#halal_info").show();
    });

    $("#nathan_button").on("click",function(){
        //nathan div show 
        $("#nathan_info").show();
    });

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=346708289233818&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    
    window.fbAsyncInit = function() {
        FB.init({
        appId      : '{346708289233818}',
        cookie     : true,
        xfbml      : true,
        version    : '{v3.1}'
        });
        
        FB.AppEvents.logPageView();   
        
    };

    

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

    
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
        });
    }

    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }

  });
