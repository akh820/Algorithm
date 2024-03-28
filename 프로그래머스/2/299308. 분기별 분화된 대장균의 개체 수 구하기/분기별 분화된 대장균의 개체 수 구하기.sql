select concat(extract(quarter from differentiation_date),'Q') as QUARTER,
        count(*) as ECOLI_COUNT
from ecoli_data
group by quarter
order by quarter asc;

# SELECT
#     CONCAT(EXTRACT(QUARTER FROM DIFFERENTIATION_DATE),'Q') AS QUARTER,
#     COUNT(ID) AS ECOLI_COUNT
# FROM
#     ECOLI_DATA
# GROUP BY
#     QUARTER
# ORDER BY
#     QUARTER;
