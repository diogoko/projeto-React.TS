import React from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../components/Header";
import axios from "axios";


export function Form4() {
    const {register, handleSubmit} = useForm ();
    const [data, setData] = useState ("");

    useEffect(() => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(response => setEstados(response.data))
    }, [])

    return (
        <>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            <Header />
            <input {...register("nome")} placeholder = "Nome" />
            <input {...register("idade")} placeholder = "Idade" />
            <select {...select ("uf", {required: true})}>
                {
                    estados.map(estado => (<option value= {estado.sigla}>{estado.sigla}</option>))
                }
            </select>
            <p>{data}</p>
            <button type="submit">Enviar</button>
        </form>
        </>
    );
}
