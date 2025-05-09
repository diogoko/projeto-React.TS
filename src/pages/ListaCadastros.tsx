import useListaCadastros from '../hooks/UseListaCadastros';
import { Link } from 'react-router-dom';

const ListaCadastros = () => {
  const { cadastros } = useListaCadastros();

  return (
    <>
    <div>
      <h1>Lista de Clientes</h1>

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
    <div>
        <Link to="/cadastro">Cadastrar Cliente</Link>
      </div>
      <div>
        <Link to="/editar-cadastros">Editar Cadastros</Link>
      </div>
    </>
);
};

export default ListaCadastros;
