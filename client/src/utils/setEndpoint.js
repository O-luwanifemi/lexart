const setEndPoint = category => {
  if(category === 'Mobile') return 'phones';
  else if(category === 'Refrigerator') return 'refrigerators';
  else if(category === 'TV') return 'televisions';
}

export default setEndPoint;