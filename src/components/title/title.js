import React from "react";
import {Typography} from "@material-ui/core";

export default function Title({title}) {
  return (
      <Typography style={{margin:"20px"}} color={"secondary"} align={'left'} variant={'h4'}>{title}</Typography>

  )
}