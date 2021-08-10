const getSearchedInput = (response, keyword) => {
  const { data } = response;
  return data.filter(product =>
      product.description.toLowerCase().includes(keyword.toLowerCase())
  );
}

export default getSearchedInput;