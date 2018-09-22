---
title: "The story of Clipjump - Lessons learned while reaching 100k+ downloads as a 17-yr old"
date: 2018-09-22T20:00:00+05:30
categories: ["startups"]
tags: ["development", "startups"]
draft: true
image: "https://s3.us-east-2.amazonaws.com/devletters/covers/matrix.jpeg"
unsplash: "https://unsplash.com/photos/iar-afB0QQw"
keywords: "clipjump,startup,software development"
---

I started developing [Clipjump](http://clipjump.sourceforge.net/) in March 2013, and by the same month, next year, it had 100k+ downloads. And just so you know, this was done without any marketing or outreach. I had no contacts, no industry experience and I was still in school. But the product found love and it kind of grew organically. This is Clipjump's story.


## How it all started?

Back in 2012, I decided to learn to program and make things. I had a brief idea of Java but knew that it won't be enough to help me make any real applications (easily), like an advanced GUI based software or a website like Facebook. So I was lost.

On the last day of 2012, I was casually browsing the web looking for good software that one should install on Windows and there I stumbled upon AutoHotkey. It wasn't a software though, but a programming language.

The next day, I decided to try it out and was thoroughly amazed at what few lines of AutoHotkey code could do.

That's when ideas of things I can build started popping into my head. I built a couple of things but they didn't get much popularity, and as a result, I also lot interest in them. But then, I came across this software called [ClipStep](https://www.dcmembers.com/skrommel/download/clipstep/) which was a handy way to manage clipboards and it was also written in AutoHotkey. 

I realized that its development has stopped and that it was quite basic. It was even missing some features that I thought would be obvious. So I took the basic concept and started making it by myself, and called it Clipjump (<s>step</s> jump; how ingenious :-P).

So that's how it started. But that's not why you are reading this, right? So let's talk about the things I unknowingly did right with this particular piece of software.

You see, I had no Computer Science knowledge back then, and I had just learned how to code, so I obviously did a lot of things wrong, but I also did some things right (unknowingly) which I now struggle to do. 

Let's get to it.


## Launch

If you look at the product that Clipjump is now (as of [v12.5](http://clipjump.sourceforge.net/help.htm)), you will think that I did launch it very early. I didn't realize it at that time though. This was because I was a total noob in software development. I didn't have a good idea of what things should be present in a software.

<!-- because I didn't have any domain knowledge nor did I had a lot of IT experience, so my ideas of what things should be present in a software were very noob-ish. -->

For example, I didn't know that I should add an About page for the software, or that it was popular to have a website for the same. But you see, with iterations that worked out pretty well. I did create a great GUI for the software and I did deploy an informational website. 

So the lesson in here is that you don't need all kinds of fancy things for your first launch. Just launch lean and build things along the way.

If you are scared that someone will steal your idea in the meanwhile, that won't happen unless you are in a very competitive market where you don't have an edge. 

So stop worrying about launching prematurely. Focus on building a better product instead. And how you can do that? Keep reading. 


## Getting your first users

Your first users are very valuable. After all, they are the ones who will shape the product. So how do you find good first users?

With Clipjump, I got lucky. The thing is, Clipjump was developed in AutoHotkey where it was a ritual to post everything you develop on the forums. AutoHotkey had a small community so it was plausible to do so. So once I developed the very first release of Clipjump (which I thought was the final), I shared it on the AutoHotkey forums.

For the first few days, [only a single person](https://autohotkey.com/board/topic/91488-clipjump-the-ultimate-clipboard-manager-updated-091115/?p=577221) showed interest in that tool. But that person was the best test user one could have, not only he had knowledge of the tech I was using, but he was also interested in the problem that my software was solving.

When I released the very first version, he found some bugs in the release, conveyed them back to me, and we did some release iterations till we fixed them. What I want to say here is that having a good first user (or users) really helped shape the product. 

So how can you achieve the same? Simple. Find the people who would be most interested in your solution and show them what you can do for them. 

This could be done by simply joining a subreddit of the people whose problem you are solving, or by using some Google to find a discussion forum of the community your solution corresponds to, or by physically interacting with those people if you have access.

The key here is to get those good first users as quickly as possible, then try to solve their problem in the way they need, not the way you want.


## Retaining good first users

Maintaining a good relationship with your first users is very important. Not just because of the important feedback they give, but because, with time, they will form a connection with the software they helped to build, and thus, they will become very strong word-of-mouth marketers of the product. In fact, after you, they will be the ones who will most strongly recommend your product, not your friends or family, but they.

So it's important to not screw over your first users. How can you make sure of that?

### Stay humble

Don't be arrogant, and don't think you are doing those users a favor by developing a software for them. They are doing a bigger favor for you. Keep that in mind.

I didn't do this mistake because I was really a noob at that time. The people in the AutoHotkey forum who were my first users had presumably more experience than me, so I always thanked them many times for providing feedback with my product.

### Give them enough credits

Your first users are like lite-versions of co-founders. They deserve more than just thanks. For instance, to acknowledge your first users, you can give them your software free of charge.

You can also list them on your website or app as a sincere token of your appreciation. I [did it](http://clipjump.sourceforge.net/contact.html) with Clipjump where I listed all the helpers in the About section. NomadList, a popular software that you might have heard of, started similarly and [does the same](https://nomadlist.com/help).

![thank you for clipjump](https://user-images.githubusercontent.com/4047597/45890248-2243e900-bde0-11e8-930f-a64e4b92bb43.png)

<!-- ![nomad list thank](https://user-images.githubusercontent.com/4047597/45890457-a302e500-bde0-11e8-8e82-7262955f67ac.png) -->


## Finding the product-market fit

Chances are, you won't make the ideal product for your market in your first few tries (that is first few version releases). And that's how it has always been, for every product.

With Clipjump, my first 10 releases were far from okay. They had disorganized UIs, were missing obvious features and had intolerable bugs. But since I maintained a good connection with my customers and since I did my best to follow their feedback, I was able to solve all those problems and create a product that everyone loves.

So the lesson in here is to hang-in-there. Listening to your customers will always lead you to the light and will help you make a product that is loved and has no major flaws. It will take time but that's the rule when you are making a software, not the exception.

You will find the product-market fit eventually. It took me [50+ iterations](http://clipjump.sourceforge.net/changelog.html) to get Clipjump to where it is today, and it still can't be called "complete".


## Monetization and Growth

Shucks, here is where all the knowledge ends. Back in 2014, I didn't know that I, as an individual could even charge for a software (like it was illegal). So I didn't even try it.

I also didn't have a [LinkedIn profile](https://www.linkedin.com/in/aviaryan/) and had an empty [Twitter account](https://twitter.com/aviaryan123). I didn't know people like [Pieter Levels](https://twitter.com/levelsio) or [Marc Köhlbrugge](https://twitter.com/marckohlbrugge) existed nor did I knew any tech people outside of the AutoHotkey community. I thought marketing was a scam.

So I made no efforts to grow or monetize Clipjump. Then life happened and I switched to Linux and then Mac. And now I have neither the means nor the motivation to continue its development.


## Conclusion

Not knowing many things helped me succeed in making a popular product. But then, it also hurt me. With all the knowledge of startup culture, sales funnels, VCs, etc floating around, we tend to forget what it really takes to make a great product.

It happens to everyone, as it happens to me too. I think finding a balance between what you need to do the "noob" way and what you need to do the "pro" way is what makes a product most effective. As Paul Graham says, [do things that don't scale](http://paulgraham.com/ds.html).

With this, I end the letter. I hope this post serves as a reference for anyone deciding to build a product.
