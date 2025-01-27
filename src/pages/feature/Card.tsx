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

      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, #0f4538, #195043, #0a412e)",
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
              }}
              className="d-flex align-items-center p-3"
            >
              <img
                src={Layout}
                alt="Layout"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  color: "white",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  width: "90%",
                }}
              >
                <h2
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  Haven't found what you need?
                </h2>
                <p
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Get in touch, we are happy to help you.
                </p>
              </div>

              {/* Arrow Section */}
              <div
                style={{
                  position: "absolute",
                  right: "20px",
                  bottom: "20px",
                  width: "50px",
                }}
                className="arrow-container"
              >
                <img
                  src={ArrowSecond}
                  alt="Arrow"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
