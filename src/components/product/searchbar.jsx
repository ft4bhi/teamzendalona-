import { memo } from "react";

const searchbar = memo(() => {
  return (
    <div className="w-full !m-[0] absolute top-[120px] right-[0px] left-[0px] box-border overflow-hidden flex flex-row items-start justify-end py-3 px-10 max-w-full text-left text-mid text-base-color-gray-800 font-text-info border-[1px] border-solid border-black">
      <div className="w-[65px] flex flex-row items-start justify-start py-[9px] px-3 box-border relative">
        <div className="relative leading-[22px] font-medium inline-block min-w-[35px] whitespace-nowrap z-[2]">
          ALL
        </div>
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/-background.svg"
          />
          <img
            className="absolute top-[16px] left-[50px] w-[11px] h-[5px] object-contain z-[2]"
            alt=""
            src="/polygon-1.svg"
          />
        </div>
      </div>
      <div className="w-[429px] flex flex-row items-start justify-start pt-[9px] px-[16.3px] pb-[7px] box-border relative max-w-full ml-[-1px] text-base">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/-background-1.svg"
          />
          <img
            className="absolute top-[7px] left-[388px] w-7 h-7 object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-41@2x.png"
          />
        </div>
        <div className="w-[89.1px] relative tracking-[-0.2px] leading-[24px] inline-block shrink-0 z-[1]">
          Search
        </div>
      </div>
    </div>
  );
});

export default searchbar;
