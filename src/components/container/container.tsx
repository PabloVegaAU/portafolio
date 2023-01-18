import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  return (
    <div className="container mx-auto px-2">
      <hr />
      <div>{props.children}</div>
    </div>
  );
};
