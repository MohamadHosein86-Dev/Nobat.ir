function getToday() {
    const daysInPersian = ['شنبه', 'جمعه', 'پنجشنبه', 'چهارشنبه' ,'سه‌شنبه' , 'دوشنبه' ,"یکشنبه"];
    const today = new Date();
    const todayNumber = today.getDay();
    console.log(todayNumber);
    
    console.log(daysInPersian[todayNumber]);
    
}

export default function findNextAvalableDay(AvalableDays:Array<string>) {
    getToday();
}