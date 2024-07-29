import React, { useState } from 'react';
import './ProductFilter.css'

const productsData = [
  { id: 1, name: 'Apple', price: 90 },
  { id: 2, name: 'Banana', price: 30 },
  { id: 3, name: 'Cherry', price: 150 },
  { id: 4, name: 'Date', price: 200 },
  { id: 5, name: 'Elderberry', price: 120 },
  { id: 6, name: 'Fig', price: 180 },
  { id: 7, name: 'Grape', price: 160 },
  { id: 8, name: 'Honeydew', price: 250 },
  { id: 9, name: 'Kiwi', price: 130 },
  { id: 10, name: 'Lemon', price: 50 },
  { id: 11, name: 'Mango', price: 70 },
  { id: 12, name: 'Nectarine', price: 140 },
  { id: 13, name: 'Orange', price: 80 },
  { id: 14, name: 'Papaya', price: 170 },
  { id: 15, name: 'Quince', price: 220 },
  { id: 16, name: 'Raspberry', price: 190 },
  { id: 17, name: 'Strawberry', price: 100 },
  { id: 18, name: 'Tangerine', price: 130 },
  { id: 19, name: 'Ugli fruit', price: 210 },
  { id: 20, name: 'Watermelon', price: 300 },
  { id: 21, name: 'Xigua', price: 320 },
  { id: 22, name: 'Yellow passion fruit', price: 200 },
  { id: 23, name: 'Zucchini (courgette)', price: 120 },
];

function ProductFilter() {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredProducts = productsData
    .filter((product) => {
      const query = filterQuery.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesPrice = !isNaN(query) && query !== '' ? product.price <= parseFloat(query) : false;
      return matchesName || matchesPrice;
    })
    .sort((a, b) => b.price - a.price); 

  return (
    <div className="product-filter">
      <h1>Fruit Market</h1>
      <input
        type="text"
        placeholder="Search by fruit name or max price (₹)"
        value={filterQuery}
        onChange={(e) => setFilterQuery(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default ProductFilter;
