#!/usr/bin/env node

import runGcd from '../src/index.js';
import { rules, game } from '../src/games/game-gcd.js';

runGcd(rules, game);
