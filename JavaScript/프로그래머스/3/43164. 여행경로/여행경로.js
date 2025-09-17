function solution(tickets) {
    const graph = {};
    for(const [start, end] of tickets){
        if(!graph[start]){
            graph[start] = [];
        } 
        graph[start].push(end);
    }
    
    for(const key in graph){
        graph[key].sort();
    }
    
    const path = [];
    
    dfs("ICN");
    
    function dfs(airport){
        const destinations = graph[airport];
        
        while(destinations && destinations.length > 0){
            const nextDestination = destinations.shift();
            dfs(nextDestination);
        }
        path.unshift(airport);
    }

    return path;
}