#my '.inputrc' file

add the following to 

```bash
"\e[A": history-search-backward
"\e[B": history-search-forward
set show-all-if-ambiguous on
set completion-ignore-case on
```

This allows you to search through your history using the up and down arrows … i.e. type "cd /" and 
press the up arrow and you'll search through everything in your history that starts with "cd /
