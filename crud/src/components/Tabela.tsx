import Cliente from "@/core/Cliente"
import { IconeEdicao, Iconelixo } from "./Icones";

interface TabelaProps {
  clientes: Cliente[]
  clienteSelecionado?: (Cliente: Cliente) => void
  clienteExcluido?: (Cliente: Cliente) => void
}

export default function Tabela (props: TabelaProps) {
  
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false }
      </tr>
    )
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => (
      <tr key={cliente.id}
        className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100" }`}>
        <td className="text-left p-4" >{cliente.id}</td>
        <td className="text-left p-4" >{cliente.nome}</td>
        <td className="text-left p-4" >{cliente.idade}</td>
        { exibirAcoes ? renderizarAcoes(cliente): false}
      </tr>
    ));
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <button onClick={() => props.clienteSelecionado?.(cliente)} className={
            "flex justify-center items-center text-green-500 " +
            "rounded-full hover:bg-green-200 p-2 m-1 "
          }>
            {IconeEdicao}
          </button>
        ): false}
        
        {props.clienteExcluido ? (
          <button onClick={() => props.clienteExcluido?.(cliente)} className={
            "flex justify-center items-center text-red-500 " +
            "rounded-full hover:bg-red-200 p-2 m-1 "
          }>
            {Iconelixo}
          </button>
        ): false}
       
      </td>
    )
  }

   return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={
        "text-gray-100 " +
        "bg-gradient-to-r from-purple-500 to-purple-800 file:"
      }>{renderizarCabecalho()}
      </thead>
       <tbody>{renderizarDados()}</tbody>
    </table>
  )
}