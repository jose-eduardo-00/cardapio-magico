import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

function App() {
  const [ingredientes, setIngredientes] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  async function gerarDescricao() {
    if (!ingredientes) return;

    setLoading(true);
    setResultado("");

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-3-flash-preview",
      });

      const prompt = `
        Aja como um Chef de Cozinha renomado.
        Crie uma descrição para vender este prato no cardápio.
        Dê 3 sugestões de nomes e descrições criativos para o prato.
        
        Ingredientes: ${ingredientes}

        Formato de resposta obrigatório (use Markdown):
        1. Comece com um **Nome Criativo para o Prato** em negrito.
        2. Pule uma linha.
        3. Escreva uma descrição apaixonante e sensorial (máx 3 linhas).
        4. No final, sugira uma bebida para acompanhar (ex: "Harmoniza com...").
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setResultado(text);
    } catch (error) {
      console.error("Erro ao chamar o Gemini:", error);
      setResultado(
        "Ops! Algo deu errado ao tentar criar a descrição. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-2">
          Cardápio Mágico 🍔
        </h1>
        <p className="text-slate-500 text-center mb-6">
          Descreva os ingredientes e deixe a IA vender seu prato.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Ingredientes do prato:
            </label>
            <textarea
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none resize-none h-32"
              placeholder="Ex: Pão brioche, blend de 180g, queijo gouda, cebola roxa, maionese de bacon..."
              value={ingredientes}
              onChange={(e) => setIngredientes(e.target.value)}
            />
          </div>

          <button
            onClick={gerarDescricao}
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Criando mágica..." : "Gerar Descrição ✨"}
          </button>
        </div>

        {resultado && (
          <div className="mt-6 bg-orange-50 p-6 rounded-xl border border-orange-100 shadow-sm">
            <div className="text-slate-700 leading-relaxed">
              <ReactMarkdown
                components={{
                  strong: ({ node, ...props }) => (
                    <span
                      className="font-bold text-orange-700 text-lg block mb-2"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mb-3 last:mb-0" {...props} />
                  ),
                }}
              >
                {resultado}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
