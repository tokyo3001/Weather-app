import React from "react";
import loader from "../images/loader.gif"

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-transparent flex space-x-3 h-20 w-20 lg:h-24 lg:w-24">
                <img src={loader} alt="loading" className=""/>
            </div>
        </div>
    )
}

export default Loader;