# Colors and Cookies Spec Sheet

Create an idle clicker RPG in the vein of Earthbound in which the user aims to drug slimes to collext hex codes for colors. Upon collecting all 16,777,216 colors, the user wins the game.

## Details

- User will drug slimes through clicking or automated party members
- Users will collect upgrades with gold from killing slimes
- 3 new party members will join the party at level 10, 35, and 80 (all start at level 1)
- Includes a scaling experience system and stats including attack and critical rate
- There is no attack back from the slimes
- Users can save their progress using an account
- Must work on mobile and desktop

## Implementation

- Uses state management (Redux)
- Has an auth server that saves and loads data from an SQL database
- Uses Routing to go from the home page to the game page
- Very minimal styling, no CSS framework