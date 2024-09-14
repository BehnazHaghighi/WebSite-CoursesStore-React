import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProdacts } from "../../servises/todoService";
import ProductCard from "../ProductCard/ProductCard";

const ReadMore = () => {
  const [ProdactsList, setProdactsList] = useState([]);

  // get data
  const getProdactsHandler = async () => {
    try {
      const response = await getProdacts();
      setProdactsList(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getProdactsHandler();
    return () => controller.abort();
  }, []);

  // only 6 product
  const firstSixProdacts = ProdactsList?.slice(0, 6);

  return (
    <div className="container mx-auto p-4">
      {/*show 6 product*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {firstSixProdacts?.map((item) => (
          <ProductCard
            key={item?.id}
            thumbnail={`http://localhost:5000${item?.thumbnail}`}
            altname={item?.title}
            status={item?.status}
            title={item?.title}
            price={item?.price}
            linkproduct={`/ProdactDetail/${item?.id}`}
          />
        ))}
      </div>

      {/* دکمه Read More */}
      <div className="text-center mt-8">
        <Link
          to="/Prodacts"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          مشاهده ی همه ی دوره های آموزشی
        </Link>
      </div>
    </div>
  );
};

export default ReadMore;
