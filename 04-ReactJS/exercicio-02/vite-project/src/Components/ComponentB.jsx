import React from "react";

export function ComponentB(props) {
  return (
    <div>
      Componente B
      <div>{props.children}</div>
    </div>
  )
}