import { useEffect } from "react";
import { aboutUs } from "../../../config";
function About() {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <>
      <div className="about-section paddingTB60 gray-bg flex justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-6">
              <div className="about-title clearfix">
                <h1>
                  {aboutUs.firstname} <span>{aboutUs.lastname}</span>
                </h1>
                <h3>{aboutUs.slogan}</h3>
                <p className="about-paddingB">
                  <div
                    dangerouslySetInnerHTML={{ __html: aboutUs.paragraph_1 }}
                  ></div>
                </p>

                <p>
                  <div
                    dangerouslySetInnerHTML={{ __html: aboutUs.paragraph_2 }}
                  ></div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
