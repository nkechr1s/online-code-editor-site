import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Header, Footer } from "src/containers";

const Shell = () => {
  return (
    <>
      <Header />
      <main className="container">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
};

export default Shell;
