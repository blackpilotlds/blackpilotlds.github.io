// Add a computed wind chill value to the weather summary on the town page. (see
//  the screenshot above) The windchill value is a computed value using the
//  current or high temperature and wind speed which values you will extract
//  from the page using JavaScript. 

//  It is recommended that you isolate the temperature and wind speed values in
//  your HTML document for easy extraction.

var t = document.getElementById('temp').textContent;
var s = document.getElementById('speed').textContent;

// windChill

//  When you isolate a value, consider using the<span> tag and do not include
//  the unit labels in your spanned content.

// Create a "windchill.js" file and add it to your "script" folder in the
// "lesson-6" folder. The "windchill.js" script should get the two input values
// of temperature and wind speed, check to make sure they meet the required
// values allowed to officially calculate the wind chill, and then either
// calculate and display the windchill factor value or display "N/A" (not
// applicable) if the input values did not meet the requirements.

// The formula to calculate the wind chill factor is LaTeX: 
// f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16 , 
// where f is the wind chill factor in
// Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind
// speed in miles per hour.

// Input requirements: "Wind Chill Temperature is officially defined for
// temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers
// per hour (3.0 mph)."

if ( t <=50 && s >3 ) {
    var ttp     = Math.pow(s,0.16);
    var formula = 35.74 + 0.6215 * t - 35.75 * ttp + 0.4275 * t * ttp;
    var answer  = formula.toFixed(0);
    document.getElementById('windChill').innerHTML      = answer + "&#176;F";
} else {
    document.getElementById('windChill').textContent    = "N/A";
}