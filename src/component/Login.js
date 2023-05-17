import React, { useState } from "react";
import "../CSS/login.css";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import book from "../assets/book.png";
import clock1 from "../assets/clock1.png";
import live from "../assets/live.png";
import sco from "../assets/sco.png";
import clock11 from "../assets/click11.png";
import razer from "../assets/razer.png";
import noads from "../assets/noads.png";
export default function Login() {
  const [select, setSelect] = useState({
    12: true,
    6: false,
    3: false,
  });
  const [value, setValue] = useState(179);
  const [discount, setDiscount] = useState(18401);
  const [total, setTotal] = useState(value + (18500 - discount));
  return (
    <div className="page">
      <div className="left-page">
        <div className="frame">
          <div className="TFrame">Access curated courses worth</div>
          <div className="BFrame">
            <span>
              ₹{" "}
              <span
                style={{
                  color: "red",
                  textDecoration: "line-through",
                  fontSize: "64px",
                }}
              >
                <span className="price " style={{ color: "#0096ff" }}>
                  18,500
                </span>
              </span>{" "}
              at just{" "}
              <span className="price" style={{ color: "#0096ff" }}>
                ₹99
              </span>{" "}
              per year
            </span>
          </div>
        </div>
        <div className="lower-part">
          <div className="pointer">
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={book} />
              <span className="frame-1">100+</span> Job relevant courses
            </span>

            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={clock1} />
              <span className="frame-1">20,000+</span> Hours of content
            </span>

            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={live} />
              <span className="frame-1">Exclusive</span> webinar access
            </span>

            <span
              style={{
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={sco} />
              Scholarship worth
              <span className="frame-1"> ₹94,500</span>
            </span>

            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src={noads} />
              <span className="frame-1">Ad Free</span> learning experience
            </span>
          </div>
        </div>
      </div>
      <div className="right-page">
        <div className="form">
          <div className="head">
            <div className="sub-head">
              <div className="left-head">
                <div className="signup">
                  <span>1</span>
                </div>
                <p>Signup</p>
              </div>
              <div className="right-head">
                <div className="subscribe">
                  <span>2</span>
                </div>
                <p>Subscribe</p>
              </div>
            </div>
            <div className="title">
              <span>Select your subscription plan</span>
            </div>
            <div className="selection">
              <div className="select-1">
                <div className="tag">
                  <span>Offer Expired</span>
                </div>
                <div className="select-1-left">
                  <div className="rbs">
                    <MdRadioButtonChecked />
                  </div>
                  <div className="text">12 Months Subscription</div>
                </div>
                <div className="select-price">
                  <div className="price-top">
                    <span style={{ fontSize: "12px" }}>Total</span>{" "}
                    <span>₹99</span>
                  </div>
                  <div className="price-bot">
                    <span style={{ fontSize: "12px" }}>₹8 /mo</span>
                  </div>
                </div>
              </div>
              <div
                className={`select-2 ${select[12] ? "select-b" : "sub"}`}
                onClick={() => {
                  setSelect({
                    12: true,
                    6: false,
                    3: false,
                  });
                  setTotal(0);

                  setValue(179);
                  setDiscount(18,401);
                  setTotal(value + (18,500 - discount));
                }}
              >
                <span className="tag">Recommended</span>
                <div className="select-2-left">
                  <div
                    className={` ${select[12] ? "checkFill" : "checkEmpty"}`}
                  >
                    {select[12] ? (
                      <BsCheckCircleFill />
                    ) : (
                      <MdRadioButtonUnchecked />
                    )}
                  </div>
                  <div className="text">12 Months Subscription</div>
                </div>
                <div className="select-price">
                  <div className="price-top">
                    <span style={{ fontSize: "12px" }}>Total</span>{" "}
                    <span>₹179</span>
                  </div>
                  <div className="price-bot">
                    <span style={{ fontSize: "12px", color: "#BEBEBE" }}>
                      <span style={{ color: "#3C4852" }}>₹15 </span> /mo
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${select[6] ? "select-b" : "sub"}`}
                onClick={() => {
                  setSelect({
                    12: false,
                    6: true,
                    3: false,
                  });
                  setTotal(0);

                  setValue(149);
                  setDiscount(18,301);
                  setTotal(value + (18,500 - discount));
                }}
              >
                <div className="select-3-left">
                  <div className={`${select[6] ? "checkFill" : "checkEmpty"}`}>
                    {select[6] ? (
                      <BsCheckCircleFill />
                    ) : (
                      <MdRadioButtonUnchecked />
                    )}
                  </div>
                  <div className="text">6 Months Subscription</div>
                </div>
                <div className="select-price">
                  <div className="price-top">
                    <span style={{ fontSize: "12px" }}>Total</span>{" "}
                    <span>₹149</span>
                  </div>
                  <div className="price-bot">
                    <span style={{ fontSize: "12px", color: "#BEBEBE" }}>
                      <span style={{ color: "#3C4852" }}>₹25 </span> /mo
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`${select[3] ? "select-b" : "sub"}`}
                onClick={() => {
                  setSelect({
                    12: false,
                    6: false,
                    3: true,
                  });
                  setTotal(0);
                  setValue(199);
                  setDiscount(18,201);
                  setTotal(value + (18,500 - discount));
                }}
              >
                <div className="select-4-left">
                  <div className={`${select[3] ? "checkFill" : "checkEmpty"}`}>
                    {select[3] ? (
                      <BsCheckCircleFill />
                    ) : (
                      <MdRadioButtonUnchecked />
                    )}
                  </div>
                  <div className="text">3 Months Subscription</div>
                </div>
                <div className="select-price">
                  <div className="price-top">
                    <span style={{ fontSize: "12px" }}>Total</span>{" "}
                    <span>₹199</span>
                  </div>
                  <div className="price-bot">
                    <span style={{ fontSize: "12px", color: "#BEBEBE" }}>
                      <span style={{ color: "#3C4852" }}>₹33 </span> /mo
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="subscribe-1">
              <div className="subscribe-1-Top">
                <div><span>Subscription Fee</span></div>
                <div><span>₹18,500</span></div>
              </div>
              <div className="subscribe-1-Mid">
                <div className="mid-Top">
                  <span style={{color: '#DE4313',fontWeight: '600'}}>Limited time offer</span>
                  <span>-₹{discount}</span>
                </div>
                <div className="mid-Bottom">
                  <img src={clock11} alt="" style={{color: '#DE4313'}}/>
                  <span>Offer valid till 25th March 2023</span>
                </div>
              </div>
              <div className="subscribe-1-Bottom">
                <div className="left-subscribe-Btn"><span style={{fontWeight: '600'}}>Total</span> (Incl. of 18% GST)</div>
                 <div className="right-subscribe-Btn"><span>₹{total}</span></div>
              </div>

            </div>
            <div className="btn-2">
              <div className="cancel">
                cancel
              </div>
              <div className="Proceed">
                PROCEED TO PAY
              </div>
            </div>
            <div className="razer">
              <img src={razer} alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
