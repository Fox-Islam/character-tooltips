# character-tooltips
A Tampermonkey userscript which displays tooltip hints for a predefined list of characters whenever they show up on a website.

You can get a better picture of what it does [here](https://charactertooltips.000webhostapp.com/) where the script is used to provide pronunciation help for Japanese katakana and hiragana characters.

# How to use this script:
1) Download the [Tampermonkey extension for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?utm_source=chrome-app-launcher-info-dialog)
2) Download this userscript
3) Upload the script to Tampermonkey and enable it
4) Verify that it works for you by going to, idk, [Wikipedia's katakana page](https://en.wikipedia.org/wiki/Katakana)
5) Replace the lists with whatever you want

# How to do step 5:
The script uses two arrays, one called `check` (which contains all of the characters you want tooltips for) and one called `tool` (which contains all of the tooltips for the characters in check). 

To use your own lists you should 
1) Delete all of lines 1-35
2) Initialise the check and tool arrays by typing `var check = [];` and `var tool = [];`
3) Populate the lists by typing `check = [`(Your list goes here, each character is surrounded by speech marks and are comma-separated)`];`

For example, if you want to look for instances of the letters a and t and the number 7 on a website you would use

`check = ["a","t","7"];`

You would then create your tooltips by typing 

`tool = ["this is the letter a","this is the letter t","this is the number 7"];`
