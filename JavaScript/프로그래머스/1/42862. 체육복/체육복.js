function solution(n, lost, reserve) {
    const students = new Map();
    for (let i = 1; i <= n; i++) {
        students.set(i, 1);
    }
    lost.forEach(e => students.set(e, students.get(e) - 1));
    reserve.forEach(e => students.set(e, students.get(e) + 1));

    for (let i = 1; i <= n; i++) {
        if (students.get(i) === 2 && students.get(i - 1) === 0) {
            students.set(i, 1);
            students.set(i - 1, 1);
        }
        else if (students.get(i) === 2 && students.get(i + 1) === 0) {
            students.set(i, 1);
            students.set(i + 1, 1);
        }
    }

    let answer = 0;
    for (const count of students.values()) {
        if (count >= 1) {
            answer++;
        }
    }
    
    return answer;
}