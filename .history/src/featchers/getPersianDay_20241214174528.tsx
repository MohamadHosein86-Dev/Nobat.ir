function getToday() {

    const todayPershian = ["یکشنبه" , 'دوشنبه','سه‌شنبه' ,'چهارشنبه' ,  'پنجشنبه' ,'جمعه' ,'شنبه'];
    const todayDate = new Date();
    const todayNumber = todayDate.getDay();
    const Today = todayPershian[todayNumber];
    
    return {Today , todayNumber} ; 
    
}

export default function findNextAvalableDay(AvalableDays:any) {
    const today = getToday();
    const daysInPersian = ['شنبه',"یکشنبه" , 'دوشنبه','سه‌شنبه' ,'چهارشنبه' ,  'پنجشنبه' ,'جمعه'];
    const todayIndex = today.todayNumber;
    
    const avalableDayDoctor = AvalableDays.map((day)=> daysInPersian.includes(day));

    console.log(avalableDayDoctor);
    

}