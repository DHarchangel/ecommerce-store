"use client";

import { useState, useEffect } from "react";

import PreviewModal from "@/components/ui/priview-modal";
import { ifError } from "assert";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <PreviewModal />
    </>
  );
};
export default ModalProvider;