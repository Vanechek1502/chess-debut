export type Color = "w" | "b";
export type Mode = "learn" | "practice" | "analyze";

export interface MoveComment {
  san: string;
  fen: string;
  idea: string;
  purpose: string;
  plan: string;
  opponentResponse: string;
  arrows?: { from: string; to: string; color: "green" | "red" | "yellow" }[];
  highlights?: string[];
}

export interface OpeningBranch {
  id: string;
  name: string;
  moves: string[]; // SAN moves from starting position
  comments: MoveComment[];
  plans: { white: string; black: string };
  typicalErrors: string[];
  furtherPlay: string;
}

export interface Opening {
  id: string;
  name: string;
  variant: string;
  eco?: string;
  description: string;
  startMoves: string[]; // SAN moves to reach the opening position
  startFen: string;
  colorToStudy: Color; // which side the user studies
  branches: OpeningBranch[];
  source?: string;
}

export interface UserProgress {
  completedBranches: Record<string, boolean>; // branchId -> true
  trainingResults: Record<string, { correct: number; wrong: number; hints: number }>;
  errorPositions: Record<string, { fen: string; openingId: string; branchId: string; count: number }>;
  boardSettings: { orientation: Color; theme: "light" | "dark" };
  lastOpened: { openingId: string; branchId: string; moveIndex: number };
}

export interface TrainingSession {
  openingId: string;
  branchId: string;
  color: Color;
  type: "hints" | "memory" | "random";
  correct: number;
  wrong: number;
  hintsUsed: number;
  completed: boolean;
  currentMoveIndex: number;
}