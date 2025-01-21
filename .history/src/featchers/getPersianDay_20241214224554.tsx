function getToday() {

    const todayPershian = ["یکشنبه" , 'دوشنبه','سه‌شنبه' ,'چهارشنبه' ,  'پنجشنبه' ,'جمعه' ,'شنبه'];
    const todayDate = new Date();
    const todayNumber = todayDate.getDay();
    const Today = todayPershian[todayNumber];
    
    return {Today , todayNumber} ; 
    
}

export default function findNextAvalableDay(AvalableDays:Array<number | string>) {
    const today = getToday();
    const daysInPersian = ['شنبه',"یکشنبه" , 'دوشنبه','سه‌شنبه' ,'چهارشنبه' ,  'پنجشنبه' ,'جمعه'];
    const todayIndex = today.todayNumber;
    
    const avalableDayDoctor = AvalableDays.map((day)=> daysInPersian.indexOf(day));
    console.log(avalableDayDoctor);
    

    for (let i = 0; i <= 7; i++) {
        const nextDayIndex = (todayIndex + i) % 7;
        console.log(nextDayIndex);
        
        console.log(avalableDayDoctor.includes(nextDayIndex));
        if(avalableDayDoctor.includes(nextDayIndex)){
            const nextDay = daysInPersian[nextDayIndex];
            
            return { nextDay , nextDayIndex};
            
        }
        return null;
    }
    

}