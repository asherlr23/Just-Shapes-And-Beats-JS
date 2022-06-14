/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cursor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Cursor/costumes/costume1.svg", {
        x: 16.666453530995796,
        y: 15.411935798199835
      })
    ];

    this.sounds = [new Sound("pop", "./Cursor/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      this.costume = "costume1";
      this.direction -= 0.5;
      yield;
    }
  }
}
