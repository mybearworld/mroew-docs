---
title: Operators
description: Explanation of the concept of operators in Mröw.
---

Operators represent Scratch's reporters. They can be passed into blocks. In contrast to Gleam's primitive types, they are not type checked, as Scratch doesn't do it either, which would lead to certain incompatibilities with Scratch.

## Using primitives as operators

Every type in Mröw must be exactly one thing. Therefore, you can't just use regular types like `"foo"` or `False`. Instead, you can use these functions from `mroew/blocks/ops`:

```rs
// src/my_project.gleam
ops.int(1)
ops.float(7.5)
ops.string("Hi!")
ops.bool(True)
```

## Creating more complex operators

Operators can also contain other operators within them. To do that, you can simply pass an operator to an operator function. For example:

```rs {3}
// src/my_project.gleam
ops.string("Hello, ")
|> ops.join(ops.string("world!"))
```

Of course, you also always have the option of passing the operators in without pipes. Which one you use is a matter of preference and complexity of the operators.

```rs
// src/my_project.gleam
ops.join(ops.string("Hello,"), ops.string("world!"))
```
