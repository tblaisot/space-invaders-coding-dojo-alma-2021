import { MoveableRectangle } from './Rectangle';
import { Missile } from './Missile';


export class Hero extends MoveableRectangle {
    static WIDTH = 50;
    static HEIGHT = 50;

    static MAX_VERTICAL_SPEED = 0;
    static MAX_HORIZONTAL_SPEED = 0.1;

    verticalSpeed = 0;
    horizontalSpeed = 0;

    missiles: Missile[] = [];

    constructor(protected registerMoveable: (MoveableRectangle) => void, left: number, top: number) {
        super(registerMoveable, left, top, Hero.WIDTH, Hero.HEIGHT)
    }


    accelerateLeft() {
        this.verticalSpeed = 0;
        this.horizontalSpeed = -Hero.MAX_HORIZONTAL_SPEED;
    }

    accelerateRight() {
        this.verticalSpeed = 0;
        this.horizontalSpeed = Hero.MAX_HORIZONTAL_SPEED;
    }

    stop() {
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
    }

    handleKeyDown(key: string) {
        if (key === 'ArrowLeft') {
            // Left
            this.accelerateLeft();
        }
        if (key === 'ArrowRight') {
            // Right
            this.accelerateRight();
        }
    }

    handleKeyUp(key: string) {
        if (key === 'ArrowLeft' || key === 'ArrowRight') {
            // Left
            this.stop();
        }
        if (key === ' ') {
            this.fireMissile()
        }
    }

    private fireMissile() {
        this.missiles.push(new Missile(this.registerMoveable, this.left + (this.width / 2 - Missile.WIDTH), this.top - Missile.HEIGHT))
    }
}
