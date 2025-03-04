import React, { useState, useEffect } from "react";
import { BASE_URL } from '../config';
const CardList = ({}) => {

    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        fetch(`${BASE_URL}/products`)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
          });
      };

      useEffect(() => {
        fetchProducts();
      }, []);

      
      return (
        <div className="cf pa2">
          <div className="mt2 mb2">
            {products && products.map((product) => (
              <Card key={product.id} {...product} />
            ))}
          </div>
    
          <div className="flex items-center justify-center pa4">
            <Button text="Previous" handleClick={handlePrevious} />
            <Button text="Next" handleClick={handleNext} />
          </div>
        </div>
      );
    
    }

    const fetchProducts = () => {
        fetch(`${BASE_URL}/products?offset=${offset}&limit=${limit}`)
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
          });
      }

      useEffect(() => {
        fetchProducts();
       }, [offset]);

       