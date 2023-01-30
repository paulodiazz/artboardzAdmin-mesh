import React from "react";
import { useDispatch } from "react-redux";
import EditIcon from "../../Assets/Icons/EditIcon";
import { UIActions } from "../../store/redux-store/UI-slice";

const CollectionItem = ({
  Policy,
  artistName,
  artboardTitle,
  location,
  supplyTime,
}) => {
  const dispatch = useDispatch();

  const showEditCollectionFormHandler = () => {
    dispatch(UIActions.showEditCollectionForm());
  };
  return (
    <li className="grid grid-cols-6 py-5 place-items-center text-sm font-semibold tracking-wide break-word border-b border-[#AECEFF] last-of-type:border-none text-[#323A46]">
      <div>
        <p className="break-all">{Policy}</p>
      </div>
      <div>
        <p>{artistName}</p>
      </div>
      <div>
        <p>{artboardTitle}</p>
      </div>
      <div>
        <p>{location}</p>
      </div>
      <div>
        <p>{supplyTime}</p>
      </div>
      <button onClick={showEditCollectionFormHandler}>
        <EditIcon />
      </button>
    </li>
  );
};

export default CollectionItem;
