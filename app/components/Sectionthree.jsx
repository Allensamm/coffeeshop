import React from "react";
import "./sectionthree.css";

const Sectionthree = () => {
  return (
    <div>
      <div className="card--">
        <div className="card--info m-auto text-center mb-6">
          <div className="reviews">
            <h1 className="text-[45px] font-[700] text-white">Reviews</h1>
            <span></span>
          </div>
          <h2 className="text-[30px] mt-[-10px] text-white">what other people are saying!</h2>
        </div>
        <div className="card">
          <div className="card--one">
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              fugiat nihil assumenda? At magnam quis esse voluptatem officia
              incidunt, dicta ab modi iure corporis{" "}
            </p>
            <a href="">@unknown</a>
          </div>
          <div className="card--two">
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              fugiat nihil assumenda? At magnam quis esse voluptatem officia
              incidunt, dicta ab modi iure corporis{" "}
            </p>
            <a href="">@unknown</a>
          </div>
          <div className="card--three">
            <p className="text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              fugiat nihil assumenda? At magnam quis esse voluptatem officia
              incidunt, dicta ab modi iure corporis{" "}
            </p>
            <a  href="">@unknown</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionthree;
