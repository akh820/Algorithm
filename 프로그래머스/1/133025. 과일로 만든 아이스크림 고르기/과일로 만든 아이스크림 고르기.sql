SELECT a.flavor
from icecream_info A
join first_half B on B.flavor = A.flavor
where a.ingredient_type like '%fruit_based%'
and B.total_order > 3000
order by b.total_order desc