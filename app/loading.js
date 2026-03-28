"use client";
import styled from "styled-components";
import { Anek_Devanagari } from "next/font/google";

const anekDeva = Anek_Devanagari({
  subsets: ["latin"],
  display: "swap",
  fontWeight: "400",
});
console.log(anekDeva);

const StyledPara = styled.p`
  display: flex;
  font-family: ${anekDeva.style.fontFamily};
  font-size: 1.5rem;
  margin-left: 1.5rem;
  padding-left: 1.25rem;
  padding-right: 1.5rem;
  margin-top: 1.5rem;
  height: 6.9rem;
  width: 6.9rem;
  align-items: center;
  justify-content: center;
  tranition: all 0.1s ease-in-out;
  border: 4px solid rgb(83, 195, 230);
  border-radius: 50%;
  color: rgb(179, 61, 104);
  z-index: -1;
`;

export default function Loader() {
  return <StyledPara>Loading...</StyledPara>;
}
