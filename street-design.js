const carPassing = function (cars, speed) {
  // Your code in here ...
  const newObj = {
    time: Date.now(),
    speed: speed,
  }
  
  cars.push(newObj);
  return cars;
}