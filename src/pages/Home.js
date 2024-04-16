import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";


const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const colors = ["success", "Secondary"];
  return (
    <>
      <h2 style={{ justifyContent: "center", textAlign: "center",marginBottom: '25px' }}>
        Blog Posts
      </h2>

      <div style={{ justifyContent: "center",  }}>
        {blogs.map((blog, index) => (
        <Card
        bg={colors[index % colors.length].toLowerCase()}
        key={blog.id}
        text={
          colors[index % colors.length].toLowerCase() === "light"
            ? "dark"
            : "white"
        }
        className="w-100 mb-2"
      >
        <Card.Header>Blog No.{index + 1} </Card.Header>
        <Link
          to={`/blog-details/${blog.id}`}
          style={{ textDecoration: "none", color: "white", textAlign: "center" }}
        >
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
          </Card.Body>
        </Link>
      </Card>
      
        ))}
      </div>
    </>
  );
};

export default Home;
