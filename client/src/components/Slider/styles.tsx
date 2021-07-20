import styled from "@emotion/styled";

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  .slick-list {
    position: relative;
    display: flex;
    .slider-item {
      width: 1000px;
      img {
        width: 1000px;
        height: 300px;
      }
    }
  }
  .btns {
    position: absolute;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    top: 330px;
  }
  .slide-btn {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    padding: 10px;
    color: white;
  }
`;
