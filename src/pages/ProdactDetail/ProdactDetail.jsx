import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProdactDetailCard from "../../components/ProdactDetailCard/ProdactDetailCard";
import Layout from "../../components/Layout/Layout";

const ProdactDetail = () => {
  const location = useLocation();
  const param = useParams();
  const [singelProduct, setsingelProduct] = useState({});

  const getProdactDetailHandler = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${param.id}`);
      setsingelProduct(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getProdactDetailHandler();
  }, []);

  return (
    <Layout>
    <>
      <ProdactDetailCard
        image={singelProduct.thumbnail}
        altname={singelProduct.title}
        productname={singelProduct.title}
        price={singelProduct.price}
        description={singelProduct.description}
      />
    </>
    </Layout>
  );
};
export default ProdactDetail;
