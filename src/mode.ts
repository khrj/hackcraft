import { Blocks, Direction } from "./blocks"
import { Inventory } from "./inventory"
import { Player } from "./player"

enum Mode {
	Normal = "Normal",
	Inventory = "Inventory",
	Build = "Build",
	Mine = "Mine",
}

export class ModeController {
	mode = Mode.Normal

	setMode(mode: Mode) {
		clearText()

		if (mode !== Mode.Normal) {
			addText(`${mode} mode`, {
				y: 2,
				color: color`blue`,
			})
		}

		this.mode = mode
	}

	handleControls(player: Player, inventory: Inventory) {
		onInput("a", () => player.left())
		onInput("d", () => player.right())
		onInput("w", () => player.jump())

		onInput("k", () => {
			if (this.mode === Mode.Normal) Blocks.placeAuto(player, inventory.current)
			else if (this.mode === Mode.Build) Blocks.place(player, inventory.current, Direction.Below)
			else if (this.mode === Mode.Mine) Blocks.mine(player, Direction.Below)
		})

		onInput("l", () => {
			if (this.mode === Mode.Normal) Blocks.mineAuto(player)
			else if (this.mode === Mode.Build) Blocks.place(player, inventory.current, Direction.Right)
			else if (this.mode === Mode.Mine) Blocks.mine(player, Direction.Right)
			else if (this.mode === Mode.Inventory) inventory.next()
		})

		onInput("s", () => {
			if (this.mode === Mode.Normal) this.setMode(Mode.Mine)
			else this.setMode(Mode.Normal)
		})

		onInput("i", () => {
			if (this.mode === Mode.Normal) this.setMode(Mode.Inventory)
			else if (this.mode === Mode.Build) Blocks.place(player, inventory.current, Direction.Above)
			else if (this.mode === Mode.Mine) Blocks.mine(player, Direction.Above)
		})

		onInput("j", () => {
			if (this.mode === Mode.Normal) this.setMode(Mode.Build)
			else if (this.mode === Mode.Build) Blocks.place(player, inventory.current, Direction.Left)
			else if (this.mode === Mode.Mine) Blocks.mine(player, Direction.Left)
			else if (this.mode === Mode.Inventory) inventory.previous()
		})
	}
}
