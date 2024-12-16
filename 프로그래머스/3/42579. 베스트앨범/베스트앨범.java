import java.util.*;

class Solution {
    public int[] solution(String[] genres, int[] plays) {
        
        Map<String,Integer> genrePlayCount = new HashMap<>();
        Map<String,List<int[]>> genreSongs = new HashMap<>();
        
        for(int i = 0; i < genres.length; i++){
            String genre = genres[i];
            int play = plays[i];
            
            genrePlayCount.put(genre, genrePlayCount.getOrDefault(genre, 0) + play);
            genreSongs.computeIfAbsent(genre, key -> new ArrayList<>() ).add(new int[]{i, play});
        }
        
        List<String> sortedGenres = new ArrayList<>(genrePlayCount.keySet());
        sortedGenres.sort((a,b) -> genrePlayCount.get(b) - genrePlayCount.get(a));
        // sortedGenres.forEach(genre -> System.out.println("Genre: " + genre));
        
        List<Integer> bestAlbum = new ArrayList<>();
        sortedGenres.forEach( genre -> {
           genreSongs.get(genre).stream()
               .sorted((a,b) -> b[1] != a[1] ? b[1] - a[1] : a[0] - b[0])
               .limit(2)
               .forEach(song -> bestAlbum.add(song[0]));
        });
        
        
        // genrePlayCount.forEach((key, value) -> {
        //       System.out.println("key: " + key + " / value: " + value);
        //     }
        // );
        
        // genreSongs.forEach((genre,songs) -> {
        //    System.out.println("장르 : " + genre);
        //     songs.forEach(song -> {
        //         System.out.println("번호: " + song[0] + "/ 곡수: " + song[1]);
        //     });
        // });
        
        return bestAlbum.stream().mapToInt( i -> i).toArray(); //mapToInt() Integer객체 언박싱
    }
}