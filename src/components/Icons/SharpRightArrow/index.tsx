import React, { FC } from "react";
import { IconProps } from "../types";

const SharpRightArrow: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.772004 0.190662L0.153285 0.809349C0.00684766 0.955787 0.00684766 1.19322 0.153285 1.33969L5.80013 7.00001L0.153285 12.6603C0.00684766 12.8068 0.00684766 13.0442 0.153285 13.1907L0.772004 13.8094C0.918441 13.9558 1.15588 13.9558 1.30235 13.8094L7.84653 7.26519C7.99297 7.11876 7.99297 6.88132 7.84653 6.73485L1.30235 0.190662C1.15588 0.0441934 0.918441 0.0441934 0.772004 0.190662V0.190662Z"
        fill="#212121"
      />
    </svg>
  );
};

export default SharpRightArrow;