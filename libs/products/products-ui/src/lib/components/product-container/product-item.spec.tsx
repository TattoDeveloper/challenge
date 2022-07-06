import React from 'react';
import { render, screen } from '@testing-library/react';
import { productItemList } from '../../mock-data/data';
import { ProductListItem } from './product-item'

describe('ProductItem', () => {
  it('should render successfully', () => {
    const mockData = {...productItemList, freeShipping: false }
    render(<ProductListItem { ...mockData } />);
    const price: HTMLElement = screen.getByTestId('price');
    const image: HTMLImageElement = screen.getByRole('img');
    const city: HTMLElement = screen.getByTestId('city');
    const title: HTMLElement = screen.getByTestId('title');

    expect(price.textContent).toBe('$ 4.000');
    expect(image.src).toBe(productItemList.picture);
    expect(image.alt).toBe(productItemList.title);
    expect(city.textContent).toBe(productItemList.city);
    expect(title.textContent).toBe(productItemList.title);

  });

  it('When freeShipping is true should render freeShipping icon', () => {
    render(<ProductListItem { ...productItemList } />);
    const freeShippingIcon: HTMLElement = screen.getByTestId('icon');

    expect(freeShippingIcon).toBeDefined();

  });
});
