import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import DOMPurify from "dompurify";
import React from "react";
import { GET_PDC } from "../../graphql/Queries";
import SEO from "../../seo/SEO";
const PDC = () => {
  const { loading, error, data } = useQuery(GET_PDC);

  if (loading)
    return (
      <div className="bg-light dark:bg-dark h-screen w-full flex items-center justify-center">
        <CircularProgress disableShrink className="m-8" />;
      </div>
    );
  if (error) return `Error! ${error.message}`;
  const pdc = data?.allPDC?.nodes[0]?.pdc?.pdc;
  console.log(pdc);
  return (
    <div className="text-light dark:text-dark p-8">
      <SEO
        title="PDC"
        description="INRS - It is not Rocket Science est un site d'information et de vulgarisation scientifique. Politique de confidentialité"
      />
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(pdc) }} />
    </div>
  );
};

export default PDC;
