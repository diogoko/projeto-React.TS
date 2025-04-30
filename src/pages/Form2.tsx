import { useEffect, useState } from "react";
import Header from "../components/Header"
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";

type FormFields = {
    nome: string;
    idade: number;
    uf: string;
}

type Estado = {
    sigla: string;
}

const Form2 = () => {
    const[estados, setEstados] = useState<Estado[]>([]);

    useEffect(() => {axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(response => setEstados(response.data))
    }, [])

    const {register, 
        handleSubmit, 
        setError,
        formState: {errors, isSubmitting}} = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try{
            await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);
        } catch (error) {
            setError("nome", {
                message: "Este nome já está em uso",
            })
        }
    };

    return(
        <>
        <Header title= "Form Page" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <legend>
                            <h2>Dados de Cadastro</h2>
                        </legend>
                        <div>
                            <label>Nome:
                                <input {...register("nome", {
                                    required: "Nome é necessário",
                                })} type="text" placeholder="nome" />
                                {errors.nome && (
                                    <div className="text-red-500">{errors.nome.message}</div>
                                )}
                            </label>
                        </div>
                        <div>
                            <label>Idade:
                                <input {...register("idade", {
                                    required: "Idade é necessário",
                                })} type="number" placeholder="idade" />
                                {errors.idade && (
                                    <div className="text-red-500">{errors.idade.message}</div>
                                )}
                            </label>
                        </div>
                        <div>
                            <label>UF:
                                <select {...register("uf", {
                                    required: "UF é necessário",
                                })}>
                                    <option value= "">Selecione</option>
                                    {
                                        estados.map(estado => (<option key= {estado.sigla} value= {estado.sigla}>{estado.sigla}</option>))
                                    }
                                </select>
                                {errors.uf && (
                                    <div className= "text-red-500">{errors.uf.message}</div>
                                )}
                            </label>
                        </div>
                        <button disabled={isSubmitting}>Salvar Cadastro</button>
                        {errors.root && <div className="text-red-500"> {errors.root.message}</div>}
                    </fieldset>
                </form>
            </div>
        </>

    );
};

export default Form2;