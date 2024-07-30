import React, { useEffect, useState } from 'react'

const TypeHead = () => {


    const [searchQuery,setSearchQuery]=useState('')
    const[data,setData]=useState([]);
    const [show,setShow]=useState(false);


     useEffect(()=>{

      const timer= setTimeout(()=>{ fetchSearch();},200);
      return()=>{
        clearInterval(timer);
      }

     },[searchQuery])

     const fetchSearch=async()=>{
      console.log('APICALL',searchQuery);
        const searchData=await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=+"+searchQuery);
        const json=await searchData.json();
        setData(json[1]);
        
     }


     const handleSearch=(searchText)=>{
      console.log(searchText,'//');
      setSearchQuery(searchText);
     }


  return (
    <div className='flex items-center flex-col'>
     <div className=''>
     <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={()=>setShow(true)}
        onBlur={()=>setShow(false)}
        
        className='p-4 m-auto mt-20 bg-slate-200  rounded-lg'
        
      
      />
    
     </div>
     <div>
    {
      show && data.length!=0 && <ul className='p-2 m-3 bg-gray-400 h-auto w-auto'>
      {
         data.map((text)=>(
         <li 
         className='p-2  border-b border-white m-2 h-auto w-auto hover:shadow-lg' 
         onMouseEnter={()=>handleSearch(text)}>{text}
         
         </li>
         ))

      }
      </ul>
    }
     </div>

        

 
    </div>
  )
}

export default TypeHead
