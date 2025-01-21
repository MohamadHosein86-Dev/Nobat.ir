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

    for (let i = 1; i <= 6 ; i++) { // فقط روزهای باقی‌مانده از هفته را بررسی می‌کنیم
        const nextDayIndex = todayIndex + i;

        if ( availableDayDoctor.includes(nextDayIndex)) { // فقط روزهای این هفته را در نظر بگیریم
            const nextDay = daysInPersian[nextDayIndex];
            nextAvailableDays.push({ nextDay, nextDayIndex });
        }
    }
    
    return nextAvailableDays;
}
