import { useParams } from "react-router-dom";
import { OPENINGS_BY_ID } from "../data/openings";

export default function PracticePage() {
  const { id } = useParams();
  const opening = OPENINGS_BY_ID[id as string];

  if (!opening) {
    return <div className="text-center py-20 text-gray-500">Дебют не найден</div>;
  }

  return (
    <div className="min-h-svh bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4 mb-6">
          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">← Назад</button>
          <h1 className="text-2xl font-bold">Тренировка: {opening.name}</h1>
        </div>
        <div className="text-center py-20 text-gray-500">
          <p>Режим тренировки будет здесь.</p>
        </div>
      </div>
    </div>
  );
}