const range = function(start, end, step){
  let arr = [];
  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0)){
    return arr;
  }

  for (let i = start; i <= end ; i += step){
    arr.push(i);
  }
  return arr;
}
