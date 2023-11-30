SELECT board_id, writer_id,title,price,
    case status 
        when 'SALE' THEN '판매중'
        WHEN 'RESERVED' THEN '예약중'
        WHEN 'DONE' THEN '거래완료'
    END STATUS
from used_goods_board
where 1=1
and
to_char(created_date,'yyyy-mm-dd') = '2022-10-05'
ORDER BY 1 DESC
;