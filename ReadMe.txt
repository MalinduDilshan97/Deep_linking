// When click on the verify link if it's a Mobile(IOS,Android) Device and device have installed the given Application it will open the application
or application is not installed it will redirect to a website.


// To test launch of android app
https://play.google.com/store/apps/details?id=com.google.zxing.client.android

//To create Intent
https://developer.chrome.com/multidevice/android/intents

/*
    fall back url in the end of this intent
    if remove fallback url this will redirect to google play store to install the app
 */

var appUrlSchemeAndroid = 'intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;S.browser_fallback_url=http%3A%2F%2Fwolfcreations.tk;end';

fallback url can't set to local servers so i redirect it to a web site, this can change anytime

to test the js file you should run this project inside local or web server


