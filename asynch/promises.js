// // const promiseOne = new Promise((resolve, reject) => {
// //     // The asynchronous operation starts here
// //     setTimeout(() => {
// //         console.log('Async task is complete');

// //         // NOW we resolve the promise, because the task is done.
// //         resolve();
// //     }, 1000);
// // });

// // // Now we consume the promise
// // promiseOne.then(() => {
// //     // This .then() will only run AFTER the promise has been resolved.
// //     // which is after 1 second.
// //     console.log("Promise consumed!");
// // });
// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const error = false;
//     if (!error) {
//       console.log("Promise Resolved ");
//       resolve("User data fetched");
//     } else {
//       reject("Error Occurred. Try again");
//     }
//   }, 1000);
// });

// promiseOne
//   .then((Data) => {
//     console.log("Promise Consumed");
//     console.log(Data);
//   })
//   .catch((error) => {
//     console.log("Error!!");
//     console.log(error);
//   });

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      console.log("Fetching Data");
      resolve({ name: "Raj", age: 23 });
    } else {
      reject("Error in Promise");
    }
  }, 1000);
});

//now try promisefour with asynch 
const getUser = async () => {
  try {
    const result = await promiseFour;
    console.log(result.name);
    console.log('Sucessfully Fetched')
  } catch (error) {
    console.log(error);
  }
};

getUser();




























// promiseFour
//   .then((Data) => {
//     console.log("Promise Consumed");
//     console.log(Data.name);
//   })
//   .catch((error) => {
//     console.log("Error!!");
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log('Task complete')
//   })