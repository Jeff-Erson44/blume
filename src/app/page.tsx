import React from "react";

const Page: React.FC = () => {
  return (
    <div className="grid grid-cols-6 lg:grid-cols-12">
      <div className="col-start-1 col-span-10 ">
        <h1 className="text-red-500 lg:text-emerald-500 xl:text-orange-500">
          Welcome to the starter Next Tailwind
        </h1>
      </div>
    </div>
  );
};

export default Page;
