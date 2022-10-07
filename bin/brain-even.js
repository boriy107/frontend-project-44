#!/usr/bin/env node

import runEven from '../src/index.js';
import { rules, game } from '../src/games/game-even.js';

runEven(rules, game);
