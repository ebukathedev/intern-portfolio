const displayDay = document.querySelector('[data-testid="currentDay"]');
const displayTime = document.querySelector('[data-testid="currentTimeUTC"]');

const currentDate = new Date();
const currentDay = currentDate.toLocaleDateString("en-us", { weekday: "long" });
let currentTime = currentDate.toLocaleTimeString("en-GB", {
	timeZone: "UTC",
});

displayDay.textContent = currentDay;
setInterval(() => {
	currentTime = new Date().toLocaleTimeString("en-GB", {
		timeZone: "UTC",
	});
	displayTime.textContent = `${currentTime} UTC`;
}, 1000);
