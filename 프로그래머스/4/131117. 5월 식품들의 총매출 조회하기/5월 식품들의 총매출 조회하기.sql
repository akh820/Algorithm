-- 다음은 식품의 정보를 담은 FOOD_PRODUCT 테이블과 식품의 주문 정보를 담은 FOOD_ORDER 테이블입니다. FOOD_PRODUCT 테이블은 다음과 같으며 PRODUCT_ID, PRODUCT_NAME, PRODUCT_CD, CATEGORY, PRICE는 식품 ID, 식품 이름, 식품코드, 식품분류, 식품 가격을 의미합니다.
-- 테이블은 다음과 같으며 ORDER_ID, PRODUCT_ID, AMOUNT, PRODUCE_DATE, IN_DATE, OUT_DATE, FACTORY_ID, WAREHOUSE_ID는 각각 주문 ID, 제품 ID, 주문량, 생산일자, 입고일자, 출고일자, 공장 ID, 창고 ID를 의미합니다.

select t1.id product_id, t1.name prduct_name, (t1.price * t1.amount) total_sales
from (  SELECT a.product_id id, a.product_name name, a.price price, sum(b.amount) amount
        from food_product a
        join food_order b on a.product_id = b.product_id
        where to_char(b.produce_date,'yyyy-mm') = '2022-05'
        group by a.product_id,a.product_name, a.price ) t1
order by (t1.price * t1.amount) desc, t1.id ;