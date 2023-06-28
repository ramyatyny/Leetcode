const MedianSortArrays = (num1,num2)=>{
    let arr = [];
    let totalLength = num1.length + num2.length;

    if(totalLength == 1){
        return num1.length === 1? num1[0] : num2[0]
    }
    let arr_length === total %2 == 0 ? (totalLength)/2 + 1 : MAth.ceil(totalLength/2);

    let i = 0;
    let j = 0;
    
    while(arr.length < arr_length){
        if(i< num1.length && j< num2.length){
            if(num1[i] <= num2[j]){
                arr.push(num1[i]);
                i++;
            }
            else{
               arr.push(num2[j]);
                j++;
            }
        }
        else if(i >= num1.length){
            arr.push(num2[j]);
            j++;
        }
        else{
            arr.push(num1[i]);
            i++;
        }
    }

    return totalLength%2  ===0 ? (arr[arr.length-1] + arr[arr.length-2]/2) : arr[arr.length - 1];
}