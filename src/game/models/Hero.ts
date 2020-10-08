import { Missile } from './Missile';
import { MoveableRectangle } from './Rectangle';


export class Hero extends MoveableRectangle {
  static WIDTH = 50;
  static HEIGHT = 50;

  static MAX_VERTICAL_SPEED = 0.1;
  static MAX_HORIZONTAL_SPEED = 0.1;

  static MIN_LEFT = 100;
  static MAX_RIGHT = 1100;

  static MIN_TOP = 50;
  static MAX_BOTTOM = 800;

  verticalSpeed = 0;
  horizontalSpeed = 0;

  missiles: Missile[] = [];

  constructor(protected registerMoveable: (MoveableRectangle) => void, left: number, top: number) {
    super(registerMoveable, left, top, Hero.WIDTH, Hero.HEIGHT);
  }

  private createMissile(): Missile {
    return new Missile(
      this.registerMoveable,
      this.left + (this.width / 2 - Missile.WIDTH),
      this.top - Missile.HEIGHT,
    );
  }

  private accelerateLeft() {
    // FIXME: empecher le Hero de sortir de l'ecran
    this.verticalSpeed = 0;
    this.horizontalSpeed = -Hero.MAX_HORIZONTAL_SPEED;

  }

  private accelerateRight() {
    // FIXME: empecher le Hero de sortir de l'ecran
    this.verticalSpeed = 0;
    this.horizontalSpeed = Hero.MAX_HORIZONTAL_SPEED;
  }

  private accelerateDown() {
    // FIXME: empecher le Hero de sortir de l'ecran
    this.verticalSpeed = Hero.MAX_VERTICAL_SPEED;
    this.horizontalSpeed = 0;
  }

  private accelerateUp() {
    // FIXME: empecher le Hero de sortir de l'ecran
    this.verticalSpeed = -Hero.MAX_VERTICAL_SPEED;
    this.horizontalSpeed = 0;
  }

  private stop() {
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
    // TODO: implémenter les mouvements de haut en bas
    // les touches haut et bas on les codes respectifs ArrowUp et ArrowDown
  }

  handleKeyUp(key: string) {
    if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown') {
      // Directions relachées = stop
      this.stop();
    }
    if (key === ' ') {
      this.fireMissile();
    }
  }

  private fireMissile() {
    console.log('Hero fire missile');
    // TODO: implementer le lancement de missiles
    // il suffit d'ajouter un missile (crée via this.createMissile()) dans la liste this.missiles
  }
}
