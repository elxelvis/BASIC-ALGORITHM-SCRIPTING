const titleCase = str =>
str.split(' ')
   .map(element => element.slice(0,1).toUpperCase() +
                    element.slice(1).toLowerCase())
   .join(' ')                 


titleCase("I'm a little tea pot");