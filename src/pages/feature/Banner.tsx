import BannerImage from "../../../public/Texture.png";

const Banner = () => {
  const MostSearch = [
    { title: "Pricing plan" },
    { title: "How to use" },
    { title: "Integration" },
  ];
  return (
    <div className="container-fluid p-3">
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
          >
            <img
              style={{ borderRadius: "20px", width: "100%", height: "auto" }}
              src={BannerImage}
              alt="BannerImage"
            />
            <div
              style={{
                position: "absolute",
                top: "80px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                textAlign: "center",
              }}
              className="text px-3"
            >
              <p style={{ textDecoration: "underline" }} className="mb-3">
                Home / Support
              </p>
              <h1 className="mb-3" style={{ fontSize: "3rem" }}>
                Support, find solutions faster
              </h1>
              <p className="mb-4">
                We are most helpful when you ask dedicated questions.
              </p>
              <input
                style={{
                  border: "2px solid green",
                  borderRadius: "18px",
                  width: "100%",
                  maxWidth: "650px",
                  fontSize: "1rem",
                  padding: "15px",
                }}
                type="text"
                placeholder="Search"
                className="mb-4"
              />
              <div className="lower pt-4 d-flex gap-3 justify-content-center">
                <p className="mb-2">Common searches:</p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {MostSearch?.map((item) => (
                    <span
                      title={item.title}
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        borderRadius: "30px",
                        padding: "5px 15px",
                      }}
                    >
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
