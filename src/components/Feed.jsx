import React from 'react';
import { useState , useEffect } from 'react';
import { Box, Stack, Typography } from "@mui/material";

const Feed = () => {
  return (
    <Stack sx={{ flexdirection:{sx:'column' , md:'row' }}}>
      <Box sx={{height:{sx: 'auto' , md:'92vh'} , borderRight:'1px solid  pink', px:{sx:0, md:2}}}>

      {/* <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}> */}

      </Box>
    </Stack>
  )
} 

export default Feed