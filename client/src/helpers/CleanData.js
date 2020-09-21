export function cleanData(data) {
    //console.log(Object.values(data.data));
    let lastYear = (new Date().getFullYear() - 1).toString();
    let currentYear = (new Date().getFullYear()).toString();

    // console.log(lastYear);
    // console.log(currentYear);

    let arrayObj = Object.values(data.data);

    let pastYearKeys = Object.keys(arrayObj[0]);
    let pastYearValues = Object.values(arrayObj[0]);
    
    let currYearKeys = Object.keys(arrayObj[1]);
    let currYearValues = Object.values(arrayObj[1]);

   for(var i = 0; i < pastYearKeys.length; i++) {
       pastYearKeys[i] = pastYearKeys[i] + "/" + lastYear;
   }

   for(var i = 0; i < currYearKeys.length; i++) {
    currYearKeys[i] = currYearKeys[i] + "/" + currentYear;
}

    

    // console.log("past year");
    // console.log(pastYearKeys);

    // console.log("current year");
    // console.log(currYearKeys);
    
    let pastYearArrVal = [];
    let currentYearArrVal = [];

    pastYearValues.forEach((month) => {
        pastYearArrVal.push(Object.values(month).reduce((a,b) => a + b));
    })

    currYearValues.forEach((month) => {
        currentYearArrVal.push(Object.values(month).reduce((a,b) => a + b));
    })

    // console.log("past year total");
    // console.log(pastYearArrVal);
    // console.log("current year total");
    // console.log(currentYearArrVal);

    let labels = pastYearKeys.concat(currYearKeys);
    let labelData = pastYearArrVal.concat(currentYearArrVal);

    // console.log("labels:");
    // console.log(labels);

    // console.log("labelData: ");
    // console.log(labelData);

    return {labels: labels, labelData: labelData};
}