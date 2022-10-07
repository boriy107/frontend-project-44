#!/usr/bin/env node

import runCalc from '../src/index.js';
import { rules, game } from '../src/games/game-calc.js';

runCalc(rules, game);
