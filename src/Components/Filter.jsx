import { useFilter } from "../Context/filterContext";
import { useSlider } from "../Context/sliderContext";
import MenProducts from "../DB/Products";
import WomanProduct from "../DB/WomanProducts";
export  const Filter = ({hnm})=>{

   const {filter,dispatch} = useFilter();
   const {filterOpened , setFilterOpened} = useSlider();
    
    return(
        <>
            
            <img onClick={()=>setFilterOpened(true)} className="xl:w-[60px] lg:w-[55px] md:w-[50px] sm:w-[45px] w-[40px] absolute z-1 lg:right-15 md:right-10 sm:right-8 right-5 xl:right-20 top-46" src="/filter.png" alt="" />
            <div className={`${filterOpened?`w-50`:`w-0`} overflow-hidden h-screen fixed shadow-2xl transition-all duration-200 z-1 top-0 right-0 bg-white`}>

            <div className="flex  flex-col justify-center items-center gap-8  absolute top-43 left-10">
                <button onClick={()=>setFilterOpened(false)} className=" hover:text-blue-400 absolute left-15 -top-20  cursor-pointer w-10 h-5 text-md font-semibold" >Close</button>
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-xl font-semibold">Brands:</h1>
                    <label className="flex items-center gap-1" htmlFor="">
                    <input checked={filter.hnm} className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-2xl checked:bg-black checked:border-black relative " onClick={()=>dispatch({type:"HNM"})}  type="checkbox"   />
                    H&M

                    <svg
                    class="absolute w-3 h-3 text-white ml-1 hidden peer-checked:block pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                        >
                    <path d="M5 13l4 4L19 7" />
                     </svg>
                </label>
                <label className=" flex items-center gap-1" htmlFor="">
                    <input className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-2xl checked:bg-black checked:border-black" onClick={()=>dispatch({type:"ZARA"})} checked={filter.zara} type="checkbox"    />
                    Zara
                    <svg
                    class="absolute w-3 h-3 text-white ml-1 hidden peer-checked:block pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                        >
                    <path d="M5 13l4 4L19 7" />
                     </svg>
                </label>
                <label  className="flex items-center gap-1" htmlFor="">
                    <input className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-2xl checked:bg-black checked:border-black" onClick={()=>dispatch({type:"MANGO"})}  checked={filter.Mango} type="checkbox"  />
                    Mango
                     <svg
                    class="absolute w-3 h-3 text-white ml-1 hidden peer-checked:block pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                        >
                    <path d="M5 13l4 4L19 7" />
                     </svg>
                </label>
                </div>
                <div className="flex flex-col gap-3 items-center "  >
                    <h1 className="text-xl font-semibold">color:</h1>
                    <div onClick={()=>dispatch({type:"RED"})} className={` ${filter.color=="red"?`border-3`:''} w-10 h-10 flex items-center justify-center rounded-full`}>
                    <div  className=" w-8 h-8  rounded-full bg-red-500 border-2 border-white">

                    </div>
                    </div>

                    <div onClick={()=>dispatch({type:"BLACK"})}  className={` ${filter.color=="black"?`border-3`:''} w-10 h-10 flex items-center justify-center rounded-full`}>
                    <div className=" w-8 h-8 rounded-full bg-black border-2 border-white ">
                    </div>
                    </div>

                    <div onClick={()=>dispatch({type:"CREAM"})}  className={` ${filter.color=="cream"?`border-3`:''} w-10 h-10 flex items-center justify-center rounded-full`}>
                    <div className=" w-8 h-8 rounded-full bg-amber-200 border-2 border-white ">
                        
                    </div>
                    </div>
                    <div onClick={()=>dispatch({type:"BLUE"})}  className={` ${filter.color=="blue"?`border-3`:''} w-10 h-10 flex items-center justify-center rounded-full`}>
                    <div className=" w-8 h-8 rounded-full bg-[#1711C3] border-2 border-white  ">
                        
                    </div>
                    </div>

                    
                </div>
            <div className="overflow-hidden">
                <button onClick={()=>dispatch({type:"CLEAR"})} > x CLEAR</button>
                </div>
        </div>
        </div>
        </>
    )
}
