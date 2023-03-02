import { Link } from "react-router-dom";

export const Card = ({ imgSource }) => {
  return (
    <div>

      <div className="m-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#" >
          
          
            <img className="p-3 rounded-t-lg  " src={imgSource} alt="product" />
         

        </Link>
        <div className="px-5 pb-5">
          <Link to="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
          </Link>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <Link to="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
