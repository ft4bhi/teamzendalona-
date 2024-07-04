

const LoginPage = () => {
    return (
          <div className="w-full relative bg-black h-[951px] overflow-hidden text-left text-[16px] text-gray font-poppins">
                <img className="absolute top-[223.5px] left-[667.5px] w-[688px] h-[504px] object-cover" alt="" src="login hero image.png" />
                <div className="absolute top-[79.71%] left-[5.97%]">
                      <span className="text-dimgray-200">By signing up, you agree to the</span>
                      <span className="text-darkslategray">{` `}</span>
                      <span className="[text-decoration:underline]">Terms of use</span>
                      <span className="text-dimgray-100">{` `}</span>
                      <span className="text-dimgray-200">and</span>
                      <span className="text-dimgray-100">{` `}</span>
                      <span className="[text-decoration:underline]">
                            <span>Privacy Policy.</span>
                            <span className="text-dimgray-100">{` `}</span>
                      </span>
                </div>
                <div className="absolute top-[538px] left-[99px] w-[518px] h-[190px] text-lg text-darkslategray font-inter">
                      <div className="absolute top-[67px] left-[0px] rounded-21xl bg-white box-border w-[517px] h-14 overflow-hidden border-[1px] border-solid border-darkslategray">
                            <div className="absolute top-[calc(50%_-_15.5px)] left-[calc(50%_-_160px)] flex flex-row items-center justify-center gap-[16px]">
                                  <img className="w-8 relative h-8" alt="" src="Social media logo.svg" />
                                  <div className="relative font-thin">Continue with Facebook account</div>
                            </div>
                      </div>
                      <div className="absolute top-[136px] left-[1px] rounded-21xl bg-black box-border w-[517px] h-[54px] overflow-hidden text-[24px] font-avenir border-[1px] border-solid border-darkslategray">
                            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_111.5px)] flex flex-row items-center justify-center">
                                  <div className="relative">Continue with Microsoft account</div>
                            </div>
                      </div>
                      <div className="absolute top-[0px] left-[1px] rounded-21xl bg-white box-border w-[516px] h-14 overflow-hidden border-[1px] border-solid border-darkslategray">
                            <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_156px)] flex flex-row items-center justify-center gap-[16px]">
                                  <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="Social media logo.svg" />
                                  <div className="relative font-thin">Continue with your Google account</div>
                            </div>
                      </div>
                      <img className="absolute top-[148px] left-[104px] w-[26px] h-[26px] object-cover" alt="" src="microsoft icon.png" />
                </div>
                <div className="absolute top-[300px] left-[79px] flex flex-col items-start justify-start gap-[16px] text-[48px]">
                      <div className="relative leading-[68px] font-semibold">Welcome to Darsana</div>
                      <div className="w-[530px] relative text-[28px] leading-[40px] text-dimgray-300 inline-block">we hope you will enjoy your scrolling with us</div>
                </div>
          </div>);
  };
  
  export default LoginPage;
  