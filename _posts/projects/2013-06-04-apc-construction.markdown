--- 
layout: project
title: APC Construction
categories:
- project

images:
- /img/apcconstruction/web1.png
- /img/apcconstruction/web2.png
- /img/apcconstruction/web3.png
- /img/apcconstruction/web4.png
- /img/apcconstruction/work1.png

summary: A site for a fully-licensed heavy/civil/marine contractor operating in the Gulf Coast region.

---

APC Construction is a fully-licensed heavy/civil/marine contractor operating in the Gulf Coast region. Since incorporation in 2006, they have grown to handle multiple projects for various federal, state, municipal, and private owners. They needed their first fully-fledged site to act above all as a marketing tool to promote their company and accomplishments. We spent a fair amount of time discussing the function of the site in these terms: as a growing company, they didn't want to "show their whole hand" by overwhelming visitors with their many projects. Instead, we chose a select few that represent both the company they are and the company they want to become.

Because APC's main market is time and attention-strapped engineers, it needed to work--and quickly--on a wide variety of desktop and mobile devices. We turned to the increasingly popular Twitter Bootstrap to expedite the process of building this responsive website, and encountered a few hurdles in doing so. Here's where things get geeky. Bear with us.

First, in order to use Bootstrap with Drupal, one must update Drupal's packaged version of jQuery. This broke our typical admin tools, so we used the Coffee module to regain access to admin pages and create convenient links for the client to manage their own content in the future. Coffee was really fun to use, but lacking in some respects. So, we created a [small module](https://github.com/3Coasts/coffee_admin) that allowed us to extend it to provide features we normally use during development that are not available "out of the box." This module can now be used and refined by the entire Drupal community.

We're also fans of using panels and Drupal's page manager to create attractive page layouts. On this site, unlike many of our others, we do not have a "Basic Page" content type--instead, we created basic pages like About Us, Contact Us, and even the home page as custom pages, with individual project and service secondary pages created as node variants of the included node_view page in page manager. To provide more flexibility in creating and customizing layouts, we created another small module that added new layouts to panels that integrates nicely with Bootstrap. We're working on cleaning this up for others to use--better thumbnails and a wider variety of layouts are needed--but if you're so inclined, developers can find it [here](https://github.com/3Coasts/bootstrap_panel_layouts).

Now, by using the page manager to create pages About Us, we used fieldable panels panes and created another module that extended its capabilities. This makes it simple for the client to create things like embedded slideshows and use the panels in-place editor to drag and drop these components into place--an intuitive process that saves time and money on both sides. Though it was created for the specific needs of APC, we hope to refine it as time goes on--[it's on our Github page](https://github.com/3Coasts/basethree_fpp_bundles.git) as well.

##Links##

[APC Construction Website](http://apcconstruction.com/)

