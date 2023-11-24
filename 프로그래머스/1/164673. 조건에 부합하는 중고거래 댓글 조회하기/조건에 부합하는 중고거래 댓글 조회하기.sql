select  ugb.title, ugb.board_id, ugr.reply_id, ugr.writer_id, ugr.contents, 
        to_char(ugr.created_date, 'yyyy-mm-dd') as created_date
from used_goods_board ugb
join used_goods_reply ugr on ugb.board_id = ugr.board_id
where to_char(ugb.created_date,'yyyy-mm') like '2022-10%'
order by ugr.created_date, ugb.title
;