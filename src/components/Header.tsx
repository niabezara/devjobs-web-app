"use client";
import React, { useState } from "react";
import Switch from "react-switch";

export default function Header() {
  const [checked, setCheck] = useState(false);

  const handleChange = () => {
    setCheck(!checked);
  };

  return (
    <div className="Header">
      <img src="/assets/desktop/logo.svg" alt="" />
      <label className="flex justify-between space-x-2 items-center">
        <img src="/assets/desktop/icon-sun.svg" alt="" />
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#fff"
          offColor="#fff"
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
    </div>
  );
}
