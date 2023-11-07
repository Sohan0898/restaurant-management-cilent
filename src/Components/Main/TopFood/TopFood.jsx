
import { Link, useLoaderData } from "react-router-dom";
import TopFoodCard from "./TopFoodCard";

const TopFood = () => {
    const allFood = useLoaderData();

    const topFood = allFood.slice(0, 6);
    console.log(topFood);
    return (
        <div >
            <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 my-10">
            <div className=""><h1>
                Our Top Food</h1></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
                    {
                        topFood?.map(top => <TopFoodCard key={top._id} top={top}></TopFoodCard>)
                    }
                </div>

                <div>
                    <Link to={'/allFood'}><button>See All Food</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopFood;