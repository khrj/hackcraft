/**
 * Global Controls
 * ===============
 * 
 * a to move left
 * d to move right
 * w to jump
 * hold s to clear map
 * 
 * Normal Mode
 * ===========
 * 
 * k to place block (to right if on ground, below if in air)
 * l to mine block (first which exists in this order: right, below, left, above)
 * 
 * s to enable mine mode
 * i to enable inventory mode
 * j to enable build mode
 
 * 
 * Mine mode and build mode
 * ========================
 * 
 * i to place/break top
 * l to place/break right
 * j to place/break left
 * k to place/break bottom
 * s to exit mode
 * 
 * Inventory mode
 * ==============
 * 
 * j to go left
 * l to go right
 * s to exit mode
 * 
 */

import { bitmaps } from "./bitmaps"
import { Blocks } from "./blocks"
import { Inventory } from "./inventory"
import { playerBottom, playerTop } from "./keys"
import { levels } from "./levels"
import { ModeController } from "./mode"
import { Player } from "./player"

// Bitmaps
setLegend(...bitmaps)

// Levels
let level = 0
const currentLevel = levels[level]
setMap(currentLevel)

// Player
const player = new Player(playerBottom, playerTop)
player.setupGravityAndAttachFallback()

// Inventory
const inventory = new Inventory()

// Modes and controls
const modeController = new ModeController()
modeController.handleControls(player, inventory)

setSolids([...player.solids, ...Blocks.all])
setPushables(player.pushables)
