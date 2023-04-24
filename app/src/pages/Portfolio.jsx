import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <section className="section" id="section2">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-col lg:flex-row items-center justify-start lg:justify-center gap-x-2">
            {/* text container*/}
            <motion.div
              variants={fadeIn("up", 0.25)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="lg:max-w-[250px] justify-start"
            >
              <p className="text-gray-300 max-w-md opacity-75">
                <TypeAnimation
                  sequence={[
                    2000,
                    `"ฉันชอบฤดูหนาว
                    ลมหนาวราวคมมีดกรีด
                    ในคืนที่เฝ้ารอฝนดาวตก
                    อยู่กับตัวเอง
                    คับแค้นใจยิ่งนัก"`,
                  ]}
                  wrapper="span"
                  style={{ whiteSpace: "pre-line" }}
                  repeat={0}
                  speed={25}
                />
              </p>

              <div className="text-end mb-8">
                <span className="text-xs text-gradient">เชียงใหม่@2001</span>
              </div>
            </motion.div>

            {/* image container*/}
            <div className="grid grid-cols-3 gap-2 lg:gap-2">
              {/* image */}
              <motion.div
                variants={fadeIn("left", 0.35)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <div className="max-w-[250px] lg-:max-w-[250px] h-[350px] lg:max-h-[450px] overflow-hidden ml-4">
                  <img
                    className="object-cover hover:scale-110 trasition-all duration-500 border border-white"
                    src={`${require("../public/img/portfolio/img-3.jpg")}`}
                    alt=""
                  />
                </div>
              </motion.div>
              {/* image */}
              <motion.div
                variants={fadeIn("left", 0.35)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <div className="max-w-[250px] lg-:max-w-[320px] h-[187px] overflow-hidden">
                  <Link to="https://www.flickr.com/photos/pacific_friends/50586900156/in/dateposted-public/">
                    <img
                      className="object-cover hover:scale-110 trasition-all duration-500"
                      src={`${require("../public/img/portfolio/img-2.jpg")}`}
                      alt=""
                    />
                  </Link>
                </div>
              </motion.div>
              {/* image */}
              <motion.div
                variants={fadeIn("left", 0.35)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <div className="max-w-[250px] lg-:max-w-[320px] h-[187px] overflow-hidden">
                  <Link to="https://www.flickr.com/photos/pacific_friends/47613777221/in/dateposted-public/">
                    <img
                      className="object-cover hover:scale-110 trasition-all duration-500"
                      src={`${require("../public/img/portfolio/img-1.jpg")}`}
                      alt=""
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
