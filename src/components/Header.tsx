import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Chess, BookOpen, ShieldCheck } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-green-400 text-gray-900 font-bold text-sm">
              ♔
            </div>
            <div>
              <div className="font-bold text-lg tracking-tight">Дебютная лаборатория</div>
              <div className="text-xs text-gray-400">Шахматный тренажер дебютов</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors" aria-label="Сменить тему">
              <Moon className="h-5 w-5 hidden" />
              <Sun className="h-5 w-5 hidden" />
            </button>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#" className="text-gray-300 hover:text-white">Каталог</a>
              <a href="#" className="text-gray-300 hover:text-white">Тренировка</a>
              <a href="#" className="text-gray-300 hover:text-white">Практика</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}