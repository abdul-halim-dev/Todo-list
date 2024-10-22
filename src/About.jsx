import Last from "./Last"

 

const About = ({title , onremove}) => {

   

  return (
    


    <div className="w-full   flex items-center justify-center " >
        {title.map((orange)=>(
            <Last key={orange.id} lastcard={orange.data} id={orange.id} notRemove={onremove}/>
        ))}
    </div>
 )
}

export default About