import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <section className="w-screen h-screen ">
      <div className="flex items-center justify-center gap-2 w-full">
        <h1 className="font-extrabold">404</h1>
        <p className="">Page not found</p>
        <Link to="" className="flex items-center gap-2">
          <ArrowLeft />
          <span className="">Back to home</span>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
