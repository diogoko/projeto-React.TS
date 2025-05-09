import { useEffect, useState } from "react";
import axios from "axios";

type Estado = {
  UF: string;
  sigla: string;
};


const useEstados = () => {
  const [estados, setEstados] = useState<Estado[]>([]);
  
  useEffect(() => {
    axios
      .get<Estado[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        const estadosOrdenados = response.data.sort((a, b) => a.sigla.localeCompare(b.sigla));
        setEstados(estadosOrdenados);
      });    
  }, []);

  return { estados };
};

export default useEstados;