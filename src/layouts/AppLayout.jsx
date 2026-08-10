import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="">
      <header></header>
      <main className="">
        <Outlet />
      </main>
      <footer className=""></footer>
    </div>
  );
}

export default AppLayout;
