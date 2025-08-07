function solution(phone_book) {
    const sortedPhoneBook = phone_book.sort();
    // console.log('정렬된 전화번호부',sortedPhoneBook);
    for(let i = 0 ; i < sortedPhoneBook.length-1;i++){
        if(sortedPhoneBook[i+1].startsWith(sortedPhoneBook[i])) return false;
    }
    return true;
}