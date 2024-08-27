import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };

  const resetCart = () => {
    setQuantity(0);
  };

  return (
    <div className="p-4 bg-white shadow rounded-md text-center">
      {quantity === 0 ? (
        <button
          onClick={increaseQuantity}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          افزودن به سبد خرید
        </button>
      ) : (
        <div className="flex items-center justify-center space-x-4">
          <button onClick={increaseQuantity} className="text-blue-500">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button onClick={decreaseQuantity} className="text-blue-500">
            <FontAwesomeIcon icon={faMinus} size="lg" />
          </button>
        </div>
      )}
      {quantity === 0 ? null : (
        <button
          onClick={resetCart}
          className="text-red-500 mt-4 hover:text-red-600 transition duration-300"
        >
          <FontAwesomeIcon icon={faTrash} size="lg" />
        </button>
      )}
    </div>
  );
};

export default Counter;
