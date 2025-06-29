import "./App.css";
import { useMutation } from "@tanstack/react-query";
import getDogs from "./http";
import Loading from "./assets/loading.png";
import Input from "./components/Input";
import Image from "./components/Image";

function App() {
  const { mutate, data, isError, error, isPending } = useMutation({
    mutationKey: ["dogs"],
    mutationFn: getDogs,
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const dog = form.get("dog") as string;

    mutate(dog.toLowerCase().trim());
  }

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center">
      <Input handleSubmit={handleSubmit} isPending={isPending} />
      {isPending && (
        <img className="animate-spin" src={Loading} alt="Loading image" />
      )}
      {data && data.status === "success" ? (
        <ul className="mt-8 grid grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2 md:gap-2">
          {data.message.map((dog, index) => (
            <Image dog={dog} index={index} />
          ))}
        </ul>
      ) : (
        <p>{data?.message}</p>
      )}
      {!data && !isError && !isPending && (
        <p className="text-xl text-center text-slate-700">
          Enter a dog breed in the field to get its pictures
        </p>
      )}
      {isError && !data && (
        <p className="text-xl text-center text-slate-700">{error.message}</p>
      )}
    </div>
  );
}

export default App;
