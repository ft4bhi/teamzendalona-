import { memo } from "react";

const SearchBar = memo(() => {
  return (
    <header className="self-stretch box-border overflow-hidden flex flex-row items-start justify-start top-[0] z-[99] sticky max-w-full text-left text-mid text-base-color-gray-800 font-text-info border-[1px] border-solid border-black">
      <div className="flex-1 box-border overflow-hidden flex flex-row items-start justify-end py-3 px-10 max-w-full z-[3] border-[1px] border-solid border-black">
        <div className="h-10 w-[65px] relative">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full z-[1]"
            alt=""
            src="/-background.svg"
          />
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <div className="absolute top-[9px] left-[12px] leading-[22px] font-medium inline-block w-[35px] min-w-[35px] whitespace-nowrap z-[2]">
              ALL
            </div>
            <img
              className="absolute top-[16px] left-[50px] w-[11px] h-[5px] object-contain hidden"
              alt=""
              src="/polygon-1.svg"
            />
            <div className="absolute top-[9px] left-[12px] leading-[22px] font-medium inline-block w-[35px] min-w-[35px] whitespace-nowrap z-[2]">
              ALL
            </div>
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <img
                className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full z-[1]"
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
        </div>
        <div className="h-10 w-[429px] relative max-w-full ml-[-1px] text-base">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full"
            alt=""
            src="/-background-1.svg"
          />
          <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start pt-[9px] px-[16.3px] pb-[7px] box-border max-w-full h-full">
            <div className="w-[89.1px] relative tracking-[-0.2px] leading-[24px] inline-block shrink-0 z-[1]">
              Search
            </div>
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <div className="absolute top-[7px] left-[388px] w-7 h-7 bg-cover bg-no-repeat bg-[top] z-[1]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                  alt=""
                  src="/image-41@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
              </div>
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full"
                alt=""
                src="/-background-1.svg"
              />
            </div>
            <div className="w-[89.1px] absolute !m-[0] bottom-[7px] left-[16.3px] tracking-[-0.2px] leading-[24px] inline-block z-[1]">
              Search
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default SearchBar;
