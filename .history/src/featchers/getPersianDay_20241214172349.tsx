function getToday() {
    const daysInPersian = ['شنبه', 'جمعه', 'پنجشنبه', 'سه‌شنبه', 'چهارشنبه', ];
    const today = new Date();
    const todayNumber = today.getDay();
    console.log(daysInPersian[todayNumber]);
    
}

export default function findNextAvalableDay(AvalableDays:Array<string>) {
    getToday();
}