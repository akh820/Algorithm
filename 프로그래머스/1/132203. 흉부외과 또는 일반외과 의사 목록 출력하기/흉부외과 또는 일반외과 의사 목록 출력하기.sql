select dr_name,dr_id,MCDP_CD,to_char(hire_ymd,'YYYY-MM-DD') as hire_ymd
from doctor
where mcdp_cd in ('CS','GS')
order by hire_ymd desc, dr_name asc