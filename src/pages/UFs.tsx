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
      .then((response) => {setEstados(response.data);
      })
    
  }, []);

  return { estados };
};

export default useEstados;