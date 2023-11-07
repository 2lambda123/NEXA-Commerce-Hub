import React from "react";
import { Container, Col } from "react-bootstrap";
import Hedaer from "./Header";
import "../index.css";
import { Link } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";
const Createrequest = () => {
  const category = {
    item1: "value1",
    item2: "value2",
    item3: "value3",
    item4: "value4",
    item5: "value5",
    item6: "value6",
    item7: "value7",
    item8: "value8",
    item9: "value9",
    item10: "value10",
  };
  return (
    <>
      <Hedaer />
      <h4 className="text-center mt-2">Request Items</h4>
      <Container className="d-flex justify-content-center position-relative mt-5">
        <Col lg={8} className="shadow-lg">
          <div className="d-flex flex-wrap  justify-content-center  text-center">
            {Object.entries(category).map((item, index) => (
              <Link to={"/Cateogry1"}>
                <a key={index} className="d-grid ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    className="m-1"
                  >
                    <path fill="#00000" d="m12 2l-5.5 9h11z" />
                    <circle cx="17.5" cy="17.5" r="4.5" fill="#00000" />
                    <path fill="#00000" d="M3 13.5h8v8H3z" />
                  </svg>
                  {item[0]}
                </a>
              </Link>
            ))}
          </div>
        </Col>
      </Container>
      <BottomNavbar />
    </>
  );
};
export default Createrequest;
