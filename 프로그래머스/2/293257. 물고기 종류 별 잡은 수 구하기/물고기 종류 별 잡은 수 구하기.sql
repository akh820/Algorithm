SELECT COUNT(fi.fish_type) as FISH_COUNT, fni.fish_name as FISH_NAME 
FROM fish_info fi
JOIN fish_name_info fni ON fi.fish_type = fni.fish_type  
GROUP BY fni.fish_type, fni.fish_name
order by FISH_COUNT DESC
