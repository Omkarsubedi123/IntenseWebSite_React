import { useState } from "react";
import DownArrow from "../../../public/Icon.png";

const QNA = () => {
  const [show, setShow] = useState();

  const handleClick = (index) => {
    setShow(show === index ? null : index);
  };

  const list = [
    { title: "1. What is Intense Team and how does it work?" },
    { title: "2. How can Intense Team improve productivity?" },
    { title: "3. Is Intense Team suitable for all industries?" },
  ];

  const DropContent = [
    {
      drop: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat tempora dignissimos necessitatibus enim asperiores esse, ipsum aspernatur non, laboriosam ipsam eius cum quas doloremque voluptate, ea neque quam beatae voluptatum.",
    },
    {
      drop: "Intense Team improves productivity by streamlining workflows, automating repetitive tasks, and facilitating seamless collaboration among team members.",
    },
    {
      drop: "Yes, Intense Team is designed to adapt to various industries, providing versatile tools to meet diverse organizational needs.",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <h1 className="fs-2">Got questions?</h1>
          <h2 className="fs-3">We've got answers</h2>
          <p className="fs-5">
            Explore our FAQs to learn more about how Intense Team can streamline
            your workflow and boost productivity.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="col-lg-6 col-md-12">
          <div className="row">
            {list.map((item, index) => (
              <div className="col-12 mb-3" key={index}>
                {/* Question Card */}
                <div
                  style={{
                    backgroundColor: "AliceBlue",
                    color: "black",
                  }}
                  className="d-flex justify-content-between align-items-center p-3 rounded shadow-sm"
                  onClick={() => handleClick(index)}
                >
                  <div className="fs-5 text-black">{item.title}</div>
                  <img
                    src={DownArrow}
                    alt="downarrow"
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  />
                </div>

                {/* Dropdown Content */}
                {show === index && (
                  <div
                    style={{ backgroundColor: "#6c757d" }}
                    className="p-3 rounded mt-2 shadow-sm"
                  >
                    <p className="fs-6 text-white m-0">
                      {DropContent[index]?.drop}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QNA;
