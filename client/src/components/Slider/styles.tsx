import styled from "@emotion/styled";

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  .slick-list {
    display: flex;
    .slider-item {
      width: 1000px;
      img {
        width: 1000px;
        height: 300px;
      }
    }
  }
`;
