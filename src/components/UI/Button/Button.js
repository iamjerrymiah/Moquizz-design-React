import React from "react";

import Button from 'react-bootstrap/Button';
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const button = ( props ) =>{
    let ButtonInit = null;
    if(props.success) {
        ButtonInit = <Button variant="success" style={props.style}>{props.children}</Button>
    }
    if(props.normal) {
        ButtonInit = <Button variant="secondary" style={props.style}>{props.children}</Button>
    }

  return (
      <Aux>
          {ButtonInit}
      </Aux>
  );
}

export default button;