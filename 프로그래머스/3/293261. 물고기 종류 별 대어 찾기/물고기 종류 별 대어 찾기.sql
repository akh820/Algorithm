WITH K AS (
    select B.FISH_NAME AS FISH_NAME, MAX(A.LENGTH) AS LENGTH
    from fish_info a
    join fish_name_info b on a.fish_type = b.fish_type
    group by b.fish_name
)
select A.ID, B.FISH_NAME, A.LENGTH
from fish_info a
join fish_name_info b on a.fish_type = b.fish_type
JOIN K C ON C.FISH_NAME = B.FISH_NAME AND C.LENGTH = A.LENGTH



# select *
# from fish_info a
# join fish_name_info b on a.fish_type = b.fish_type
# order by b.fish_name