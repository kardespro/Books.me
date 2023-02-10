import { motion } from 'framer-motion'
import axios from 'axios'
import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState , useEffect } from 'react'
import { getRandomItem } from '../../utils/getRandom.js'
const search_words = [
  "story",
  "react",
  "roman",
  "Harry Potter",
  "Victory"
]
export default function BookCard(){
const router = useRouter()
  const [books,setBooks] = useState([])
  const [size,setSize] = useState()
  const findRandom = getRandomItem(search_words)
  useEffect(() => {
    setTimeout(async() => {
      let data = await axios.get(`/api/fetch?_q=${findRandom}`)
      setBooks(data.data.message.items)
      setSize(data.data.message.totalItems)
    })
  }, [])
  function pushTo(previewURL,title){
    window.localStorage.setItem("last-view", title)
    router.push(previewURL)
  }
  return(
    <>
        <br/>
      <div className="md:grid md:grid-cols-3 md:gap-2">
      <div>
      <h1 className="pb-4 text-white text-center text-xl ">Most <span className="text-blue-600 font-bold">Famous</span> Books</h1>
    <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
        
 <div className="rainbow">
     {/*  <div className="flex justify-center w-32 h-8 rounded blur-sm object-fill">
     <img src="./replit.svg"/>
         </div>*/}
         <br/>
       <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
    <h1 className="text-white font-extrabold text-center text-xl font-sans">Famous Books</h1>
<p className="break-words text-center text-xs text-gray-700 font-serif">All of Famous Books listed below</p>
<div className="flex justify-center space-x-2">
    <button className="block rounded-md w-64 h-12 bg-blue-600 text-center text-sm text-white hover:bg-blue-400">NICE!</button>
 
</div>
 </div>
    </motion.div>

      </div>

        {books.map((item,index) => {
          return(
            <>
            
             <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
        
     <div className="rainbow" key={index}>
         <br />
       <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
    <h1 className={`text-white font-extrabold text-center text-xl font-sans ${item.volumeInfo.title ? "":`isolate
    overflow-hidden
    shadow-xl shadow-black/5
    before:border-t before:border-rose-100/10`}`}>{item.volumeInfo.title}</h1>
<p className={`book_desc break-words text-center text-xs text-gray-700 font-serif pl-4 ${item.volumeInfo.description ? "":"animate-pulse"}`}>{item.volumeInfo.description} </p>
<div className="flex justify-center space-x-2">
    <button onClick={() => pushTo(item.volumeInfo.previewLink,item.volumeInfo.title)} className="block rounded-md w-32 h-12 bg-blue-600 text-center text-sm text-white hover:bg-blue-400">View</button>
   <button className="block rounded-md w-32 h-12 bg-blue-600 text-center text-sm text-white hover:bg-blue-400">More Information</button>

</div>
 </div>
    </motion.div>
            </>
                 )
        })}
       <div className="pt-6"></div>
     
      
      </div>
    </>
  )
}