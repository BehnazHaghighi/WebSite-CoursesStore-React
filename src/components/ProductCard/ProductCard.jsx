const ProductCard = ({image,altname,productname,price}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={image}
          alt={altname}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-lg font-semibold mb-2">productname: {productname}</h3>
        <p className="text-gray-500">price: {price}</p>
      </div>
    </>
  );
};
export default ProductCard;
