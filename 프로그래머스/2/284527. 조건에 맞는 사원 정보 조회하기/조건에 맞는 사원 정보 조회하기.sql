select sum(score) as SCORE, hg.emp_no as EMP_NO, he.emp_name as EMP_NAME, he.position as POSITION, he.email as EMAIL from hr_employees he
join hr_grade hg on hg.emp_no = he.emp_no
where hg.emp_no = (select t1.emp_no as EMP_NO from (
select emp_no as EMP_NO, sum(score) as SCORE from hr_grade
group by emp_no
order by sum(score) desc
) t1 
limit 1 )
group by hg.emp_no



