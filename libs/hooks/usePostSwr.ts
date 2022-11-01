import { useCallback, useState } from "react";
import useSwr from "swr";
const usePostSwr = (
  path: string,
  body: any,
  postApi: (path: string, body: any) => Promise<any>,
  init: boolean
) => {
  const [isPending, setIsPending] = useState(false);
  const [_, occureError] = useState();
  const {
    data: postData,
    isValidating,
    error,
    mutate,
  } = useSwr(
    [path, body],
    init ? (path: string, body: any) => postApi(path, body) : null,
    {
      suspense: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const postMutate = useCallback(
    async (newData: any) => {
      setIsPending(true);
      await mutate(
        await postApi(path, newData).catch((apiError) => {
          occureError(() => {
            throw apiError; // ==> ErrorBoundary
          });
        }),
        { revalidate: false }
      );
      setIsPending(false);
    },
    [postApi, mutate, path]
  );

  if (error) {
    // occureError(() => {
    //   throw error;
    // });
  }

  return {
    postData,
    postMutate,
    isLoading: isValidating || isPending,
  };
};

export default usePostSwr;
