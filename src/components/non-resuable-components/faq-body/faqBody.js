import React from "react";
import "./faqBody.css";
import Layout from "../../../utils/layout/layout";
import { faq } from "../../../utils/data/data";
import SingleFaq from "../../reusable-components/single-faq/singleFaq";
import Input from "../../reusable-components/input/input";
import Button from "../../reusable-components/button/button";

const FaqBody = () => {
  return (
    <Layout>
      <div className="faqbody-container">
        <div className="faqbody-general">
          <h2>General Information</h2>
          {faq?.map((item, index) => {
            return <SingleFaq title={item.title} answer={item.answer} key={index} />;
          })}
        </div>
        <div className="faqbody-new">
          <h2>Ask a Question</h2>
          <div className="faqbody-form">
            <div>
              <Input placeholder="Your Name" type="input" />
            </div>
            <div>
              <Input placeholder="Subject" type="input" />
            </div>
            <div>
              <Input placeholder="Type Your Message" />
            </div>
            <Button text="Send Mail" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FaqBody;
