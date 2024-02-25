---
title: Project
description: Explanation of the concept and type of Project in Mröw.
---

`Project` is the main way of interacting with Mröw. It bundles together all the sprites and it is the type that gets exported as an `.sb3` file at the end. The built-in functions related to projects are in the `mroew/project` module.

## Creating a project

To create a project, use the `project` function. It gets in the stage as a parameter. The stage is just a simple [sprite](./sprite.md), so you can create a sprite and pass it in here. The name of the sprite gets ignored, and is always set to "Stage".

```rs
// src/my_project.gleam
project.project(stage())

fn stage() {
  sprite.sprite()
  |> sprite.add_costume("Blank", "assets/blank.svg", 0, 0)
}
``
```

## Adding a sprite

By default, the only sprite the project has is the stage. If you want to add an additional sprite to your project, you can use the `add_sprite` function.

```rs
// src/my_project.gleam

project.project(stage())
|> project.add_sprite(sprite())

fn stage() {
  // ...
}

fn sprite() {
  sprite.sprite()
  |> sprite.add_costume("Blob", "assets/blob.svg", 100, 150)
}
```

## Exporting a project

After the project is finished, you probably want to export it as an .sb3 file in order to upload it to Scratch. This is done with the `export` function. It gets in the file name the project should be exported to.

:::tip
Scratch uses the file name of the .sb3 file to generate a project title. If you set your file name to `Project title.sb3`, your title won't get overwritten by Scratch.
:::

```rs
// src/my_project.gleam
project.project(stage())
|> project.export("project.sb3")

fn stage() {
  // ...
}
```
