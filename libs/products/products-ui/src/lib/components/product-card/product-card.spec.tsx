import React from 'react';
import { render, screen } from '@testing-library/react';
import { productItem } from '../../mock-data/data';
import ProductCard from './product-card';

describe('ProductCard', () => {
  it('should render successfully', () => {
    render(<ProductCard {...productItem} />);
    const image: HTMLImageElement = screen.getByRole('img');
    const h1: HTMLHeadingElement = screen.getByRole('heading', {
      name: productItem.title
    })
    const condition: HTMLElement = screen.getByText(/vendidos/)

    
    expect(image.src).toBe(productItem.picture);
    expect(image.alt).toBe(productItem.title);
    expect(h1.textContent).toBe(productItem.title);
    expect(condition.textContent).toContain(productItem.condition)

  });
});
