import { Enemy } from './Enemy';
import { MoveableRectangle } from './Rectangle';

export class EnemyWave extends MoveableRectangle {

  static HORIZONTAL_SPEED = 0.08;
  static VERTICAL_SPEED = 0.08;

  static MIN_LEFT = 100;
  static MAX_RIGHT = 1100;

  static MAX_DELTA_TIME_DOWN = 1000;

  horizontalSpeed = EnemyWave.HORIZONTAL_SPEED;
  verticalSpeed = 0;
  delta = 0;

  constructor(
    protected registerMoveable: (MoveableRectangle) => void,
    public enemies: Enemy[],
  ) {
    super(registerMoveable, 0, 0, 0, 0);
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
    return this.bottom - this.top;
  }

  get width() {
    return this.right - this.left;
  }

  offset(left: number, top: number) {
    this.enemies.forEach(e => e.offset(left, top));
  }

  private goDown() {
    this.verticalSpeed = EnemyWave.VERTICAL_SPEED;
    this.horizontalSpeed = 0;
  }

  private goLeft() {
    this.verticalSpeed = 0;
    this.horizontalSpeed = -EnemyWave.HORIZONTAL_SPEED;
  }

  private goRight() {
    this.verticalSpeed = 0;
    this.horizontalSpeed = -EnemyWave.HORIZONTAL_SPEED;
  }

  private isGoingRight(): boolean {
    return this.horizontalSpeed >= 0;
  }

  private isGoingLeft(): boolean {
    return this.horizontalSpeed <= 0;
  }

  move(deltaTime: number) {

    // TODO: implémenter le mouvement typique des space invaders:
    // - glisser de gauche a droite (this.isGoingRight() == true)
    // - une fois atteint le bord de l'ecran (this.right > EnemyWave.MAX_RIGHT)
    // descendre durant 1 seconde (this.delta >= EnemyWave.MAX_DELTA_TIME_DOWN)
    // - glisser de droite a gauche (this.isGoingLeft() == true)
    // - une fois atteint le bord de l'ecran (this.left < EnemyWave.MIN_LEFT)
    // descendre durant 1 seconde (this.delta >= EnemyWave.MAX_DELTA_TIME_DOWN)
    // - glisser de gauche a droite (this.isGoingRight() == true)
    // - etc...
    // ---
    // la variable this.delta vous permet de mesurer le temps passé a descendre
    // (this.delta += deltaTime;)

    this.offset(this.horizontalSpeed * deltaTime, this.verticalSpeed * deltaTime);
  }
}

