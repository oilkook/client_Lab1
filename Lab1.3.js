 //โปรแกรม คำนวณปริมาตรของพีระมิด
function getPyramidAreal(length,width,height) {   
    let baseArea = length * width;
    let pyramidVolume = 1/3 * baseArea * height;
    return pyramidVolume;
}
let arae = getPyramidAreal(2,2,3);
console.log('Area = '+ arae);