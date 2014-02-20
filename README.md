Memory...the spookier version
==============================

Memory is for Use by Anyone who Enjoyed [Simon](http://en.wikipedia.org/wiki/Simon_(game))

Why?
-----------
Why play regular memory when it could be Halloween themed?

Setup
------
Run from your command line:
```
git clone <CLONE_URL_FROM_GITHUB_PAGE>
cd Memory
npm install
```
If the npm install will not run without errors try:
```
sudo npm install
```
If you do not have supervisor, [install supervisor](https://github.com/isaacs/node-supervisor).
```
supervisor app
```
The app should now be running at localhost:3000


How To Use
-----------

1. Type in the your name and the number of tile pairs you'd like to play.
2. Click `Start Game`
3. Choose tile pairs by clicking them in succession.  If they are a match they'll stay flipped over, otherwise they'll hide the numbers again and you can try another pair.


Additional Resources
--------------------
This app was built using HTML, CSS, JavaScript, JQuery and was a joint effort of Warren Sadler (visual magic) and myself (card logic).