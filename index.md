---
layout: default
---

<article class="is-post is-post-excerpt">
	{% for post in site.categories.blog %}
        <li>
            <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
            <div class="title-desc">{{ post.description }}</div>
        </li>
    {% endfor %}
</article>
