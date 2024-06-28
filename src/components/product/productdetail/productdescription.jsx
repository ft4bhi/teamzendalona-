import { memo } from "react";

const ProductDescription = memo(() => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-base text-gray-600 font-text-info">
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/blockdetail.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-2.5 pb-4 box-border relative gap-[140px] max-w-full z-[3] mq450:gap-[35px] mq925:gap-[70px]">
        <div className="w-[1315px] h-[114px] absolute !m-[0] top-[41px] right-[0px] tracking-[-0.2px] leading-[24px] inline-block z-[1]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</p>
          <p className="m-0">{`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure `}</p>
          <p className="m-0 whitespace-pre-wrap">{`dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">{`adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, `}</p>
          <p className="m-0">{`Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in `}</p>
          <p className="m-0">{`voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</p>
        </div>
        <div className="w-[867px] bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden hidden flex-col items-start justify-start max-w-full z-[1] border-[1px] border-solid border-gainsboro">
          <div className="self-stretch h-9 relative">
            <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
            <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
            <div className="absolute top-[calc(50%_-_8px)] left-[10px] inline-block min-w-[47px]">
              Model
            </div>
            <div className="absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%] bg-www-equalopp-org-1349x593-default-nero" />
            <div className="absolute h-[102.78%] w-[0.12%] top-[-1.39%] right-[63.97%] bottom-[-1.39%] left-[35.92%] box-border border-r-[1px] border-solid border-gainsboro" />
            <div className="absolute top-[calc(50%_-_12px)] left-[214px] tracking-[-0.2px] leading-[24px] inline-block min-w-[77px]">
              #8786867
            </div>
            <div className="absolute w-[calc(100%_+_1px)] top-[0.5px] right-[-0.5px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-gainsboro" />
          </div>
          <div className="self-stretch h-9 relative">
            <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
            <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
            <div className="absolute top-[calc(50%_-_8px)] left-[10px] inline-block min-w-[39px]">
              Style
            </div>
            <div className="absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%] bg-www-equalopp-org-1349x593-default-nero" />
            <div className="absolute h-[102.78%] w-[0.12%] top-[-1.39%] right-[63.97%] bottom-[-1.39%] left-[35.92%] box-border border-r-[1px] border-solid border-gainsboro" />
            <div className="absolute top-[calc(50%_-_12px)] left-[214px] tracking-[-0.2px] leading-[24px] inline-block min-w-[93px]">
              Classic style
            </div>
            <div className="absolute w-[calc(100%_+_1px)] top-[0.5px] right-[-0.5px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-gainsboro" />
          </div>
          <div className="self-stretch h-9 relative">
            <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
            <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
            <div className="absolute top-[calc(50%_-_8px)] left-[10px] inline-block min-w-[80px]">
              Certificate
            </div>
            <div className="absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%] bg-www-equalopp-org-1349x593-default-nero" />
            <div className="absolute h-[102.78%] w-[0.12%] top-[-1.39%] right-[63.97%] bottom-[-1.39%] left-[35.92%] box-border border-r-[1px] border-solid border-gainsboro" />
            <div className="absolute top-[calc(50%_-_12px)] left-[214px] tracking-[-0.2px] leading-[24px] inline-block min-w-[115px]">
              ISO-898921212
            </div>
            <div className="absolute w-[calc(100%_+_1px)] top-[0.5px] right-[-0.5px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-gainsboro" />
          </div>
          <div className="self-stretch h-9 relative">
            <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
            <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
            <div className="absolute top-[calc(50%_-_8px)] left-[10px] inline-block min-w-[32px]">
              Size
            </div>
            <div className="absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%] bg-www-equalopp-org-1349x593-default-nero" />
            <div className="absolute h-[102.78%] w-[0.12%] top-[-1.39%] right-[63.97%] bottom-[-1.39%] left-[35.92%] box-border border-r-[1px] border-solid border-gainsboro" />
            <div className="absolute top-[calc(50%_-_12px)] left-[214px] tracking-[-0.2px] leading-[24px]">
              34mm x 450mm x 19mm
            </div>
            <div className="absolute w-[calc(100%_+_1px)] top-[0.5px] right-[-0.5px] left-[-0.5px] box-border h-px border-t-[1px] border-solid border-gainsboro" />
          </div>
        </div>
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/blockdetail.svg"
        />
        <div className="w-[1315px] h-[114px] absolute !m-[0] top-[41px] right-[0px] tracking-[-0.2px] leading-[24px] inline-block z-[1]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}</p>
          <p className="m-0">{`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure `}</p>
          <p className="m-0 whitespace-pre-wrap">{`dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">{`adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, `}</p>
          <p className="m-0">{`Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in `}</p>
          <p className="m-0">{`voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</p>
        </div>
        <div className="w-[120px] h-12 relative text-center">
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-4 px-4 pb-[13px] box-border w-full h-full z-[2]">
            <div className="w-[88px] relative font-medium inline-block min-w-[88px]">
              Description
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start pt-4 px-4 pb-[13px] box-border w-full h-full z-[2]">
            <div className="w-[88px] relative font-medium inline-block min-w-[88px]">
              Description
            </div>
          </div>
        </div>
        <div className="w-[899px] flex flex-row items-start justify-start py-0 px-4 box-border max-w-full">
          <div className="flex-1 bg-www-equalopp-org-1349x593-default-nero box-border overflow-hidden flex flex-col items-start justify-start max-w-full z-[1] border-[1px] border-solid border-gainsboro">
            <div className="self-stretch flex flex-row items-start justify-start relative gap-[10px] max-w-full mq925:flex-wrap">
              <div className="h-full w-[311.9px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] bg-gray-200" />
              <div className="h-9 w-0 relative mq925:w-full mq925:h-0" />
              <div className="w-[194px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-5 pl-0 box-border">
                <div className="relative inline-block min-w-[47px] z-[1]">
                  Model
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pr-[10.9px] pl-0">
                <div className="relative tracking-[-0.2px] leading-[24px] inline-block min-w-[77px] z-[1]">
                  #8786867
                </div>
              </div>
              <div className="h-9 w-[493px] flex flex-row items-start justify-start max-w-full">
                <div className="self-stretch w-[493px] relative bg-www-equalopp-org-1349x593-default-nero max-w-full" />
                <div className="h-[37px] w-px relative box-border ml-[-493px] border-r-[1px] border-solid border-gainsboro" />
              </div>
              <div className="h-px w-[calc(100%_+_1px)] absolute !m-[0] top-[1px] right-[-1px] left-[0px] box-border z-[1] border-t-[1px] border-solid border-gainsboro" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative gap-[4.9px] max-w-full mq925:flex-wrap">
              <div className="h-full w-[311.9px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] bg-gray-200" />
              <div className="flex flex-col items-start justify-start py-0 pr-[5.1px] pl-0">
                <div className="w-0 h-9 relative" />
              </div>
              <div className="w-[199.1px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-5 pl-0 box-border">
                <div className="relative inline-block min-w-[39px] z-[1]">
                  Style
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <div className="relative tracking-[-0.2px] leading-[24px] inline-block min-w-[93px] z-[1]">
                  Classic style
                </div>
              </div>
              <div className="h-9 w-[493px] flex flex-row items-start justify-start max-w-full">
                <div className="self-stretch w-[493px] relative bg-www-equalopp-org-1349x593-default-nero max-w-full" />
                <div className="h-[37px] w-px relative box-border ml-[-493px] border-r-[1px] border-solid border-gainsboro" />
              </div>
              <div className="h-px w-[calc(100%_+_1px)] absolute !m-[0] top-[1px] right-[-1px] left-[0px] box-border z-[1] border-t-[1px] border-solid border-gainsboro" />
            </div>
            <div className="self-stretch h-9 relative max-w-full mq450:h-auto mq450:min-h-[36]">
              <div className="absolute h-full w-[35.97%] top-[0%] right-[64.03%] bottom-[0%] left-[0%] bg-gray-200" />
              <div className="absolute h-full top-[0%] bottom-[0%] left-[0%] w-0" />
              <input
                className="[border:none] [outline:none] bg-www-equalopp-org-1349x593-default-nero absolute h-full w-[56.86%] top-[0%] right-[7.16%] bottom-[0%] left-[35.97%]"
                type="text"
              />
              <div className="absolute h-[102.78%] w-[0.12%] top-[0%] right-[63.91%] bottom-[-2.78%] left-[35.97%] box-border border-r-[1px] border-solid border-gainsboro" />
              <div className="absolute top-[1px] left-[0px] w-full flex flex-col items-start justify-start gap-[4px] max-w-full">
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-gainsboro" />
                <div className="w-[336.7px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="relative inline-block min-w-[80px] shrink-0 [debug_commit:f6aba90] z-[1]">
                        Certificate
                      </div>
                    </div>
                    <div className="relative tracking-[-0.2px] leading-[24px] inline-block min-w-[115px] shrink-0 [debug_commit:f6aba90] z-[1]">
                      ISO-898921212
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative gap-[10px] mq450:flex-wrap">
              <div className="h-full w-[311.9px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] bg-gray-200" />
              <div className="h-9 w-0 relative mq450:w-full mq450:h-0" />
              <div className="w-[194px] flex flex-col items-start justify-start pt-2.5 pb-0 pr-5 pl-0 box-border">
                <div className="relative inline-block min-w-[32px] z-[1]">
                  Size
                </div>
              </div>
              <input
                className="[border:none] [outline:none] bg-www-equalopp-org-1349x593-default-nero h-full w-[493px] absolute !m-[0] top-[0px] right-[62.1px] bottom-[0px]"
                type="text"
              />
              <div className="h-[calc(100%_+_1px)] w-px absolute !m-[0] top-[0px] bottom-[-1px] left-[311.9px] box-border border-r-[1px] border-solid border-gainsboro" />
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <div className="relative tracking-[-0.2px] leading-[24px] z-[1]">
                  34mm x 450mm x 19mm
                </div>
              </div>
              <div className="h-px w-[calc(100%_+_1px)] absolute !m-[0] top-[1px] right-[-1px] left-[0px] box-border z-[1] border-t-[1px] border-solid border-gainsboro" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductDescription;
