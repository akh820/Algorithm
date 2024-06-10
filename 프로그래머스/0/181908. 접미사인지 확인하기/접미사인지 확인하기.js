function solution(my_string, is_suffix) {
    if (my_string.length < is_suffix.length) return 0;
    
    let suffix = my_string.slice(-is_suffix.length);
    if (suffix === is_suffix) return 1;
    
    return 0;
}
