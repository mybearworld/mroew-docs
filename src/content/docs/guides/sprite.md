---
title: Sprite
description: Explanation of the concept and type of Sprite in Mröw.
---

Sprites are the objects making up a [project](./project). Sprites have costumes, sounds, and most importantly blocks, which control their behavior. The built-in functions related to projects are in the `mroew/sprite` module.

## Style

Generally, sprites should be put into their own function. This is for two reasons.

1. It makes it very simple to follow along with the creation and exporting of the project, - you can easily see precisely which sprites get added or other functions get applied.
2. It allows sprites to have their own Gleam code to generate parts of the sprite. Even if you think you don't need this, when you do end up wanting this it's nice to be able to do it without much code changing its position.

That said, if you do think it makes more sense to put the sprite directly into the argument of another function, you are of course free to do so. An exception of this is when you are writing an extension for Mröw and have a function that just adds a sprite, for example.

```rs del={2-6} ins={8-14}
// src/my_project.gleam
project.project()
|> project.add_sprite(
  sprite.sprite("Sprite1")
  |> ...,
)

project.project()
|> project.add_sprite(sprite())

fn sprite() {
  sprite.sprite("Sprite1")
  |> ...
}
```

## Creating a sprite

You can create a sprite using the `sprite` function. This function gets in the name of the sprite to use. If the sprite is used as the stage, the name is ignored. For clarity, you can pass in `Stage`.

```rs {3}
// src/my_project.gleam
fn sprite() {
  sprite.sprite("Sprite1")
}
```

## Adding costumes

Costumes can be added using the `add_costume` function. It takes in the costume name, the costume path (relative to the current working directory), and the dimensions of the costume. It's recommended to put the assets into their own `/assets/` folder.

```rs {4}
// src/my_project.gleam
fn sprite() {
  sprite.sprite()
  |> sprite.add_costume("Blob", "./assets/blob.svg", 120, 150)
}
```

## Adding sounds

Sounds can be added using the `add_sound` function. It takes in the sound name and path.

```rs {4}
// src/my_project.gleam
fn sprite() {
  sprite.sprite()
  |> sprite.add_sound("Boing", "./assets/boing.wav")
}
```

## Defining local variables

If you want to use a variable that isn't shared by the whole project, you can use the `variable` function. It gets in a variable name. When that variable name is then used within this sprite, it will be local, not global.

```rs {4}
// src/my_project.gleam
fn sprite() {
  sprite.sprite()
  |> sprite.variable("my local variable")
}
```

## Adding a script

A script can be added to the sprite with the `blocks` function. It gets in a set of [blocks](./blocks). For better readability, these should be after the properties above.

:::tip
When multiple scripts are added, they're going to appear over each other, because Mröw can't know how wide or tall your scripts are going to be. You can use the Clean Up button in the right-click menu on Scratch to make the scripts appear properly.
:::

```rs {5-8}
// src/my_project.gleam
fn sprite() {
  sprite.sprite()
  |> sprite.add_costume("Blob", "./assets/blob.svg", 120, 150)
  |> sprite.blocks(
    events.on_flag()
    |> looks.say_timed(ops.string("Hello, world!"), ops.int(2))
  )
}
```
