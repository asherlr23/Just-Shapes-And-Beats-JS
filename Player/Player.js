/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("normal", "./Player/costumes/normal.svg", {
        x: 7.906253077455233,
        y: 7.87318252064577
      }),
      new Costume("stretch", "./Player/costumes/stretch.svg", {
        x: 12.58017000000001,
        y: 7.923125000000027
      }),
      new Costume("dash-1", "./Player/costumes/dash-1.svg", {
        x: 23.82756072608325,
        y: 8.073118587825434
      }),
      new Costume("dash-2", "./Player/costumes/dash-2.svg", {
        x: 19.92846503739463,
        y: 7.923154809130551
      }),
      new Costume("dash-3", "./Player/costumes/dash-3.svg", {
        x: 12.580170647397324,
        y: 7.923145000000005
      }),
      new Costume("dash-4", "./Player/costumes/dash-4.svg", {
        x: 7.95624583891626,
        y: 7.873165000000029
      }),
      new Costume("healthOverlay-3", "./Player/costumes/healthOverlay-3.svg", {
        x: 7.956234999999992,
        y: 7.873155000000025
      }),
      new Costume("healthOverlay-2", "./Player/costumes/healthOverlay-2.svg", {
        x: 8.156244999999984,
        y: 7.87317500000006
      }),
      new Costume("healthOverlay-1", "./Player/costumes/healthOverlay-1.svg", {
        x: 7.890105967741931,
        y: 7.873175000000089
      })
    ];

    this.sounds = [new Sound("Meow", "./Player/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Loop" },
        this.whenIReceiveGameLoop
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "dash" }, this.whenIReceiveDash),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "dash" }, this.whenIReceiveDash2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Loop" },
        this.whenIReceiveGameLoop2
      )
    ];

    this.vars.dashing = 0;
  }

  *whenIReceiveGameLoop() {
    this.stage.vars.health = 3;

       while (true) {

        if (this.touching("DestructiveItems")){

         this.stage.vars.health += -1;
          if (this.stage.vars.health == 0 ){
          this.broadcast("dead")
          }
        }
          yield;
       }

  }

  *whenIReceiveGameLoop() {
    while (true) {
      if (this.keyPressed("any")) {
        if (this.keyPressed("left arrow")) {
          this.stage.vars.bulletdir = -90;
        }
        if (this.keyPressed("right arrow")) {
          this.stage.vars.bulletdir = 90;
        }
        if (this.keyPressed("up arrow")) {
          this.stage.vars.bulletdir = 0;
        }
        if (this.keyPressed("down arrow")) {
          this.stage.vars.bulletdir = 180;
        }
        if (this.keyPressed("up arrow") && this.keyPressed("left arrow")) {
          this.stage.vars.bulletdir = -45;
        }
        if (this.keyPressed("up arrow") && this.keyPressed("right arrow")) {
          this.stage.vars.bulletdir = 45;
        }
        if (this.keyPressed("down arrow") && this.keyPressed("left arrow")) {
          this.stage.vars.bulletdir = -145;
        }
        if (this.keyPressed("down arrow") && this.keyPressed("right arrow")) {
          this.stage.vars.bulletdir = 145;
        }
      } else {
        this.stage.vars.bulletdir = 90;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "normal";
    this.broadcast("Game Loop");
    while (true) {
      this.size = 70;
      this.costume = "normal";
      this.direction = this.stage.vars.bulletdir;
      if (
        this.keyPressed("left arrow") ||
        this.keyPressed("right arrow") ||
        this.keyPressed("up arrow") || this.keyPressed("down arrow")
      ) {
        this.move(5);
        if (!(this.vars.dashing == 1)) {
          this.costume = "stretch";
        }
      }
      yield;
    }
  }

  *whenIReceiveDash() {
    this.sprites["Playerdasheffect"].createClone();
    this.vars.dashing = 1;
    this.costume = "dash-1";
    for (let i = 0; i < 3; i++) {
      this.move(80 / 3);
      this.costumeNumber += 1;
      yield;
    }
    this.costume = "normal";
    this.vars.dashing = 0;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("space")) {
        this.broadcast("dash");
        while (!!this.keyPressed("space")) {
          yield;
        }
        yield* this.wait(0.2);
      }
      yield;
    }
  }

  *whenIReceiveDash2() {
    for (let i = 0; i < 10; i++) {
      this.sprites["Playertrail"].createClone();
      yield;
    }
  }

  *whenIReceiveGameLoop2() {
    while (true) {
      this.stage.vars.isplayerdashing = this.vars.dashing;
      if (
        this.keyPressed("left arrow") ||
        this.keyPressed("right arrow") ||
        this.keyPressed("up arrow") || this.keyPressed("down arrow")
      ) {
        this.sprites["Playertrail"].createClone();
      }
      yield;
    }
  }
}
