import { useState } from "react"
import Blog from "./Blog"
import About from "./About"
import { v4 as uuidv4 } from "uuid"
 
 
 const App = () => {

  const [show, setshow] = useState([])

const datareveive= (data)=>{
 setshow((prev)=>{
  return[...prev,{id: uuidv4(),  data}]
 })
}

 
const removeHandle =(id)=>{
 const filterTodo = show.filter((todos)=> todos.id != id);
 setshow(filterTodo)
}
   return (
     <div className="w-full bg-slate-200 h-full py-[100px] flex items-center justify-center flex-col gap-6 ">



      <Blog ondata={datareveive} /> 

     


<About title={show}  onremove={removeHandle} />
     </div>
   )
 }
 
 export default App