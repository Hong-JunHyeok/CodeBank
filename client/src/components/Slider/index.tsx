import { useCallback, useEffect, useRef, useState, VFC } from "react";
import BannerItem from "../BannerItem";
import List from "../List";
import { SliderContainer } from "./styles";

interface Props {
  items: Array<any>;
}

const Slider: VFC<Props> = ({ items }) => {
  const TOTAL_SLIDES = items.length - 1;
  const [currentTab, setCurrentTab] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  console.log(currentTab);
  const handleNextSlide = useCallback(() => {
    if (currentTab >= TOTAL_SLIDES) {
      setCurrentTab(0);
    } else {
      setCurrentTab(currentTab + 1);
    }
  }, [currentTab]);

  const handlePrevSlide = useCallback(() => {
    if (currentTab === 0) {
      setCurrentTab(TOTAL_SLIDES);
    } else {
      setCurrentTab(currentTab - 1);
    }
  }, [currentTab]);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentTab}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentTab]);

  return (
    <SliderContainer>
      <List
        ref={slideRef}
        className="slick-list"
        items={items}
        renderItems={(bannerItem, index) => (
          <BannerItem imageSrc={bannerItem.imageSrc} key={index} />
        )}
      />
      <button type="button" onClick={handlePrevSlide}>
        Prev
      </button>
      <button type="button" onClick={handleNextSlide}>
        Next
      </button>
    </SliderContainer>
  );
};

export default Slider;
