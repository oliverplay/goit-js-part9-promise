//===============  promise syntaxes ======================
// const promise = new Promise((resolve, reject) => {
//   const canFullFill = Math.random() > 0.5;

//   if (canFullFill) {
//     resolve('resolve, success');
//   }

//   reject('reject, error');
// });

// promise.then(onFullFilled, onRejected);

// function onFullFilled(result) {
//   console.log('function success------------', result);
// }

// function onRejected(error) {
//   console.log('function reject------', error);
// }

// =================== promise chaining ===============================

// const promise = new Promise((resolve, reject) => {
//   const canFullFill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullFill) {
//       resolve('resolve, success');
//     }

//     reject('reject, error');
//   }, 1000);
// });

// promise
//   .then(
//     result => {
//       console.log(result);
//       return 5;
//     },
//     error => {
//       console.log(error);
//       return 10;
//     },
//   )
//   .then(x => {
//     console.log(x);
//     return 12;
//   })
//   .then(y => {
//     console.log(y);
//   });

// ================ promise catch error ======================
// const promise = new Promise((resolve, reject) => {
//   const canFullFill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullFill) {
//       resolve('resolve, success');
//     }

//     reject('reject, error');
//   }, 1000);
// });

// promise
//   .then(
//     result => {
//       console.log(result);
//     }
//   )
//   .then(x => {
//     console.log(x);
//     throw new Error('erorr in the second then')
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error));

// ================ promise finally =======================
// const promise = new Promise((resolve, reject) => {
//   const canFullFill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullFill) {
//       resolve('resolve, success');
//     }

//     reject('reject, error');
//   }, 1000);
// });

// promise
//   .then(result => {
//     console.log(result);
//     return 5;
//   })
//   .then(x => {
//     console.log(x);
//     throw new Error('erorr in the second then');
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('finally'));
//   console.log(promise);
