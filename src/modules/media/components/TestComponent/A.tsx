"use client";
import React, { useState } from "react";
import B from "./B";

type AProps = {};
export interface State {
  name: string;
  age: number;
  job?: string;
}

function A({}: AProps) {
  const [state, setState] = useState<State>({
    name: "",
    age: 0,
    job: "",
  });
  return <B people={[state]} />;
}

export default A;
