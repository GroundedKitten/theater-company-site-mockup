This file is an attempt to demonstrate my knowledge of the work I did and to give credit to sources and tools that I consulted and used in my extensive work on this project. 

CSS
  - I can explain all of my markup. I added some comments, trying to find a balance between what might be useful and what might not be needed.
  - I realize some of the css is quite advanced. I went down some learning/exploratory rabbit holes (e.g., the custom classes/vars as I thought this was a cool way to simplify my responsive queries. By creating my root font size and hero width, I was able to use a percentage of that for my content width and simply change that in the media queries. The custom classes for the font-icon colors and hover colors might seem a bit much, but I was happy I did that when I started playing/changing those colors as it facilitated that process. I imagine this also makes the css easier to follow, not only for devs but perhaps even for client admins at some point).
  - I consulted a couple of Udemy courses to better understand animations and transforms but did not use those animations in the project. The flickering effect was my original idea and a lot of fun to create. I tinkered quite a bit with the settings and timing to get the vintage flickering effect for the marquee sign. I consulted the moz developer tutorials quite a bit in this part of the work.
  - I deduped and refactored my code numerous times to simplify it. I learned more about css grid from Brad Woods's page (https://layout.bradwoods.io/customize) and similar css layout generators, played with those, then developed my own scheme for the grid and flex layouts. At first I was using only flex, but I like using them in combination because the grid layout seemed intuitive to me. I can visualize the grid more easily than flex from a layout standpoint. I do understand flex and can explain my use of all the css rules and properties for my flex parents and flex items. Some of my classes act as both parents and children, and I'm curious if that is standard practice or introduces potentially unpredictable behavior, but I didn't seem to face many issues with that, other than my mind spinning when thinking of the flex directions and remembering when to use align/justify and content/items! :) I see the value in creating minimal css rules and styles that are semantically defined and can be reused. I am looking forward to the next project to put that into even better practice. 
  - I installed some vscode extensions but only ended up using certain ones (css peek, FiveServer are two I remember off the top of my head).
  - I used one free online tool to quickly locate duplicate css code in my final refactor but only found a couple instances in my queries.css file, which I ended up omitting anyway (I had originally been flipping the social icons from vertical and horizontal depending on screen width but found that unecssary in the end, after I added the partner-offer idea).
  - For the css reset I started with one from a vs code extension and a couple that I researched online. I forget the names at the moment. However I went through the extensive reset and trimmed out everything that did not apply to the project. I forgot to go through again at the end as I probably could remove even more. I also looked into css normalization but that felt like an open debate amongst devs that would not add much to the project, so I didn't learn much about it.

HTML
  - Over the years I have worked with both css and html and remembered most of the html tags. My experience was mostly before html5 and css3, so yes I was floating things back in the day when tinkering with personal projects. That experience is what helped me recall the clearfix for wrapping purposes although I did have to look it up. In general I'd say I'm not shy about not knowing things. I simply look up questions on stackoverflow, find tutorials or interactive tools that allow me to play and see what's going on, then create my own personalized version, which usually doesn't work. Then I figure out how to make it work, usually come up with some idea and break it again, fix it, and so forth as I believe Kevin mentioned in one of the intro vidoes. I learned a ton from that type of exploration in all aspects of this project and in the prework and projects so far.
  - I believe I could have used more of the semantic tags such as header, logo, etc. I had those in a previous iteration of the site but was wondering if there were any built-in properties that were affecting some of my styles, especially around the marquee sign. In retrospect I don't think that was an issue, also and especially once I learned about the css reset.
  - I got the standard meta viewport tag from CodePen and also saw it in a few places such as a Udemy course I looked at briefly. One question I had was about CodingTemple's approach for the root font size (I believe the Udemy course mentioned something about 65% but I didn't watch that lesson and am not sure if CT has a preference). I liked the icea of specificying 16px explicitly in the root rule given that users can change the default, but maybe that's why a percentage is more accurate as it would reflect the user's preference. I seem to have lost access to the WordPress learning content so perhaps we can discuss how to get that back (I have been a slow starter in the self-paced program but am ready to go now!). :)

