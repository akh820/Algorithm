select B.food_type, B.rest_id, B.rest_name, B.favorites
from (  select food_type, max(favorites) as c
        from rest_info
        group by food_type) A, rest_info B
where A.food_type = B.food_type
and A.c = B.favorites
order by B.food_type desc

