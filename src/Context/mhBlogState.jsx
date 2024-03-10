import sidebar1Context from "./mhBlogContext";
import { useState } from "react";
const Sidebar1Sate=(props)=>{
    const [SideWidth,widthController]=useState(`translate-x-[-100%]`);
    const [currentBlog,setBlog]=useState({})
    const [Filter,setFilter]=useState('ALL')
   

 return(
    <>
    <sidebar1Context.Provider value={{SideWidth,widthController,currentBlog,setBlog,setFilter,Filter}}>
     {props.children}
    </sidebar1Context.Provider>
    </>
 )
}
export default Sidebar1Sate