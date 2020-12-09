import preloader from "../../../assets/images/loading.svg";
import React from "react";

type PropsType = {
}


let Preloader: React.FC = () => {
    return <img alt={""} src={preloader}/>
}
export default Preloader;