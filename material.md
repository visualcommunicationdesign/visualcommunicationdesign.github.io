# Analysis and evaluation

For the theory about perception we will use a reader/book that is currently in draft status. 
[Here](https://homepage.tudelft.nl/w3s80/VCD/VCD_wijntjes_intro.pdf) you can download the pdf of the introduction (about 10mb) and [here](https://homepage.tudelft.nl/w3s80/VCD/VCD_wijntjes_full.pdf) you can download the password projected version (you'll get the password in class).


# Create (with P5.js)

We will use P5.js for several reasons. When learning visual (interaction) design, there is always the difficult issue of what kind of platform/software to use. There is a wide spectrum ranging from off-the-shelf interaction prototyping software on the one side, and purely coding (e.g. HTML5 etc) on the other hand. 

P5.js seems to be nicely in the middle. On the one hand, it is relatively easy to generate interesting visuals. On the other hand, it can be a good introduction about how things on the web are organized. But **most importantly** using P5.js is really what *sketching* is about: a creative ping-pong game between your mind and the world where many serendipitous occur leading to (literally) unimaginable outcomes. Further advantages include 1) free, 2) great community of artists and designers, 3) access to a wide variety of javascript plugins including machine learning, 4) concrete result because you generate an HTML page (or you can embed it wither via iFrame or just as a javascript). 

## How to sketch

Below you will find instructions to learn how you can code using P5.js, but before that let me quickly highlight the various ways you could use P5.js, specifically for this VCD course. 
* Besides using simple graphical elements, you can also use pictures of fragments of pictures as elements. Cut something out and save as .png so the background is rendered transparent. Also, you could use .svg files, which are vector graphics for the web. 
* Explore all the types of input. It all starts with (mouseX,mouseY) but there are many other cool input variables such as the orientation of your smart phone, microphone sound level and even camera input (including machine learning stuff like face tracking). 
* It is possible to sketch both 2D and 3D (with webGL). As you cab load images, you can also load 3D files (obj) and do interesting things with these. 
* As data input, it is possible to load JSON files, which can be used for data visualization.


<!---[P5.js](https://p5js.org) -->
[Here](P5.md) will find links to P5 video tutorials by the creative coding genius [Daniel Shiffman](https://shiffman.net/). Be aware that some older videos use a different coding interface, you should just do everything in the new [P5 online editor](https://editor.p5js.org). 

Besides watching videos, the best things to do are
* Check out examples in the online editor
* Check out (examples in on p5 website)[https://p5js.org/examples/]
* Check out the (reference page)[https://p5js.org/reference/]

## Coding train resources
The best thing to do is go to [p5.js tutorial playlist from The Coding Train](https://www.youtube.com/user/shiffman/playlists?shelf_id=14&view=50&sort=dd) and watch all videos in the [1-7: Foundations of Programming in Javascript](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA). I've seen all of them, and they are super usefull and enjoyable. 

Nevertheless, if you simply have too tittle time, you could watch fragments from the tutorials that I 'cut' (using youtube's embedding options). In most cases, I skipped the (quite lucid) fragments of Daniel Shiffman explaining theory on the whiteboard. 





1.2: p5.js Web Editor (Part 1, 0:00-5:04)
<iframe width="560" height="315" src="https://www.youtube.com/embed/MXs1cOlidWs?start=0&end=304" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
1.3: Shapes & Drawing (Part 1, 9:00 - 10:10)
<iframe width="560" height="315" src="https://www.youtube.com/embed/c3TeLi6Ns1E?start=540&end=610" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
1.3: Shapes & Drawing (Part 2, 17:00 - 19:45)
<iframe width="560" height="315" src="https://www.youtube.com/embed/c3TeLi6Ns1E?start=1020&end=1185" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
1.3: Shapes & Drawing (Part 3, 21:45 - end)
<iframe width="560" height="315" src="https://www.youtube.com/embed/c3TeLi6Ns1E?start=1305&end=1546" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
1.4 Color (Part 1, 3:20 - 5:45)
<iframe width="560" height="315" src="https://www.youtube.com/embed/riiJTF5-N7c?start=200&end=345" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
1.4 Color (Part 2, 8:30-15:30)
<iframe width="560" height="315" src="https://www.youtube.com/embed/riiJTF5-N7c?start=510&end=930" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
1.5: Errors & Console (Part 1, 0:00-4:10)
<iframe width="560" height="315" src="https://www.youtube.com/embed/LuGsp5KeJMM?start=0&end=250" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
1.6: Code Comments (Part 1, 0:00-2:00)
<iframe width="560" height="315" src="https://www.youtube.com/embed/xJcrPJuem5Q?start=0&end=120" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
2.1: Variables in p5.js (mouseX, mouseY) (Part 1, 4:20-8:24)
<iframe width="560" height="315" src="https://www.youtube.com/embed/RnS0YNuLfQQ?start=260&end=504" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
2.1: Variables in p5.js (mouseX, mouseY) (Part 2, 10:45-11:35)
<iframe width="560" height="315" src="https://www.youtube.com/embed/RnS0YNuLfQQ?start=645&end=695" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
2.2: Variables in p5.js (Make your own) (Part 1, 6:23-7:30)
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bn_B3T_Vbxs?start=383&end=450" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
2.2: Variables in p5.js (Make your own) (Part 2, 10:28-11:00)
<iframe width="560" height="315" src="https://www.youtube.com/embed/Bn_B3T_Vbxs?start=628&end=660" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
2.3: JavaScript Objects (Part 1, 0:00-1:26)
<iframe width="560" height="315" src="https://www.youtube.com/embed/-e5h4IGKZRY?start=0&end=86" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
2.3: JavaScript Objects (Part 2, 05:25-8:54)
<iframe width="560" height="315" src="https://www.youtube.com/embed/-e5h4IGKZRY?start=325&end=534" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
2.4: The map() Function (Part 1, 03:10-3:53)
<iframe width="560" height="315" src="https://www.youtube.com/embed/nicMAoW6u1g?start=190&end=233" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
2.4: The map() Function (Part 2, 7:30-9:40)
<iframe width="560" height="315" src="https://www.youtube.com/embed/nicMAoW6u1g?start=450&end=580" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
2.5: The random() Function (Part 1, 9:00-11:00)
<iframe width="560" height="315" src="https://www.youtube.com/embed/nfmV2kuQKwA?start=540&end=660" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
