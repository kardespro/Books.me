import { useEffect , useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Header from '../components/Static/Header'
export default function Settings(){
  const [last,setLast] = useState()
  const [view,setView] = useState()
  useEffect(() => {
    let w1 = window.localStorage.getItem('search-last')
    let w2 = window.localStorage.getItem("last-view")
    setLast(w1)
    setView(w2)
  })
  function deleteLocal(){
    window.localStorage.removeItem('search-last')
    window.localStorage.removeItem("last-view")
  }
  return(
    <>
      <Header />
      <div className="w-full px-4 pt-16  ">
      <div className="mx-auto w-full max-w-md rounded-2xl  p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span>Last Searched Book</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {last}

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-600 px-4 py-2 text-left text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-opacity-75">
                <span>Last Viewed</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {view}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
      <div className="pt-4"></div>
    
      <div className="flex justify-center items-center">
        <button className="px-4 py-2 bg-red-600 hover:bg-red-600 rounded-lg text-white "
          onClick={() => deleteLocal()}
          >
          Delete data
        </button>
      </div>
    </>
  )
}