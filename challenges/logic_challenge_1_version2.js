let minutes = 137;
const divisor = 60;

const display_hour = Math.floor(minutes / divisor);
const display_minute = minutes % divisor;

console.log(`${display_hour} hour(s) ${display_minute} minute(s)`);