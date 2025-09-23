function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;

    const timeToMinutes = (time) => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    };

    const parking = new Map();

    const totalTime = new Map();

    records.forEach(record => {
        const [time, carNumber, type] = record.split(' ');
        const minutes = timeToMinutes(time);

        if (type === 'IN') {
            parking.set(carNumber, minutes);
        } else { 
            const inTime = parking.get(carNumber);
            const parkedTime = minutes - inTime;

            totalTime.set(carNumber, (totalTime.get(carNumber) || 0) + parkedTime);

            parking.delete(carNumber);
        }
    });

    const lastTime = timeToMinutes('23:59');
    for (const [carNumber, inTime] of parking.entries()) {
        const parkedTime = lastTime - inTime;
        totalTime.set(carNumber, (totalTime.get(carNumber) || 0) + parkedTime);
    }

    const sortedCarNumbers = Array.from(totalTime.keys()).sort();

    const answer = sortedCarNumbers.map(carNumber => {
        const time = totalTime.get(carNumber);

        if (time <= baseTime) {
            return baseFee;
        }

        const extraTime = time - baseTime;
        const extraFee = Math.ceil(extraTime / unitTime) * unitFee;
        
        return baseFee + extraFee;
    });

    return answer;
}