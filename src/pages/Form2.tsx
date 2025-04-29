import Header from "../components/Header"
import {useForm} from "react-hook-form";

type FormFields = {
    nome: string;
    idade: number;
    uf: string;
}

const Form2 = () => {
    const {register, 
        handleSubmit, 
        setError,
        formState: {errors, isSubmitting}} = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try{
            await new Promise((resolve) => setTimeout(resolvePath, 1000));
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
                            </label>
                        </div>
                        <div>
                            <label>UF:
                                <select {...register("uf", {
                                    required: true,
                                })} placeholder="uf" >
                                    {
                                        estados.map(estado => (<option value= {estado.sigla}>{estado.sigla}</option>))
                                    }
                                </select>
                            </label>
                        </div>
                        <button disabled={isSubmitting} type="button" onClick={btnSalvarClick}>Salvar Cadastro</button>
                        {errors.root && <div className="text-red-500"> {errors.root.message}</div>}
                    </fieldset>
                </form>
            </div>
        </>

    );
};

export default Form2;