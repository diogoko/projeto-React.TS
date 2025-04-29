import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../components/Header";

const schema = z.object({
    nome: z.string().min(1, "O campo nome é obrigatório"),
    idade: z.number().min(1, "O campo idade é obrigatório"),
});

export default function Form3() {
    const {register, handleSubmit, formState: {errors}} = useForm ();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("nome", {required: "O campo nome é obrigatório"})} />
            {errors.name && <span>{errors.name.message}</span>}
            <input {...register("idade", {required: "O campo idade é obrigatório"})} />
            {errors.idade && <span>{errors.idade.message}</span>}
            <button type="submit">Enviar</button>
        </form>
    );
}
