export default function getPersianDay(dayIndex:number) {
    
    const weekDays=["شنبه" , "یکشنبه" , "دوشنبه" , "سه شنبه" , "چهارشنبه" , "پنج شنبه" ,"جمعه"];
    
    return weekDays[dayIndex];
}