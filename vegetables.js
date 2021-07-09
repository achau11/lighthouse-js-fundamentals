const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let highest = 0;
  let name = ''; 

  for (let vegetable of vegetables){
    if (vegetable[metric] > highest){
      highest = vegetable[metric];
      name = vegetable['submitter'];
    }
  }

  return name;
}

