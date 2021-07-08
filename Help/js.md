# JAVASCRIPT (INK)

## Miscellaneous JS

	- variables
		- `input` - form input
		- `navigator.platformType` - mobile/immobile (desktop)

	- functions
		- "all" original JS functions
		- all jQuery functions (as of v.2.1.1)
		- `ICON_COUNT(id, what, who)`
			+ id: what DOM Object should I locate
			+ what: what icon am I looking for, if left blank, how many total icons are in this DOM
			+ who: which DOM do I get if there are multiple copies, default is 0 (first)
		- `ICON_EXISTS(icon)`
			+ `icon` - what icon am I looking for
		- `ICON_GET(id)`
			+ `id` - locate this DOM and return the icon
		- `ICON_GET_CHILD(id)`
			+ `id` - get this DOM's child's icon
		- `ICON_INDEX(icon)`
			+ `icon` - what is this icon's name/number ; if given a name, returns a number; if given a number, returns a name
		- `ICON_SET(id, icon)` (*use this for one time icon changes*)
			+ `id` - get this DOM Object
			+ `icon` - make this the new icon
		- `ICON_SET_CHILD(id, child, icon)`
			+ `id` - get this DOM
			+ `child` - which child
			+ `icon` - make this the icon
		- `ICON_SWAP(id, icon)` (*use this for multiple icon changes, it will automatically swap between the original icon and new icon*)
			+ `id` - get this DOM Object
			+ `icon` - new icon to swap with
		- `LIST_ICONS()` (*use this to return a list of all icons*)
		- `NO_CSS_TAMPER([CSS])` (*use this for an over-ride, this will make the internal style-sheet over-ride the external style-sheet located at /SOURCE/RGB/mink.css; this function executes itself automatically onload (under the first style element)*)
			+ `CSS` - which style element should I get, if left blank, I will use the first, if any, style element I find
		- `DELETE_STORAGE(name)` | `Delete(name)`
			+ `name` - storage-point to delete
		- `GET_STORAGE(x)` | `Load(x, a, e, w)`
			+ `x` - what storage-point should I load, or if using `Load()` and there is a video/audio tail, load the media into the document
			+ `a` - text to display as an alternate
			+ `e` : does it need to be encoded? if so (e is true), encode x
			+ `w` : which DOM Object needs this
		- `GET_STORAGE_BOOLEAN(c)`
			+ `c` - does this storage-point exist
		- `GET_FORM_DATA()` (*use to return a variable `input` as an array; the `name` attribute of each input element become apart of `input`*)
		- `SET_STORAGE([name, value])` | `Save(value, [name])` (*you do not need to set name in `Save()`, it will automatically create one for you*)
			+ name - this is the storage-point's name, if name is left blank for Save() , the default name will be `{appname}.cache`
			+ value - this is the storage value
		- `FROM_{type}(size, to)` (*this function will return the 'true' data size, i.e. 1024 bytes will be 1 kb, 1000 bytes will return 1.024 kb*)
			+ `size` - express size as `to`
			+ `to` - to this size: [b, B, KB, MB, GB, TB, PB, EB, ZB, YB]
				- `b` - bit (2^-3 Bytes)
				- `B` - byte (2^0 Bytes) __or__ 8 bits (`00000000`)
				- `KB` - kilobyte (2^10 Bytes)
				- `MB` - megabyte (2^20 Bytes)
				- `GB` - gigabyte (2^30 Bytes)
				- `TB` - terabyte (2^40 Bytes)
				- `PB` - petabyte (2^50 Bytes)
				- `EB` - exabyte (2^60 Bytes)
				- `ZB` - zetabyte (2^70 Bytes)
				- `YB` - yottabyte (2^80 Bytes)
		- `AUTO_SIZE(n, f, s)` (will return a floored integer, i.e. 1023B will be 0KB)
			+ `n` - data size
			+ `f` - from this size, default is b (bits)
			+ `s` - scale, at which point should I make the data size type scale, default is 0.5
				- *if n@Size-Type > s, make n=n@Size-Type*
		- `Toast(data, t)`
			+ `data` - what to display
			+ `t` - timeout, in seconds (automatically converts into miliseconds) ; default is 3 (3s)
		- `lock = new PatternLock(id, [data])` (see [PatternLock](http://ignitersworld.com/lab/patternLock.html) for more help, (C) to Sudhanshu Yadav 2013)
			+ `lock` - new pattern lock to create
			+ `id` - the element's id attribute
			+ `data` - extra specifications

----

# Examples

## GET_FORM_DATA()

> form.html
```html
<form action="next.html" method="GET">
<!-- ... -->
<input name="username" type="text">
<input name="password" type="password">
</form>
```

> form.js
```javascript
GET_FORM_DATA()
```

*The `input` variable now holds: `input.username` and `input.password`, with a value of the users choice; you must use `method="GET"`*

----

## SET_STORAGE([name, value])

> foobar.js
```javascript
SET_STORAGE('name',input.username,'password',input.password);
```

*Note: the storage-points |name| and |password| exist, and won't expire*

----

## FROM_{type}(size, to)

```javascript
FROM_GB(1024, 'TB');
// Returns 1 (TB)
```

----

## AUTO_SIZE(n, f, s)

```javascript
AUTO_SIZE(5,'B')
// Returns 5B

AUTO_SIZE(1024,'B')
// Returns 1KB

AUTO_SIZE(9000000000,'B')
// Returns 8GB
```
