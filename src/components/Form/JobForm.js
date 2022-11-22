import React, { useState } from "react";
import { useThemeContext } from "../../context/ThemeProvider";

import { useStateContext } from "../../context/StateProvider";
import { useMutation } from "@apollo/client";
import { SEND_JOB_FORM } from "../../graphql/Queries";

import { JobInput, JobTextArea, JobButton } from "./components/FormComponents";

import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { CircularProgress, Snackbar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function JobForm() {
  const { themeChoice } = useThemeContext();

  const [image, setImage] = useState("");
  const [sending, setSending] = useState(false);
  const [snack, setSnack] = useState(false);

  const {
    jobOpen,
    handleJobClose,
    jobState,
    setJobState,
    initialContactState,
    jobTitle,
  } = useStateContext();

  const handleSubmit = () => {
    setSnack(true);
  };

  const [createLink, { data, loading, error, reset }] = useMutation(
    SEND_JOB_FORM,
    {
      variables: {
        ...jobState,
      },
    }
  );

  const uploadImage = (e) => {
    e.preventDefault();
    setSending(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "htmo5vub");
    fetch("https://api.cloudinary.com/v1_1/dx5ip73lv/raw/upload/", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setJobState({
          ...jobState,
          file: data?.secure_url,
          intitule: jobTitle,
        });
        setTimeout(() => {
          setSending(false);
          createLink();
        }, 300);
      })
      .catch((err) => console.log(err));
  };

  if (error) {
    reset();
    console.log(error);
  }

  if (data?.jobSubmission?.success) {
    setTimeout(() => {
      handleSubmit();
      setJobState(initialContactState);
      handleJobClose();
      setImage("");
      reset();
    }, 300);
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snack}
        onClose={() => setSnack(false)}
        message={error ? "Something went wrong" : "Candidature envoyée !"}
        autoHideDuration={3000}
        ContentProps={{
          sx: {
            backgroundColor: !error ? "rgb(134 239 172)" : "	rgb(255, 105, 97)",
            color: !error ? "rgb(75 85 99)" : "black",
            fontWeight: "500",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <Dialog
        PaperProps={{
          style: {
            borderRadius: "8px",
            backgroundColor: themeChoice === "light" ? "#F9F6EE" : "#181818",
            color: themeChoice === "light" ? "#36454F" : "#F9F6EE",
          },
        }}
        fullWidth
        open={jobOpen}
        onClose={handleJobClose}
      >
        <form
          onSubmit={uploadImage}
          className="space-y-4 px-4 py-5 sm:p-4 shadow sm:overflow-hidden relative"
        >
          <CloseIcon
            className="absolute right-2 cursor-pointer"
            onClick={handleJobClose}
          />
          <h2 className="text-4xl pb-2 text-center">Candidature</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <JobInput
              name="lastName"
              type="text"
              title="Nom"
              placeHolder="Votre nom"
            />
            <JobInput
              name="firstName"
              autofocus={true}
              type="text"
              title="Prénom"
              placeHolder="Votre prénom"
            />
          </div>
          <JobTextArea
            name="message"
            title="Lettre de motivation"
            subTitle="Décrivez vos motivations en quelques lignes."
            placeHolder="Vos motivations..."
          />
          <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            {!image?.name ? (
              <div className="space-y-1 text-center">
                <div className="flex justify-center text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md  font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Télécharger un fichier</span>
                    <input
                      onChange={(e) => setImage(e.target.files[0])}
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      required
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, PDF (10MB .max)
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-center ">
                <DeleteIcon
                  onClick={() => setImage("")}
                  className="cursor-pointer hover:text-gray-400"
                />
                <span>{image.name}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <JobInput
              name="email"
              type="email"
              title="Email"
              placeHolder="Votre email"
            />
            <JobInput
              name="phone"
              type="text"
              title="Téléphone"
              placeHolder="Votre numéro de téléphone"
            />
          </div>
          <DialogActions className="flex w-full justify-between">
            <JobButton
              sumbit={false}
              customFunction={handleJobClose}
              title="FERMER"
            />

            {loading || sending ? (
              <CircularProgress disableShrink size={"1rem"} className="mr-4" />
            ) : data?.jobSubmission?.success ? (
              <span>Message envoyé ✓</span>
            ) : (
              <JobButton
                title="ENVOYER"
                sumbit={true}
                sx={{
                  color: themeChoice === "light" ? "#36454F" : "#F9F6EE",
                }}
              />
            )}
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
