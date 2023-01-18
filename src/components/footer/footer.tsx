import React from "react";

type FooterProps = {
  children: React.ReactNode;
};
export const Footer = (props: FooterProps) => {
  return <>{props.children}</>;
};
