import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-cyan-50_01 flex flex-col font-inter items-center justify-start mx-auto pb-[30px] w-full">
        <div className="flex flex-col justify-start w-full">
          <header className="flex flex-col items-center justify-center overflow-auto md:px-5 w-full">
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
                <div className="flex flex-col gap-[11px] items-center justify-start sm:mt-0 mt-2 w-[17%] sm:w-full">
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
            <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
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
          </header>
          <Text
            className="md:ml-[0] ml-[510px] mt-7 sm:text-[41.04px] md:text-[47.04px] text-[55.04px] text-indigo-700"
            size="txtInterExtraBold5504"
          >
            Create account{" "}
          </Text>
          <Text
            className="md:ml-[0] ml-[411px] sm:text-[26.96px] md:text-[28.96px] text-[30.96px] text-gray-500"
            size="txtInterRegular3096"
          >
            Join our community and share our mission{" "}
          </Text>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[151px] mt-12 md:px-5 w-[88%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[90%] md:w-full">
              <Text
                className="bg-cyan-100 h-[86px] justify-center mb-[3px] sm:px-5 px-[35px] py-[19px] rounded-[25px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[476px]"
                size="txtInterRegular40"
              >
                Email Id
              </Text>
              <Text
                className="bg-cyan-100 h-[86px] justify-center md:mt-0 mt-[3px] pb-[22px] pt-4 sm:px-5 px-[35px] rounded-[25px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[476px]"
                size="txtInterRegular40"
              >
                Contact number
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[175px] items-start justify-start mt-[34px] w-[90%] md:w-full">
              <div className="flex flex-col relative w-[43%] md:w-full">
                <div className="bg-cyan-100 flex flex-col items-center justify-start mx-auto p-3.5 rounded-[25px] w-full">
                  <Text
                    className="backdrop-opacity-[0.5] blur-[4.00px] mb-[9px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtInterRegular40"
                  >
                    Enter your otp
                  </Text>
                </div>
                <Text
                  className="ml-auto mt-[-0.56px] text-gray-500_01 text-xl z-[1]"
                  size="txtInterRegular20Gray50001"
                >
                  Time -00
                </Text>
              </div>
              <Button
                className="cursor-pointer leading-[normal] mb-6 min-w-[476px] sm:min-w-full sm:text-4xl md:text-[38px] text-[40px] text-center"
                shape="round"
                color="cyan_100"
                size="sm"
              >
                Area of expertise
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[175px] items-start justify-start mt-2.5 w-[90%] md:w-full">
              <Button
                className="cursor-pointer leading-[normal] min-w-[476px] sm:min-w-full md:mt-0 mt-[5px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                shape="round"
                color="cyan_100"
                size="sm"
              >
                Agency Name
              </Button>
              <Text
                className="bg-cyan-100 h-[86px] justify-center mb-[5px] sm:px-5 px-[35px] py-[19px] rounded-[25px] sm:text-4xl md:text-[38px] text-[40px] text-gray-50 w-[476px]"
                size="txtInterRegular40Gray50"
              >
                Resources Available
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[174px] items-start justify-start md:ml-[0] ml-[3px] mt-[30px] w-[89%] md:w-full">
              <Button
                className="cursor-pointer leading-[normal] min-w-[473px] sm:min-w-full md:mt-0 mt-[9px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                shape="round"
                color="cyan_100"
                size="sm"
              >
                Location
              </Button>
              <Button
                className="cursor-pointer leading-[normal] mb-[9px] min-w-[476px] sm:min-w-full sm:text-4xl md:text-[38px] text-[40px] text-center"
                shape="round"
                color="cyan_100"
                size="sm"
              >
                Proof of identification
              </Button>
            </div>
            <Text
              className="bg-blue_gray-600 h-[79px] justify-center md:ml-[0] ml-[989px] mt-[39px] pt-[11px] sm:px-5 px-[30px] rounded-[25px] sm:text-[41.04px] md:text-[47.04px] text-[55.04px] text-white-A700 w-[276px]"
              size="txtInterRegular5504"
            >
              Register
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
