(SELECT TO_CHAR(SALES_DATE, 'YYYY-MM-DD') AS SALES_DATE, PRODUCT_ID, NULL AS USER_ID, SALES_AMOUNT
FROM OFFLINE_SALE 
WHERE TO_CHAR(SALES_DATE, 'MM') = '03')

union all

(select to_char(sales_date,'YYYY-MM-DD') as SALES_DATE, product_id, user_id, sales_amount
from online_sale
where to_char(sales_date,'MM') = '03')


order by sales_date asc, product_id asc, user_id asc
;