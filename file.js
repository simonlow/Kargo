function stringArray(arr) {
    let strs = [];
    for(let i = 0; i < arr.length; i++) {
        let digits = arr[i].split();
        let str = '';
        for(let j = 0; j < digits.length; j++) {
            let dig = '';
            switch(digits[j]) {
                case 0:
                    dig = 'Zero';
                case 1: 
                    dig = 'One';
                case 2:
                    dig = 'Two';
                case 3: 
                    dig = 'Three';
                case 4:
                    dig = 'Four';
                case 5:
                    dig = 'Five';
                case 6:
                    dig = 'Six';
                case 7:
                    dig = 'Seven';
                case 8:
                    dig = 'Eight';
                case 9:
                    dig = 'Nine';
            }
            str.concat(dig);
        }
        strs[i] = str;
    }
}