import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs/+esm';
import isSatSun from './weekend.js';

      
// 5 days after today, in the format of 'month' 'day of month'
console.log(dayjs().add(5, 'days').format('MMMM dddd'))

// 1 month after today, in the format of 'month' 'day of month'
console.log(dayjs().add(1, 'months').format('MMMM dddd'))

// 1 month before today, in the format of 'month' 'day of month'
console.log(dayjs().subtract(1, 'months').format('MMMM dddd'))

// today, in the format of 'day of week'
console.log(dayjs().format('dddd'))




// will output true if day is either sunday or saturday, function is imported
console.log(isSatSun(dayjs().format('dddd')))
console.log(isSatSun(dayjs().subtract(1, 'days').format('dddd')))
console.log(isSatSun(dayjs().subtract(3, 'days').format('dddd')))
console.log(isSatSun(dayjs().add(3, 'days').format('dddd')))