import { RouterProvider } from "react-router-dom";
import { router } from "src/routes";
import { Header, Footer } from "src/containers";
import { GlobalProvider } from "src/context/GlobalContext";

const Shell = () => {
  return (
    <GlobalProvider>
      <Header />
      <main className="container">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </GlobalProvider>
  );
};

export default Shell;
