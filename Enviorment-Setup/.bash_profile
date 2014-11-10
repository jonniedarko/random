
# [[ -s "$HOME/.profile" ]] && source "$HOME/.profile" # Load the default .profile

# [[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*
# export PATH=/usr/local/bin:$PATH
# cd() { builtin cd "$@" && ls; }

PATH=$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting
PATH=$PATH:/Applications/Android\ Studio.app/sdk/platform-tools #adding adb to path
alias restartDropBox="osascript -e 'tell application \"Dropbox\" to quit';killall Dropbox;open -a \"Dropbox\""


# function prompt {
#   local BLUE="\[\033[0;34m\]"
#   local DARK_BLUE="\[\033[1;34m\]"
#   local RED="\[\033[0;31m\]"
#   local DARK_RED="\[\033[1;31m\]"
#   local NO_COLOR="\[\033[0m\]"
#   case $TERM in
#     xterm*|rxvt*)
#       TITLEBAR='\[\033]0;\u@\h:\w\007\]'
#       ;;
#     *)
#       TITLEBAR=""
#       ;;
#   esac
#   PS1="\u@\h [\t]> "
#   PS1="${TITLEBAR}\
#   $BLUE\u@\h $RED[\t]>$NO_COLOR "
#   PS2='continue-> '
#   PS4='$0.$LINENO+ '
# }
# 

# regular colors
export tc_black='\[\e[0;30m\]'        # black
export tc_red='\[\e[0;31m\]'          # red
export tc_green='\[\e[0;32m\]'        # green
export tc_yellow='\[\e[0;33m\]'       # yellow
export tc_blue='\[\e[0;34m\]'         # blue
export tc_purple='\[\e[0;35m\]'       # purple
export tc_cyan='\[\e[0;36m\]'         # cyan
export tc_white='\[\e[0;37m\]'        # white
export default_color="\[\033[0m\]"    # default color


export PS1="${tc_purple}________________________________________________________________________________\n${default_color}| \u $tc_blue @ $default_color\h $tc_red in $default_color\w \n| $tc_cyan=>$default_color "
export PS2="| => "

alias cp='cp -iv'                           # Preferred 'cp' implementation
alias mv='mv -iv'                           # Preferred 'mv' implementation
alias mkdir='mkdir -pv'                     # Preferred 'mkdir' implementation
alias ll='ls -FGlAhp'                       # Preferred 'ls' implementation
alias less='less -FSRXc'                    # Preferred 'less' implementation
#cd() { builtin cd "$@"; ll; }               # Always list directory contents upon 'cd'
cd() { builtin cd "$@" && ls; }
alias cd..='cd ../'                         # Go back 1 directory level (for fast typers)
alias ..='cd ../'                           # Go back 1 directory level
alias ...='cd ../../'                       # Go back 2 directory levels
alias .3='cd ../../../'                     # Go back 3 directory levels
alias .4='cd ../../../../'                  # Go back 4 directory levels
alias .5='cd ../../../../../'               # Go back 5 directory levels
alias .6='cd ../../../../../../'            # Go back 6 directory levels
alias lr='ls -R | grep ":$" | sed -e '\''s/:$//'\'' -e '\''s/[^-][^\/]*\//--/g'\'' -e '\''s/^/   /'\'' -e '\''s/-/|/'\'' | less'
mans () {
        man $1 | grep -iC2 --color=always $2 | less
    }

