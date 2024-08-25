import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import BlogDetails from "../../components/BlogDetails/BlogDetails";
import Layout from "../../components/Layout/Layout";

const BlogDetail = () => {
  const location = useLocation();
  const param = useParams();
  const [singelBlog, setSingelBlog] = useState({});

  const getblogDetailHandler = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${param.id}`);
      setSingelBlog(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getblogDetailHandler();
  }, []);

  return (
    <Layout>
      <>
        <BlogDetails
          titelblog={singelBlog.title}
          nameblog={singelBlog.rating}
          dateblog={singelBlog.price}
          descriptionblog={singelBlog.description}
        />
      </>
    </Layout>
  );
};
export default BlogDetail;
