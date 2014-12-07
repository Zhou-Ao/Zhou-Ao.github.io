---
layout: blog
title: Back to the Past and Start Blogging (III)
description: Step-by-step instructions to establish a blog website hosted by Github Pages and using Jekyll with functional tools, such as code highlight, mathematic expressions rendering and full-text search.
category: blog
---

The age for blog has already passed. Instead, it is the world of Facebook, Twitter, and Instagram. More and more people prefer to update a short status in a minute, rather than to spend couple of hours sitting down to write a paragraph. However, I still desire to have my own place on the Internet, neither a social media homepage, nor a community account, but a true home made by my own hand.

After getting everything ready in my website, I would like to share what I did to establish my website.

##Things to Be Done##
- Register a domain
- Set up Github and Github Pages
- Learn how to use Jekyll
- Web pages design
- Set up Table of Contents
- Set up Google Code Prettify
- Set up MathJax
- Set up full-text search

###Design Your Website with a Beautiful Template###

Font-end design is never easy. It is extremely time consuming to design a pretty website from the beginning to the end. However, thanks for the well designed open-source templates and font-end development tools, things get much easy.

My Criteria for website template are as following:

- Appearance: simple and elegant design;
- Compatibility: functional in all platforms;
- Stabilization: coded by HTML5 and CSS3;
- Customizability: easy to reproduce.

[**HTML5 Up**](http://html5up.net/) is a great place to get free website templates. And also [**Pixelarity**](http://pixelarity.com/) provides more commercial templates. The templates of both HTML5 Up and Pixelarity are developed based on the framework [**Skel**](http://getskel.com/).

>Skel is a lightweight, low-level framework for building responsive sites and web apps. Inspired in part by its namesake (/etc/skel), it's designed to do just enough to make building responsively simpler, faster, and more effective, but not so much it gets in your way.
--- Skel Document

For me, I chose the template [**Aerial**](http://html5up.net/uploads/demos/aerial) to create my home page and [**Strata**](http://html5up.net/uploads/demos/strata) for the other pages.

###Table of Contents###

A table of contents of every blog is very necessary for readers to know what you are talking about and to quickly get to the right place. As you can see, I formed a table of contents for all my blogs by [**jekyll-table-of-contents**](https://github.com/ghiculescu/jekyll-table-of-contents), a simple JavaScript table of contents generator.

Follow the instructions on the Github site, and there is no much trouble to deal with it.

###Google Code Prettify###

Among all the code highlight tools, [**Google Code Prettify**](https://code.google.com/p/google-code-prettify/) is most easy to use and support almost the programming languages.

You can just include the JavaScript and CSS provided by Google and write code snippets as the following format. And then, you can see you code is pretty printed.

```html
 <pre class="prettyprint">...</pre>
 # Or
 <code class="prettyprint">...</code>
```

I recommend you to disable the highlighter setting of Jekyll, by just adding one line in the configuration file to avoid conflicts between Jekyll and Google Code Prettify.

```
highlighter: false
```

You can also include to following script in you HTML template to automatically add class attribute to tag ```<pre>```, when editing your code by Markdown.

```html
<script type="text/javascript">
    $(document).ready(function(){
    // Add the class of pre requried by Google Code Prettify
    $('pre').addClass('prettyprint linenums');
});
</script>
```

Another thing you should pay attention to is that the CSS style of your HTML template may conflict with Google Code Prettify CSS style. If Google Code Prettify does not work well, you can check whether the CSS style is correct.

###MathJax###

My blog usually involves some mathematics, so I need to figure out the way to render nice math expressions. And [**MathJax**](http://www.mathjax.org/) is my solution.

Since MathJax is very similar to LateX, it is very easy to use. For details of syntax, you can refer to [**MathJax basic tutorial and quick reference**](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).

To enable MathJax, you should include the following JavaScript in you HTML file.

```html
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
```

However, MathJax does not support displaying inline formulas with ```$...$```. To change the setting, you should include another snippet.

```html
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({ tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]} });
</script>
```

But right now you may find if you input formulas like ```$x_i^2+x_j^2$```, MathJax cannot correctly interpret it, because Markdown renderer will parse the contents between two underlines to be emphasis. To avoid this, you are supposed to change the Markdown setting in the configuration of Jekyll.

```
markdown: redcarpet
redcarpet:
  extensions: ["no_intra_emphasis"]
```

###Full-text Search###

It is cool to set up a full-text search engine for my own blog. I tried to insert Google Custom Search to my blog. However, not all my web pages are embodied by Google, so some pages cannot be searched. Hence, I found [**jekyll-lunr-js-search**](https://github.com/slashdotdash/jekyll-lunr-js-search) and managed to establish my own search engine by it.

You can refer to the introduction for the tool which is very clear and make you website searchable step by step. I personally recommend to install jekyll-lunr-js-search by copying the plugin to you Jekyll site. I have tried both methods, but the first one did not work well.


---
##Words at the End##

I wish my blogs can help you establish your own website, and if you have any question or if there is anything wrong with what I said, please no hesitate to leave a comment.

The repository of my blog is available at [**GitHub**](https://github.com/Zhou-Ao/Zhou-Ao.github.io), you can take it as a vivid example of what I have introduced.