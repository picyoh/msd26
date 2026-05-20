import { useStore } from "@nanostores/preact";
import { atom } from 'nanostore';

export const quizStarted = atom(false);
export const quizCompleted = atom(false);
export const results = atom([]);

