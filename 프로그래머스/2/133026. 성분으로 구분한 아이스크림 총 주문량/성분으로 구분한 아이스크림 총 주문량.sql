SELECT b.ingredient_type, sum(total_order) total_order
from first_half A
join icecream_info B on A.flavor = B.flavor
group by b.ingredient_type
order by total_order asc