import { useEffect, useState } from "react";
import { getProdacts } from "../../servises/todoService";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Prodacts = () => {
  const [ProdactsList, setProdactsList] = useState([]);

  const naigate = useNavigate();
  const getProdactsHandler = async () => {
    try {
      const response = await getProdacts();
      setProdactsList(response);
      console.log(response)
      
    } catch (error) {}
  };

  useEffect(() => {
    const controler = new AbortController();
    getProdactsHandler();
    return () => controler.abort();
  }, []);

  return (
    <Layout>
      <>
        <div className="container mx-auto p-8">
          <h1 className="text-2xl font-bold mb-6">دوره‌های آموزشی</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  rounded-lg p-4">
            {ProdactsList?.map((item, index) => (
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
        </div>
      </>
    </Layout>
  );
};
export default Prodacts;
