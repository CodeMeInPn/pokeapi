import React, { FC } from "react";
import { IconProps } from "../types";

const Ruler: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="8"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 0H1C0.447812 0 0 0.447812 0 1V15C0 15.5522 0.447812 16 1 16H7C7.55219 16 8 15.5522 8 15V1C8 0.447812 7.55219 0 7 0ZM1 15V1H7V3H5.25C5.11187 3 5 3.11187 5 3.25V3.75C5 3.88813 5.11187 4 5.25 4H7V6H5.25C5.11187 6 5 6.11187 5 6.25V6.75C5 6.88813 5.11187 7 5.25 7H7V9H5.25C5.11187 9 5 9.11187 5 9.25V9.75C5 9.88813 5.11187 10 5.25 10H7V12H5.25C5.11187 12 5 12.1119 5 12.25V12.75C5 12.8881 5.11187 13 5.25 13H7V15H1Z"
        fill="#212121"
      />
    </svg>
  );
};

export default Ruler;
