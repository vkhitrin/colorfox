# Colorfox

Work in progress. A lot of things needed to be tweaked/tested.

A minimal color adaptive theme (using [VivaldiFox](https://github.com/nt1m/vivaldi-fox) for Firefox Quantum(57+).

![Colorfox](https://i.imgur.com/JHKahOi.gif)

## Tweaks

Settings used in the gif:

![Customization tab](https://i.imgur.com/YRXyuTN.png)

In order for custom SVG to be color adaptive, navigate to `about:config` and set `svg.context-properties.content.enabled` to `true` (should be included in user.js).

## Installation

Copy the contents of this repo to your Firefox profile (to view profile browse to `about:support` and Locate the value of `Profile Folder` and restart Firefox.

To uninstall Firefox CSS, remove the contents of `chrome` directory in the profile folder.

to uninstall VivaldiFox custom settings, remove the file `<profile_folder>/browser-extension-data/@vivaldi-fox/storage.js`.

## Compatability

Tested on:

* MacOS High Sierra 10.13.6 with Firefox 62.0

* MacOS Mojave 10.14 with Firefox 62.0

## Credits

[VivaldiFox](https://github.com/nt1m/vivaldi-fox)

[Feather](https://feathericons.com/)
