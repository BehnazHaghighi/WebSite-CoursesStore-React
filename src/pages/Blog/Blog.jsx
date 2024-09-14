import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { Link, useNavigate } from "react-router-dom";
import { getBlogs } from "../../servises/blogService";

const Blog = () => {
  const [BlogsList, setBlogsList] = useState([]);

  const naigate = useNavigate();
  const getBlogHandler = async () => {
    try {
      const response = await getBlogs();
      setBlogsList(response.products);
    } catch (error) {}
  };

  useEffect(() => {
    const controler = new AbortController();
    getBlogHandler();
    return () => controler.abort();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  console.log(BlogsList);
  return (
    <>
      <Layout>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-flow-row-dense text-right rtl">
            {BlogsList?.map((item, index) => (
              <Card
                key={item.id}
                title={item?.title}
                imageUrl={item?.thumbnail}
                link={`/BlogDetail/${item?.id}`}
              />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="p-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Layout>
    </>
  );
};

export default Blog;
