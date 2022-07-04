const findBestEmployee = function (employees) {
  let theBestRes = 0;
  let theBestEmployee;
  for (const key of Object.keys(employees)) {
    if (employees[key] > theBestRes) {
      theBestEmployee = key;
      theBestRes = employees[key];
    }
  }
  return theBestEmployee;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lu
