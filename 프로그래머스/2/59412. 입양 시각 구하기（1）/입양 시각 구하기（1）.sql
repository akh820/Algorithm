SELECT to_number(to_char(datetime,'HH24')) as HOUR, count(*) as count
from animal_outs
where to_char(datetime,'HH24:mi') between '09:00' and '19:59'
group by to_char(datetime,'HH24')
order by HOUR asc
;

