import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="bg-dark-100 h-screen w-screen p-3 relative flex flex-col justify-between">
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="relative z-10 flex-1 overflow-auto">
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default RootPage;
