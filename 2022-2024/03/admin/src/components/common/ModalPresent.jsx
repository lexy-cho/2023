import React from "react";
import ModalPortal from "./ModalPortal";

const ModalPresent = ( {children} ) => {

    return (
        <ModalPortal>
            <div className="popDim"  >
                {children}
            </div>
        </ModalPortal>
        
        
    )
}

export default ModalPresent;