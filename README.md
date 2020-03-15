# Link Keeper server

The Netlify serverless server functions go here.

## Connecting this Site with Netlify ##

Use `netlify init` to connect the github repo to netlify, so it will automatically build and deploy.


## Course Section ##

[What is a serverless function?](https://frontendmasters.com/courses/jamstack/what-is-a-serverless-function/ "Jason Lengstorf on Frontend Masters")

There are still servers, they just belong to someone else.

Netlify provides a pretty simple way to implement it. There's others. This is the one he uses.

[Create and run a serverless function](https://frontendmasters.com/courses/jamstack/create-run-a-serverless-function/)

Creating the hello world

  * `functions/hello.js` - the `handler` async function
  * `netlify.toml` info to tell netlify what's up

Starting up the netlify dev server seems to require the directory to be specified:

``` shell
$ netlify dev -d . # to run in the current directory
```

This wasn't necessary in the workshop, but seems to be here. Wonder what the differnce is? It took me several hours to suss it out, finally by looking at the netlify cli code.

Visiting the function at <http://localhost:8888/.netlify/functions/hello> and *voila* - i see the output I wrote in `functions/hello.js` -- [ gratifying :smile: ]


## Secrets ##

I don't want to save my API keys and other credentials in the repo. But they need to be available somehow to the service.

Initially, I'm setting up the dev environment using the `dotenv` library which reads a `$PROJECT_ROOT/.env` file. I slapped a `.env.EXAMPLE` in the root of the server. There will probably be one for the client, but okay for now.
