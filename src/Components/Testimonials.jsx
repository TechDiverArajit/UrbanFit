export const Testimonials =({user , review})=>{
    return(
        <div className=" relative rounded-2xl w-110 h-36 bg-white shadow-2xl ">
            <h1 className="font-semibold pl-1 absolute left-54 -top-8  flex items-center gap-10px ">
                {user}
                </h1>
               <span className="absolute -top-14 left-38 " ><img src="/src/assets/circle.png" width={70} alt="" /></span>
            
            <h1 className=" pl-10 pt-4 text-2xl font-light flex justify-center  ">
                {review} 
            </h1>
        </div>
    )
}