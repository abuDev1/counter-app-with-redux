import React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterMenu } from "./FooterMenu";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <footer>
      <FooterLogo />
      <FooterMenu />
      <Copyright />
    </footer>
  );
};
