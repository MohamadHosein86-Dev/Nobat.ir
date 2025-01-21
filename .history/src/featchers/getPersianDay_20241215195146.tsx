function getToday() {

    const todayPershian = ["یکشنبه" , 'دوشنبه','سه‌شنبه' ,'چهارشنبه' ,  'پنجشنبه' ,'جمعه' ,'شنبه'];
    const todayDate = new Date();
    const todayNumber = todayDate.getDay();
    const Today = todayPershian[todayNumber];
    
    return {Today , todayNumber} ; 
    
}

export default function findNextAvalableDay(AvalableDays:Array<string>) {
    const today = getToday();
    const daysInPersian = ["یکشنبه" , 'دوشنبه','سه‌شنبه' ,'چهارشنبه' ,  'پنجشنبه' ,'جمعه' ,'شنبه'];
    const todayIndex = today.todayNumber;
    
    const avalableDayDoctor = AvalableDays.map((day)=> daysInPersian.indexOf(day));
    
    const avalableDayes = [];

    for (let i = 1; i <= 6; i++) {
        const nextDayIndex = (todayIndex + i) % 7;

        if(avalableDayDoctor.includes(nextDayIndex)){
            const nextDay = daysInPersian[nextDayIndex];
            avalableDayDoctor.push({ne})
            
        }
        return null;
    }
    

}