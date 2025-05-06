import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import Header from '../components/Header';
import useEstados from './UFs';
import { FormFields, schema } from '../models/Cadastros';
import useListaCadastros from '../hooks/UseListaCadastros';

const Form3 = () => {
  const { estados } = useEstados();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

  const { cadastros, incluirCadastro } = useListaCadastros();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      incluirCadastro(data);
    } catch (error) {
      setError('nome', {
        message: 'Este nome já está em uso'
      });
    }
  };

  return (
    <>
      <Header title="Form Page" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>
              <h2>Dados de Cadastro</h2>
            </legend>
            <div>
              <label>
                Nome:
                <input {...register('nome')} type="text" placeholder="nome" />
                {errors.nome && (
                  <div className="text-red-500">{errors.nome.message}</div>
                )}
              </label>
            </div>
            <div>
              <label>
                Idade:
                <input
                  {...register('idade', { valueAsNumber: true })}
                  type="number"
                  placeholder="idade"
                />
                {errors.idade && (
                  <div className="text-red-500">{errors.idade.message}</div>
                )}
              </label>
            </div>
            <div>
              <label>
                UF:
                <select {...register('uf')}>
                  <option value="">Selecione</option>
                  {estados.map((estado) => (
                    <option key={estado.sigla} value={estado.sigla}>
                      {estado.sigla}
                    </option>
                  ))}
                </select>
                {errors.uf && (
                  <div className="text-red-500">{errors.uf.message}</div>
                )}
              </label>
            </div>
            <button disabled={isSubmitting}>Salvar Cadastro</button>
            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}
          </fieldset>
        </form>

        <div>
          <h2 className="mt-4">Cadastros Salvos</h2>
          {cadastros.length === 0 ? (
            <p>Nenhum cadastro salvo.</p>
          ) : (
            <ul className="mt-2">
              {cadastros.map((item, index) => (
                <li key={index} className="mb-2">
                  <strong>Nome:</strong> {item.nome}, <strong>Idade:</strong>{' '}
                  {item.idade}, <strong>UF:</strong> {item.uf}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Form3;
