import React, { Children } from "react";

export function ComponentA(props) {
  return (
    <div>
      Componente A
      <div>{props.children}</div>
    </div>
  )
}