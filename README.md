# COLORS AND COOKIES

An idle clicker game based on Earthbound, joy, and rainbows.

## Beginning of the Game:

We have a hero. Their name is [something cool here]. They're just your normal everyday kiddo. One day, they wake up, and their whole world is in black and white, and super plain and boring. They go outside, and the other color they see is in a slime. In order to get the color back, they destroy the slime. And then they set off on an adventure to get the color back from all the monsters. 

## Goal:

Destroy all monsters and get color back in their world.

## End of the Game:

The kiddo and their friends restore color to the world because they found every hex code in the universe. There are 16,777,216 colors, and our crew got them all. Kabam slam. Color gets restored back to the world and everything's chill now.

Kill Slime [button]

AutoKids [unlimited number]
Equipment Enhancements[limited number, to make things more efficient]

It should take a number of slimes killed to get a hex code back. For each slime killed, that number should increase. 

## Math:

Hex Codes: 16,777,216
To get a hex, kill 48 slimes

### Attacking Slimes

// HP: (minHP = 10) * (num of slimes killed * .01)
Attack: 
//  - level * .25 (rounded up)
  - for every 4096 * (the amount that this happens), your attack doubles
  - eg. first time this happens is at 4096, then at 8192, then 16000, then 32000
Crit: 5% chance
// Miss: 6% chance

UI changes: "You did X damage!" "You missed!"

Use accumulated levels to buy/partner up with new friends
The first time you can buy a new party member is at 10 levels.
Each time after that, it's 150% of the last thing you bought it at.
Eg. 1: 10 levels, 2: 15 levels, 3: 23
If the number of levels is more than one member has, then it gets added from other members

Spend hex codes on upgrades that make your friends or your clicks faster (I don't want to deal with this right now)