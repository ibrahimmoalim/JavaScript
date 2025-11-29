import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs/+esm';

const deliveryOptions = [{
  id: '1',
  date: dayjs().add(7, 'days').format('dddd, MMMM D'),
  priceCents: 0 
},
{
  id: '2',
  date: dayjs().add(3, 'days').format('dddd, MMMM D'),
  priceCents: 499
},
{
  id: '3',
  date: dayjs().add(1, 'days').format('dddd, MMMM D'),
  priceCents: 999
}];

export default deliveryOptions;