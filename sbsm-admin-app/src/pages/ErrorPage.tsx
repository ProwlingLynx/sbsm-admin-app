export const ErrorPage = ({message}: {message: string}) => {
  return (
    <div className="error-page">
      <h1>Something went wrong...</h1>
      <p>{message}</p>
    </div>
  );
};