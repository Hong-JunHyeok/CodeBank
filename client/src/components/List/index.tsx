import { ReactElement, VFC, forwardRef, Ref } from "react";
import { ListContainer } from "./styles";

interface Props<T> {
  className?: string;
  items: Array<T>;
  renderItems: (item: T, index: number) => ReactElement;
  ref: Ref<HTMLDivElement>;
}

const List: VFC<Props<any>> = forwardRef<HTMLDivElement, Props<any>>(
  ({ items, renderItems, className }, ref) => {
    return (
      <ListContainer className={className} ref={ref}>
        {items.map((item, index) => (
          <>{renderItems(item, index)}</>
        ))}
      </ListContainer>
    );
  },
);

export default List;
