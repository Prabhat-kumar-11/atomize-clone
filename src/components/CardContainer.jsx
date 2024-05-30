import React from "react";
import { LoginCard } from "./LoginCard";
import { ProfileCard } from "./ProfileCard";
import { ProfileBack } from "./ProfileBack";

export const CardContainer = () => {
  return (
    <section className="flex justify-center mb-[184px]">
      <div className="max-w-[1184px] flex flex-wrap gap-7">
        <ProfileCard />
        <ProfileBack />
        <LoginCard />
      </div>
    </section>
  );
};
