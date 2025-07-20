export const Testimonials =({user , review})=>{
    return(
        <div>
            <h1 className="font-semibold pl-1 flex items-center gap-10px ">
               <span><img src="/src/assets/circle.png" width={40} alt="" /></span>{user}
            </h1>
            <h1 className="h-[92px]  text-2xl font-light w-[400px]">
                {review}
            </h1>
        </div>
    )
}