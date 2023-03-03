import { Link } from "react-router-dom";


export const CartCard = () => {
  return (
    <main>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          
          <tbody>
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-32 p-4 ">
                <img src="/assets/images/1001.png" alt="Apple Watch"/>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                Apple Watch
              </td>
              
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $599
              </td>
              <td className="px-6 py-4">
              <Link to="#" className="font-medium bg-red-600 dark:bg-red-500 hover:underline text-white dark:text-white">Remove</Link>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-32 p-4">
                <img src="/assets/images/1002.png" alt="Apple Imac" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                Imac 27"
              </td>
             
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                $2499
              </td>
              <td className="px-6 py-4">
              <Link to="#" className="font-medium bg-red-600 dark:bg-red-500 hover:underline text-white dark:text-white">Remove</Link>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>



    </main>
  )
}
