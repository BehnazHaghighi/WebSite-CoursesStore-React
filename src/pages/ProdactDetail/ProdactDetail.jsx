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
      const res = await axios.get(`http://localhost:5000/api/products/${param.id}`);
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
          url={singelProduct.url}
          productname={singelProduct.title}
          price={singelProduct.price}
          sesions={singelProduct.sesions}
          studentsCount={singelProduct.studentsCount}
          timeCourse={singelProduct.timeCourse}
          description={singelProduct.description}
          product={{
            ...singelProduct,
            name: singelProduct.title,
          }}
        />
      </>
    </Layout>
  );
};
export default ProdactDetail;
