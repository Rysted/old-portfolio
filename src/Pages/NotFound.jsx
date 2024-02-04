import { useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
