/* @function delay: waits 'ms' number of milliseconds before proceeding */
export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

/* 
// Usage:
const yourFunction = async () => {
  await delay(5000);
  console.log("Waited 5s");
};
*/
