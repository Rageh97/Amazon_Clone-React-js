import React from "react";
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";
const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrum title="Shipping Policy" />
      <section className="policy-wrapper home-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">Waiting...</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingPolicy;
