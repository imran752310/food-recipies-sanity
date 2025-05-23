import React from "react";

import HdImg from "@/Assets/image/Head1.png";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      
        <Image src={HdImg} alt="header" height={700} width={0} />
    </div>
  );
};

export default Header;
