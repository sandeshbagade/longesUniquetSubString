function longestSubstring(s) {
    let count = 0;
    let strInd = {start:0,end:0}
    let i = 0;
    let j = 0;
    let n = s.length;
    let set = new Set();

    while (i < n && j < n) {
        let char = s.charAt(j);
        if(!set.has(char)) {
            set.add(char);
            j++;
            if(count<j - i){
            if(count>strInd.end-strInd.start){
              strInd = {start:i,end:j-1}
            }
            count = j - i
            }
        } else {
            set.delete(s.charAt(i));
            i++;
        }
    }
    return s.substr(strInd.start, strInd.end)
  
}
console.log(longestSubstring('abacdjeabee'))
