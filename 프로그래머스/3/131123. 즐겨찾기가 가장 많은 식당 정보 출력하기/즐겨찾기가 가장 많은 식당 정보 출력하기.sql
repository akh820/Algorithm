# select r.FOOD_TYPE,
# r.REST_ID,
# r.REST_NAME,
# r.FAVORITES
# from rest_info r
# inner join (select FOOD_TYPE, max(FAVORITES) as max_favorites
# from REST_INFO
# GROUP BY FOOD_TYPE) as sub on r.food_type = sub.food_type 
# and r.favorites = sub.max_favorites
# order by r.favorites desc

SELECT 
    FOOD_TYPE, REST_ID, REST_NAME, FAVORITES
FROM 
    REST_INFO
WHERE 
   (FOOD_TYPE, FAVORITES) IN (
    SELECT FOOD_TYPE, MAX(FAVORITES)
    FROM REST_INFO
    GROUP BY FOOD_TYPE
)
ORDER BY 
    FOOD_TYPE DESC;