import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProdactDetailCard from "../../components/ProdactDetailCard/ProdactDetailCard";
import Layout from "../../components/Layout/Layout";

const ProdactDetail = () => {
  const param = useParams();
  const [singelProduct, setsingelProduct] = useState(null); // تغییر به null به جای شیء خالی

  const getProdactDetailHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products/${param.id}`);
      setsingelProduct(res.data);
    } catch (error) {
      console.error("Error fetching product details:", error); // چاپ پیغام خطا
    }
  };

  useEffect(() => {
    getProdactDetailHandler();
  }, [param.id]); 

  if (!singelProduct) return <p>در حال بارگذاری...</p>;

  return (
    <Layout>
      <ProdactDetailCard
        url={`http://localhost:5000${singelProduct.url}`}
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
    </Layout>
  );
};

export default ProdactDetail;
