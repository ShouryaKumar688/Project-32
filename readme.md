Hello ma'am.
The API is in http and that is causing some errors
It is saying that await will do nothing in response.json
It is saying in the whitehatjr page that create background should be in setup(); whereas it should be in preload();
it is saying Access to fetch at 'http://worldtimeapi.org/api/timezone/Asia/Kolkata' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
sketch.js:37 GET http://worldtimeapi.org/api/timezone/Asia/Kolkata net::ERR_FAILED sketch.js:52 Uncaught (in promise) TypeError: Failed to fetch in the console