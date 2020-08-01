export const filterByPrice = (shoesToFilter, minPrice, maxPrice) => {
  if (minPrice && !maxPrice) {
    return shoesToFilter.filter((shoe) => shoe.price >= minPrice);
  }
  if (!minPrice && maxPrice) {
    if (maxPrice <= 4000) {
      return shoesToFilter.filter((shoe) => shoe.price <= maxPrice);
    }
  }
  if (minPrice && maxPrice) {
    if (maxPrice <= 4000) {
      return shoesToFilter.filter((shoe) => shoe.price >= minPrice && shoe.price <= maxPrice);
    }
    return shoesToFilter.filter((shoe) => shoe.price >= minPrice);
  }
  return shoesToFilter;
};

export const filterByBrand = (shoesToFilter, searchTerm) => (
  shoesToFilter.filter((shoe) => shoe.brand.toLowerCase().includes(searchTerm.toLowerCase()))
);

export const filterByColor = (shoesToFilter, colors) => {
  const checkedColors = Object.keys(colors).filter((color) => colors[color] === true);
  const filteredShoes = [];
  const isAllColorsUnchecked = Object.values(colors).every((value) => value === false);
  if (isAllColorsUnchecked) {
    filteredShoes.push(...shoesToFilter);
  } else {
    checkedColors.forEach((checkedColor) => {
      const filtered = shoesToFilter.filter(
        (shoe) => shoe.color.toLowerCase() === checkedColor.toLowerCase()
      );
      filteredShoes.push(...filtered);
    });
  }
  return filteredShoes;
};

export const filterShoes = (shoes, minPrice, maxPrice, searchTerm, colors) => {
  let filteredShoes = filterByPrice(shoes, minPrice, maxPrice);
  filteredShoes = filterByBrand(filteredShoes, searchTerm);
  filteredShoes = filterByColor(filteredShoes, colors);
  return filteredShoes;
};

export const sortByPriceAscending = (shoesToSort) => shoesToSort.sort((a, b) => a.price - b.price);

export const sortByPriceDescending = (shoesToSort) => shoesToSort.sort((a, b) => b.price - a.price);

export const sortShoes = (shoes, sortBy, minPrice, maxPrice, searchTerm, colors) => {
  const shoesToSort = filterShoes(shoes, minPrice, maxPrice, searchTerm, colors);
  if (sortBy === 'ascending') {
    return sortByPriceAscending(shoesToSort);
  }
  if (sortBy === 'descending') {
    return sortByPriceDescending(shoesToSort);
  }
  return shoesToSort;
};
