function formatCurrency(price){
  return (price /100).toFixed(2);
};
// default export, used when there's only one export in the file
export default formatCurrency;