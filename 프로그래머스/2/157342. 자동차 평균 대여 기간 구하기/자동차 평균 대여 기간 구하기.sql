select t1.CAR_ID, t1.AVERAGE_DURATION from 
    (SELECT car_id as CAR_ID, 
       round(sum(TIMESTAMPDIFF(day, start_date, end_date)+1) / count(car_id),1) as AVERAGE_DURATION
        FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY
        group by car_id
    ) as t1
where t1.AVERAGE_DURATION >= 7
order by t1.AVERAGE_DURATION desc, t1.car_id desc