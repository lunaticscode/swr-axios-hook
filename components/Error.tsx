import { AxiosError } from "axios";
import { FC } from "react";
import { FallbackProps } from "react-error-boundary";

const Error: FC<FallbackProps> = ({ ...props }) => {
  const { error, resetErrorBoundary } = props;
  console.log(error);
  return (
    <>
      {error instanceof AxiosError ? <div>ApiError</div> : <div>UI Error</div>}
      <button onClick={() => (location.href = "/")}>back</button>
    </>
  );
};
export default Error;
