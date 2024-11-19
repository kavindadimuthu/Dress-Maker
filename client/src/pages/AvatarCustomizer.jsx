import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import {
  CustomButton,
} from "../components";

const AvatarCustomizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro == "AvatarCustomizer" && (
        <div className="absolute z-10 flex flex-col justify-between w-full h-full border-solid border-2 border-sky-500">
          <div className="top-bar flex justify-between items-center px-8 py-6">
            <span className="logo font-bold text-[1.5rem]">Company</span>
            <h1 className="font-bold text-[2rem]">Avatar Customization</h1>

            <span>Hi Johnny</span>
          </div>
          <div className="bottom-bar flex justify-between px-8 py-6">
          <span>
              <CustomButton
                type="filled"
                title="Back to home"
                handleClick={() => (state.intro = "Home")}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </span>
            <span>
              <CustomButton
                type="filled"
                title="Select Dress"
                handleClick={() => (state.intro = "DressCustomizer")}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                buttonColor="#018e27"
              />
            </span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AvatarCustomizer;
