import { useQuery } from "@apollo/client";
import { CircularProgress } from "@mui/material";
import DOMPurify from "dompurify";
import React from "react";
import { GET_CGU } from "../../graphql/Queries";

const CGU = () => {
  const { loading, error, data } = useQuery(GET_CGU);

  if (loading)
    return (
      <div className="bg-light dark:bg-dark h-screen w-full flex items-center justify-center">
        <CircularProgress disableShrink className="m-8" />;
      </div>
    );
  if (error) return `Error! ${error.message}`;
  const cgu = data?.allCGU?.nodes[0]?.cgu?.cgu;
  console.log(cgu);
  return (
    <div className="text-light dark:text-dark p-8">
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cgu) }} />
    </div>
  );
};

export default CGU;
