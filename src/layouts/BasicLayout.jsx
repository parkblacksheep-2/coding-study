import React, { Children } from "react";
import BasicMenu from"../components/BasicMenu";

const BasicLayout =({Children})=>{
    return(
        <>
            <header>
                <BasicLayout/>
            </header>
            <div>
                <main>
                    {Children}
                </main>
                <aside>
                    <h1>Sidebar</h1>
                </aside>
            </div>
        </>
    )
}

export default BasicLayout