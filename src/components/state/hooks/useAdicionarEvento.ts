import { useSetRecoilState } from "recoil"
import { IEvento } from "../../../interfaces/IEvento"
import { listaDeEventosState } from "../atom"
import { obterId } from "../../../util"

const  useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
  return (evento: IEvento) => {
    const hoje = new Date()
    if (evento.inicio < hoje) {
      throw new Error('Eventos Não Podem Ser Cadastrados Com a Data Menor Do Que a Atual!')
    }
    evento.id = obterId()
    return setListaDeEventos(listaAntiga => [...listaAntiga,  evento])
  }
}

export default useAdicionarEvento