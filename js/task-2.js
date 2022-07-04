const countProps = function (obj) {
  let sum = 0;
  for (const key of Object.keys(obj)) {
    sum += 1;
  }
  return sum;
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
