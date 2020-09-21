export function cleanData(data) {
    
    let lastYear = (new Date().getFullYear() - 1).toString();
    let currentYear = (new Date().getFullYear()).toString();

    let arrayObj = Object.values(data.data);

    let pastYearKeys = Object.keys(arrayObj[0]);
    let pastYearValues = Object.values(arrayObj[0]);
    
    let currYearKeys = Object.keys(arrayObj[1]);
    let currYearValues = Object.values(arrayObj[1]);

   for(var i = 0; i < pastYearKeys.length; i++) {
       pastYearKeys[i] = pastYearKeys[i] + "/" + lastYear;
   }

   for(i = 0; i < currYearKeys.length; i++) {
        currYearKeys[i] = currYearKeys[i] + "/" + currentYear;
    }  

    let pastYearArrVal = [];
    let currentYearArrVal = [];

    pastYearValues.forEach((month) => {
        pastYearArrVal.push(Object.values(month).reduce((a,b) => a + b));
    })

    currYearValues.forEach((month) => {
        currentYearArrVal.push(Object.values(month).reduce((a,b) => a + b));
    })
   
    let labels = pastYearKeys.concat(currYearKeys);
    let labelData = pastYearArrVal.concat(currentYearArrVal);

    return {labels: labels, labelData: labelData};
}