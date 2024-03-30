select count(*) as FISH_COUNT,extract(month from time) as MONTH from fish_info
group by MONTH
order by MONTH asc



# EXTRACT(QUARTER FROM DIFFERENTIATION_DATE)