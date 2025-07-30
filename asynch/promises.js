// const promiseOne = new Promise((resolve, reject) => {
//     // The asynchronous operation starts here
//     setTimeout(() => {
//         console.log('Async task is complete');

//         // NOW we resolve the promise, because the task is done.
//         resolve();
//     }, 1000);
// });

// // Now we consume the promise
// promiseOne.then(() => {
//     // This .then() will only run AFTER the promise has been resolved.
//     // which is after 1 second.
//     console.log("Promise consumed!");
// });
const promiseOne = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    setTimeout(() => {
      console.log("Promise Resolved ");
      resolve("User data fetched");
    }, 1000);
  } else {
    reject("Error Occured Try again");
  }
});
promiseOne
  .then((Data) => {
    console.log("Promise Consumed");
    console.log(Data);
  })
  .catch((error) => {
    console.log("Error!!");
    console.log(error);
  });
