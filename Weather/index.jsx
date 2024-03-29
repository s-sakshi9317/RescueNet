import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const WeatherPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-cyan-50 flex flex-col font-inter gap-[39px] items-center justify-start mx-auto pb-[38px] w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-cyan-50 flex flex-1 md:flex-col flex-row md:gap-5 items-end justify-start pr-[11px] py-[11px] w-full">
            <div className="flex md:mt-0 my-[5px] relative w-[23%] md:w-full">
              <Img
                className="h-[87px] my-auto object-cover w-[48%]"
                src="images/img_sihlogoremovebgpreview_87x155.png"
                alt="sihlogoremovebg"
              />
              <Text
                className="mb-[22px] ml-[-29.8px] mt-auto md:text-3xl sm:text-[28px] text-[32px] text-cyan-700 tracking-[3.20px] z-[1]"
                size="txtInterExtraBold32"
              >
                RescueNet
              </Text>
            </div>
            <div
              className="common-pointer flex md:flex-1 flex-col gap-2.5 items-center justify-start md:ml-[0] ml-[692px] md:mt-0 mt-3.5 w-[5%] md:w-full"
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
            <div
              className="common-pointer flex md:flex-1 flex-col gap-3 items-center justify-start ml-5 md:ml-[0] md:mt-0 mt-[17px] w-[8%] md:w-full"
              onClick={() => navigate("/desktoptwo")}
            >
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
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start ml-5 md:ml-[0] md:mt-0 mt-3.5 w-[6%] md:w-full">
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
              className="common-pointer flex md:flex-1 flex-col gap-[11px] items-center justify-start ml-5 md:ml-[0] md:mt-0 mt-[22px] w-[5%] md:w-full"
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
          <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
            <div className="h-[107px] sm:h-[234px] relative w-[30%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-center justify-evenly m-auto w-full">
                <div className="bg-blue_gray-900 h-[107px] w-[34%]"></div>
                <div className="h-[107px] relative w-[67%] sm:w-full">
                  <div className="absolute flex flex-row h-full inset-[0] items-center justify-center m-auto w-full">
                    <div className="h-[107px] relative w-[51%]">
                      <div className="absolute bg-blue_gray-900 h-[107px] inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-lg text-white-A700 tracking-[1.80px]"
                        size="txtInterMedium18"
                      >
                        <>
                          Weather
                          <br /> Alert
                        </>
                      </Text>
                    </div>
                    <div className="bg-blue_gray-900 h-[107px] w-1/2"></div>
                  </div>
                  <Text
                    className="common-pointer absolute h-max inset-y-[0] my-auto right-[0] text-center text-lg text-white-A700 tracking-[1.80px]"
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
                    <div className="h-[107px] relative w-1/2">
                      <div className="absolute bg-blue_gray-900 h-[107px] inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-lg text-white-A700 tracking-[1.80px]"
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
            </div>
          </div>
        </header>
        <div className="bg-blue_gray-900 flex flex-col font-inknutantiqua gap-4 items-center justify-end max-w-[1060px] mx-auto p-[22px] md:px-5 rounded-[16px] shadow-bs2 w-full">
          <div className="sm:h-[249px] h-[372px] md:h-[469px] relative w-[97%] md:w-full">
            <div className="flex flex-col gap-[45px] h-full items-center justify-start m-auto w-full">
              <div className="md:h-[149px] h-[203px] relative w-full">
                <Text
                  className="absolute left-[0] sm:text-[43.97px] md:text-[49.97px] text-[57.97px] text-white-A700 top-[0] w-[32%] sm:w-full"
                  size="txtInknutAntiquaRegular5797"
                >
                  Weather
                </Text>
                <div className="absolute bg-blue_gray-900 bottom-[0] h-[75px] inset-x-[0] mx-auto rounded-[5px] w-full"></div>
              </div>
              <div className="bg-cyan-100 font-inriasans h-[123px] p-1 relative rounded-br-[57px] w-full">
                <Text
                  className="mb-[-15.07px] ml-[13px] mt-auto sm:text-[43.97px] md:text-[49.97px] text-[57.97px] text-white-A700 tracking-[5.80px] z-[1]"
                  size="txtInriaSansRegular5797"
                >
                  19
                </Text>
                <Text
                  className="mb-[undefinedpx] ml-[134px] mt-auto sm:text-[29.119999999999997px] md:text-[31.119999999999997px] text-[33.12px] text-gray-200 tracking-[3.31px] z-[1]"
                  size="txtInriaSansRegular3312"
                >
                  Mosynram, Meghalaya
                </Text>
                <Text
                  className="ml-[3px] mt-auto sm:text-[24.98px] md:text-[26.98px] text-[28.98px] text-gray-600 tracking-[2.90px]"
                  size="txtInriaSansRegular2898"
                >
                  H: 24 L:-18
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[10%] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-[97%]">
              <div className="bg-white-A700 flex flex-col items-center justify-start mb-[118px] pt-1.5 px-1.5 rounded-[33px]">
                <div className="flex md:flex-col flex-row gap-[27px] items-center justify-start w-[92%] md:w-full">
                  <Img
                    className="h-[63px] md:h-auto object-cover w-16 sm:w-full"
                    src="images/img_find1.png"
                    alt="findOne"
                  />
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                    size="txtInknutAntiquaRegular32"
                  >
                    Search for the emergency area
                  </Text>
                </div>
              </div>
              <Img
                className="h-[132px] md:h-auto md:mt-0 mt-[76px] object-cover"
                src="images/img_image10.png"
                alt="imageTen"
              />
            </div>
          </div>
          <div className="font-inriasans md:h-[166px] h-[282px] relative w-[97%] md:w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                <div className="bg-cyan-100 h-[123px] md:h-[70px] p-[5px] relative rounded-br-[57px] w-full">
                  <Text
                    className="absolute h-[70px] left-[2%] sm:text-[43.97px] md:text-[49.97px] text-[57.97px] text-red-50 top-[12%] tracking-[5.80px]"
                    size="txtInriaSansRegular5797Red50"
                  >
                    20
                  </Text>
                  <Text
                    className="absolute bottom-[4%] left-[1%] sm:text-[24.98px] md:text-[26.98px] text-[28.98px] text-gray-600_01 tracking-[2.90px]"
                    size="txtInriaSansRegular2898Gray60001"
                  >
                    H: 21 L:-19
                  </Text>
                  <Text
                    className="absolute h-max inset-y-[0] left-[15%] my-auto sm:text-[29.119999999999997px] md:text-[31.119999999999997px] text-[33.12px] text-gray-200_01 tracking-[3.31px]"
                    size="txtInriaSansRegular3312Gray20001"
                  >
                    Gujrat, Kutch
                  </Text>
                </div>
                <div className="bg-cyan-100 h-[123px] md:h-[70px] p-2 relative rounded-br-[57px] w-full">
                  <div className="absolute bottom-[11%] md:h-10 h-[70px] left-[7%] w-[57%] sm:w-full">
                    <Text
                      className="absolute right-[0] sm:text-[29.119999999999997px] md:text-[31.119999999999997px] text-[33.12px] text-gray-200_01 top-[0] tracking-[3.31px]"
                      size="txtInriaSansRegular3312Gray20001"
                    >
                      TAMIL NADU, AUROVILLE
                    </Text>
                    <Text
                      className="absolute bottom-[0] left-[0] sm:text-[24.98px] md:text-[26.98px] text-[28.98px] text-blue_gray-400 tracking-[2.90px]"
                      size="txtInriaSansRegular2898Bluegray400"
                    >
                      H: 16 L:-8{" "}
                    </Text>
                  </div>
                  <Text
                    className="absolute left-[2%] sm:text-[43.97px] md:text-[49.97px] text-[57.97px] text-white-A700 top-[10%] tracking-[5.80px]"
                    size="txtInriaSansRegular5797"
                  >
                    13
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[106px] object-cover right-[2%] top-[0] w-[16%]"
              src="images/img_image11.png"
              alt="imageEleven"
            />
            <Img
              className="absolute bottom-[2%] h-[154px] object-cover right-[2%] w-[17%]"
              src="images/img_image12.png"
              alt="imageTwelve"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
