

function getToday() {
    const todayPershian = ["یکشنبه", 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
    const todayDate = new Date();
    const todayNumber = todayDate.getDay();
    const Today = todayPershian[todayNumber];
    
    return { Today, todayNumber };
}


export default function findNextAvailableDaysInWeek(availableDays: Array<string>) {
    const today = getToday();
    const daysInPersian = ["یکشنبه", 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
    const todayIndex = today.todayNumber;
    
    const availableDayDoctor = availableDays.map((day) => daysInPersian.indexOf(day));
    const nextAvailableDays = [];
    console.log(availableDayDoctor);
    
    for (let i = 0; i <= 6 ; i++) { 
        const nextDayIndex = todayIndex + i;
        
        console.log( nextAvailableDays);
        if (nextDayIndex < 6 && availableDayDoctor.includes(nextDayIndex)) { 
            const nextDay = daysInPersian[nextDayIndex];
            nextAvailableDays.push({ nextDay, nextDayIndex });
        }
    }

    return nextAvailableDays;
}
