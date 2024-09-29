//callback
/* function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
} */

//callback hell
/* console.log("getting data 1...");
getData(1, () => {
  console.log("getting data 2...");
  getData(2, () => {
    console.log("getting data 3...");
    getData(3, () => {
      console.log("getting data 4...");
      getData(4, () => {
        console.log("getting data 5...");
        getData(5);
      });
    });
  });
}); */

//Promise Chaining
/* function getData(dataId) {
  return new Promise((resolve, resject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
} */
/* getData(1)
  .then(() => {
    return getData(2);
  })
  .then(() => {
    return getData(3);
  })
  .then(() => {
    return getData(4);
  })
  .then(() => {
    return getData(5);
  })
  .then((res) => {
    console.log(res);
  }); */

//async-await
/* function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

(async () => {
  for (let i = 1; i <= 5; i++) {
    await getData(i);
  }
})(); */
