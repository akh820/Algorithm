import java.util.*;

class Solution {
    public int[] solution(String[] genres, int[] plays) {
        
        HashMap<String,Integer> sumOfPlayCount = new HashMap<>();
        HashMap<String,List<int[]>> infoOfSongs = new HashMap<>();
        
        for(int i = 0; i < genres.length ; i++){
            String genre = genres[i];
            int play = plays[i];
            
            sumOfPlayCount.put(genre, sumOfPlayCount.getOrDefault(genre, 0) + play);
            
            infoOfSongs.computeIfAbsent(genre, k -> new ArrayList<>()).add(new int[] {i, play});
            
        }
        
        //분류용 값 ?
        List<String> nameOfGenres = new ArrayList<>(sumOfPlayCount.keySet());
        nameOfGenres.sort( (a,b) -> sumOfPlayCount.get(b) - sumOfPlayCount.get(a) );
        
        List<Integer> bestAlbum = new ArrayList<>();
        
        nameOfGenres.forEach( genre -> {
            infoOfSongs.get(genre).stream()
                .sorted((a,b) -> b[1] != a[1] ? b[1] - a[1] : a[0] - b[0])
                .limit(2)
                .forEach( e -> bestAlbum.add(e[0]));
        });
        
        // nameOfGenres.forEach( e -> {
        //     System.out.println("element: " + e);
        // });
        
        // sumOfPlayCount.forEach( (key,value) -> {
        //     System.out.println("key: " + key + " / value: " + value);
        // });
        
        // infoOfSongs.forEach( (genre, list) -> {
        //     System.out.println("장르: " + genre);
        //     list.forEach( intList -> {
        //         System.out.println("고유번호 : " + intList[0] + "/ 곡수 : " + intList[1]);
        //     });
        // });
        
        return bestAlbum.stream().mapToInt(i -> i).toArray();
        
    }
}