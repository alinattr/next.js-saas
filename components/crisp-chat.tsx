"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e164a0a7-7d70-4c79-9219-f2571ef93f7b");
  }, []);

  return null;
};
