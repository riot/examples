# Plunker

This is a tool to send code to Plunker.

## Use

Open the url like this:

```
http://riotjs.com/examples/plunker/?app=todo-app
```

To work with this tool, follow the example folder. The `plunker.json` file
looks like this:

```json
{
  "title": "Todo App",
  "files": [
    "index.html",
    "README.md",
    "todo.css",
    "todo.tag"
  ]
}
```

## Run locally

Install superstatic if you don't already have it.

```bash
$ npm install -g superstatic
```

Download or clone this repo, then run the command.

```bash
$ cd to/parent/dir
$ ss
```

Open the URL shown in your browser.
