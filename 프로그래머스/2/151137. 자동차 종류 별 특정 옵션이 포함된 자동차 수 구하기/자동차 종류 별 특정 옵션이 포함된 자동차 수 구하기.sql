SELECT crcc.car_type as CAR_TYPE, count(*) as CARS
FROM CAR_RENTAL_COMPANY_CAR crcc
WHERE crcc.options LIKE '%통풍시트%'
   OR crcc.options LIKE '%열선시트%'
   OR crcc.options LIKE '%가죽시트%'
   group by crcc.car_type
   order by 1 asc
