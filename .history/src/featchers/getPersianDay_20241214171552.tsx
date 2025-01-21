function getToday() {
    const weekDays=["شنبه" , "یکشنبه" , "دوشنبه" , "سه شنبه" , "چهارشنبه" , "پنج شنبه" ,"جمعه"];
    const today = new Date();
    console.log(today);
    
}

export default function findNextAvalableDay(AvalableDays:Array<string>) {
    getToday();
}