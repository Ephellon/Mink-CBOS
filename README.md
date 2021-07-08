# Mink CBOS (_Custom Browser Operating System_): HTML5/CSS3/JS OS

> Developers, scroll past __Usage § IV__

- Author:  Ephellon Dantzler
- Contact: [minkcbos@gmail.com](mailto:minkcbos@gmail.com)
- Support: JavaScript, HTML5, CSS3
- Aliases:
	+ HTML5: Muffin Stack (MINK)
	+ JS: Mink (INK)
	+ CSS3: Rose Garden Basic (RGB)
	
----

# Guidelines/Instructions:
## Your `app.html` file must contain:

```html
<link rel="stylesheet" type="text/css" href="app.css"/>
<script type="text/javascript" src="../res/jquery.js"></script>
<script type="text/javascript" src="../res/mink.js"></script>
```

## Your `mof/{Application Name}.html` file(s) must contain:

```html
<link rel="stylesheet" type="text/css" href="../app.css"/>
<script type="text/javascript" src="../../res/jquery.js"></script>
<script type="text/javascript" src="../../res/mink.js"></script>
```

## Your `app.css` file must contain:

```css
@import url('../res/mink.css');
@import url('../res/icons-white.css');
```

----

# Beginning

1. You must have a browser that supports HTML5, JS, and CSS3.
2. When you click on `mink.html`, open the file as a web page (and choose your browser as the default program/application for the action)

----

# Startup

1. Open the `/SOURCE` directory.
2. Select `mink.html` as a web page.
3. Use the page as if it were an emulator (phone of its' own).

----

# Usage

1. Open `mink.html`
2. Click on an application to execute it.
3. Press the "Master Button" located at the bottom of the page to return to the previous screen, or exit the app, respectively.
4. Hold the "Master Button" located at the bottom of the page to close all applications.

----

# DEVELOPERS

- Building apps
	1. Body of apps: use HTML5
	2. Behavior of apps: use JS
	3. Styling apps: use CSS 3

- Data manipulation
	1. Saving
	2. Loading
	3. Deleting
	4. Merging/Concating

- Sharing content
	1. App to App
	2. App to Web
	3. Web to App
