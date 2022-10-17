import kaboom from "kaboom"

// initialize context
kaboom()

loadSprite("bag", "/sprites/bag.png")
loadSprite("bean", "/sprites/bean.png")
loadSprite("bobo", "/sprites/bobo.png")
loadSprite("door", "/sprites/door.png")
loadSprite("ghosty", "/sprites/ghosty.png")
loadSprite("grass", "/sprites/grass.png")
loadSprite("key", "/sprites/key.png")
loadSprite("note", "/sprites/note.png")
loadSprite("steel", "/sprites/steel.png")

scene("main", (levelIdx) => {
  const levels = [
    [
      "=====|===",
      "=  a    =",
      "=       =",
      "=       =",
      "=    $  =",
      "=       =",
      "=   @   =",
      "========="
    ],
    [
      "---------",
      "- b     -",
      "-       -",
      "|       -",
      "-    $  -",
      "-       -",
      "- @     -",
      "---------"
    ],
    [
      "+++++++++",
      "+  c  @ +",
      "+       +",
      "+       +",
      "+       +",
      "+       +",
      "+ $     +",
      "++++++|++"
    ],
  ]

  addLevel(levels[levelIdx], {
    width: 64,
    height: 64,
    pos: vec2(64, 64),
    "=": () => [
      sprite("grass"),
      area(),
      solid(),
    ],
    "-": () => [
      sprite("steel"),
      area(),
      solid(),
    ],
    "+": () => [
      sprite("note"),
      area(),
      solid(),
    ],
    "$": () => [
      sprite("key"),
      area(),
      "key",
    ],
    "@": () => [
      sprite("bean"),
      area(),
      solid(),
      "player",
    ],
    "|": () => [
      sprite("door"),
      area(),
      solid(),
      "door",
    ],
    "a": () => [
      sprite("bag"),
      area(),
      solid(),
      "character",
      { msg: "go away!" },
    ],
    "b": () => [
      sprite("ghosty"),
      area(),
      solid(),
      "character",
      { msg: "boo" },
    ], 
    "c": () => [
      sprite("bobo"),
      area(),
      solid(),
      "character",
      { msg: "blub" },
    ],
  })

  const player = get("player")[0]

  const dialog = add([
    text(""),
  ])

  let hasKey = false

  player.onCollide("key", (key) => {
    destroy(key)
    hasKey = true
  })

  player.onCollide("door", () => {
    if (hasKey) {
      if (levelIdx + 1 < levels.length) {
        go("main", levelIdx + 1)
      } else {
        go ("win")
      }
    } else {
      dialog.text = "Get the key!"
    }
  })

  player.onCollide("character", (ch) => {
    dialog.text = ch.msg
  })    

  const dirs = {
    "left": LEFT,
    "right": RIGHT,
    "up": UP,
    "down": DOWN
  }

  for (const dir in dirs) {
    onKeyDown(dir, () => {
      dialog.text = ""
      player.move(dirs[dir].scale(320))
    })
  }
})

scene("win", () => {
  add([
    text("You win!"),
    pos(width() /2, height() / 2),
    origin("center"),
  ])
})

go("main", 0)