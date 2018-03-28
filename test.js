const pro = new Promise (resolve => {
  throw new Error('test');
}).then( resolve => {
  console.log(333)
}).then(res => {
  console.log(5555)
}).catch(error => {
  console.log(error,11111)
});
