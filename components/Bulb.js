// next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mixblend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        src="/Bulb.png"
        width={260}
        height={200}
        alt="Bulb"
        className="w-full h-full"
        priority
      />
    </div>
  );
};

export default Bulb;
