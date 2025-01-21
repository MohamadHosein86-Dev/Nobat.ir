function getToday() {
    const weekDays=["شنبه" , "یکشنبه" , "دوشنبه" , "سه شنبه" , "چهارشنبه" , "پنج شنبه" ,"جمعه"];
    const today = new Date();
    const todayNumber = today.getDay();
    console.log(todayNumber);
    
}

export default function findNextAvalableDay(AvalableDays:Array<string>) {
    getToday();
}