import React, { useState } from "react";
import MenuCard from "./MenuCard";
import Menu from "../api/menuApi";
import NavBar from "./NavBar";

const uniqueList = [
  ...new Set(
    Menu.map((item) => {
      return item.category;
    })
  ),
  "All",
];
console.log(uniqueList);
function Restaurant() {
  const [menuState, setMenuState] = useState(Menu);
  const [list, setlist] = useState(uniqueList);

  const itemHandler = (category) => {
    if (category === "All") {
      setMenuState(Menu);
      return;
    }
    const updatedList = Menu.filter((currentEle) => {
      return currentEle.category === category;
    });
    console.log(updatedList);
    setMenuState(updatedList);
  };
  return (
    <>
      <NavBar itemHandler={itemHandler} menuList={list} />
      <MenuCard menuState={menuState} />
    </>
  );
}

export default Restaurant;
