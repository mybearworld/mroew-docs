---
title: Blocks
description: Explanation of the concept and type of blocks in Mröw.
---

The `Blocks` type represents a Scratch script. It is a collection of `Block`s, as the name suggests. Every script starts with a hat block, and then has a list of regular blocks.

## Initiating a script

To initiate a script, you just call a function that returns one. These are most often of the pattern `on_*`.

```rs {4}
// src/my_project.gleam
sprite.sprite()
|> sprite.blocks(
  events.on_flag()
  |> ...,
)
```

## Adding blocks to a script

Just having a standalone hat block isn't particularly useful, so you an also add blocks onto a hat block. To do that, pipe the hat block into a block function. Block functions get in the current state of blocks and add their block to it:

```rs
// src/my_project.gleam
sprite.sprite()
|> sprite.blocks(
  events.on_flag()
  |> looks.hide(),
)
```

Some blocks also take in [operators](../operators) as parameters.

## Adding C-blocks to a script

When trying to use C blocks, you'll notice that you can't just put in the C blocks in as regular blocks, as that is ambiguous:

```rs {5-7}
// src/my_project.gleam
sprite.sprite()
|> sprite.blocks(
  events.on_flag()
  |> events.repeat(ops.int(5))
  |> motion.turn(ops.int(90)) // does the loop already end here?
  |> control.wait(ops.int(2)), // or does it end here?
)
```

Instead, a special function is used to group these blocks together. That function is `blocks.c` - which is used often enough that it warrants being imported standalone. `blocks.c` is treated as a normal block function - you can put other blocks before or after it.

```rs {2,7-11}
// src/my_project.gleam
import mroew/blocks.{c}

sprite.sprite()
|> sprite.blocks(
  events.on_flag()
  |> c(
    events.repeat(ops.int(5))
    |> motion.turn(ops.int(90))
    |> control.wait(ops.int(2)), // the loop ends here!
  ),
)
```

C blocks can take in operators as well.

:::caution
It is possible to use C-blocks as hat blocks at the moment. This will not behave as expected.
:::
