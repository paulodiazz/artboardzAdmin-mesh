import React from "react";
import CollectionItem from "./CollectionsIItem";

const DUMMY_DATA = [
  {
    Policy: "adsf98qywhtglhasgoidgj",
    artistName: "Serge",
    artboardTitle: "First Project",
    location: "CapeTown",
    supplyTime: "50",
  },
  {
    Policy: "adsf98qywhtglhasgoidgj",
    artistName: "Serge",
    artboardTitle: "Second Project",
    location: "CapeTown",
    supplyTime: "50",
  },
  {
    Policy: "adsf98qywhtglhasgoidgj",
    artistName: "Serge",
    artboardTitle: "Third Project",
    location: "CapeTown",
    supplyTime: "50",
  },
];
const CollectionList = () => {
  return (
    <ul className="px-5">
      {DUMMY_DATA.map((data, index) => {
        return (
          <CollectionItem
            key={index}
            Policy={data.Policy}
            artistName={data.artistName}
            artboardTitle={data.artboardTitle}
            location={data.location}
            supplyTime={data.supplyTime}
          />
        );
      })}
    </ul>
  );
};

export default CollectionList;
