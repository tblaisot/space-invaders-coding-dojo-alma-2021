import { Rectangle } from './Rectangle';


export class Enemy extends Rectangle {
    static WIDTH = 50;
    static HEIGHT = 50;

    constructor(left: number, top: number) {
        super(left, top, Enemy.WIDTH, Enemy.HEIGHT)
    }

}
