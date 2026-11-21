import { useState } from "react";
import { useParams } from "react-router-dom";
import { Chess } from "chess.js";
import { OPENINGS_BY_ID } from "../data/openings";

export default function OpeningPage() {
  const { id } = useParams();
  const opening = OPENINGS_BY_ID[id as string];

  if (!opening) {
    return <div className="text-center py-20 text-gray-500">Дебют не найден</div>;
  }

  const [branchIndex, setBranchIndex] = useState(0);
  const [moveIndex, setMoveIndex] = useState(0);
  const [color, setColor] = useState<"w" | "b">("w");

  const branch = opening.branches[0];

  return (
    <div className="min-h-svh bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4 mb-6">
          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">← Назад</button>
          <h1 className="text-2xl font-bold">{opening.name}</h1>
          <span className="text-xs font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">{opening.eco}</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-5 border border-gray-700 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-bold text-lg">{opening.name}</h2>
                  <p className="text-xs text-gray-400">{opening.variant}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded text-xs bg-gray-700 text-white">Перевернуть доску</button>
                  <select className="bg-gray-700 text-white text-xs border-none rounded px-2 py-1 focus:outline-none">
                    <option value="w">Белые</option>
                    <option value="b">Чёрные</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center min-h-[400px]">
                <div className="w-full max-w-md aspect-square bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Доска будет здесь</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="text-gray-500">Ход: {opening.colorToStudy === "w" ? "Белые" : "Чёрные"}</span>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded text-xs bg-gray-700 text-white">В начало</button>
                  <button className="px-3 py-1 rounded text-xs bg-gray-700 text-white">Назад</button>
                  <button className="px-3 py-1 rounded text-xs bg-gray-700 text-white">Вперёд</button>
                  <button className="px-3 py-1 rounded text-xs bg-green-600 text-white">Авто</button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ходы</p>
              <div className="flex flex-wrap gap-2">
                {branch?.moves.map((move, i) => (
                  <button key={i} onClick={() => setMoveIndex(i + 1)} className="px-2 py-1 rounded text-xs border border-gray-600 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    {i + 1}. {move}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-5 border border-gray-700 dark:border-gray-800">
              <h3 className="font-bold text-lg mb-3">Идея дебюта</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{opening.description}</p>
            </div>
            <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-5 border border-gray-700 dark:border-gray-800">
              <h3 className="font-bold text-lg mb-3">Комментарий к ходу</h3>
              <p className="text-sm text-gray-400">Выберите ход для просмотра комментария</p>
            </div>
            <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-5 border border-gray-700 dark:border-gray-800">
              <h3 className="font-bold text-lg mb-3">Как играть дальше</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{branch?.furtherPlay || opening.description}</p>
            </div>
            <button className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
              Начать тренировку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}