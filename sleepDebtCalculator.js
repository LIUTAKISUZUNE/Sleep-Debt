var getSleepHours = day => {
  if(day === 'Monday'){
    return 8;
  }else if(day === 'Tuesday'){
    return 8;
  }else if(day === 'Wednesday'){
    return 8;
  }else if(day === 'Thursday'){
    return 8;
  }else if(day === 'Friday'){
    return 8;
  }else if(day === 'Saturday'){
    return 12;
  }else if(day === 'Sunday'){
    return 12;
  }else{
    return 'No Sleep LEZZZ GOOOOO.'
  }
}

var getActualSleepHours = () => {
return getSleepHours('Monday')+ getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
}

var getIdealSleepHours = () => {
  var idealHours = 1;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleephours();
}

const actualSleepHours = () => {
  if(getActualSleepHours === getIdealSleepHours){
    console.log("Mid.");
  }else if(getActualSleepHours > getIdealSleepHours){
    console.log("Good.");
  }else{
    console.log("Bad.")
  }
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());
console.log(actualSleepHours());
