"use client";
 
import { actions } from "../store";
import SearchItem from "./SearchItem";
import { RootState } from "@global/store";
import { useDispatch, useSelector } from "react-redux";

function SearchItemList() {
  const { items } = useSelector((state: RootState) => state.advancedSearch);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-2 max-h-[60vh] overflow-y-scroll relative">
      {items.map((item, index) => (
        <SearchItem
          key={index}
          onDrop={(event) => handleDrop(event, index)}
          onDragStart={(event) => handleDragStart(event, index)}
          isFirst={index === 0}
          item={item}
        />
      ))}
    </ul>
  );

  function handleDrop(event: React.DragEvent<HTMLLIElement>, index: number) {
    const movingItemIndex = Number(event.dataTransfer.getData("itemIndex"));
    const updatedItems = [...items];
    const movingItem = updatedItems[movingItemIndex];

    updatedItems.splice(movingItemIndex, 1);
    updatedItems.splice(index, 0, movingItem);

    dispatch(actions.reorderItems({ items: updatedItems }));
  }

  function handleDragStart(
    event: React.DragEvent<HTMLLIElement>,
    index: number
  ) {
    event.dataTransfer.setData("itemIndex", index + "");
  }

}

export default SearchItemList;
