SELECT B.USER_ID, B.NICKNAME, 
        CONCAT(B.CITY," ",B.STREET_ADDRESS1," ",B.STREET_ADDRESS2) AS '전체주소',
        CONCAT(SUBSTRING(TLNO, 1, 3), '-', SUBSTRING(TLNO, 4, 4), '-', SUBSTRING(TLNO, 8, 4))
        AS '전화번호'
FROM USED_GOODS_BOARD A
JOIN USED_GOODS_USER B ON A.WRITER_ID = B.USER_ID
GROUP BY A.WRITER_ID HAVING COUNT(A.WRITER_ID) >= 3
ORDER BY 1 DESC