import { VFC } from "react";
import { BannerItemContainer } from "./styles";

interface Props {
  imageSrc: string;
}

const BannerItem: VFC<Props> = ({ imageSrc }) => {
  return (
    <BannerItemContainer className="slider-item">
      <img src={imageSrc} alt={imageSrc} width="100%" height="100%" />
    </BannerItemContainer>
  );
};

export default BannerItem;
