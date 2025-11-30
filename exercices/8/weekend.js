// check if today is weekend day
function isWeekend(date){
  if (date === 'Sunday' || date === 'Saturday'){
    return true;
  } else {
    return false;
  }
};

export default isWeekend;