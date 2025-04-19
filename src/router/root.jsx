import {createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import { Children, lazy,Suspense } from "react";
import todoRouter from "./todoRouter";

const Loading =<div>Loading...</div>
const Main =lazy(()=> import("../pages/MainPage"))
const About =lazy(()=> import("../pages/AboutPage"))
const TodoIndex =lazy(()=> import("../pages/todo/indexPage"))

const root =createBrouwserRouter([
    {
        path: '',
        elements: <Suspense fallback={Loading}><Main/></Suspense>

    },
    {
        path: 'about',
        elements: <Suspense fallback={Loading}><About/></Suspense>

    },
    {
        path: 'todo',
        elements: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        Children: todoRouter()
    },

])

export default root