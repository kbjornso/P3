//Requirment A
var arrAvg = function (nums) {
 var sumSoFar = 0;
 nums.forEach(function (value) {
 sumSoFar = sumSoFar + value;
 });
 return sumSoFar/nums.length;
};
//Requirment B
var arrMax = function(points) {
points.sort(function(a, b){return b-a}); 
return points[0];}

//Requirment C

var isMember = function(array, member) {
   if( array.indexOf(member) ==-1 ) return false;
   else return true;
}