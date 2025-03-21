function getCountElement(arr){
    const countObject = {};
    arr.forEach(item => {
        if (countObject[item]) {
            countObject[item]++;
        } else {
            countObject[item] = 1;
        }
    });
    return countObject;
}