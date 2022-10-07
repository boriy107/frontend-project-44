#!/usr/bin/env node

import runPrime from '../src/index.js';
import { rules, game } from '../src/games/game-prime.js';

runPrime(rules, game);
