import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
SwiperCore.use([Navigation]);
function ProducrItem({ productName, products }) {
  if (products.length > 0) {
    return (
      <div className="item">
        <>
          <div className="title">
            <h4> {productName && productName} </h4>
            <div className="line"></div>
          </div>
          <div className="item_container">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              grabCursor={true}
              spaceBetween={0}
              slidesPerView={products.length < 4 ? products.length : 4}
              className="mySwiper"
              breakpoints={{
                280: {
                  slidesPerView: products.length < 1 ? products.length : 1,
                  spaceBetween: 10,
                },
                350: {
                  slidesPerView: products.length < 1 ? products.length : 1,
                  spaceBetween: 10,
                },
                505: {
                  slidesPerView: products.length < 2 ? products.length : 2,
                  spaceBetween: 10,
                },
                750: {
                  slidesPerView: products.length < 3 ? products.length : 3,
                  spaceBetween: 10,
                },
                960: {
                  slidesPerView: products.length < 4 ? products.length : 4,
                  spaceBetween: 10,
                },
              }}
            >
              {products.length > 0 &&
                products.map((p, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="card">
                        <div className="card_head">
                          <div className="img">
                            <img src={p.image} alt="" />
                          </div>
                          <div className="content">
                            <h4 className="productname">{p.product_name}</h4>
                            <h4 className="productbrand">{p.brand_name}</h4>
                            <h4 className="price">$ {p.price}</h4>
                          </div>
                        </div>
                        <div className="card_body">
                          <div className="location">
                            <p>
                              {p.address.city} / {p.address.state}
                            </p>
                          </div>
                          <div className="date">
                            <p>
                              Date :{" "}
                              {p.time
                                .split("T")[0]
                                .split("-")
                                .reverse()
                                .join("-")}
                            </p>
                          </div>
                        </div>
                        <div className="card_footer">
                          <p>{p.discription}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </>
      </div>
    );
  } else {
    return null;
  }
}

export default ProducrItem;
