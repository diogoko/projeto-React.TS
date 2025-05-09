import useListaCadastros from '../hooks/UseListaCadastros';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EditClient = () => {
    const { cadastros, atualizarCadastro } = useListaCadastros();
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editedData, setEditedData] = useState({ nome: '', idade: '', uf: '' });
  
  const handleEdit = (index: number) => {
      setEditingIndex(index);
      setEditedData({ ...cadastros[index], idade: String(cadastros[index].idade) });
    };
  
    const handleSave = () => {
      if (editingIndex !== null) {
          atualizarCadastro(editingIndex, { ...editedData, idade: Number(editedData.idade) });
          setEditingIndex(null);
      }
    };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditedData((prev) => ({ ...prev, [name]: value }));
    };

    return (
      <>
      <div>
        <h1>Editar Cliente</h1>
  
        {cadastros.length === 0 ? (
          <p>Nenhum cadastro salvo.</p>
        ) : (
          <ul className="mt-2">
            {cadastros.map((item, index) => (
              <li key={index} className="mb-2">
                {editingIndex === index ? (
                  <div>
                    <input
                      type="text"
                      name="nome"
                      value={editedData.nome}
                      onChange={handleChange}
                      placeholder="Nome"
                    />
                    <input
                      type="text"
                      name="idade"
                      value={editedData.idade}
                      onChange={handleChange}
                      placeholder="Idade"
                    />
                    <input
                      type="text"
                      name="uf"
                      value={editedData.uf}
                      onChange={handleChange}
                      placeholder="UF"
                    />
                    <button onClick={handleSave}>Salvar</button>
                  </div>
                ) : (
                  <div>
                    <strong>Nome:</strong> {item.nome}, <strong>Idade:</strong>{' '}
                    {item.idade}, <strong>UF:</strong> {item.uf}{' '}
                    <button onClick={() => handleEdit(index)}>Editar</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <Link to="/cadastro">Cadastrar Cliente</Link>
      </div>
      <div>
        <Link to="/lista-cadastros">Lista de Clientes</Link>
      </div>
    </>
    );
};

  
  export default EditClient;