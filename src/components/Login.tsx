import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logoPNT from "../images/logo.svg";

// interface FormData {
//   email: string;
//   password: string;
//   remember: boolean;
// }

export default function Login() {
  const [name, setName] = useState("Teste");
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(({ email, password, remember }) => {
    console.log(email, password, remember);
  });

  return (
    <div className=" bg-gray-50 flex flex-col justify-center p-6">
      <div className="max-w-md w-full flex flex-col place-items-center space-y-6 p-4">
        <p className="text-2xl text-bold">Porto Na Tela</p>
        <img
          src={logoPNT}
          alt="Movimentação Portuária - Esperado"
          width="150"
          height="150"
        />
        <p>Insira seus dados para efetuar login</p>
      </div>

      <div className="max-w-md w-full mx-auto mt-4 bg-white p-9 border border-gray-300">
        <form action="" className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              // ref={register({
              //   required: true,
              //   minLenght: 6,
              //   maxLenght: 20,
              // })}
              // style={{ borderColor: errors.email ? "red" : "" }}
              type="text"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {/* {errors.email && "Email inválido"} */}
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Senha
            </label>
            <input
              // ref={register()}
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                // ref={register()}
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Lembrar
              </label>
            </div>
            <div>
              <a href="" className="font-medium text-sm text-blue-500">
                {" "}
                Esqueceu a senha?
              </a>
            </div>
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
