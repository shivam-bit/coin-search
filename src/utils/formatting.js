export const formatPriceStatsDateAndTime = (dateTimeString) => {
  const currentDate = new Date();
  const dateObject = new Date(dateTimeString);
  let resultString = '';
  if (currentDate.getFullYear() !== dateObject.getFullYear()) {
    resultString += dateObject.getFullYear();
  }
  if (currentDate.getDate() !== dateObject.getDate()) {
    resultString += dateObject.getDate() + ' ';
  }
  if (currentDate.getMonth() !== dateObject.getMonth()) {
    resultString +=
      dateObject.toLocaleString('default', { month: 'short' }) + ' ';
  }
  resultString += dateObject.getHours() + ':' + dateObject.getMinutes();

  return resultString;
};

export const formatPriceGraphArray = (priceArray) => {
  return priceArray.map(({ datetime, price }) => {
    return {
      datetime: formatPriceStatsDateAndTime(datetime),
      price: price,
    };
  });
};
