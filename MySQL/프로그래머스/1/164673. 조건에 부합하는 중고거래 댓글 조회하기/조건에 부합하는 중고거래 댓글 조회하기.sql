select 
    UGB.TITLE, 
    UGB.BOARD_ID,
    UGR.REPLY_ID,
    UGR.WRITER_ID,
    UGR.CONTENTS,
    DATE_FORMAT(UGR.CREATED_DATE, '%Y-%m-%d') AS 'CREATED_DATE'
from USED_GOODS_BOARD as UGB
join USED_GOODS_REPLY as UGR on UGB.BOARD_ID = UGR.BOARD_ID
where UGB.CREATED_DATE like '2022-10-%'
order by 
    UGR.CREATED_DATE asc,
    UGB.TITLE asc


-- 2022년 10월에 작성된 
-- 게시글 제목, 게시글 ID
-- 댓글 ID, 댓글 작성자 ID, 댓글 내용, 댓글 작성일을 조회