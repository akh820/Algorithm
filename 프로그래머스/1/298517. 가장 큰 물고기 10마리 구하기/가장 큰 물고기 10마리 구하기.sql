select ID, LENGTH from fish_info
where length is not null and length > 10
order by length desc, id asc
limit 10;
