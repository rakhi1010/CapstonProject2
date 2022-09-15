import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";


const CategoryItem = () => {

  const {name} = useParams()
  const data = storeItems.filter(item => item.category === name)

  return (
    <>
      {data[0].itemList.map((item) => (
        <Row key={item.id} className="my-2">
          <Col>
            <StoreItem {...item} category={name} />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default CategoryItem;
