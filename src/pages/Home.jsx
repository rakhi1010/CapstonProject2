import React from "react";
import { Link } from "react-router-dom";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Home = () => {
  return (
    <div className="d-flex justify-content-center gap-5">
      {storeItems.map((item) => (
        <Link to={`/category/${item.category}`} key={item.category} className="shadow p-2">
          <img src={item.image} height={100} alt={item.category} />
          <h5 className="text-center">{item.category}</h5>
          {/* <StoreItem {...item} /> */}
        </Link>
      ))}
    </div>
  );
};

export default Home;
