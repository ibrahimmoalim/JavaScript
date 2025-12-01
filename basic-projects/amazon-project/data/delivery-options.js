import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs/+esm';


function correctDate(day){

  const dayName = day.format('dddd')

  if (dayName === 'Sunday'){
    day = day.add(1, 'days')
  }

  if (dayName === 'Saturday'){
    day = day.add(2, 'days')
  }

  // Format only once at the end.
  // Calling .format() earlier would convert `day` to a string
  // and break future Dayjs operations like .add()
  return day.format('dddd, MMMM D')
}

export const deliveryOptions = [{
  id: '1',
  date: correctDate(dayjs().add(7, 'days')),
  priceCents: 0 
},
{
  id: '2',
  date: correctDate(dayjs().add(3, 'days')),
  priceCents: 499
},
{
  id: '3',
  date: correctDate(dayjs().add(1, 'days')),
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;

    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId){
        deliveryOption = option
      }
    });
  return deliveryOption || deliveryOptions[0];
}