JAVASCRIPT
  - I did not write the js script that made my qr code scannable. That was from Bing chat v4. I will add a credit to the js file in a moment. However I did look over that code and have a basic understanding of what's going on. It looks like there is a qr library that is being called and then the js has a variable for the decoded text (which is essentially reversing the encoded pattern from the image). 

FONTS
  - All fonts that were not free I purchased from CreativeFabrica and own full commercial  licenses for. 
  - Roboto font and variants are from Google Fonts and used under their standard license. 
  - I converted most fonts, which came as .tff and/or .otf files, with several online tools, such as Convertio, AnyConvert, and similar. I explored creating my own .bat file but discarded that to refocus on the crux of the project. I did get some practice with some cmd tasks such as robocopy and learning some basic switches during this process (e.g., robocopy C:\source-dir C:\destination-dir /move /e with the first switch being responsible for deleting the source files after they are moved and the /e to include empty subdirs...I believe /s would ignore the empty subdirs in robocopy executions).

IMAGES
  - All Font Awesome icons are part of the FA 6 free library and used under their standard open license.
  - Any other icons were either purchased or freely downloaded from CreativeFabrica. 
  - The three fictious flyer tiles I created with Bing Image Creator and give full credit to. 
  - I used various compression tools although predominantly TinyPNG and ShortPixel, which gave comparable results, perhaps with a slight edge to ShortPixel, at least on filesize. I learned how to use Krita and explored creating custom scripts but discarded this as I was able to achieve a good amount with the built-in save options for .jpeg and .png files. I recall that flattening the image was helpful and there were some other little techniques to reduce file sizes. I learned a bit about .svg files although did not get into .svg paths as they hurt my brain when I looked at them. 
  - I used some images for inspo when creating my marquee and now-showing sings, mostly through Google/Bing image searches, but I did not copy any of those.
  - I used a few tools on PineTools when I was dealing with images earlier in my work, but I don't believe any of those made it to the final mockup.
  - I used the image resizer in PowerToys and Canva to resize some images and then optimized them with the tools mentioned above
  - I used Bing Image Creator to create the base images for the two fictious partner offers. I consulted chat to see what local businesses are often frequented by theater-goers and then made my two fictious businesses reflect those (Cerebral Brews is a reference to Intelligentsia Coffee and Gastronomer's Tavern is a reference to Exchequer Restaurant and Pub). I have only once been to Chicago as a child, so I havent' been to these myself. I also asked chat what are the most iconic items from the real businesses and created my fictious partner offers to reflect those items. I think these efforts would demonstrate to a client that I am committed to creating a deliverable that reflects the customers they serve.
  - I admit I had a little too much fun with fonts! :)
  - I created the QR code with QRGenerator.org's location tool (https://qrgenerator.org/location-qr/). 

COLORS
  - I learned a great deal about color in this assignment, such as hex, rgb, rgba, including alpha transparency. I learned less about the other formats but see that transparency is built into one of those. I used screen colorpickers from PowerToys, ShareX, and Krita to identify colors from the mockup images, then explored their hex values on ArtyClick's Color Name Finder and their Dictionary, then played with settings, explored colors and palettes, and attempted to create a palette that reflected the spirit of an iconic local theater site. I got the sense that Griot was a fictious name for Chicago Theater, so I learned a bit about the history to guide me in creating my own fictious content for the mockup. I did that because I imagine that, when submitting a mockup to a client, demonstrating that the devs understand the history, culture, and mission of their work/services/products will build rapport and confidence in that relationship. That in turn might open space for productive dialogue and perhaps more creative space, which is a part of the process I am quite enjoying so far.
  - Any color names lingering within the css comments are from ArtyClick


              
