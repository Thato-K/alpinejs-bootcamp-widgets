function enoughAirtime(projectedUsage, airtimeLeft){
var airtimeUsageList = projectedUsage.split(',');
var totalBill = 0;

for(let i=0; i<airtimeUsageList.length; i++){
  var airtUsageListRemoSpa = airtimeUsageList[i].trim();
  if(airtUsageListRemoSpa.startsWith('call')){
    totalBill += 1.88;
  }
  else if(airtUsageListRemoSpa.startsWith('sms')){
    totalBill += 0.75;
  }
  else if(airtUsageListRemoSpa.startsWith('data')){
    totalBill += 12;
 }
}
if(airtimeLeft-totalBill > 0){
    return "R"+(airtimeLeft-totalBill).toFixed(2);
  }
else{
  cost = 0;
  return "R"+cost.toFixed(2);
}
}
console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50));