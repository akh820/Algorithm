select b.category as CATEGORY, sum(bs.sales) as TOTAL_SALES  from book b
join book_sales bs on b.book_id = bs.book_id
where bs.sales_date like '2022-01%'
group by b.category
order by CATEGORY;