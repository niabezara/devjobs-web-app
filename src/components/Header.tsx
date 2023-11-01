"use client";

import { RootState } from "@/Redux/store";
import useDarkMode from "@/hook/useDarkMode";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";

export default function Header() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkModeHandler = (checked: any) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <header className="Header">
      <img src="/assets/desktop/logo.svg" alt="" />
      <label className="flex justify-between space-x-2 items-center">
        <img src="/assets/desktop/icon-sun.svg" alt="" />
        <Switch
          onChange={toggleDarkModeHandler}
          checked={darkSide}
          onColor={darkSide ? "#121721" : "#fff"}
          offColor={darkSide ? "#121721" : "#fff"}
          offHandleColor="#5964e0"
          onHandleColor="#5964e0"
          checkedIcon={false}
          uncheckedIcon={false}
          height={24}
          width={48}
          handleDiameter={16}
        />
        <img src="/assets/desktop/icon-moon.svg" alt="" />
      </label>
    </header>
  );
}
