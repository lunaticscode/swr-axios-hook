import usePostSwr from "../libs/hooks/usePostSwr";
import { postApi } from "../libs/utils/customAxios";

export default function Home() {
  const { postData, postMutate, isLoading } = usePostSwr(
    "test",
    { data: 2 },
    postApi,
    false
  );

  const testCallApi = async () => {
    await postMutate({ data: 3 });
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>{JSON.stringify(postData)}</div>
      )}
      <button onClick={testCallApi}>click</button>
    </div>
  );
}
