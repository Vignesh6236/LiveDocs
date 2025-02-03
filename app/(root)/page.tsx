"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  const tun = () => {
    alert("Hello World");
  };

  return (
    <div>
      <Button onClick={tun}>Click Me</Button>
    </div>
  );
};

export default page;
