function totalPhoneBill (callsMadeAndSmss){
  var phoneActivities = callsMadeAndSmss.split(',');
  var allPhoneActivities = 0;
  
  for (let i=0; i<phoneActivities.length; i++){
    var listOfAllActivities = phoneActivities[i].trim();
    if(listOfAllActivities.startsWith('call')){
      allPhoneActivities += 2.75;
    }
     else if (listOfAllActivities.startsWith('sms')){
       allPhoneActivities += 0.65;
     }
  }
  return "R"+allPhoneActivities.toFixed(2);
}

console.log(totalPhoneBill('call, sms, call, sms, sms'));