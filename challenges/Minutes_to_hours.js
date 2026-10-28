let minutes = 137;
const divisor = 60;

const display_hour = minutes / divisor;
const display_minute = minutes % divisor;

console.log(`${display_hour.toFixed(0)} hour(s) ${display_minute} minute(s)`);
