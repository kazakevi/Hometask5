
let today = new Date();
let count = 0;
for (let year = 2000; year<=today.getFullYear(); year++) {
    for (let month = 0; month<12; month++) {
        let day = new Date(year, month, 13);
        if (day<= today) {
            if (day.getDay() == 5) {
                count++;
            }          
        }
        else{ 
            break;
        }
    }
}

console.log(count);