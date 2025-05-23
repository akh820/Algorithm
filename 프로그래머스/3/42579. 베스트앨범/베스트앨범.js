function solution(genres, plays) {
    const genresObj = {};
    const sumObj = {};
    const answer = [];

    // 1. 장르별 곡 정보와 장르별 총 재생 수 저장
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        // 곡 정보: [곡 인덱스, 재생 수]
        if (genresObj[genre]) {
            genresObj[genre].push([i, play]);
        } else {
            genresObj[genre] = [[i, play]];
        }
        // 장르별 총 재생 수
        if (sumObj[genre]) {
            sumObj[genre] += play;
        } else {
            sumObj[genre] = play;
        }
    }

    // 2. 각 장르별로 곡 리스트를 재생 수 내림차순, 인덱스 오름차순으로 정렬
    const sortedGenresObj = Object.fromEntries(
        Object.entries(genresObj).map(([key, arr]) => [
            key,
            arr.sort((a, b) => b[1] === a[1] ? a[0] - b[0] : b[1] - a[1])
        ])
    );

    // 3. 장르별 총 재생 수 내림차순 정렬
    const sortedEntries = Object.entries(sumObj).sort((a, b) => b[1] - a[1]);

    // 4. 장르별로 최대 2곡씩 answer에 추가
    for (const [genre] of sortedEntries) {
        const songs = sortedGenresObj[genre];
        // 최대 2곡까지
        for (let i = 0; i < Math.min(2, songs.length); i++) {
            answer.push(songs[i][0]);
        }
    }

    return answer;
}
