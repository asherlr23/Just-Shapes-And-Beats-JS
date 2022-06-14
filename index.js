import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Playertrail from "./Playertrail/Playertrail.js";
import Playerdasheffect from "./Playerdasheffect/Playerdasheffect.js";
import Cursor from "./Cursor/Cursor.js";
import Destructiveitems from "./Destructiveitems/Destructiveitems.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: -87.86788218175522,
    y: 2.033857343301209,
    direction: 90,
    costumeNumber: 1,
    size: 70,
    visible: true
  }),
  Playertrail: new Playertrail({
    x: -145.6132039932271,
    y: 6.605886744845197,
    direction: 46,
    costumeNumber: 1,
    size: 63.1869995949335,
    visible: true
  }),
  Playerdasheffect: new Playerdasheffect({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Cursor: new Cursor({
    x: -151,
    y: -180,
    direction: -159.59999999999872,
    costumeNumber: 1,
    size: 60,
    visible: true
  }),
  Destructiveitems: new Destructiveitems({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
