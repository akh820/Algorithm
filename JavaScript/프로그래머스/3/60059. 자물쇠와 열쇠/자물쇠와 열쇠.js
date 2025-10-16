function solution(key, lock) {
    const N = key.length;
    const M = lock.length;
    
    const newLockSize = M + 2 * (N - 1);
    const newLock = Array.from({ length: newLockSize }, () => Array(newLockSize).fill(0));
    
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < M; j++) {
            newLock[N - 1 + i][N - 1 + j] = lock[i][j];
        }
    }
    
    const rotate = (keys) => {
        const m = keys.length;
        const rotatedKey = Array.from({ length: m }, () => Array(m).fill(0));
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < m; j++) {
                rotatedKey[j][m - 1 - i] = keys[i][j];
            }
        }
        return rotatedKey;
    }
    
    const check = (board) => {
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < M; j++) {
                if (board[N - 1 + i][N - 1 + j] !== 1) {
                    return false;
                }
            }
        }
        return true;
    }
    
    let currentKey = key;
    
    for (let rot = 0; rot < 4; rot++) {
        for (let l = 0; l < M + N - 1; l++) { 
            for (let m = 0; m < M + N - 1; m++) { 
                
                for (let i = 0; i < N; i++) { 
                    for (let j = 0; j < N; j++) { 
                        newLock[l + i][m + j] += currentKey[i][j];
                    }
                }
                
                if (check(newLock)) {
                    return true;
                }
                
                for (let i = 0; i < N; i++) {
                    for (let j = 0; j < N; j++) {
                        newLock[l + i][m + j] -= currentKey[i][j];
                    }
                }
            }
        }
        currentKey = rotate(currentKey);
    }
    
    return false;
}