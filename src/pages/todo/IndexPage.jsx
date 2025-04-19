import React from "react";
import BasicLayout from "../../layouts/BasicLayout";
import{Outlet, useNavigate} from "react-route-dom";

function IndexPage(props){
    const navigate =useNavigate();

    const handleClickList = () => { 
        navigate({pathname: "list"})
    }

    const handleCliskAdd = () => {
        navigate({pathname: "add"})
    }
    return(
        <BasicLayout>
            <div >
                <div> List </div>
                <div> ADD </div>
            </div>

            <div>
                <Outlet/>
            </div>
        </BasicLayout>
    )
}

export default IndexPage