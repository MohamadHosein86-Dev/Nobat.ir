function getToday() {
    const daysInPersian = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
    const today = new Date();
    const todayNumber = today.getDay();
    console.log(daysInPersian[todayNumber]);
    
}

export default function findNextAvalableDay(AvalableDays:Array<string>) {
    getToday();
}