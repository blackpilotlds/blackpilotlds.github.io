let d = new Date();

const banner = document.getElementById("saturdayBanner");
if (d.getDay() == 6) {/*5-friday*/
	banner.style.display = "block";
} else {
	banner.style.display = "none";
}