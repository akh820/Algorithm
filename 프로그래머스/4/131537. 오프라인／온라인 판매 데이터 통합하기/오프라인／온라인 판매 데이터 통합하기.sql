(select to_char(sales_date,'yyyy-MM-dd') as sales_date, product_id, user_id, sales_amount
from online_sale
where to_char(sales_date,'MM') = '03'

union all

select to_char(sales_date,'yyyy-MM-dd') as sales_date, product_id, null as user_id, sales_amount
from offline_sale
where to_char(sales_date,'MM') = '03')
order by sales_date, product_id, user_id asc
