import { Carousel } from "antd";
import React from "react";
import Image1 from "../assets/images/anh1.jpg";
import Image2 from "../assets/images/anh2.jpg";
import Image3 from "../assets/images/anh3.jpg";
import Image4 from "../assets/images/anh4.jpg";

function Slider() {
  const imagetStyle: React.CSSProperties = {
    width: "100%",
    height: "400px",
  };
  return (
    <Carousel autoplay style={{ marginTop: 20 }}>
      <div>
        <img src={Image1} style={imagetStyle} />
      </div>
      <div>
        <img src={Image2} style={imagetStyle} />
      </div>
      <div>
        <img src={Image3} style={imagetStyle} />
      </div>
      <div>
        <img src={Image4} style={imagetStyle} />
      </div>
    </Carousel>
  );
}

export default Slider;
