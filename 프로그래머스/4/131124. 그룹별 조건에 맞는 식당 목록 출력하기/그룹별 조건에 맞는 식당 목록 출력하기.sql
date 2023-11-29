select m.member_name member_name, 
r.review_text review_text, 
to_char(r.review_date,'yyyy-mm-dd') as review_date 
from rest_review r
join member_profile m on r.member_id = m.member_id
where r.member_id in  (
            select member_id
            from rest_review
            group by member_id
            having count(*) = ( select max(count(*))
                                from rest_review
                                group by member_id
                              )
                     )
order by 3,2
;
