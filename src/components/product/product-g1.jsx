import { useMemo } from "react";

const ProductG1 = ({
  image38,
  bellRossNightlum,
  propFlex,
  propMinWidth,
  propAlignSelf,
  onProductGContainerClick,
}) => {
  const productGStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div
      className="flex-1 rounded-8xs bg-www-equalopp-org-1349x593-default-nero box-border flex flex-col items-end justify-start pt-[22px] pb-[57px] pr-px pl-0 gap-[38px] min-w-[295px] cursor-pointer text-left text-base text-gray1-500 font-text-info border-[0px] border-solid border-darkgray-400"
      onClick={onProductGContainerClick}
      style={productGStyle}
    >
      <img
        className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
        alt=""
        src="/rectangle-3066.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[26px] pl-7">
        <img
          className="h-[198px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
          loading="lazy"
          alt=""
          src={image38}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[18.5px]">
        <img
          className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/vector-31.svg"
        />
        <div className="w-[248px] flex flex-row items-start justify-start py-0 px-7 box-border">
          <div className="flex-1 relative tracking-[-0.2px] leading-[24px] font-medium z-[1]">
            {bellRossNightlum}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductG1;
