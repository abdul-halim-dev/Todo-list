import { useState } from "react"

 

const Blog = ({ondata}) => {



    const [store, setstore] = useState({
name:"",
bot:""

    })

    const {name, bot } = store;




const onhandle =(e)=>{
  const naming =e.target.name;
setstore({...store,[naming]:e.target.value})
}

const handleSub = (e)=>{
    e.preventDefault();
    ondata(store)
    setstore({name:" ", bot:" "})
  
}
 

const labelStyle =` w-[30%] text-lg font-semibold text-white `;
const inputStyle = ` capitalize w-[70%] border-2 border-orange-600 p-[5px] focus:border-0 text-lg font-semibold text-black bg-white rounded-md`;
  return (
    <div className="w-[500px] flex items-center justify-center bg-slate-500 shadow-md rounded-md p-4">


<form  className="  w-full flex items-center justify-center flex-col gap-3" onSubmit={handleSub}>
  <div className=" w-full flex items-start justify-center ">
  <label className={labelStyle} htmlFor="name"> Title:</label>
  <input className={inputStyle} onChange={onhandle} type="text" value={name} name="name" id="name" />
  </div>
  <div className=" w-full flex items-start justify-center ">
  <label  className={labelStyle} htmlFor="bot"> Description:</label>
  <textarea  className={inputStyle}  onChange={onhandle} type="text" value={bot} name="bot" id="bot" />
  </div>
<button className=" px-[20px] py-[5px] duration-300 shadow-md capitalize bg-orange-600 rounded-md hover:bg-green-500 text-white text-lg font-bold " type="submit"> add </button>

</form>



    </div>
  )
}

export default Blog