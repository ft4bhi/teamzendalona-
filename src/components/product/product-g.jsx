import { useMemo } from "react";

const ProductG = ({
  image39,
  vector3,
  bellRossNightlum,
  propWidth,
  propFlex,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const bellRossStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className="rounded-8xs bg-www-equalopp-org-1349x593-default-nero flex flex-col items-start justify-start pt-[43px] px-0 pb-[57px] gap-[17.6px] text-left text-base text-gray1-500 font-text-info border-[0px] border-solid border-darkgray-400 mq450:pt-7 mq450:pb-[37px] mq450:box-border">
      <img
        className="self-stretch h-[358px] relative rounded-8xs max-w-full overflow-hidden shrink-0 hidden"
        alt=""
        src="/rectangle-3066.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[43px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-[198.4px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
          loading="lazy"
          alt=""
          src={image39}
        />
      </div>
      <img
        className="self-stretch h-[0.5px] relative rounded-8xs max-w-full overflow-hidden shrink-0 object-contain z-[1]"
        loading="lazy"
        alt=""
        src={vector3}
      />
      <div
        className="flex flex-row items-start justify-start py-0 px-7"
        style={frameDiv1Style}
      >
        <div
          className="relative tracking-[-0.2px] leading-[24px] font-medium z-[1]"
          style={bellRossStyle}
        >
          {bellRossNightlum}
        </div>
      </div>
    </div>
  );
};

export default ProductG;
