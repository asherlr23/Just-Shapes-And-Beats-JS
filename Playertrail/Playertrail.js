/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Playertrail extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Playertrail/costumes/costume1.svg", {
        x: 3.9731299999999976,
        y: 3.95650999999998
      }),
      new Costume(
        "image_2022-05-20_145242368",
        "./Playertrail/costumes/image_2022-05-20_145242368.svg",
        { x: 164.5, y: 62 }
      )
    ];

    this.sounds = [new Sound("pop", "./Playertrail/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Loop" },
        this.whenIReceiveGameLoop
      )
    ];

    this.vars.particledirection = 90;
  }

  *startAsClone() {
    if (this.stage.vars.isplayerdashing == 1) {
      this.direction = this.vars.particledirection;
      this.direction -= this.random(-100, 100);
      this.costume = "costume1";
      this.size = 32;
      this.move(10);
      this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
      this.visible = true;
      for (let i = 0; i < 10; i++) {
        this.move(5);
        this.effects.ghost += 10;
        yield;
      }
      this.deleteThisClone();
    }
    this.direction = this.vars.particledirection;
    this.direction -= this.random(-50, 50);
    this.costume = "costume1";
    this.size = 32;
    this.move(10);
    this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.move(2);
      this.effects.ghost += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveGameLoop() {
    while (true) {
      this.size = 32;
      if (this.keyPressed("any")) {
        if (this.keyPressed("left arrow")) {
          this.vars.particledirection = 90;
        }
        if (this.keyPressed("right arrow")) {
          this.vars.particledirection = -90;
        }
        if (this.keyPressed("up arrow")) {
          this.vars.particledirection = 180;
        }
        if (this.keyPressed("down arrow")) {
          this.vars.particledirection = 0;
        }
        if (this.keyPressed("up arrow") && this.keyPressed("left arrow")) {
          this.vars.particledirection = 145;
        }
        if (this.keyPressed("up arrow") && this.keyPressed("right arrow")) {
          this.vars.particledirection = -145;
        }
        if (this.keyPressed("down arrow") && this.keyPressed("left arrow")) {
          this.vars.particledirection = 45;
        }
        if (this.keyPressed("down arrow") && this.keyPressed("right arrow")) {
          this.vars.particledirection = -45;
        }
      } else {
        this.vars.particledirection = 90;
      }
      yield;
    }
  }
}
