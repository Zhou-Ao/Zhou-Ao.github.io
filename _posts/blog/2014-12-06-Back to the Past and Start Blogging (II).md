---
layout: blog
title: Back to the Past and Start Blogging (II)
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

##To Power Your Website with Jekyll##

Besides regular HTML contents, Github Pages support [**Jekyll**](http://jekyllrb.com/), which makes it much less painful to establish your website. Github Pages also has an official [**document**](https://help.github.com/articles/using-jekyll-with-pages/) to introduce how to use Jekyll with Github Pages.

>In addition to supporting regular HTML content, GitHub Pages support Jekyll, a simple, blog-aware static site generator. Jekyll makes it easy to create site-wide headers and footers without having to copy them across every page.
--- Github Pages

>Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through Markdown (or Textile) and Liquid converters, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.
--- Jekyll

###Installation of Jekyll###

First, you should install Jekyll on your computer. Since Jekyll is written in [**Ruby**](https://www.ruby-lang.org/en/), a dynamic, open source programming language, the installation of Ruby is required before you get started to install Jekyll.

For Mac OS user, you have probably already got Ruby. To check with this, you can open the Terminal application, and run command ```ruby --version```. If you can see your Ruby version begin with ```1.9.3``` or ```2.0.0```, you have got Ruby with supported version. If not, you should refer to [**these instructions**](https://www.ruby-lang.org/en/downloads/) to install Ruby.

For Windows user, you can use [**RubyInstaller**](http://rubyinstaller.org/) to install Ruby on Windows. 

After installing Ruby, you are supposed to install [**Bundler**](http://bundler.io/). It is a package manager that makes versioning Ruby software like Jekyll a lot easier. To install it, you can just run the command ```gem install bundler```.

Last, here comes the main event, installation of Jekyll. You are require to create a file in you site's repository called ```Gemfile``` (note: no any filename extension). Here is an example for the contents in ```Gemfile```:

```
source 'https://rubygems.org'
gem 'github-pages'
```

After that, you can run the command ```bundle install``` and then you're ready.

However, during the command ```bundle install```, I encountered error as following.

```
An error occured while installing pg (0.13.2), and Bundler cannot continue.
Make sure that `gem install pg -v '0.13.2'` succeeds before bundling.
```

In the beginning, I manually run the commands like ```gem install pg -v '0.13.2'``` for every error message showed up. But it is really a wait of time to do it over and over again. Finally, I found that the errors occurred only because my ```RubyGems``` is not up to date. To upgrade to the latest RubyGems, I ran the command ```gem update --system```, and it fixed all the problems.

For Windows user, you can also refer to the instructions to get [**Jekyll running on Windows**](http://jekyll-windows.juthilo.com/) written by Julian Thilo, which seem to work for most.

To run Jekyll, just use the command ```bundle exec jekyll serve``` in the root of you repository, and your site can be previewed at ```http://localhost:4000``` before you push to Github.

###Jekyll Basics###

Jekyll has very substantial [**documents**](http://jekyllrb.com/docs/home/) for how to use Jekyll to build website. Although they are not very easy easy to understand and lack of vivid examples, I still highly recommend to go through it.

>Jekyll is, at its core, a text transformation engine. The concept behind the system is this: you give it text written in your favorite markup language, be that **Markdown**, **Textile**, or just plain **HTML**, and it churns that through a layout or series of layout files. Throughout that process you can tweak how you want the site URLs to look, what data gets displayed in the layout, and more. This is all done through editing text files, and the static web site is the final product.
``` Jekyll

A basic structure of Jekyll site looks like this:
<pre><code class="language-bash" data-lang="bash">.
├── _config.yml
├── _drafts
<span class="p">|</span>   ├── begin-with-the-crazy-ideas.textile
<span class="p">|</span>   └── on-simplicity-in-technology.markdown
├── _includes
<span class="p">|</span>   ├── footer.html
<span class="p">|</span>   └── header.html
├── _layouts
<span class="p">|</span>   ├── default.html
<span class="p">|</span>   └── post.html
├── _posts
<span class="p">|</span>   ├── 2007-10-29-why-every-programmer-should-play-nethack.markdown
<span class="p">|</span>   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _site
└── index.html</code></pre>

####_config.yml####

It stores configuration data. The details of the configuration can refer to [**the configuration document**](http://jekyllrb.com/docs/configuration/).

Among all the configuration, I would like to talk about Markdown options. Jekyll supports various Markdown renderers. The default one is kramdown. However other renderers can provide more useful extra extensions which will significantly enhance the writing experience. [**Redcarpet**](https://github.com/vmg/redcarpet) is one of the excellent Markdown renderer.

To use Redcarpet, you should first install it as a Gem. You can simply run the command ```gem install redcarpet``` to install Redcarpet.

To enable Redcarpet in Jekyll, the configuration file should be modified.

```
#Enalbe Redcarpet
markdown: redcarpet
```

According to the README of Redcarpet, there are various useful extensions. They can be configured by providing an ```extensions``` sub-setting of Redcarpet. For me, I enabled ```fenced_code_blocks```, ```with_toc_data``` and ```no_intra_emphasis```.

- ```fenced_code_blocks``` parse fenced code blocks, PHP-Markdown style. Blocks delimited with 3 or more ~ or backticks will be considered as code, without the need to be indented. An optional language name may be added at the end of the opening fence for the code block.
With this extension enabled, you can just insert a piece of code in Mardown file using the following syntax.

```
```ruby
#...ruby code 
    ```
```

- ```with_toc_data``` add HTML anchors to each header in the output HTML, to allow linking to each section.
Together with [**jekyll-table-of-contents**](https://github.com/ghiculescu/jekyll-table-of-contents), it can help to generator table of contents for blogs. I will introduce how to use jekyll-table-of-contents in my next blog.

- ```no_intra_emphasis``` do not parse emphasis inside of words. Strings such as foo_bar_baz will not generate ```<em>``` tags.
It help to solve the conflicts between MahtJax and Redcarpet. I will introduce how to enable MathJax with Jekyll in my next blog.

####_layouts####

In this directory, there are the templates for the posts. You can specify which template to use for a post in the [**YAML Front Matter**](http://jekyllrb.com/docs/frontmatter/). In the templates, you can design what your blog website looks like, and insert the liquid tag {% raw %}```{{ content }}```{% endraw %} to inject content for your posts. Separating the web page design and blog contents, this is exactly the reason why Jekyll make it convenient to build websites.

####_posts####

There is the area where you put your blogs. You can use Markdown to write your blog, and Jekyll will interpret it by you Markdown renderer. The name of your blogs mush strictly follow the format: ```YEAR-MONTH-DAY-title.MARKUP```. Once the file name is set, the date and markup language for the post are determined.

Every post should start with a [**YAML Front Matter**](http://jekyllrb.com/docs/frontmatter/). Jekyll will process all the files that contain YAML front matters.

>Between these triple-dashed lines, you can set predefined variables (see below for a reference) or even create custom ones of your own. These variables will then be available to you to access using Liquid tags both further down in the file and also in any layouts or includes that the page or post in question relies on.
``` Jekyll

Here is the the front matter I used for this blog:

```
---
layout: blog
title: Back to the Past and Start Blogging (II)
description: Step-by-step instructions to establish a blog website hosted by Github Pages and using Jekyll with functional tools, such as code highlight, mathematic expressions rendering and full-text search.
category: blog
---
```

You can also custom [**permalink**](http://jekyllrb.com/docs/permalinks/) for you posts. The default permalink is defined as ```/:categories/:year/:month/:day/:title.html```. And you can custom it by changing the permalink option in the configuration file.

####_includes####

You can put files under this directory, and then use the liquid tag {% raw %}```{% include file.ext %}```{% endraw %} to include them in files in ```_layouts``` or any other file started with the YAML front matter.

####_drafts####

There you can put your unpublished drafts. The format of these drafts is without a date: ```title.MARKUP```. To preview your site with drafts, you can just run the command ```bundle exec jekyll serve``` or ```bundle exec jekyll build``` with the ```--draft``` switch.

###Liquid###

Another thing make Jekyll powerful is that it supports [**Liquid**](https://github.com/Shopify/liquid/wiki) converter. The document [**Liquid for Designers**](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) shows roughly how to use Liquid. For more complete introductions, you can refer to the [**documentation**](http://docs.shopify.com/themes/liquid-documentation/basics) on [**Shopify**](https://www.shopify.com).

I can show you some example how I use Liquid in my website.

```html
{% raw %}
{% for post in site.categories.blog %}
        <section id="one">
            <header class="major">
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
            </header>
            <p>{{ post.description }}</p>
            <div class="date">
                {{ post.date|date:"%F" }}
            </div>
        </section>
        {% endfor %}
{% endraw %}
```
This piece of code is extracted from the index for my blog. By Liquid, I generated a list of my blogs.

```html
{% raw %}
<!-- Navigator -->
            <div class="previous_next">
                {% for post in site.categories.blog %}
                    {% if forloop.last == true and post.id != page.id %}
                    <a href="{{ site.categories.blog[forloop.index0].url }}" title="First post" class="fa fa-fast-backward"></a>
                    &nbsp;&nbsp;
                    {% endif %}
                {% endfor %}
                {% for post in site.categories.blog %}
                    {% if post.id == page.id  and forloop.last == false %}
                    <a href="{{ site.categories.blog[forloop.index].url }}" title="Previous post" class="fa fa-backward"></a>
                    {% endif %}
                {% endfor %}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {% for post in site.categories.blog %}
                    {% if site.categories.blog[forloop.index].id == page.id  and forloop.last == false %}
                    <a href="{{ site.categories.blog[forloop.index0].url }}" title="Next post" class="fa fa-forward"></a>
                    &nbsp;&nbsp;
                    <a href="{{ site.categories.blog[0].url }}" title="Last post" class="fa fa-fast-forward"></a>
                    {% endif %}
                {% endfor %}
            </div>
{% endraw %}
```
This piece of code is extracted from the template in ```_includes``` for my blog. By Liquid, I managed to create the navigation button at the end of each blog.

It is usually very easy to implement it use the predefined variables ```page.next``` and ```page.previous```. But for me, it is different. As you can see, I have two categories of posts, blog and project. However, Jekyll put all my posts in the array ```site.posts``` in time order regardless of the category. That means if I directly use ```page.next``` or ```page.previous```, the variable will return the next or previous post which may be a project post rather than a blog post. Fortunately, Liquid help me to solve this problem with for loop and if statement.