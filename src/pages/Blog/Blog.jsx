import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";

const Blog = () => {
  const cards = [
    {
      title: "کارت 1",
      imageUrl: "https://via.placeholder.com/300",
      link: "/BlogDetails/1",
    },
    {
      title: "کارت 2",
      imageUrl: "https://via.placeholder.com/300",
      link: "/BlogDetails/2",
    },
    {
      title: "کارت 3",
      imageUrl: "https://via.placeholder.com/300",
      link: "/BlogDetails/3",
    },
    {
      title: "کارت 4",
      imageUrl: "https://via.placeholder.com/300",
      link: "/BlogDetails/4",
    },
    {
      title: "کارت 5",
      imageUrl: "https://via.placeholder.com/300",
      link: "/BlogDetails/5",
    },
    {
      title: "کارت 6",
      imageUrl: "https://via.placeholder.com/300",
      link: "/BlogDetails/6",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Layout>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-flow-row-dense text-right rtl">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                imageUrl={card.imageUrl}
                link={card.link}
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
