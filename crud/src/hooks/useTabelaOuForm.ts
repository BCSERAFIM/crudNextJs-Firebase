import { useState } from "react";

export default function useTabelaOuForm() {
  /*
useState<"tabela" | "form">("tabela"):
Aqui, você está chamando o hook useState com um valor inicial de "tabela" e está especificando que este estado só
pode ter dois valores possíveis: "tabela" ou "form".
*/
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela")

  const exibirTabela = () => setVisivel("tabela")
  const exibirFormulario = () => setVisivel("form")

  return {
    formularioVisivel: visivel === "form",
    tabelaVisivel: visivel === "tabela",
    exibirTabela,
    exibirFormulario,
  }
}