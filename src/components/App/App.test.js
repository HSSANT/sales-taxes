import React from 'react';
import { render } from '@testing-library/react';
import { calculateSalesTax, round2Dec } from "../../utilities/utils";

test('taxes calculation', () => {
  let test = {description: 'teste', category: 'goods', quantity: '1', imported: false, cost: '100'}
  let itemTax =
        calculateSalesTax(test) * parseFloat(test.quantity);
   expect(itemTax == 10 ).toBe(true)
});
test('cost calculation', () => {
  let test = {description: 'teste', category: 'goods', quantity: '1', imported: false, cost: '100'}
  let itemTax =
        calculateSalesTax(test) * parseFloat(test.quantity);
  let itemCost = parseFloat(test.cost) + itemTax
   expect(itemCost == 110 ).toBe(true)
});
