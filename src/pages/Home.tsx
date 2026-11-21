import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Clock, AlertTriangle, Play } from "lucide-react";
import { OPENINGS_META } from "../data/openings";
import type { Opening } from "../types";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = OPENINGS_META.filter(o => {
    const matchesSearch = o.name.toLowerCase().includes(search.toLowerCase()) || o.variant.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || o.id.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-svh py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Шахматные дебюты</h1>
          <p className="mt-2 text-gray-500">Изучайте дебюты пошагово, тренируйтесь воспроизводить ходы и продолжайте партии с движком.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск дебюта..."
              className="pl-9 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-green-400 outline-none w-full"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="all">Все дебюты</option>
            {["e4", "d4", "c4", "Nf3"].map(f => (
              <option key={f} value={f}>Начинается с {f}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(opening => (
            <OpeningCard key={opening.id} opening={opening} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-12 text-gray-500">
              <AlertTriangle className="mx-auto h-8 w-8 mb-2" />
              <p>Дебюты не найдены</p>
            </div>
          )}
        </div>

        <div className="mt-12 p-6 bg-gray-800/50 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <Play className="h-5 w-5 text-green-400" />
            <h3 className="font-semibold">Как начать</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">• Выберите дебют из каталога ниже</li>
            <li className="flex items-center gap-2">• Изучайте основную линию с пояснениями к каждому ходу</li>
            <li className="flex items-center gap-2">• Тренируйтесь воспроизводить ходы с подсказками</li>
            <li className="flex items-center gap-2">• Продолжайте партию с движком из любой позиции</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function OpeningCard({ opening }: { opening: Opening }) {
  return (
    <Link to={`/opening/${opening.id}`} className="group block">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-400/50 hover:bg-gray-800/80 transition-all cursor-pointer">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">{opening.eco}</span>
          <span className="text-xs text-gray-500">{opening.startMoves.join(" ")}</span>
        </div>
        <h3 className="font-bold text-lg mb-2">{opening.name}</h3>
        <p className="text-sm text-gray-400 mb-3">{opening.variant}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{opening.description}</p>
        <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-700">
          <span className="text-xs text-gray-500">{opening.colorToStudy === "w" ? "Изучаем за белых" : "Изучаем за чёрных"}</span>
          <span className="text-xs text-green-400 font-medium">Открыть дебют →</span>
        </div>
      </div>
    </Link>
  );
}