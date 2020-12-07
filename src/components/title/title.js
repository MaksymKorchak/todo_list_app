import React from "react";
import {Typography} from "@material-ui/core";

export default function Title({title}) {
  return (
    <Typography
      style={{margin: "15px"}}
      color={"secondary"}
      align={'left'}
      variant={'h3'}>
      {title}
    </Typography>
  )
}