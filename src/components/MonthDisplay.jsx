import * as React from "react";
import { FiChevronsLeft as IconReturn } from "react-icons/fi";
import { FiChevronsRight as IconAdvance } from "react-icons/fi";

export default function PaginationControlled() {
  // const [page, setPage] = React.useState(1);
  // const handleChange = (event, value) => {
  //   console.log(value);
  //   setPage(value);
  // };

  return (
    <div className="flex flex-row place-content-around space-x-4 p-2">
      <div className="bg-gray-300 hover:bg-gray-200 flex place-items-center rounded-full p-2 ">
        <IconReturn />
      </div>
      <div className="bg-blue-400 border border-blue-500 text-white rounded-lg shadow-lg p-2">
        Setembro 21
      </div>
      <div className="bg-gray-300 hover:bg-gray-200 flex place-items-center rounded-full p-2 ">
        <IconAdvance />
      </div>
    </div>
  );
}
