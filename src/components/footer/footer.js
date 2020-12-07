import React from "react";
import {Typography} from "@material-ui/core";

export default function Footer({amount}) {
  return (
    <Typography
      style={{margin: "20px"}}
      color={"secondary"}
      align={'left'}
      variant={'h6'}>
      {`${amount} Tasks left`}
    </Typography>
  )
}