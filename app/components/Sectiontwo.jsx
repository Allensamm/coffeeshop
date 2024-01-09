import React from "react";
import './sectiontwo.css'
const Sectiontwo = () => {
  return (
    <>
      <div className="section--bg">
      <div className="flex gap-[14%] section--content pb-12">
        <img className=" mt-[58px]" src="/images/coffee-image.png" width={'330px'} height={'300px'} alt="" />
        <div className="content mt-[72px]">
          <h2>Discover Coffee Borcelle</h2>
          <p className="content--">Elevating Your Coffee Experience</p>

          <div className="grid gap-4 mt-3">
            <p className="">
              At Coffee Borcelle, we're on a mission to redefine your coffee
              moments. Our carefully curated selection of premium beans, sourced
              from the world's most renowned coffee regions.
            </p>
            <p>
              With expert craftsmanship and a commitment to quality, Join us in
              savoring the art of coffee, one cup at a time.
            </p>
          </div>
          <button type="button">Read Now</button>
        </div>
        
      </div>
      </div>
    </>
  );
};

export default Sectiontwo;
