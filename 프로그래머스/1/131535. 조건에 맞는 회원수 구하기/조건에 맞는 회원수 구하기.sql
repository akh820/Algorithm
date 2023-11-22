-- 별칭을 USERS로 해주고 where조건절에 TO_CHAR
select count(user_id) as USERS
from user_info
where to_char(joined,'YYYY') = '2021' 
and age between 20 and 29
-- 여기서 betweend은 이상 이하
-- where to_char(joined,'YYYY') = '2021'
