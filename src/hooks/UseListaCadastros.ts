import { useEffect, useState } from 'react';
import { FormFields } from '../models/Cadastros';

const lista = "cadastros";

const useListaCadastros = () => {
    const [cadastros, setCadastros] = useState<FormFields[]>([]);

    useEffect(() => {
        const data = localStorage.getItem(lista);
        if (data) {
            setCadastros(JSON.parse(data));
        }
    }, []);

    const incluirCadastro = (data: FormFields) => {
        const novosCadastros = [...cadastros, data];
        setCadastros(novosCadastros);
        localStorage.setItem(lista, JSON.stringify(novosCadastros));
    }

    const atualizarCadastro = (index: number, novoCadastro: FormFields) => {
        const novosCadastros = [...cadastros];
        novosCadastros[index] = novoCadastro;
        setCadastros(novosCadastros);
        localStorage.setItem(lista, JSON.stringify(novosCadastros));
    };

    return { cadastros, incluirCadastro, atualizarCadastro };
}

export default useListaCadastros;