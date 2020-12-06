import React from "react";

export default function Footer({amount}) {
  return (
    <div>
      <span>{`${amount} Tasks left`}</span>
    </div>
  )
}