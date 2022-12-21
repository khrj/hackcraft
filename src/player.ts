export class Player {
	bottom: Key
	top: Key
	bottomSprite: Sprite
	topSprite: Sprite

	get solids() {
		return [this.top, this.bottom]
	}

	get pushables() {
		return {
			[this.bottom]: [this.top],
		}
	}

	constructor(bottom: Key, top: Key) {
		this.bottom = bottom
		this.top = top
		this.bottomSprite = getFirst(bottom)
		this.topSprite = getFirst(top)
	}

	right() {
		if (this.isRightEmpty()) {
			this.topSprite.x++
			this.bottomSprite.x++
		}
	}

	left() {
		if (this.isLeftEmpty()) {
			this.topSprite.x--
			this.bottomSprite.x--
		}
	}

	jump() {
		if (this.isGrounded()) {
			this.topSprite.y--
			this.bottomSprite.y--
		}
	}

	fall(drop: number) {
		this.bottomSprite.y += drop
		this.topSprite.y += drop
	}

	fallVelocity: number = 0

	setupGravityAndAttachFallback() {
		setInterval(() => {
			if (!this.isGrounded()) {
				this.fallVelocity += 0.2
			} else {
				this.fallVelocity = 0
			}
		}, 100)

		setInterval(() => {
			const drop = Math.floor(this.fallVelocity)
			this.fall(drop)
		}, 100)

		// Recover from detachment
		setInterval(() => {
			if (this.topSprite.y !== this.bottomSprite.y - 1 || this.topSprite.x !== this.bottomSprite.x) {
				this.topSprite.y = this.bottomSprite.y - 1
				this.topSprite.x = this.bottomSprite.x
			}
		}, 1000)
	}

	isGrounded() {
		const originalY = this.bottomSprite.y
		this.bottomSprite.y++

		// If collision with a solid, y won't change
		if (this.bottomSprite.y === originalY) {
			return true
		} else {
			// Otherwise, reset y
			this.bottomSprite.y--
			return false
		}
	}

	isRightEmpty() {
		const bottomOriginalX = this.bottomSprite.x
		const topOriginalX = this.topSprite.x

		this.bottomSprite.x++
		this.topSprite.x++

		let result = false

		if (bottomOriginalX + 1 === this.bottomSprite.x && topOriginalX + 1 === this.topSprite.x) result = true

		this.bottomSprite.x = bottomOriginalX
		this.topSprite.x = topOriginalX

		return result
	}

	isLeftEmpty() {
		const bottomOriginalX = this.bottomSprite.x
		const topOriginalX = this.topSprite.x

		this.bottomSprite.x--
		this.topSprite.x--

		let result = false

		if (bottomOriginalX - 1 === this.bottomSprite.x && topOriginalX - 1 === this.topSprite.x) result = true

		this.bottomSprite.x = bottomOriginalX
		this.topSprite.x = topOriginalX

		return result
	}

	spawn() {
		addSprite(1, height() - 1, this.bottom)
		addSprite(1, height() - 2, this.top)
		this.bottomSprite = getFirst(this.bottom)
		this.topSprite = getFirst(this.top)
	}
}
