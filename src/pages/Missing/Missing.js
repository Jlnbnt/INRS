import React from "react";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import SEO from "../../seo/SEO";
const Missing = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-light dark:bg-dark text-light dark:text-dark">
      <SEO
        title="404"
        description="INRS - It is not Rocket Science est un site d'information et de vulgarisation scientifique. Politique de confidentialité"
      />
      <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">404</h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Désolé, nous n'avons pas trouvé cette page.
          </p>
          <p className="mt-4 mb-8">
            Mais ne vous inquiétez pas, vous trouverez beaucoup de choses sur
            notre page d'accueil.
          </p>
          <Link to="/">
            <Button
              className="text-light dark:text-dark border-light dark:border-dark hover:bg-gray-900 hover:bg-opacity-20"
              variant="outlined"
            >
              Accueil
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Missing;
