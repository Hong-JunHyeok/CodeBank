import { ReactElement, VFC } from "react";
import { ListContainer } from "./styles";

interface Props<T> {
  className?: string;
  items: Array<T>;
  renderItems: (item: T, index: number) => ReactElement;
}

const BannerList: VFC<Props<any>> = ({ items, renderItems, className }) => {
  return (
    <ListContainer className={className}>
      {items.map((item, index) => (
        <div>{renderItems(item, index)}</div>
      ))}
    </ListContainer>
  );
};

export default BannerList;
