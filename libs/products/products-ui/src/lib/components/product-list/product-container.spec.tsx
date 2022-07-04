import { render } from '@testing-library/react';

import {ProductContainer} from './product-container';

describe('ProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductContainer />);
    expect(baseElement).toBeTruthy();
  });
});
