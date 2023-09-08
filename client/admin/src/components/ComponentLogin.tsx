import { FormEvent, useState } from "react";
import { LoginQuestion } from "./LoginQuestion";

export const ComponentLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col p-2 m-2 rounded-lg w-[300px] shadow-lg bg-white"
    >
      <LoginQuestion
        textLabel={"Escriba su email"}
        placeHolder={"email"}
        value={email}
        setValue={setEmail}
      />
      <LoginQuestion
        textLabel={"Escriba su contraseña"}
        placeHolder={"password"}
        value={password}
        setValue={setPassword}
      />
      <button
        type="submit"
        className="p-3 m-1 bg-red-500 text-white font-medium w-max rounded-lg
        hover:bg-red-400 active:bg-red-600 ml-3 mt-4 shadow-md"
      >
        Ingresar
      </button>
    </form>
  );
};
