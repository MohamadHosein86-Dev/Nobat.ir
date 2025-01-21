function getToday() {
    const daysInPersian = ["یکشنبه" , 'دوشنبه','سه‌شنبه' ,'چهارشنبه' ,  'پنجشنبه' ,'جمعه' ,'شنبه',];
    const today = new Date();
    const todayNumber = today.getDay();
    
    console.log(daysInPersian[todayNumber]);
    
}

export default function findNextAvalableDay(AvalableDays:Array<string>) {
    getToday();
}