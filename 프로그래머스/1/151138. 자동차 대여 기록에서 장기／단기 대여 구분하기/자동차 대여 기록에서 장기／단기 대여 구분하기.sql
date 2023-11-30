select history_id, car_id, to_char(start_date,'yyyy-mm-dd') as start_date,
        to_char(end_date,'yyyy-mm-dd') as end_date,
    (case when (end_date - start_date) + 1 >= 30 then '장기 대여' else '단기 대여' end) 
    as rent_type
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where 1=1
and extract(year from start_date) = '2022'
and extract(month from start_date) = '09'
order by 1 desc
;
