import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import {
  CustomButton,
} from "../components";

const Simulator = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro == "Simulator" && (
        <div className="absolute z-50 flex flex-col justify-between w-full h-full border-solid border-2 border-sky-500">
          <div className="top-bar flex justify-between items-center px-8 py-6">
            <span className="logo font-bold text-[1.5rem]">Company</span>
            <h1 className="font-bold text-[2rem]">Dress Simulator</h1>

            <span>Hi Johnny</span>
          </div>
          <div className="bottom-bar flex justify-between px-8 py-6">
            <span>
              <CustomButton
                type="filled"
                title="Back to dress"
                handleClick={() => (state.intro = "DressCustomizer")}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Simulator;
