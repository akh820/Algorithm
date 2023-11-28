select t2.flavor
from (  select flavor f, sum(total_order) t
        from july
        group by flavor ) t1
join first_half t2 on t2.flavor = t1.f
group by t2.flavor
order by sum(t1.t + t2.total_order) desc
fetch first 3 rows only
;