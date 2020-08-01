import { shoes } from '../../../tools/mockData';
import {
  filterByPrice,
  filterByBrand,
  filterByColor,
  filterShoes,
  sortByPriceAscending,
  sortByPriceDescending,
  sortShoes
} from './utils';

describe('Utility Functions', () => {
  describe('Testing filterByPrice', () => {
    test('should return filtered shoes with prices above the specified minPrice', () => {
      const minPrice = 2000;
      const maxPrice = null;
      const filteredShoes = filterByPrice(shoes, minPrice, maxPrice);
      expect.assertions(1);
      expect(filteredShoes.every((shoe) => shoe.price >= minPrice)).toBeTruthy();
    });

    test('should return filtered shoes with prices below the specified maxPrice', () => {
      const minPrice = null;
      const maxPrice = 2000;
      const filteredShoes = filterByPrice(shoes, minPrice, maxPrice);
      expect.assertions(1);
      expect(filteredShoes.every((shoe) => shoe.price <= maxPrice)).toBeTruthy();
    });

    test('should return filtered shoes with prices between the specified minPrice and maxPrice', () => {
      const minPrice = 2000;
      const maxPrice = 3000;
      const filteredShoes = filterByPrice(shoes, minPrice, maxPrice);
      expect.assertions(1);
      expect(
        filteredShoes.every((shoe) => shoe.price > minPrice && shoe.price < maxPrice)
      ).toBeTruthy();
    });

    test('should return filtered shoes with prices above the specified minPrice and maxPrice', () => {
      const minPrice = 2000;
      const maxPrice = 5000;
      const shoesToFilter = [...shoes, { price: 6000 }];
      const filteredShoes = filterByPrice(shoesToFilter, minPrice, maxPrice);
      expect.assertions(1);
      expect(
        filteredShoes.some((shoe) => shoe.price > minPrice && shoe.price > maxPrice)
      ).toBeTruthy();
    });

    test('should return filtered shoes with prices above the specified minPrice and maxPrice', () => {
      const minPrice = null;
      const maxPrice = 5000;
      const shoesToFilter = [...shoes, { price: 6000 }];
      const filteredShoes = filterByPrice(shoesToFilter, minPrice, maxPrice);
      expect.assertions(1);
      expect(
        filteredShoes.some((shoe) => shoe.price > maxPrice)
      ).toBeTruthy();
    });
  });

  describe('Testing filterByBrand', () => {
    test('should return filtered shoes whose brand contains the searchTerm', () => {
      const searchTerm = 'ni';
      const filteredShoes = filterByBrand(shoes, searchTerm);
      expect.assertions(1);
      expect(
        filteredShoes.every((shoe) => shoe.brand.toLowerCase().includes(searchTerm.toLowerCase()))
      ).toBeTruthy();
    });
  });

  describe('Testing filterByColor', () => {
    test('should return shoes when no color is selected', () => {
      const colors = {
        blue: false,
        red: false,
        white: false,
        black: false,
        green: false,
        brown: false
      };
      const filteredShoes = filterByColor(shoes, colors);
      expect.assertions(1);
      expect(filteredShoes).toEqual(shoes);
    });

    test('should return filtered whose color matches the specified colors', () => {
      const colors = {
        blue: true,
        red: false,
        white: false,
        black: true,
        green: false,
        brown: false
      };
      const filteredShoes = filterByColor(shoes, colors);
      expect.assertions(1);
      expect(
        filteredShoes.every((shoe) => shoe.color === 'Blue' || shoe.color === 'Black')
      ).toBeTruthy();
    });
  });

  describe('Testing filterShoes', () => {
    test('should filter shoes by the specified criteria', () => {
      const minPrice = null;
      const maxPrice = null;
      const searchTerm = '';
      const colors = {
        blue: false,
        red: false,
        white: false,
        black: false,
        green: false,
        brown: false
      };
      const filteredShoes = filterShoes(shoes, minPrice, maxPrice, searchTerm, colors);
      expect.assertions(1);
      expect(filteredShoes).toEqual(shoes);
    });
  });

  describe('Testing SortShoes by Ascending and by Descending order of price', () => {
    test('should return shoes sorted in ascending order', () => {
      const sortedShoes = sortByPriceAscending(shoes);
      expect.assertions(1);
      expect(sortedShoes[0].price < sortedShoes[1].price).toBeTruthy();
    });

    test('should return shoes sorted in ascending order', () => {
      const sortedShoes = sortByPriceDescending(shoes);
      expect.assertions(1);
      expect(sortedShoes[0].price > sortedShoes[1].price).toBeTruthy();
    });
  });

  describe('Test sortShoes', () => {
    test('should sort and filter shoes in ascending order', () => {
      const sortBy = 'ascending';
      const minPrice = null;
      const maxPrice = null;
      const searchTerm = '';
      const colors = {
        blue: false,
        red: false,
        white: false,
        black: false,
        green: false,
        brown: false
      };
      const sortedShoes = sortShoes(shoes, sortBy, minPrice, maxPrice, searchTerm, colors);
      expect.assertions(1);
      expect(sortedShoes[0].price < sortedShoes[1].price).toBeTruthy();
    });

    test('should sort and filter shoes in descending order', () => {
      const sortBy = 'descending';
      const minPrice = null;
      const maxPrice = null;
      const searchTerm = '';
      const colors = {
        blue: false,
        red: false,
        white: false,
        black: false,
        green: false,
        brown: false
      };
      const sortedShoes = sortShoes(shoes, sortBy, minPrice, maxPrice, searchTerm, colors);
      expect.assertions(1);
      expect(sortedShoes[0].price > sortedShoes[1].price).toBeTruthy();
    });

    test('should sort and filter shoes in ascending order', () => {
      const sortBy = '';
      const minPrice = null;
      const maxPrice = null;
      const searchTerm = '';
      const colors = {
        blue: false,
        red: false,
        white: false,
        black: false,
        green: false,
        brown: false
      };
      const sortedShoes = sortShoes(shoes, sortBy, minPrice, maxPrice, searchTerm, colors);
      expect.assertions(1);
      expect(sortedShoes).toEqual(shoes);
    });
  });
});
