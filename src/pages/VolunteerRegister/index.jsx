import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const VolunteerRegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-inter items-center justify-start mx-auto pb-[34px] w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-cyan-50 flex flex-1 md:flex-col flex-row md:gap-10 items-start justify-between pr-[11px] py-[11px] w-full">
            <div className="flex md:mt-0 my-[5px] relative w-[23%] md:w-full">
              <Img
                className="h-[87px] my-auto object-cover w-[48%]"
                src="images/img_sihlogoremovebgpreview.png"
                alt="sihlogoremovebg"
              />
              <Text
                className="mb-[22px] ml-[-29.8px] mt-auto md:text-3xl sm:text-[28px] text-[32px] text-cyan-700 tracking-[3.20px] z-[1]"
                size="txtInterExtraBold32"
              >
                RescueNet
              </Text>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-5 items-start justify-center mr-7 md:mt-0 mt-3.5 w-[27%] md:w-full">
              <div
                className="common-pointer flex flex-col gap-2.5 items-center justify-start w-[16%] sm:w-full"
                onClick={() => navigate("/")}
              >
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
              <div className="flex flex-col gap-3 items-center justify-start sm:mt-0 mt-[3px] w-[30%] sm:w-full">
                <Img
                  className="h-[47px] md:h-auto object-cover w-[46px] sm:w-full"
                  src="images/img_language1.png"
                  alt="languageOne"
                />
                <Text
                  className="text-black-900 text-lg tracking-[1.80px]"
                  size="txtInterExtraBold18"
                >
                  Languages
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start w-[23%] sm:w-full">
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
                className="common-pointer flex flex-col gap-[11px] items-center justify-start sm:mt-0 mt-2 w-[17%] sm:w-full"
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
          <div className="bg-cyan-50 flex flex-1 flex-col items-center justify-start overflow-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="h-[107px] relative w-1/5 md:w-full">
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
              <div className="h-[107px] relative w-[10%] md:w-full">
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
              <div className="bg-blue_gray-900 flex flex-col items-center justify-start p-[9px]">
                <Text
                  className="my-3.5 text-center text-lg text-white-A700 tracking-[1.80px]"
                  size="txtInterMedium18"
                >
                  <>
                    Volunteer
                    <br />
                    Registration
                  </>
                </Text>
              </div>
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
              <div className="h-[107px] relative w-[10%] md:w-full">
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
              <div className="h-[107px] sm:h-[234px] relative w-[30%] md:w-full">
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
          </div>
        </header>
        <Line className="bg-cyan-50 h-px w-full" />
        <div className="bg-cyan-50 flex flex-col items-center justify-start mt-[35px] p-8 md:px-5 rounded-[16px] shadow-bs3 w-[31%] md:w-full">
          <div className="flex flex-col items-center justify-start my-0.5 w-full">
            <Text
              className="sm:text-[34.93px] md:text-[36.93px] text-[38.93px] text-black-900"
              size="txtInika3893"
            >
              Register
            </Text>
            <Text
              className="mt-[3px] text-[10.58px] text-black-900"
              size="txtInterRegular1058"
            >
              {" "}
              Don’t have an account ? Create your account, it takes less than a
              minute{" "}
            </Text>
            <div className="flex flex-col items-start justify-start mt-[59px] w-full">
              <Text
                className="bg-cyan-100_e0 border border-black-900 border-solid h-[53px] justify-center pl-[17px] sm:pr-5 pr-[35px] py-[9px] rounded-md sm:text-[22.46px] md:text-[24.46px] text-[26.46px] text-cyan-100_e0 w-[376px]"
                size="txtInterRegular2646"
              >
                Name{" "}
              </Text>
              <Text
                className="bg-cyan-100_e0 border border-black-900 border-solid h-[53px] justify-center mt-6 pb-3 pl-[17px] sm:pr-5 pr-[35px] pt-[7px] rounded-md sm:text-[22.46px] md:text-[24.46px] text-[26.46px] text-cyan-100_e0 w-[376px]"
                size="txtInterRegular2646"
              >
                Email ID
              </Text>
              <Text
                className="bg-cyan-100_e0 border border-black-900 border-solid h-[53px] justify-center mt-6 pb-[5px] pl-[17px] sm:pr-5 pr-[35px] pt-3.5 rounded-md sm:text-[22.46px] md:text-[24.46px] text-[26.46px] text-cyan-100_e0 w-[376px]"
                size="txtInterRegular2646"
              >
                Phone No.
              </Text>
              <Text
                className="bg-cyan-100_e0 border border-black-900 border-solid h-[53px] justify-center mt-6 pl-[17px] sm:pr-5 pr-[35px] pt-[18px] rounded-md sm:text-[22.46px] md:text-[24.46px] text-[26.46px] text-cyan-100_e0 w-[376px]"
                size="txtInterRegular2646"
              >
                Password
              </Text>
              <Button
                className="cursor-pointer font-inder leading-[normal] min-w-[115px] md:ml-[0] ml-[262px] mt-16 rounded-[10px] sm:text-[21.66px] md:text-[23.66px] text-[25.66px] text-center"
                color="blue_200"
                size="xs"
              >
                LOGIN
              </Button>
              <Text
                className="md:ml-[0] ml-[99px] mt-[70px] text-[15.87px] text-black-900"
                size="txtInderRegular1587"
              >
                Login with social media{" "}
              </Text>
              <div className="flex flex-row items-center justify-center md:ml-[0] ml-[121px] mt-2.5 w-[36%] md:w-full">
                <Img
                  className="h-[31px] md:h-auto object-cover w-[31px]"
                  src="images/img_google1.png"
                  alt="googleOne"
                />
                <Img
                  className="h-[31px] md:h-auto ml-5 object-cover w-[31px]"
                  src="images/img_facebook1.png"
                  alt="facebookOne"
                />
                <Img
                  className="h-[31px] md:h-auto ml-[18px] object-cover w-[31px]"
                  src="images/img_twitter1.png"
                  alt="twitterOne"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteerRegisterPage;
