import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <section className="">
      <h1 className="">Auth Layout</h1>
      <div className="">
        <Outlet />
      </div>
    </section>
  );
}

export default AuthLayout;
