# RPS Starter Kit

## Description
A starter pack for rock paper scissors bots

## Guide
Each bot should be a js class that has a function `makeMove(gamestate)` and should use `module.exports = `{the name of your bot class}`;` - as shown in rockBot.js

Each round your bots makeMove function will be called with an array of the previous rounds as follows:
> for round 1: gamestate = `[]`
>
> for round 2: gamestate = `[ { p1 : 'R', p2 : 'S' } ]`
>
> for round 3: gamestate = `[ { p1 : 'R', p2 : 'S' }, { p1 : 'T', p2 : 'P' } ]`
>
> etc...

Available moves are:
>Rock = "R"
>
>Paper = "P"
>
>Scissors = "S"
>
>TNT = "T"
>
>Water = "W"

If you return anything other than these moves an error will be thrown for you and you will lose that game.

You start with 100 TNTs & if you try to use TNT when you have none left an error will be thrown for you and you will lose that game.

Each round is worth 1 point but if you draw on a round eg. `{ p1 : 'R', p2 : 'R' }` the round worth will increase by 1 until a round is won, at which point the round worth will be set back to 1.

Each round will be decided using the following rules:
> `Rock` > `Scissors`
>
> `Scissors` > `Paper`
>
> `Paper` > `Rock`
>
> --- 
>
> `TNT` > [ `Rock` || `Paper` || `Scissors` ]
>
> [ `Rock` || `Paper` || `Scissors` ] > `Water`
>
> `Water` > `TNT`

You will always be `p1` in the `gamestate` you receive & your opponent will always be `p2`.

Your bot will only have `1000ms` to return a move from `makeMove(gamestate)` if your bot takes longer than a second to return a move an error will be thrown for you and you will lose that game.

## Usage

You will need node installed to run the cli  game.

A game can be played locally like this :
> `node play.js rockBot.js otherBot.js`

This will play a single game between rockBot & otherBot.

You can play multiple games as follows:
> `node play.js rockBot.js otherBot.js 10`

This will play 10 games between rockBot & otherBot

To play a game with 1 bot against itself ( mabe useful for performance testing ) use the following format
> `node play.js rockBot.js 10`

You can also play multiple games against yourself by adding a number to the end of the command like this:
> `node play.js rockBot.js 7`