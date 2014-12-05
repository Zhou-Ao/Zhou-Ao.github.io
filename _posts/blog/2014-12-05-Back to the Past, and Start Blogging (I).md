---
layout: blog
title: Back to the Past, and Start Blogging (I)
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
- Set up Tree of Contents
- Set up Mathjax
- Set up full-text search

##Domain Registration##

Domain is the address in the Internet. You can easily register a domain almost the same as an email account. But most top-level domains are charged. You can buy a domain at domain server, such as [GoDaddy](https://www.godaddy.com/).

For me, I registered a free **.tk** domain at [Freenom](http://www.freenom.com/en/index.html).

##Github and Github Pages##

>GitHub is a Git repository web-based hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features.
---Wikipedia

[**Github Pages**](https://pages.github.com/) is one of the service provided by Github to help people websites for individuals and projects. The websites are hosted directly by Github repository, so you can easily edit and push the web pages. Moreover, It supports Jekyll, which is a powerful tool to create static websites. And we are going to establish the blog website by Github Pages.

To find more about Git, you can read the [*Pro Git*](http://git-scm.com/book/en/v2) book.

To start with Github Pages, you should register a Github account. Then you are supposed to set up Git locally on your computer. There is a [**instruction**](https://help.github.com/articles/set-up-git/#platform-mac) for Git setting up in Github for all platforms and it is even newbie friendly.

Once you finished setting up Git, you can turn to [Github Pages](https://pages.github.com/). At the homepage, there is a very clear step-by-step instruction:
>1. Create a new repository named *username.github.io*.
>2. Clone the repository to your computer.
>3. Enter the project folder and create an index.html file.
>4. Push the index.html file to your repository.
>5. Visit * http://username.github.io * and done

After the last step, you may have to wait a few minutes for Github Pages to set up your website. As soon as the website is ready, Github will also send you an email to inform you. In the future, the changes you made will show up instantly after you push them to the repository.

##Custom Domain##

Github Pages also have an official [**document**](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) about setting up a custom domain with Github Pages.

Two kinds of domain can be supported by Github Pages, **subdomains** and **apex domain**. A subdomain is a domain that is part of a larger domain. For example, *www.example.com* and *blog.example.com* are both subdomains of the *example.com* domain. And apex domains have the form of *example.com*.

To benefit from the [**Content Delivery Network**](http://en.wikipedia.org/wiki/Content_delivery_network) and [**Denial of Service**](http://en.wikipedia.org/wiki/Denial-of-service_attack) mitigation, I decided to use the subdomain *blog.zhouao.tk* instead of *zhouao.tk*, since my DNS provider, Freenom, dose not support an ALIAS record for the APEX domain.

Github Pages also recommend to use a custom subdomain. The reasons given are following.
>- It gives your GitHub Pages site the benefit of our Content Delivery Network.
>- It will not be affected by changes in the underlying IP addresses of GitHub's servers.
>- Pages will load significantly faster because Denial of Service protection can be implemented more efficiently.

If your DNS provider supports ALIAS records, you can still chose to use apex domain. There is also a blog [*Setting the DNS for GitHub Pages on Namecheap*](http://davidensinger.com/2013/03/setting-the-dns-for-github-pages-on-namecheap/) by David Ensinger on the subject.

After all of these are done, type your domain in the browser, and I believe you are exciting to connect yourself.


