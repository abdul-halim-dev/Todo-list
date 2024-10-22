 

const Last = ( props ) => {

const { name, bot} = props.lastcard;
 const {id}= props;
 

 console.log(id)
const handelete = (e)=>{

     
    props.notRemove(e)
    
}



  return (
   


<section className="w-screen flex bg-red-600 flex-wrap flex-col  p-10 items-center justify-center">

    
    <div className=" shadow-md w-[90%] p-5 bg-neutral-400 rounded-md  flex items-center justify-between">
 <div className=" w-full flex items-start justify-center gap-4 flex-col ">
 <h1 className=" text-xl font-bold text-white capitalize"> { name} </h1>
 <p className="text-white text-lg font-bold"> { bot} </p>
 </div>
 <button className=" px-[20px] py-[5px] duration-300 shadow-md capitalize bg-orange-600 rounded-md hover:bg-green-500 text-white text-lg font-bold " onClick={()=>{
    handelete(  id)
 }}> close </button>
 </div>
  


</section>
 
  )
}

export default Last