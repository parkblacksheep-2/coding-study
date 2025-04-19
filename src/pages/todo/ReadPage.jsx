import React from "react"
import{useParams} from"react-router-dom"
function ReadPage(props) {
     const{tno}=useParams();
     console.log(tno)

     return(
        <div>
            Todo Read Page Component
        </div>
     )
}

export default ReadPage