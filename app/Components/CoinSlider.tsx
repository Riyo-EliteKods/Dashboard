import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowTrendUp } from "react-icons/fa6";

const CoinSlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div >
      <p className="text-2xl mb-3">Your top movers</p>
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="flex ">
          <CarouselItem className="px-2 md:basis-1/3 basis-8/12">
            <div className="p-1">
              <div >
                <div className="bg-custom-brown flex gap-6 items-end p-3 rounded-2xl w-fit">
                  <div className="flex gap-2">
                    <img src="../Images/coin-1.png" alt="" className="w-12" />
                    <div>
                      <p className="text-xl">ETH</p>
                      <p className="text-sm">$3,500</p>
                    </div>
                  </div>
                  <span className="text-green-600 flex items-center">
                    5%
                    <FaArrowTrendUp />
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="px-2 md:basis-1/3 basis-8/12">
            <div className="p-1">
              <div>
                <div className="bg-custom-brown flex gap-6 items-end p-3 rounded-2xl w-fit">
                  <div className="flex gap-2">
                    <img src="../Images/coin-2.png" alt="" className="w-12" />
                    <div>
                      <p className="text-xl">WBTC</p>
                      <p className="text-sm">$67,500</p>
                    </div>
                  </div>
                  <span className="text-green-600 flex items-center">
                    5%
                    <FaArrowTrendUp />
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="px-2 md:basis-1/3 basis-8/12">
            <div className="p-1">
              <div>
                <div className="bg-custom-brown flex gap-6 items-end p-3 rounded-2xl w-fit">
                  <div className="flex gap-2">
                    <img src="../Images/coin-3.png" alt="" className="w-12" />
                    <div>
                      <p className="text-xl">FRAX</p>
                      <p className="text-sm">$1,01</p>
                    </div>
                  </div>
                  <span className="text-green-600 flex items-center">
                    5%
                    <FaArrowTrendUp />
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default CoinSlider;
