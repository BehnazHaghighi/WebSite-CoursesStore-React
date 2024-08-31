import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProdactDetailCard from "../../components/ProdactDetailCard/ProdactDetailCard";
import Layout from "../../components/Layout/Layout";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slice/cartSlice";

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

  // ........shopping cart
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addItemToCart(product));
  };
  // ........end shopping cart

  return (
    <Layout>
      <>
        <ProdactDetailCard
          image={singelProduct.thumbnail}
          altname={singelProduct.title}
          productname={singelProduct.title}
          price={singelProduct.price}
          // students={singelProduct.title}
          // hours={singelProduct.title}
          students={"179 دانشجو"}
          hours={"۷ ساعت و ۴۵ دقیقه"}
          description={singelProduct.description}
        />
      </>
    </Layout>
  );
};
export default ProdactDetail;
