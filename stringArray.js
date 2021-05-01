function stringArray(arr) {
    let strs = '';
    for(let i = 0; i < arr.length; i++) {
        
        let s = arr[i]+'';
        //let digits = s.split(' ');
        let str = '';
        for(let j = 0; j < s.length; j++) {
            let dig = '';
            //return s.substring(j,j+1);
            switch(s.substring(j,j+1)) {
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
            //**Problem is here */
            //return dig;
            //console.log(dig);
            str+=dig;
            console.log(str);
        }
        //return str;
        //console.log(str);
        strs+= str;
        if (i < arr.length-1) {
            strs+= ",";
        }
    }
    return strs; 
}

module.exports = stringArray