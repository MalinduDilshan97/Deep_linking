
/*
 *    Please Read ReadMe.txt
 *
*/


//creating variables for devices

var iOS = /(iPad|iPhone|iPod)/.test(navigator.userAgent);
var android = /Mobile|webOS|tablet|android/.test(navigator.userAgent);

var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");


// setting up links

// Setting url to the website
var appStoreFail = "webSite.php";

// IOS  Application
var appUrlScheme = "appName://";

/* Android Application */
var appUrlSchemeAndroid = 'intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;S.browser_fallback_url=http%3A%2F%2Fwolfcreations.tk;end';


// Functions

if (iOS) {

    // Try launching the app using URL schemes
    window.open(appUrlScheme, "_self");

    // If App dosen't installed in device web site will open
    openWebSite();

} else if(android){

    // Try launching the app using URL schemes if app is not installed this will redirect to the fallback url that given above
    window.open(appUrlSchemeAndroid, "_self");

}else {

    // Launch the website
    openWebSite();
}

// Function that launching the website
function openWebSite() {
    window.location = appStoreFail;
}
