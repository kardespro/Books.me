import Header from '../components/Static/Header'
import { useEffect , useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Search(){
    const router = useRouter()

  const [data,setData] = useState([])
  const handleSubmit = async(e) => {
    e.preventDefault()
    let req = await axios.get(`/api/fetch?_q=${e.target.search.value}`)
    setData(req.data.message.items)
    window.localStorage.setItem("search-last", e.target.search.value)
    window.localStorage.setItem("x-Books-Results", "true")
  }
  return(
    <>
      <Header />
      <div className="pt-16"></div>
      <div>
        <form onSubmit={handleSubmit}>
         <div className="pl-4 pr-2">
          <input 
            name="search"
            className="border-2 border-blue-600 w-full bg-black py-3 px-3 rounded-lg text-white hover:border-2 hover:border-blue-600 focus:border-2 focus:border-blue-600"
            placeholder="Victory"
            required
            />
         </div>
          
        </form>
      </div>
 <div className="pt-6"></div>
     
    <div className="md:grid md:grid-cols-3 md:gap-4">
      {data.map((item,index) => {
        return(
          <>
          

              <div className=" flex justify-center items-center  block bg-gray-900 w-full md:w-full h-44 md:h-64 rounded ">
    <div key={index}>
                  <a className="block p-2 text-white text-xl text-center" href="#">{item.volumeInfo.title || ""}</a>
   <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
     <div className="flex justify-center">
        <button onClick={() => router.push(item.volumeInfo.previewLink)} className="block  rounded-md w-48 h-12 bg-blue-600 text-center text-sm text-white hover:bg-blue-400">View</button>
  </div>
   </div>
    </div>
          </>
        )
      })}
    </div>
    </>
  )
}