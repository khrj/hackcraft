import { black_wool, dirt, leaves, log, plank, red_wool, sand, stone, white_wool } from "./keys"

export const selectedKeys: Record<Key, Key> = {
	[dirt]: "1",
	[stone]: "2",
	[plank]: "3",
	[sand]: "4",
	[log]: "5",
	[leaves]: "6",
	[white_wool]: "7",
	[red_wool]: "8",
	[black_wool]: "9",
}

const slotDefaults = [dirt, stone, plank, sand, log, leaves, white_wool, red_wool, black_wool]

export class Inventory {
	selection: number = 0

	get current() {
		return slotDefaults[this.selection]
	}

	next() {
		if (this.selection < 8) {
			this.unhighlight(this.selection)
			this.selection++
			this.highlight(this.selection)
		}
	}

	previous() {
		if (this.selection > 0) {
			this.unhighlight(this.selection)
			this.selection--
			this.highlight(this.selection)
		}
	}

	private highlight(slot: number) {
		clearTile(slot + 2, 0)
		addSprite(slot + 2, 0, selectedKeys[slotDefaults[slot]])
	}

	private unhighlight(slot: number) {
		clearTile(slot + 2, 0)
		addSprite(slot + 2, 0, slotDefaults[slot])
	}
}
