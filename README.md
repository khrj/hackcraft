<div align="center">
    <img src="assets/thumbnail.png" width="503" height="400" alt="image of hack craft with a tree built using wood and leaves and the player standing to the right">
    <h1>Hack Craft</h1>
    <p>
        <b>Voxel game written for <a href="https://sprig.hackclub.com/">sprig</a></b>
    </p>
    <br>
    <br>
    <br>
</div>

## Contents

-   [Controls](#controls)
-   [Development](#development)
-   [Template](#template)

## Controls

#### Global Controls

-   <kbd>a</kbd> to move left
-   <kbd>d</kbd> to move right
-   <kbd>w</kbd> to jump
-   Hold <kbd>s</kbd> to clear map

#### Normal Mode

-   <kbd>k</kbd> to place block (to right if on ground, below if in air)
-   <kbd>l</kbd> to mine block (first which exists in this order: right, below, left, above)
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

## Template

You can use [this
commit](https://github.com/khrj/hackcraft/tree/56243aaf0ed56be4ed689480a7603300c5419d0d)
as a generic template to use in your own sprig project. It adds the following
features to sprig:

-   TypeScript support (via tsc)
-   Multi-file support (via rollup)
-   Live reload (via serve, open, nodemon and sprig's watch param)
