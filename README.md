# Repro of https://github.com/lucacasonato/fresh/issues/148

navigate to `/` and `no-island` page and compare behavior

# fresh project

### Usage

Start the project:

```
deno run -A --watch main.ts
```

After adding, removing, or moving a page in the `routes` or directory, or
adding, removing, or moving an island in the `islands` directory, run:

```
fresh manifest
```
