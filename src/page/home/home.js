import { Button, Card, Col, Row, Spin } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createProduct } from "../../api/product";
import { useProductStore } from "../../store/product";
import { GET_PRODUCT_SUCCESS } from "../../store/product/types";
import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [productStore, dispatch] = useProductStore();

  const handleAddProduct = async () => {
    try {
      const res = await createProduct();
      if (res.status === 200 && res.data) {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      }
    } catch (error) {
      console.error(error);
    }
  };

  console.log(productStore);

  return (
    <>
      {productStore.loading ? (
        <Spin />
      ) : (
        <>
          <main>
            <Button onClick={handleAddProduct}>Add more</Button>
            <Row gutter={[16, 16]}>
              {productStore.products.map(
                ({ title, id, image, price, rating, description }) => (
                  <Col span={8} key={id}>
                    <Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={<img alt={title} src={image} />}
                    >
                      <Card.Meta title={title} description={description} />
                    </Card>
                  </Col>
                )
              )}
            </Row>
          </main>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </>
      )}
    </>
  );
}

export default Home;
