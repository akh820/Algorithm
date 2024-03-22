select round(avg(t1.length),2) as AVERAGE_LENGTH
from (select ifnull(length, 10) as length 
      from fish_info) as t1
;