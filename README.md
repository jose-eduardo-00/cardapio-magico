# Cardápio Mágico 🍔✨

Um gerador interativo de descrições para cardápios construído com React e a API do Google Gemini. Basta inserir os ingredientes de um prato e a Inteligência Artificial, assumindo a persona de um Chef de Cozinha renomado, criará opções de nomes criativos, descrições sensoriais focadas em vendas e sugestões de harmonização de bebidas.

## 🚀 Funcionalidades

- **Geração Contextualizada:** Cria descrições atraentes baseadas apenas em uma lista simples de ingredientes.
- **Persona de Chef:** A IA é instruída a usar um tom apaixonante e focado em vendas ("copywriting" para gastronomia).
- **Harmonização Inteligente:** Sugere automaticamente bebidas que combinam com o prato criado.
- **Suporte a Markdown:** Renderização de textos formatados e estilizados nativamente na interface.
- **Interface Elegante:** Design limpo e responsivo construído com Tailwind CSS, com paleta de cores voltada para o setor alimentício.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[React](https://react.dev/)** + **[Vite](https://vitejs.dev/)**: Para a construção e empacotamento rápido da interface.
- **[Tailwind CSS](https://tailwindcss.com/)**: Para estilização rápida e responsiva utilizando classes utilitárias.
- **[@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai)**: SDK oficial para integração com o modelo Gemini (utilizando o `gemini-3-flash-preview`).
- **[react-markdown](https://github.com/remarkjs/react-markdown)**: Para renderizar as respostas da IA com suporte a blocos de código.

## ⚙️ Como rodar o projeto localmente

Para rodar este projeto na sua máquina, você precisará do [Node.js](https://nodejs.org/) instalado e de uma chave de API do Google Gemini.

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/jose-eduardo-00/cardapio-magico.git

   cd simulador-entrevista

   Crie um arquivo .env na raiz do projeto e adicione a sua chave de API do Gemini:

   VITE_GEMINI_API_KEY=sua_chave_de_api_aqui

   Inicie o servidor de desenvolvimento:
   npm run dev
   ou
   yarn dev
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configuração das Variáveis de Ambiente:**

   ```bash
   Crie um arquivo .env na raiz do projeto e adicione a sua chave de API do Gemini:

   VITE_GEMINI_API_KEY=sua_chave_de_api_aqui
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

## Imagem do projeto
