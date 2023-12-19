SELECT
    left(PRODUCT_CODE, 2) as CATEGORY
    ,count (PRODUCT_CODE) as PRODUCTS
from PRODUCT 
group by (left(PRODUCT_CODE, 2))