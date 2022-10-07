#!/usr/bin/env node

import runProgression from '../src/index.js';
import { rules, game } from '../src/games/game-progression.js';

runProgression(rules, game);
