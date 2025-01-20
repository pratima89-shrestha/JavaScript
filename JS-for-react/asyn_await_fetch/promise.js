

// const myPromise = new Promise((resolve, reject) => {
//    const success = true;
//    if(success) {
//        resolve("Promise was successful!");
//    } else {
//        reject("Promise failed!");
//    }
// });

// myPromise
//    .then(result => {
//        console.log(result);
//    })
//    .catch(error => {
//        console.log(error);
//    });


// let promise = new Promise((resolve, reject) => {
//    console.log("Promises are used to solve the callback hell problem");
//    // console.log("It is used to handle the error and can be used to take the HTTP request from client to the server.");
//    // console.log("It is used to fetch the data.");
//    // console.log("It is used to request and respond with the data.");
//    resolve("Success!");
// });



// function getData(dataId, getNextData) {
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {  // Corrected setTimeout syntax
//         // console.log("Data:", dataId);  // Fixed console.log usage
//          // resolve("Data received");
//          reject("Error! can't find the data.");
//          if (getNextData) {
//             getNextData();  // If there's a callback, execute it
//          }
//       }, 2000);  // Corrected timeout syntax
//    });
// }

// // Example usage of getData:
// getData(1, () => {
//    console.log("Next data will be fetched.");
// });



//we have to wiat for the pending one.
//if promise is fullfilled and reject some work need to be done
//for fullfilled .then is used
//for reject .catch is used.

