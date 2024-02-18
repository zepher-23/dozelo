import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";


const Cart = () => {
  return (
<>
<div style={{width:'30px'}}><FontAwesomeIcon icon={faBagShopping} size="2xs" style={{color: "white",}} />
</div>
</>
  );
};

export default Cart;
