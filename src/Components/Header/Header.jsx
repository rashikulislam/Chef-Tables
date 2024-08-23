import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
const Header = () => {
    return (
        <div className="flex justify-between items-center pt-8">
            <div>
                <h2 className="text-3xl font-bold">Recipe Calories</h2>
            </div>
            <div>
                <ul className="flex space-x-6 text-[16px]">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex items-center">
                <div className="flex items-center bg-slate-200 pl-4 rounded-3xl">
                    <span className="text-xl"><CiSearch /></span><input className="rounded-3xl bg-slate-200 p-2" type="text" placeholder="Search" />
                </div>
                <div className="ml-4 bg-[#0BE58A] p-2 rounded-full">
                    <span className="text-2xl"><RiAccountCircleLine /></span>
                </div>
            </div>
        </div>
    )
}

export default Header