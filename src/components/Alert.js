import React, { useState } from "react";
 
function Alert(props) {
 
    return (
        props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        {props.alert.type}:{props.alert.message}
        
      </div>
    );
 
}

 
export default Alert