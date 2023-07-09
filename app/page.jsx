import Image from 'next/image'
import Card from "@/components/json/card"
export default function Home() {
  return (
    <>
    <div className='mt-12 mb-4 h-4/5 '>
    {/* subheader text */}
     <div className='w-11/12 m-auto flex justify-around wrap pt-10 pb-10'>
      <div className='p-4' >
        <h1 className='font-semibold text-xl lg:text-5xl'>FIND THE BEST <br /> STREET FOOD IN <br/> YOUR TOWN</h1>
      </div>
      <div className='w-1/2 h-full'>
        <img className="w-5/6 m-auto" src="https://www.shutterstock.com/image-vector/set-market-wooden-store-stall-260nw-1644699406.jpg" alt="" />
      </div>
     </div>

     {/* search bar */}

     <div className="flex justify-center mt-8">
        <div className="w-full h-60 relative bg-gradient-to-r from-slate-300 to-slate-400">
          <img
            src="https://tasteofdelhi.co.nz/wp-content/uploads/2021/04/indian.jpg"
            className="w-screen h-full bg-cover absolute mix-blend-multiply"
            alt=""
          />

          <div className="flex justify-center p-10">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative hover:shadow-2xl shadow-card-color">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full h-10 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* cards */}

      <div className='mt-4 mb-4 w-11/12 m-auto '>
      <div>
        <h1 className='text-xl font-normal m-5'>Nearby Stalls and Outlets</h1>
      </div>
      <div className='flex flex-wrap justify-around'>
     {
      Card.photo.map((val)=>{
        return(
          <div class="card card-compact w-1/2 lg:w-1/4 h-80 bg-base-100 shadow-xl m-5">
  <figure ><img className='lg:p-3 drop-shadow-lg w-full ' src={val} alt="Shoes" /></figure>
  <div class="w-full pb-4">
   <div className='flex flex-wrap lg:justify-between m-2'>
    <h3 className='font-semibold'>rohit chaiwala</h3>
      <p className='flex bg-black p-1 rounded-lg text-white'>4.5<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg></p>
   </div>
   {/* map */}
   <div className='flex'>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

<p>Near Ruby Hospital</p>
   </div>
  </div>
  </div>
        )
      })
     }

      </div>
      </div>
    </div>
    </>
  )
}
