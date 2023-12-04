const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randVal = Math.random();
    //console.log(randVal)

    if (randVal > 0.5) {
      resolve(randVal);
    } else if (randVal <= 0.5) {
      reject(randVal);
    }
  }, 1000);
});

randomPromise
  .then((value) => {
    console.log("success");
    console.log("complete");
  })
  .catch((err, value) => {
    console.log("fail");
    console.log("complete");
  });
