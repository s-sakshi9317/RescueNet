import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-cyan-50 flex flex-col font-inter justify-start mx-auto overflow-auto pb-7 w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-cyan-50_01 flex flex-col items-center justify-start p-[25px] sm:px-5 shadow-bs w-full">
            <div className="flex flex-col items-center justify-start max-w-[1360px] mb-4 mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col justify-start w-[77%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <Img
                      className="md:flex-1 h-[178px] sm:h-auto md:mt-0 mt-3 object-cover w-[31%] md:w-full"
                      src="images/img_sihlogoremovebgpreview.png"
                      alt="sihlogoremovebg"
                    />
                    <Text
                      className="md:ml-[0] ml-[122px] md:mt-0 mt-[109px] text-cyan-900 text-xl tracking-[2.00px]"
                      size="txtInterExtraBold20"
                    >
                      <>
                        We cannot control the weather,
                        <br />
                        but we can control how we respond to it.
                      </>
                    </Text>
                    <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[62px] w-[6%] md:w-full">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_home1.png"
                        alt="homeOne"
                      />
                      <Text
                        className="text-black-900 text-lg tracking-[1.80px]"
                        size="txtInterExtraBold18"
                      >
                        Home
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[35px] sm:text-4xl md:text-[38px] text-[40px] text-cyan-700 tracking-[4.00px]"
                    size="txtInterExtraBold40"
                  >
                    RescueNet
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-3 items-center justify-start md:mt-0 mt-[3px] w-[9%] md:w-full">
                  <Img
                    className="common-pointer h-[47px] md:h-auto object-cover w-[46px] sm:w-full"
                    src="images/img_language1.png"
                    alt="languageOne"
                    onClick={() => navigate("/desktoptwo")}
                  />
                  <Text
                    className="text-black-900 text-lg tracking-[1.80px]"
                    size="txtInterExtraBold18"
                  >
                    Languages
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[7%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto object-cover w-[42%] sm:w-full"
                    src="images/img_telephone1.png"
                    alt="telephoneOne"
                  />
                  <Text
                    className="text-black-900 text-lg tracking-[1.80px]"
                    size="txtInterExtraBold18"
                  >
                    Contact
                  </Text>
                </div>
                <div
                  className="common-pointer flex md:flex-1 flex-col gap-[11px] items-center justify-start md:mt-0 mt-2 w-[5%] md:w-full"
                  onClick={() => navigate("/login")}
                >
                  <Img
                    className="h-[42px] md:h-auto object-cover w-[42px]"
                    src="images/img_userinterface1.png"
                    alt="userinterfaceOne"
                  />
                  <a
                    href="javascript:"
                    className="text-black-900 text-lg tracking-[1.80px]"
                  >
                    <Text size="txtInterExtraBold18">Log in</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly shadow-bs1 w-full">
            <div className="h-[107px] md:px-5 relative w-1/5 md:w-full">
              <div className="flex flex-row h-full items-center justify-evenly m-auto w-full">
                <div className="bg-blue_gray-900 h-[107px] w-1/2"></div>
                <div className="h-[107px] relative w-1/2">
                  <div className="absolute bg-blue_gray-900 h-[107px] inset-[0] justify-center m-auto w-full"></div>
                  <Text
                    className="common-pointer absolute h-max inset-[0] justify-center m-auto text-center text-lg text-white-A700 tracking-[1.80px]"
                    size="txtInterMedium18"
                    onClick={() => navigate("/weather")}
                  >
                    <>
                      Weather
                      <br /> Alert
                    </>
                  </Text>
                </div>
              </div>
              <Text
                className="absolute h-max inset-y-[0] left-[0] my-auto text-center text-lg text-white-A700 tracking-[1.80px]"
                size="txtInterMedium18"
              >
                <>
                  Emergency
                  <br />
                  Alert
                </>
              </Text>
            </div>
            <div className="h-[107px] md:px-5 relative w-[10%] md:w-full">
              <div className="absolute bg-blue_gray-900 h-[107px] inset-[0] justify-center m-auto w-full"></div>
              <Text
                className="common-pointer absolute h-max inset-[0] justify-center m-auto text-center text-lg text-white-A700 tracking-[1.80px]"
                size="txtInterMedium18"
                onClick={() => navigate("/info")}
              >
                <>
                  Safety
                  <br />
                  Information
                </>
              </Text>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium leading-[normal] text-center text-lg tracking-[1.80px]"
              onClick={() => navigate("/volunteerregister")}
              shape="square"
              size="md"
            >
              <>
                Volunteer
                <br />
                Registration
              </>
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[143px] text-center text-lg tracking-[1.80px]"
              shape="square"
            >
              Response
            </Button>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[143px] text-center text-lg tracking-[1.80px]"
              shape="square"
            >
              Resources
            </Button>
            <div className="h-[107px] md:px-5 relative w-[10%] md:w-full">
              <div className="absolute bg-blue_gray-900 h-[107px] inset-[0] justify-center m-auto w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-center text-lg text-white-A700 tracking-[1.80px]"
                size="txtInterMedium18"
              >
                <>
                  Donate/
                  <br />
                  contribute
                </>
              </Text>
            </div>
            <div className="h-[107px] sm:h-[234px] md:px-5 relative w-[30%] md:w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                  <div className="bg-blue_gray-900 h-[107px] w-[34%]"></div>
                  <div className="flex sm:flex-1 flex-row items-center justify-evenly w-[67%] sm:w-full">
                    <div className="h-[107px] relative w-1/2">
                      <div className="absolute bg-blue_gray-900 h-[107px] inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-lg text-white-A700 tracking-[1.80px]"
                        size="txtInterMedium18"
                      >
                        <>
                          Emergency
                          <br />
                          Contacts
                        </>
                      </Text>
                    </div>
                    <div className="bg-blue_gray-900 h-[107px] w-1/2"></div>
                  </div>
                </div>
              </div>
              <Text
                className="absolute h-max inset-y-[0] left-[0] my-auto text-center text-lg text-white-A700 tracking-[1.80px]"
                size="txtInterMedium18"
              >
                <>
                  Report
                  <br />
                  Incident
                </>
              </Text>
              <Text
                className="absolute h-max inset-y-[0] my-auto right-[0] text-center text-lg text-white-A700 tracking-[1.80px]"
                size="txtInterMedium18"
              >
                <>
                  Find nearby
                  <br />
                  Agencies
                </>
              </Text>
            </div>
          </div>
          <Img
            className="h-[299px] sm:h-auto object-cover w-full"
            src="images/img_pexelsahmedakacha15804051.png"
            alt="pexelsahmedakac"
          />
        </div>
        <Text
          className="md:ml-[0] ml-[33px] mt-[7px] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[12.75px]"
          size="txtInterBlack50"
        >
          Our Core Services
        </Text>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px] mt-[11px] md:px-5">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[3.00px]"
            size="txtInterBlack30"
          >
            Swift Response
          </Text>
          <Text
            className="text-black-900 text-xl tracking-[2.00px]"
            size="txtInterRegular20"
          >
            Rapid deployment to disaster-stricken locations worldwide.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px] mt-[9px] md:px-5">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[3.00px]"
            size="txtInterBlack30"
          >
            Expert Planning
          </Text>
          <Text
            className="text-black-900 text-xl tracking-[2.00px]"
            size="txtInterRegular20"
          >
            Implementing well-researched strategies to maximize effectiveness.
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px] mt-[13px] md:px-5">
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 tracking-[3.00px]"
            size="txtInterBlack30"
          >
            On-Site Support
          </Text>
          <Text
            className="text-black-900 text-xl tracking-[2.00px]"
            size="txtInterRegular20"
          >
            Providing essential resources and relief to those in need.
          </Text>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
