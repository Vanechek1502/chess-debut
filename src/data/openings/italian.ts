import type { Opening } from "../../types";

export const italianGame: Opening = {
  id: "italian-game",
  name: "Итальянская партия",
  variant: "Классическая система (Главный вариант)",
  eco: "C50",
  description: "Белые быстро развивают слонов и готовят центральный прорыв d4, борясь за инициативу в центре.",
  startMoves: ["e4", "e5", "Nf3", "Nc6", "Bc4"],
  startFen: "r1bqkbnr/pppp1ppp/2n2q2/1b2p3/2B1P3/5N2/PPPP1PPP/RNBQK1R w Qkq - 4 4",
  colorToStudy: "w",
  branches: [
    {
      id: "italian-game-main",
      name: "Основная линия: 3...Bc5 4. c3 Nf6 5. d4",
      moves: ["Bc5", "c3", "Nf6", "d4"],
      comments: [
        { san: "Bc5", fen: "r1bqkbnr/pppp1ppp/2n2q2/1b2p3/2B1P3/5N2/PPPP1PPP/RNBQK1R w Qkq - 4 4", idea: "Чёрные развивают слона на активное поле и оспаривают центр.", purpose: "Развить слона и подготовить ...Nf6, оспаривая e4 и d5.", plan: "Развить коней, рокировать, возможно сыграть ...d5 для разменов в центре.", opponentResponse: "Белые обычно продолжают c3, готовя d4.", arrows: [{ from: "f8", to: "c5", color: "green" }], highlights: ["c5", "e4"] },
        { san: "c3", fen: "r1bqkbnr/pppp1ppp/2n2q2/1b2p3/2B1P3/5N2/PPPP1PPP/RNBQKNR1 b Qkq - 4 4", idea: "Белые готовят ход d4 для укрепления центра.", purpose: "Поддержать пешку d4 после d2-d4.", plan: "Сыграть d4, занять центр, развить коня на f3 и слоны.", opponentResponse: "Чёрные могут сыграть ...Nf6, атакуя e4, или ...d6.", arrows: [{ from: "c2", to: "c3", color: "green" }], highlights: ["c3", "d4"] },
        { san: "Nf6", fen: "r1bqkbnr/pppp1ppp/2n2q2/1b2p3/2B1P3/5N2/PPPP1PPP/RNBQKNR1 b Qkq - 4 4", idea: "Чёрные атакуют peшку e4 и готовят рокировку.", purpose: "Атаковать e4, защитить e5, создать угрозу ...Nxe4.", plan: "Развить коня, przygotовать рокировку, возможно сыграть ...d5.", opponentResponse: "Белые обычно играют d4, открывая линию для слона c4.", arrows: [{ from: "g8", to: "f6", color: "green" }], highlights: ["f6", "e4"] },
        { san: "d4", fen: "r1bqkbnr/pppp1ppp/2n2q2/1b2p3/2B1P3/5N2/PPPP1PPP/RNBQKNR1 b Qkq - 4 4", idea: "Белые occupuyют центр пешкой d4 и открывают диагональ для слона c4.", purpose: "Укрепить центр, атаковать e5, создать угрозу взятия на e5.", plan: "Развить фигуры, рокировать, создать атаку на короля чёрных.", opponentResponse: "Чёрные обычно берут ...exd4 или играют ...d5.", arrows: [{ from: "d2", to: "d4", color: "green" }], highlights: ["d4", "e5"] },
      ],
      plans: { white: "Занять центр d4, развить коня на f3, слоны на c4 и e3, рокировать корото и начать атаку.", black: "Развить фигуры, оспорить центр ...d5 или ...d6, рокировать, контратаковать на фланге." },
      typicalErrors: ["Ранний ...d5 без подготовки, приводящий к потере пешки", "Забыть защитить peшку e5"],
      furtherPlay: "После d4 белые стремятся к инициативе в центре. Чёрные могут выбрать ...exd4 (размен в центре) или ...d5 (контр в центре). Далее идут планы развития фигур и атаки на короля.",
    },
    {
      id: "italian-game-evans",
      name: "Гамбит Эванса: 4. b4",
      moves: ["Bc5", "b4"],
      comments: [
        { san: "Bc5", fen: "r1bqkbnr/pppp1ppp/2n2q2/1b2p3/2B1P3/5N2/PPPP1PPP/RNBQK1R w Qkq - 4 4", idea: "Чёрные ontwikkляют слона на c5.", purpose: "Атаковать f2 и оспаривать центр.", plan: "Развить коней, рокировать.", opponentResponse: "Белые могут сыграть gambit с b4.", highlights: ["c5"] },
        { san: "b4", fen: "r1bqkbnr/pppp1ppp/2n2q2/1b2p3/2B1P3/5N2/PPPP1PPP/RNBQKNR1 b Qkq - 4 4", idea: "Гамбит Эванса: белые жертвуют пешку для быстрого развития и атаки.", purpose: "Отвлечь слона c5, открыть линию b1-h7 для атаки.", plan: "Если bxc4, сыграть c3 и d4, получить мощное развитие и инициативу.", opponentResponse: "Чёрные могут взять bxc4 или отступить слоном.", arrows: [{ from: "b2", to: "b4", color: "green" }], highlights: ["b4", "c5"] },
      ],
      plans: { white: "Быстрое развитие, атака по диагонали b1-h7, инициатива на королевском фланге.", black: "Принять или отклонить гамбит, защититься, использовать лишнюю пешку в эндшпиле." },
      typicalErrors: ["Чёрные пытаются удержать лишнюю пешку и попадают под мат", "Белые не используют инициативу после гамбита"],
      furtherPlay: "Острые позиции с активной игрой белых на королевском фланге.",
    },
  ],
};