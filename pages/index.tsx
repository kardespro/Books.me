import Header from '../components/Static/Header'
import Book from '../components/Global/BookCard'

export default function Index(){
  return(
    <>
    <Header />
      <div className="pt-16"></div>
        <div className="">
      <h1 className="text-white text-center text-4xl md:text-6xl font-['Days_One']">Explore <span className="text-blue-600  animate-bounce">Books</span></h1>
       <p className="text-white text-center text-md font-['Source_Sans_Pro']">Many Books Avaliable on Books.<span className="text-blue-600 font-bold">me</span></p>
    </div>
            <div className="pt-16"></div>
        <br/>
      <Book />
    </>
  )
}