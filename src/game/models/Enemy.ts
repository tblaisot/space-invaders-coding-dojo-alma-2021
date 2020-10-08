import { Missile } from './Missile';
import { Rectangle } from './Rectangle';


export class Enemy extends Rectangle {
  static WIDTH = 50;
  static HEIGHT = 50;

  missiles: Missile[] = [];

  constructor(
    protected registerMoveable: (MoveableRectangle) => void,
    left: number,
    top: number,
  ) {
    super(left, top, Enemy.WIDTH, Enemy.HEIGHT);
  }

  private createMissile(): Missile {
    return new Missile(
      this.registerMoveable,
      this.left + (this.width / 2 - Missile.WIDTH),
      this.top + Missile.HEIGHT,
      Missile.VERTICAL_SPEED,
    );
  }

  fireMissile() {
    console.log('Ennemy fire missile');
    // TODO: implementer le lancement de missiles
    // il suffit d'ajouter un missile (crée via this.createMissile()) dans la liste this.missiles
  }
}
