SELECT 
    ORDER_ID, PRODUCT_ID, date_format(OUT_DATE,'%Y-%m-%d') as OUT_DATE ,
    CASE 
        WHEN out_date IS NULL THEN '출고미정'
        WHEN out_date <= '2022-05-01' THEN '출고완료'
        WHEN out_date > '2022-05-01' THEN '출고대기'
    END AS '출고여부'
FROM food_order
order by order_id asc;