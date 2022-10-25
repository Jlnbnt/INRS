import React, { useEffect, useState } from "react";
import { useThemeContext } from "../../context/ThemeProvider";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useStateContext } from "../../context/StateProvider";
import {
  ContactInput,
  ContactTextArea,
  ContactButton,
} from "./components/FormComponents";
import { gql, useMutation } from "@apollo/client";
import { SEND_CONTACT_FORM } from "../../graphql/Queries";
import { CircularProgress, Snackbar } from "@mui/material";

export default function ModalForm() {
  const { themeChoice } = useThemeContext();

  const {
    contactOpen,
    handleContactClose,
    formState,
    setFormState,
    initialContactState,
  } = useStateContext();

  const [createLink, { data, loading, error, reset }] = useMutation(
    SEND_CONTACT_FORM,
    {
      variables: {
        ...formState,
      },
    }
  );

  const handleForm = (e) => {
    e.preventDefault();
    createLink();
  };

  const [snack, setSnack] = useState(false);

  const handleSubmit = () => {
    setSnack(true);
  };

  if (error) {
    reset();
    console.log(error);
  }

  if (data?.contactSubmission?.success) {
    setTimeout(() => {
      handleSubmit();
      setFormState(initialContactState);
      handleContactClose();
      reset();
    }, 300);

    /* setTimeout(() => {
      handleSubmit();
    }, 300);
    setTimeout(() => {
      window.location.reload();
    }, 2000); */
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snack}
        onClose={() => setSnack(false)}
        message={error ? "Something went wrong" : "Message envoyé !"}
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
        open={contactOpen}
        onClose={handleContactClose}
      >
        <form
          onSubmit={handleForm}
          className="space-y-6 px-4 py-5 sm:p-4 shadow sm:overflow-hidden"
        >
          <h2 className="text-4xl pb-2 text-center">Contact</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <ContactInput
              name="firstName"
              autofocus={true}
              type="text"
              title="Prenom"
              placeHolder="Votre prénom"
            />
            <ContactInput
              name="lastName"
              type="text"
              title="Nom"
              placeHolder="Votre nom"
            />
          </div>
          <ContactTextArea
            name="message"
            title="Message"
            subTitle="Décrivez-nous votre besoin en quelques lignes."
            placeHolder="Votre message..."
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <ContactInput
              name="email"
              type="email"
              title="Email"
              placeHolder="Votre email"
            />
            <ContactInput
              name="phone"
              type="text"
              title="Phone"
              placeHolder="Votre phone"
            />
          </div>
          <DialogActions className="flex w-full justify-between">
            <ContactButton
              sumbit={false}
              customFunction={handleContactClose}
              title="CLOSE"
            />

            {loading ? (
              <CircularProgress disableShrink size={"1rem"} className="mr-4" />
            ) : data?.contactSubmission?.success ? (
              <span>Message envoyé ✓</span>
            ) : (
              <ContactButton
                title="SEND"
                sumbit={true}
                sx={{
                  color: themeChoice === "light" ? "#36454F" : "#F9F6EE",
                }}
                /*    onClick={() => handleForm(formState)} */
              />
            )}
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
