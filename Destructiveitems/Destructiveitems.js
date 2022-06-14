/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Destructiveitems extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "pillar- thin",
        "./Destructiveitems/costumes/pillar- thin.svg",
        { x: 5.25525324324326, y: 189.18919 }
      ),
      new Costume("pillar", "./Destructiveitems/costumes/pillar.svg", {
        x: 12.012012012012036,
        y: 189.18918918918916
      }),
      new Costume("pillar2", "./Destructiveitems/costumes/pillar2.svg", {
        x: 12.012012012012036,
        y: 189.18918918918916
      })
    ];

    this.sounds = [new Sound("pop", "./Destructiveitems/sounds/pop.wav")];

    this.triggers = [];
  }
}
