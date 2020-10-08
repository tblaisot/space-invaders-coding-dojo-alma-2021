import { Enemy } from './Enemy';
import { EnemyWave } from './EnemyWave';
import { Hero } from './Hero';
import { Missile } from './Missile';
import { detectCollision, isOutside, MoveableRectangle, Rectangle } from './Rectangle';

/*
 * width: 1200px;
 * height: 800px;
 */

const WIDTH = 1200;
const HEIGHT = 800;

const LEFT = 0;
const RIGHT = WIDTH;
const TOP = 0;
const BOTTOM = HEIGHT;

const HERO_START_LEFT = 575;
const HERO_START_TOP = 700;

const ENEMY_DEFAULT_POS = [
  { left: 200, top: 100 },
  { left: 300, top: 100 },
  { left: 400, top: 100 },
  { left: 500, top: 100 },
  { left: 600, top: 100 },
  { left: 700, top: 100 },
  { left: 800, top: 100 },
  { left: 900, top: 100 },
  { left: 200, top: 175 },
  { left: 300, top: 175 },
  { left: 400, top: 175 },
  { left: 500, top: 175 },
  { left: 600, top: 175 },
  { left: 700, top: 175 },
  { left: 800, top: 175 },
  { left: 900, top: 175 },
];


export class Game {
  hero: Hero;
  wave: EnemyWave;

  private playground = new Rectangle(0, 0, WIDTH, HEIGHT);
  private mobiles: MoveableRectangle[] = [];
  public score: number = 0;

  constructor() {
    this.hero = new Hero(
      this.registerMoveable.bind(this),
      HERO_START_LEFT,
      HERO_START_TOP,
    );
    this.wave = new EnemyWave(
      this.registerMoveable.bind(this),
      ENEMY_DEFAULT_POS.map(
        pos => new Enemy(
          this.registerMoveable.bind(this),
          pos.left,
          pos.top),
      ),
    );
  }

  private gameOver() {
    console.log('GAME OVER');
    (window.location as any).reload();
  }

  private registerMoveable(mobile: MoveableRectangle): void {
    this.mobiles.push(mobile);
  }

  /**
   * Cette fonction est apellée régulièrement par le moteur de jeu
   *
   * @param deltaTime temps passé en ms depuis le dernier appel de cette fonction
   */
  loop(deltaTime: number) {
    this.mobiles.forEach(m => m.move(deltaTime));
    this.collisionDetection();
    // TODO faire tirer des missiles a intervalle random par les ennemis
    // utiliser Math.random() pour un nombre entre 0 et 1
  }

  /**
   * Detection de collision
   */
  collisionDetection() {
    for (
      let enemyIndex = 0;
      enemyIndex < this.wave.enemies.length;
      enemyIndex++
    ) {
      for (
        let missileIndex = 0;
        missileIndex < this.hero.missiles.length;
        missileIndex++
      ) {
        // Detection de collision entre les missiles du heros et les ennemis
        if (
          detectCollision(
            this.hero.missiles[missileIndex],
            this.wave.enemies[enemyIndex],
          )
        ) {
          // such a bad idea :)
          this.wave.enemies.splice(enemyIndex, 1);
          this.hero.missiles.splice(missileIndex, 1);
          // TODO: ajouter des points au score pour la destruction d'un ennemi
        }
      }
      // TODO implémenter la detection de collision entre les ennemis et le hero
      // Utiliser this.gameOver() pour mettre fin a la partie

      // TODO: implementer la detection de collision entre le hero et les missiles ennemis
      // Utiliser this.gameOver() pour mettre fin a la partie
    }

    // TODO: implementer la detection d'un ennemi qiui atteint le bas de l'ecran
    // Utiliser this.gameOver() pour mettre fin a la partie

  }
}
