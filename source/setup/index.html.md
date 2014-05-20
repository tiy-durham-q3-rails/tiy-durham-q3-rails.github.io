---
layout: page
---

# Required setup

* Install [Atom](atom.html)
  * Download Atom from [the Atom website](https://atom.io/).
  * Install and run it.
  * Run Atom > Install Shell Commands.
  * Run Atom > Preferences and install the Atom Lint package.
* Install Google Chrome ([download](https://www.google.com/intl/en/chrome/browser/))
* Install Alfred ([download](http://www.alfredapp.com/))
    * Optional but useful
* Install ScreenHero ([download](http://screenhero.com/download.html))
    * You will have to sign up for an account
    * Add "cndreisbach" as a contact
* Install [XCode Command Line Tools](xcode.html)
    * Go to the [Apple Developer Downloads site](https://developer.apple.com/downloads/).
    * You will have to register.
    * Look for "Command Line Tools (OS X Mavericks) for XCode."
    * Download it, run it, and follow all the prompts.
    * Your teacher may provide this file to reduce downloads.
* Install [Homebrew](homebrew.html)
    * Open up Terminal
    * Paste `ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`
    * Run `brew doctor`
* Install rbenv & ruby-build
    * `brew install ruby-build rbenv`
    * `echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.profile`
* Install ruby 2.1.1
    * Close and reopen iTerm.
    * `rbenv install 2.1.1`
    * Stretch
    * `rbenv global 2.1.1`
* Install pry and highline gems
    * `gem install pry highline`
* Install nodejs
    * `brew install nodejs`
* Install git
    * `brew install git`
* Create an SSH key
    * `ssh-keygen`
* Register for a [GitHub](https://github.com) account
