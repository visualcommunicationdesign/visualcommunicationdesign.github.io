# Experimental paradigms
These are simple P5 sketches could help you started with performing a perception experiment. For more worked out experiments and integration with Amazon Mechanical Turk, visit [Sketch-and-Test](https://github.com/maartenwijntjes/p5-sketch-and-test). 

Some examples of independent and dependent variables are provided. **Independent variables** are the factors you control (e.g. whether something is shown on colour or in grayscale) while **dependent variables** are what you measure (e.g. reaction time). 

<!--Please check either check [Vision and Depiction (Draft)](https://homepage.tudelft.nl/w3s80/VisionAndDepiction.html#pf63) or search for the paradigm names if you want more info. -->

Oh yes, you don't _have_ to use these for your assignment. It is also fine to perform experiments using powerpoint, make a GIF, etc. Or use a questionaire on Google Forms, Qualtrix etc. There are many ways to investigate what people see. 

UPDATE: I made some crappy videos!

<iframe width="560" height="315" src="https://www.youtube.com/embed/bMFoH6jS0SY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Visual Search
* **What**: search for a predefined target in a scene
* **Independent variables**: Target, scene
* **Dependent variables**: reaction time, accuracy
* [**P5 code (single trial)**](https://editor.p5js.org/maartenwijntjes/full/ICs67kdbA)
* [**P5 code (multiple trials)**](https://editor.p5js.org/maartenwijntjes/full/jfDppqO3)
* [**P5 code (multiple trials show results)**](https://editor.p5js.org/maartenwijntjes/full/zCClCiqw)

<iframe width="560" height="315" src="https://www.youtube.com/embed/pZ1mIpM47dY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Change blindness
* **What**: search for something changing in a scene
* **Independent variables**: Target, scene
* **Dependent variables**: reaction time, accuracy
* [**P5 code (single trial, no reaction time)**](https://editor.p5js.org/maartenwijntjes/full/GgLwmPwFo)
* [**P5 code (multiple trials, reaction time and click positions)**](https://editor.p5js.org/maartenwijntjes/sketches/Tr_Pnr051)



<iframe width="560" height="315" src="https://www.youtube.com/embed/r6aZ9soygqQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<!--
* [**Visual Search** (single trial)](https://editor.p5js.org/maartenwijntjes/sketches/ICs67kdbA)

* [**Change blindness** (single trial, no reaction time)](https://editor.p5js.org/maartenwijntjes/sketches/GgLwmPwFo)

* [**Conspicuity** ](https://editor.p5js.org/maartenwijntjes/sketches/cPBdpHIrD)

* [**BubbleView** ](https://editor.p5js.org/maartenwijntjes/sketches/Uq_K0yPI)
-->

## Conspicuity
* **What**: introspectively judge visibility of a peripheral target
* **Independent variables**: Target, scene
* **Dependent variables**: distance
* [**P5 code**](https://editor.p5js.org/maartenwijntjes/full/cPBdpHIrD)

<iframe width="560" height="315" src="https://www.youtube.com/embed/vPWBXqSaSxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>





## BubbleView
* **What**: [this](http://bubbleview.namwkim.org)
* **Independent variables**: Scene
* **Dependent variables**: Attention positions, order. 
* [**P5 code**](https://editor.p5js.org/maartenwijntjes/full/Uq_K0yPI)

<iframe width="560" height="315" src="https://www.youtube.com/embed/RkKZK0pSRbk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Attribute rating
* **What**: Rating a certain attribute on a scale. 
* **Independent variables**: Attributes (do the same experiment with different adjectives), any stimulus variation
* **Dependent variables**: Rating value
* **Data analysis**: If you measure a bunch of attributes, you can perform [PCA](https://en.wikipedia.org/wiki/Principal_component_analysis). But simple correlations are also interesting. 
* [**P5 code**](https://editor.p5js.org/Fairyland201/full/TW-AMw7B)

<iframe width="560" height="315" src="https://www.youtube.com/embed/qlxVHdPNP28" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Similarity
* **What**: Rating two stimuli wrt their similarity (and do that for a bunch of pictures)
* **Independent variables**: 
* **Dependent variables**: Similarity rating
* **Data analysis**: the similarity data can be used for [MDS](https://en.wikipedia.org/wiki/Multidimensional_scaling)
* [**P5 code**](https://editor.p5js.org/Fairyland201/full/neTAQAxs)

<iframe width="560" height="315" src="https://www.youtube.com/embed/9NjVbXw4MX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



## Matching
* **What**: Parametric matching (in this case colour)
* **Independent variables**: Scene, observer (colour blind, etc)
* **Dependent variables**: (colour) parameters 
* [**P5 code**](https://editor.p5js.org/maartenwijntjes/full/q7sJV6m7)
* No video yet

## Classification (words)
* **What**: Classifying a picture with predefined set of words (free wording is also interesting, but complex)
* **Independent variables**: 
* **Dependent variables**: [Accuracy and Precision](https://en.wikipedia.org/wiki/Accuracy_and_precision)
* [**P5 code**](https://editor.p5js.org/mjpvz/full/OU_jX-An)

## Classification (pictures)
* **What**: Classifying a picture with predefined set of examplar pictures
* **Independent variables**: 
* **Dependent variables**: [Accuracy and Precision](https://en.wikipedia.org/wiki/Accuracy_and_precision)
* [**P5 code**](https://editor.p5js.org/mjpvz/full/V5-fXRQI)

<iframe width="560" height="315" src="https://www.youtube.com/embed/rlTD-7qwrFQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>





