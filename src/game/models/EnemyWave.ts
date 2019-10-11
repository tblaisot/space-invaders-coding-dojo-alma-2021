import { Enemy } from './Enemy';
import { MoveableRectangle } from './Rectangle';

export class EnemyWave extends MoveableRectangle {
    verticalSpeed = 0.1;
    horizontalSpeed = 0;

    constructor(protected registerMoveable: (MoveableRectangle) => void, public enemies: Enemy[]) {
        super(registerMoveable, 0, 0, 0, 0)
    }

    get top() {
        return Math.min(...this.enemies.map(e => e.top));
    }

    get left() {
        return Math.min(...this.enemies.map(e => e.left));
    }

    get right() {
        return Math.max(...this.enemies.map(e => e.right));
    }

    get bottom() {
        return Math.max(...this.enemies.map(e => e.bottom));
    }

    get height() {
        return this.bottom - this.top
    }

    get width() {
        return this.right - this.left
    }

    offset(left: number, top: number) {
        this.enemies.forEach(e => e.offset(left, top));
    }

    move(deltaTime: number) {
        this.offset(this.horizontalSpeed * deltaTime, this.verticalSpeed * deltaTime);
    }
}

