import { black_wool, dirt, leaves, log, plank, red_wool, sand, stone, white_wool } from "./keys"
import { Player } from "./player"

export enum Direction {
	Above,
	Below,
	Left,
	Right,
}

export class Blocks {
	static all: string[] = [dirt, stone, plank, sand, log, leaves, white_wool, red_wool, black_wool]

	static placeAuto(player: Player, block: Key) {
		if (player.isGrounded()) {
			this.place(player, block, Direction.Right)
		} else {
			this.place(player, block, Direction.Below)
		}
	}

	static place(player: Player, block: Key, direction: Direction) {
		const { x, y } = player.bottomSprite

		if (direction === Direction.Right) addSprite(x + 1, y, block)
		else if (direction === Direction.Below) addSprite(x, y + 1, block)
		else if (direction === Direction.Above) addSprite(x, y - 2, block)
		else if (direction === Direction.Left) addSprite(x - 1, y, block)
	}

	static mineAuto(player: Player) {
		if (this.existsBlock(player, Direction.Right)) this.mine(player, Direction.Right)
		else if (this.existsBlock(player, Direction.Below)) this.mine(player, Direction.Below)
		else if (this.existsBlock(player, Direction.Left)) this.mine(player, Direction.Left)
		else if (this.existsBlock(player, Direction.Above)) this.mine(player, Direction.Above)
	}

	static mine(player: Player, direction: Direction) {
		const { x, y } = player.bottomSprite

		if (direction === Direction.Right) clearTile(x + 1, y)
		else if (direction === Direction.Below) clearTile(x, y + 1)
		else if (direction === Direction.Above) clearTile(x, y - 2)
		else if (direction === Direction.Left) clearTile(x - 1, y)
	}

	static existsBlock(player: Player, direction: Direction) {
		const { x, y } = player.bottomSprite

		if (direction === Direction.Right) return getTile(x + 1, y).length !== 0
		else if (direction === Direction.Below) return getTile(x, y + 1).length !== 0
		else if (direction === Direction.Above) return getTile(x, y - 2).length !== 0
		else if (direction === Direction.Left) return getTile(x - 1, y).length !== 0
	}
}
