Jay-Gallery
===================

Simple gallery plug-in for [Jay](https://github.com/jayJs/jay).  
Takes images from a div and generates a gallery out of them.  

This is really early stage and I'm still not happy with it, but since it came from the Jay project but was not really necessary for the core of Jay I decided to move it here.

```
<div class="jGallery">
  <img src="/img/sample1.jpg" />
  <img src="/img/sample2.jpg" />
  <img src="/img/sample3.jpg" />
  <img src="/img/sample4.jpg" />
</div>
```

would create something like this (with clickable thumbnails):

```
<div class="jGallery">
  <div id="jFull">
    <img src="/img/sample1.jpg">
  </div>
  <div id="jThumbs">
    <div style="margin-left: 0px; background-image: url(/img/sample2.jpg);" class="jThumb active"></div>
    <div style="background-image:url(/img/sample3.jpg);" class="jThumb"></div>
    <div style="background-image:url(/img/sample4.jpg);" class="jThumb"></div>
    <div style="margin-right: 0px; background-image: url(/img/sample1.jpg);" class="jThumb"></div>
  </div>
  <img src="/img/sample1.jpg" class="hidden">
  <img src="/img/sample2.jpg" class="hidden">
  <img src="/img/sample3.jpg" class="hidden">
  <img src="/img/sample4.jpg" class="hidden">
</div>
```
