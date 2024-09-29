/* const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task completed!");
    resolve();
  }, 1000);
});
promiseOne.then(() => console.log("Consume promise!")); */

/* new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("task two completed!");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise consumed!");
}); */

/* const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "sabir", password: "123" });
  }, 1000);
});
console.log(promiseThree);
promiseThree.then((user) => {
  console.log(user);
}); */

/* const promiseFour = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    resolve({ username: "sabir", password: "234" });
  } else {
    reject("Error: Something went wrong!");
  }
});
const result = promiseFour
  .then((user) => {
    //console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promis is either resolved and reject!");
  }); */
//const result1 = await result;
//console.log(result1);
/* .then((username) => {
    console.log(username);
  });
 */
/* const promiseFive = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve({ username: "Sabir", age: 28 });
  } else {
    reject("Error: Something went wrong!");
  }
});

async function ConsumedPromiseFive() {
  try {
    const promise = await promiseFive;
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
}
ConsumedPromiseFive(); */

/* async function getAllUsers() {
  //console.log(response); //data is coming in string form
  //console.log(typeof response); //object

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("E : ", error);
  }
}
getAllUsers(); */

/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error)); */
/* const promiseBtn = document.querySelector("#promiseBtn");

const p = new Promise((resolve, reject) => {
  promiseBtn.addEventListener("click", () => {
    resolve("Promise Resolved!");
  });
});
p.then((user) => {
  console.log("Promise Consumed");
  console.log(user);
});
 */

/* function sum(a, b) {
  console.log(a + b);
}
function calculate(a, b, callbackSum) {
  callbackSum(a, b);
}
calculate(2, 3, sum);
 */

/* function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 1000);
} */
//getData(1, getData(2)); got an error

//callback hell
/* getData(1, () => {
  console.log("getting data 2...");
  getData(2, () => {
    console.log("getting data 3...");
    getData(3, () => {
      console.log("getting data 4...");
      getData(4, () => {
        console.log("getting data 5...");
        getData(5, () => {
          console.log("getting data 6...");
          getData(6);
        });
      });
    });
  });
}); */
//getData(3);

/* function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
      if (getNextData) {
        getNextData();
      }
    }, 1000);
  });
} */
/* getData(1, () => {
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
});
 */

//Promise Chaining
/* function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("Success");
    }, 2000);
  });
} */
//Promise hell
/* getData(1).then((res) => {
  console.log(res);
  getData(2).then((res) => {
    console.log(res);
    getData(3).then((res) => {
      console.log(res);
      getData(4).then((res) => {
        console.log(res);
        getData(5).then((res) => {
          console.log(res);
        });
      });
    });
  });
}); */

//Promise chaining
/* console.log("getting data 1...");
getData(1)
  .then(() => {
    console.log("getting data 2...");
    return getData(2);
  })
  .then(() => {
    console.log("getting data 3...");
    return getData(3);
  })
  .then(() => {
    console.log("getting data 4...");
    return getData(4);
  })
  .then(() => {
    console.log("getting data 5...");
    return getData(5);
  })
  .then((res) => {
    console.log(res);
  });
 */

//async - await
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("success");
    }, 2000);
  });
}

/* async function getAllData() {
  console.log("getting data 1...");
  await getData(1);
  console.log("getting data 2...");
  await getData(2);
  console.log("getting data 3...");
  await getData(3);
  console.log("getting data 4...");
  await getData(4);
  console.log("getting data 5...");
  await getData(5);
} */

/* async function getAllData() {
  for (let i = 1; i < 6; i++) {
    console.log(`getting data ${i}...`);
    await getData(i);
  }
}
getAllData(); */
(async () => {
  for (let i = 1; i <= 5; i++) {
    console.log(`getting data ${i}...`);
    await getData(i);
  }
})();
