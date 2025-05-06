import useListaCadastros from '../hooks/UseListaCadastros';

const ListaCadastros = () => {
  const { cadastros } = useListaCadastros();

  return (
    <div>
      <h1>Lista de Cadastros</h1>

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
  );
};

export default ListaCadastros;
