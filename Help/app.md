# Building Mink apps

*Note: Feel free to change anything in this project under the SOURCE directory.*

----

### Needed:

- Knowledge of:
	+ JS
	+ HTML5
	+ CSS3

- Software:
	+ Text editor
	+ HTML5 enabled browser
	+ JS enabled browser
	+ CSS3 enabled browser

----

### Automatically handled by Mink:

1. FULL SCREEN:
	- If the screen is scrolled past the master button, the master button area (system tray) is overlapped (thus 'hiding' it), as well as the notification area.¹

2. TIME UPDATE:
	- The current time will be notified every 60s, for 5s.¹

----

### Step-by-step instructions on building an app:

1. Create a sub-directory in the `/SOURCE/APP` directory, and inside of it, a group of files: `app.html` `app.js` `app.css` (and if needed, a sub-directory `/mof` to hold extra data: i.e. form data, form submission pages, cache pages, etc.)

2. Name the directory `com.{company}.{name}` (like Android apps)

3. Build your app as `app.html`

4. Link your app to the Mink OS:
	- In the index.html file, add the following:
		```html
		<a href="APP/com.company.name/app.tml" app>
		Name*
		</a>
		<br /><br />
		```
	- Or:
		+ While running the Mink OS, select `Settings | Apps | Add` and enter the company and name of the app

*Note: If you clear browser cookies ALL app data, locations, and references will be deleted if you choose not to do § i
*Note: ¹ is to be updated (either fixing, or creating)
*Note: be sure to include the following in your app.html file if you need the resources: BOILER_PLATES/app.html
