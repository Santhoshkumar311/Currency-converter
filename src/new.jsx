import './new.css'
import { useState, useEffect } from 'react'


const Container = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products/" +id)
      .then((res) => res.json())
      .then((json) =>{ 
        console.log("json",json)
        setData(json)});
      
  }, [id]);
 
  const handleClick = (id)=> {
    fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(console.log);
    console.log("handleClick",id)

 }  

  return (
    <div className='container' onClick={()=>{
        handleClick(data?.id)
    }}>
        
                  <h3> Title:{data ? data.title : "Loading..."}</h3>
       <h3>description:{data ? data.description : "Loading..."}</h3>
       <div className='imageContainer'>

        {data ?<image src={"https://www.shutterstock.com/image-photo/beautifull-walpaper-4k-free-download-600nw-2096542687.jpg"} width={"100%"} height={"100%"}/>:<></>}
       </div>
           
    
    </div>
  );
};

const New = () => {
  const [containers, setContainers] = useState([1]);

  const addContainer = () => {
    setContainers((prev) => [...prev, prev.length + 1]);
  };

  return (
    <>
      <div className='one'>
        <button className='btn'onClick={addContainer}>Add Container</button>
        <div>
          {containers.map((id) => (
            <Container key={id} id={id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default New