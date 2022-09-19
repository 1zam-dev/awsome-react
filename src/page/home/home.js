import { Button, Card, Col, Row, Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { createProduct } from "../../api/product";
import { useProductStore } from "../../store/product";
import { GET_PRODUCT_SUCCESS } from "../../store/product/types";
import "./home.css";

const videoStates = {
  unstarted: -1,
  ended: 0,
  playing: 1,
  paused: 2,
  buffering: 3,
  videoCued: 4,
};

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoState, setVideoState] = useState(videoStates.unstarted);
  const [videoCurrentTimer, setVideoCurrentTimer] = useState(0);
  const ref = useRef();

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

  useEffect(() => {
    const videoTimer = setInterval(() => {
      if (videoState === videoStates.playing) {
        setVideoCurrentTimer((videoCurrentTimer) => ++videoCurrentTimer);
      }
    }, 1000);
    return () => {
      clearInterval(videoTimer);
    };
  }, [videoState]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <>
      {productStore.loading ? (
        <Spin />
      ) : (
        <>
          <main>
            <h1>{videoCurrentTimer}</h1>
            {/* <Button onClick={handleAddProduct}>Add more</Button> */}
            {/* <Row gutter={[16, 16]}>
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
            </Row> */}
            <YouTube
              ref={ref}
              videoId="7ICKkagL3xA"
              opts={opts}
              onStateChange={(event) => {
                const time = event.target.getCurrentTime();
                console.log("timer", time);
                setVideoState(event.data);
                setVideoCurrentTimer(time);
              }}
            />
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
