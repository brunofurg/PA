import * as React from "react";

export default function PaginationControlled() {
  // const [page, setPage] = React.useState(1);
  // const handleChange = (event, value) => {
  //   console.log(value);
  //   setPage(value);
  // };

  return (
    <div className="flex flex-row place-content-around space-x-4 p-2">
      <div className="bg-gray-300 hover:bg-gray-200 rounded-full p-2 ">{`<`}</div>
      <div className="bg-blue-400 border border-blue-500 text-white rounded-lg shadow-lg p-2">
        Setembro 21
      </div>
      <div className="bg-gray-300 hover:bg-gray-200 rounded-full p-2 ">{`>`}</div>
    </div>
  );
}
