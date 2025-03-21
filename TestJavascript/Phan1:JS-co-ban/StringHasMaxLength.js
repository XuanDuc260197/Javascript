function getStringHasMaxLength (arr){
    let maxLength=0;
    arr.forEach((element) => {
        if(element.length<maxLength){
            maxLength=element.length;
        }
    });
    return arr.filter(str =>str.length===maxLength);
}