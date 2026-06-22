import React from "react";
import "../home/slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Slide = ({ title, products = [] }) => {
  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
        <button className="view_btn">View All</button>
      </div>

      <Divider />

      <Carousel
        responsive={responsive}
        infinite
        draggable
        swipeable
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {Array.isArray(products) &&
          products.map((e) => {
            const id = e._id || e.id;

            return (
              <NavLink key={id} to={`/products/${id}`}>
                <div className="products_items">

                  <div className="product_img">
                    <img
                      src={e.images?.[0] || e.url}
                      alt={e.name || e.title?.shortTitle}
                    />
                  </div>

                  <p className="products_name">
                    {e.name || e.title?.shortTitle}
                  </p>

                  <p className="products_offer">
                    {e.price?.discount
                      ? `${e.price.discount}% OFF`
                      : e.discount || "Deal"}
                  </p>

                  <p className="products_explore">
                    {e.brand || e.tagline || "Amazon Product"}
                  </p>
                </div>
              </NavLink>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Slide;
