import UserImage from "../../../public/user-01.png";
import ArrowImage from "../../../public/Arrow.png";
import Layout from "../../../public/Layout.png";
import ArrowSecond from "../../../public/Group 427320843.png";

const Card = () => {
  const cards = [
    {
      image: UserImage,
      title: "About Admin function One",
      contentOne: "17 articles",
      contentSec: "Posted 6 month ago",
    },
    {
      image: UserImage,
      title: "About Admin function Two",
      contentOne: "17 articles",
      contentSec: "Posted 6 month ago",
    },
    {
      image: UserImage,
      title: "About Admin function Three",
      contentOne: "17 articles",
      contentSec: "Posted 6 month ago",
    },
    {
      image: UserImage,
      title: "About Admin function Four",
      contentOne: "17 articles",
      contentSec: "Posted 6 month ago",
    },
    {
      image: UserImage,
      title: "About Admin function Five",
      contentOne: "17 articles",
      contentSec: "Posted 6 month ago",
    },
    {
      image: UserImage,
      title: "About Admin function Six",
      contentOne: "17 articles",
      contentSec: "Posted 6 month ago",
    },
    {
      image: UserImage,
      title: "About Admin function Seven",
      contentOne: "17 articles",
      contentSec: "Posted 6 month ago",
    },
    {
      image: UserImage,
      title: "About Admin function Eight",
      contentOne: "17 articles",
      contentSec: "Posted 6 month ago",
    },
    {
      image: UserImage,
      title: "About Admin function Nine",
      contentOne: "17 articles",
      contentSec: "Posted 6 month ago",
    },
  ];
  return (
    <div>
      <div className="heading text-center mt-5 mb-5">
        <h1>Filter by categories</h1>
        <p>Browse knowledge base article according to your needs</p>
      </div>
      <div className="container-fluide ps-5 pe-5">
        <div className="row">
          {cards?.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-5" key={index}>
                <div className="card shadow-sm h-100">
                  <div className="card-body p-3">
                    <div className="upper d-flex justify-content-between align-items-center mb-3">
                      <div className="image">
                        <img
                          src={item.image}
                          alt="User"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div className="text">
                        <h4 className="mb-0">{item.title}</h4>
                      </div>
                      <div className="SecImg">
                        <img src={ArrowImage} alt="SecImg" />
                      </div>
                    </div>
                    <div className="lower d-flex justify-content-between mt-5">
                      <p className="text-muted mb-0">{item.contentOne}</p>
                      <p className="text-muted mb-0">{item.contentSec}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*---------------Second Layout----------------*/}

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0f4538, #195043, #0a412e)",
                position: "relative",
                borderRadius: "20px",
              }}
              className="image col-lg-12 col-md-12 col-sm-12"
            >
              <img src={Layout} alt="Layout" />
              <div
                style={{
                  display: "flex",
                  color: "white",
                  position: "absolute",
                  top: 60,
                  paddingLeft: "20px",
                }}
                className="textContent"
              >
                <div className="text">
                  <h2>Haven't found what you need?</h2>
                  <p>Get in touch, we are happy to help you.</p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: 1200,
                    width: 80,
                  }}
                  className="imageSec"
                >
                  <img
                    style={{ width: "100%" }}
                    src={ArrowSecond}
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
