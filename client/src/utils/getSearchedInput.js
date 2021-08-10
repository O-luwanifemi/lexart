const getSearchedInput = (response, keyword) => {
  const { data } = response; // Expects response to be an object, and data, an array
  return data.filter(product =>
      product.description.toLowerCase().includes(keyword.toLowerCase())
  );
}

export default getSearchedInput;