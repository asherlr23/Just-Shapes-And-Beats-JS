/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Playerdasheffect extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Playerdasheffect/costumes/costume1.svg", {
        x: 9.392857142857139,
        y: 9.571428571428555
      })
    ];

    this.sounds = [new Sound("pop", "./Playerdasheffect/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *startAsClone() {
    /* TODO: Implement looks_gotofrontback */ null;
    /* TODO: Implement looks_goforwardbackwardlayers */ null;
    this.size = 1;
    this.effects.ghost = 0;
    this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
    this.visible = true;
    for (let i = 0; i < 5; i++) {
      this.effects.ghost += 20;
      this.size += 50;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
