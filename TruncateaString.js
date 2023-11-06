function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    let result = ''
    for (let i = 0; i < num; i++){
      result += str[i]
    }
    return result + '...'
   }
   
   truncateString("A-tisket a-tasket A green and yellow basket", 8);