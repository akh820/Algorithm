SELECT b.book_id, c.author_name, to_char(b.published_date,'yyyy-mm-dd') PUBLISHED_DATE
from book b
join author c on b.author_id = c.author_id
where b.category in ('경제')
order by b.published_date asc