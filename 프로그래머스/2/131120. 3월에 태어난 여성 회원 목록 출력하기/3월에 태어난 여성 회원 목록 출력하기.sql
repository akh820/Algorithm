SELECT MEMBER_ID, MEMBER_NAME, GENDER, DATE_FORMAT(DATE_OF_BIRTH, '%Y-%m-%d') as DATE_OF_BIRTH
FROM MEMBER_PROFILE
WHERE DATE_FORMAT(DATE_OF_BIRTH, '%m') LIKE '%3%'
AND TLNO IS NOT NULL
AND GENDER LIKE '%W%'
ORDER BY 1 ASC;