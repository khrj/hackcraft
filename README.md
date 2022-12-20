# Hack Craft

Voxel game written for sprig: https://sprig.hackclub.com/

## Controls

#### Global Controls

-   <kbd>a</kbd> to move left
-   <kbd>d</kbd> to move right
-   <kbd>w</kbd> to jump

#### Normal Mode

-   <kbd>k</kbd> to place block (to right if on ground, below if in air)
-   <kbd>l</kbd> to mine block (first which exist in this order: right, below, left, above)
-   <kbd>s</kbd> to enable mine mode
-   <kbd>i</kbd> to enable inventory mode
-   <kbd>j</kbd> to enable build mode

#### Mine mode and build mode

-   <kbd>i</kbd> to place/break top
-   <kbd>l</kbd> to place/break right
-   <kbd>j</kbd> to place/break left
-   <kbd>k</kbd> to place/break bottom
-   <kbd>s</kbd> to exit mode

#### Inventory mode

-   <kbd>j</kbd> to go left
-   <kbd>l</kbd> to go right
-   <kbd>s</kbd> to exit mode

## Development

Install [nodejs](https://nodejs.org/) and use [npm](https://www.npmjs.com/) to run scripts, like so:

```sh
npm run script-name
```

The following scripts are available

-   `compile` - Compiles typescript to javascript
-   `rollup` - Bundles javascript into one file
-   `serve` - Serves bundled javascript over http
-   `open` - Opens created javascript in the sprig editor. The editor will
    automatically reload and run your changes
-   `watch` - Watches and rebuilds javascript on changes
-   `dev` - Runs the server and opens the editor, while also watching for changes

In most cases, you will just need to run

```sh
npm run dev
```
