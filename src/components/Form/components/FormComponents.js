import { Button } from "@mui/material";
import { useThemeContext } from "../../../context/ThemeProvider";
import { useStateContext } from "../../../context/StateProvider";

export const ContactInput = ({ title, placeHolder, type, autofocus, name }) => {
  const { themeChoice } = useThemeContext();
  const { formState, handleChange } = useStateContext();
  return (
    <div className="w-full sm:w-1/2">
      <h2 className=" text-sm font-medium">{title}</h2>
      <input
        required
        autoFocus={autofocus}
        style={{
          backgroundColor: themeChoice === "light" ? "#F9F6EE" : "#181818",
        }}
        type={type}
        className="mt-1 flex rounded-md shadow-sm w-full flex-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder={placeHolder}
        name={name}
        value={formState?.name}
        onChange={handleChange}
      />
    </div>
  );
};
export const JobInput = ({ title, placeHolder, type, autofocus, name }) => {
  const { themeChoice } = useThemeContext();
  const { formState, handleJobChange } = useStateContext();
  return (
    <div className="w-full sm:w-1/2">
      <h2 className=" text-sm font-medium">{title}</h2>
      <input
        required
        autoFocus={autofocus}
        style={{
          backgroundColor: themeChoice === "light" ? "#F9F6EE" : "#181818",
        }}
        type={type}
        className="mt-1 flex rounded-md shadow-sm w-full flex-1 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder={placeHolder}
        name={name}
        value={formState?.name}
        onChange={handleJobChange}
      />
    </div>
  );
};

export const JobTextArea = ({ title, placeHolder, subTitle, name }) => {
  const { formState, handleJobChange } = useStateContext();
  const { themeChoice } = useThemeContext();
  return (
    <div>
      <h2 className="text-sm font-medium">{title}</h2>
      <textarea
        style={{
          backgroundColor: themeChoice === "light" ? "#F9F6EE" : "#181818",
        }}
        rows="3"
        className="h-[160px] resize-none mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder={placeHolder}
        name={name}
        value={formState?.name}
        onChange={handleJobChange}
      />
      <p className="text-sm text-gray-500">{subTitle}</p>
    </div>
  );
};
export const ContactTextArea = ({ title, placeHolder, subTitle, name }) => {
  const { formState, handleChange } = useStateContext();
  const { themeChoice } = useThemeContext();
  return (
    <div>
      <h2 className="text-sm font-medium">{title}</h2>
      <textarea
        style={{
          backgroundColor: themeChoice === "light" ? "#F9F6EE" : "#181818",
        }}
        rows="3"
        className="h-[160px] resize-none mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder={placeHolder}
        name={name}
        value={formState?.name}
        onChange={handleChange}
      />
      <p className="text-sm text-gray-500">{subTitle}</p>
    </div>
  );
};

export const JobButton = ({ customFunction, title, sumbit }) => {
  const { themeChoice } = useThemeContext();
  const { jobState } = useStateContext();
  const newArray = [];

  if (jobState === !null) {
    Object.values(jobState).map((item) => {
      if (item === !null) {
        newArray.push(item.length);
      }
    });
  }

  return (
    <Button
      type={sumbit ? "submit" : "button"}
      disabled={sumbit && newArray?.includes(0)}
      sx={{
        color: themeChoice === "light" ? "#36454F" : "#F9F6EE",
      }}
      onClick={customFunction}
    >
      {title}
    </Button>
  );
};
export const ContactButton = ({ customFunction, title, sumbit }) => {
  const { themeChoice } = useThemeContext();
  const { formState } = useStateContext();
  const newArray = [];

  if (formState === !null) {
    Object.values(formState).map((item) => {
      if (item === !null) {
        newArray.push(item.length);
      }
    });
  }

  return (
    <Button
      type={sumbit ? "submit" : "button"}
      disabled={sumbit && newArray?.includes(0)}
      sx={{
        color: themeChoice === "light" ? "#36454F" : "#F9F6EE",
      }}
      onClick={customFunction}
    >
      {title}
    </Button>
  );
};
