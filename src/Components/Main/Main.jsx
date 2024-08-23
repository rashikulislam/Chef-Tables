import capture from '../../assets/capture.jpg'
const Main = () => {
    return (
        <div>
            <div className='bg-no-repeat bg-cover pt-24 pb-24 rounded-3xl' style={{ backgroundImage: `url(${capture})` }}>
                <div className='text-white text-center w-[800px] mx-auto space-y-6'>
                    <h1 className="text-4xl">Discover an exceptional cooking class tailored for you!</h1>
                    <p className='text-slate-100'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <button className='bg-[#0BE58A] text-black pt-3 pb-3 pr-6 pl-6 rounded-3xl text-[16px] font-semibold '>Explore Now</button>
                    <button className='ml-4 bg-transparent border pt-3 pb-3 pr-6 pl-6 rounded-3xl text-[16px] font-semibold'>Our Feedback</button>
                </div>
            </div>
            <div  className='text-center w-[800px] mx-auto space-y-5 mt-14'>
                <h3 className='text-3xl font-bold'>Our Recipes</h3>
                <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
        </div>
    )
}

export default Main