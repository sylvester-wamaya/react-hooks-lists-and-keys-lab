import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElements = links.map((page)=>{
    return <a key={page} href={"#" + page}>{page}</a>
  })
  return (<nav>
    {linksElements}
  </nav>);
}

export default NavBar;
