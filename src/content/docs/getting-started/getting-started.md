---
title: Getting started
description: Instructions on creating a project with Mröw.
---

Mröw is a library to make Scratch projects for Gleam. This guide will tell you how to get started with a Gleam project using Mröw.

## Creating the project

Make sure you have Gleam and Node.js installed. Then, go to your console and create a Gleam project:

```sh
gleam new my_project
cd my_project
```

This will make Gleam set up your basic project structure. It will also add testing prerequisites, which are unnecessary for a Mröw project. You can go ahead and delete the `.github` and `test` folders. You can also delete Gleam's testing library:

```sh
gleam remove gleeunit
```

Now we'll install Mröw. Mröw isn't uploaded on [Hex](https://hex.pm), the package manager Gleam uses. Therefore, you'll have to do a bit of a workaround. Run the following command in your console:

```sh
git submodule add https://github.com/mybearworld/mroew.git
```

Adding Mröw as a submodule like this embeds Mröw into your project as a folder. Git won't upload that folder verbatim, it'll just track which commit of the original Mröw repo the folder is on. To any other tools though, including Gleam, it's just a normal folder. Add the following line to your dependencies in `gleam.toml`:

```diff
# gleam.toml
[dependencies]
gleam_stdlib = "~> 0.34 or ~> 1.0"
+mroew = { path = "./mroew" }
```

Also in `gleam.toml`, set the target to JavaScript:

```diff
# gleam.toml
name = "my_project"
version = "1.0.0"
+target = "javascript"
```

And you're good to go! You can add the basic Mröw structure to the `src/my_project.gleam` file to try it out:

```rs
// src/my_project.gleam
import mroew/project
import mroew/sprite

pub fn main() {
  project.project(stage())
  |> project.export("project.sb3")
}

fn stage() {
  sprite.sprite("Stage")
  |> sprite.costume("Blank", "./assets/blank.svg", 0, 0)
}
```

Also add <a href="/blank.svg" download>a blank SVG file</a> at `assets/blank.svg`. Now, you can try running the project:

```sh
gleam run
```

And if all goes well, you should have a working Scratch project at `project.sb3`! You probably don't want to commit it, though, so add it to your `.gitignore`:

```diff
# .gitignore
*.beam
*.ez
/build
erl_crash.dump
+*.sb3
```

Congrats! You have just created a Mröw project. There should be links to further documentation here, but none currently exists.

## Updating Mröw

Because Mröw is not installed as a regular package, updating it also doesn't work like with a regular dependency. But it is not complicated, either - simply run the following command to update the Mröw submodule:

```sh
git submodule update
```
