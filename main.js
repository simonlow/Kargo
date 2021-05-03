function stringArray(arr) {
    let strs = '';
    for(let i = 0; i < arr.length; i++) {
        let s = arr[i]+''; //making number a string
        let str = '';
        for(let j = 0; j < s.length; j++) {
            let dig = '';
            switch(s.substring(j,j+1)) { //converting digit to word
                case "0":
                    dig = "Zero";
                    break;
                case "1": 
                    dig = "One";
                    break;
                case "2":
                    dig = 'Two';
                    break;
                case "3": 
                    dig = 'Three';
                    break;
                case "4":
                    dig = 'Four';
                    break;
                case "5":
                    dig = 'Five';
                    break;
                case "6":
                    dig = 'Six';
                    break;
                case "7":
                    dig = 'Seven';
                    break;
                case "8":
                    dig = 'Eight';
                    break;
                case "9":
                    dig = 'Nine';
                    break;
                default:
                    dig = "nonumber";
                    break;
            }
            str+=dig; //adding each digit to the number-word
        }
        strs+= str; //adding number-words to list
        if (i < arr.length-1) { //adding a comma if it's not the last number
            strs+= ",";
        }
    }
    return strs; 
}

module.exports = stringArray