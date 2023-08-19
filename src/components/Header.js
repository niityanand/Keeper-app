import React from "react";
// import image from "./icon2.png"
function Header() {
  // const styles = {
  //   width:"100px",
  //   height: "100px",
  //   display:"inline-block"
  // }
  return (
    // <AppBar position="static">
    //   <Toolbar>
    //     <HighlightIcon />
    //     <Typography variant="h6" component="div" sx={{ marginLeft: 2 }}>
    //       Keeper
    //     </Typography>
    //   </Toolbar>
    // </AppBar>
    <header>
      {/* <img style={styles} src={image} alt="image"/> */}
      <h1 style = {{display:"inline-block"}}>Keeper</h1>
    </header>
  );
}

export default Header;
