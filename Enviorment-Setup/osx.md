###Unhide the Library folder
Mac OS X now hides the ~/Library folder by default, but Mavericks now makes it easer to make it visible again. With the Finder as the foremost application, press shift-command-H and then command-J, which will bring up a window that configures Finder view options. Check the “Show Library Folder” and close the window. Thanks to the Apple engineers that made this process more user-friendly.

###Bash Setup
`vim ~/.bash_profile`

```bash
# Set architecture flags
export ARCHFLAGS="-arch x86_64"
# Ensure user-installed binaries take precedence
export PATH=/usr/local/bin:$PATH
# Load .bashrc if it exists
test -f ~/.bashrc && source ~/.bashrc
```
###HomeBrew
####Install
download using command `ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"`
run `brew doctor` & `brew update`

Some Homebrew formulae recommend post-installation steps. For example, to activate bash completion, add the following to your ~/.bash_profile:
```bash
if [ -f $(brew --prefix)/etc/bash_completion ]; then
    . $(brew --prefix)/etc/bash_completion
fi
```
