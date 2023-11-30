-- ANIMAL_INS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.
-- ANIMAL_OUTS 테이블 구조는 다음과 같으며, ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. ANIMAL_OUTS 테이블의 ANIMAL_ID는 ANIMAL_INS의 ANIMAL_ID의 외래 키입니다.


select t1.animal_id, t1.animal_type, t1.name
from (  select animal_id as animal_id,
        animal_type as animal_type,
        name as name,
        sex_upon_outcome as newt
        from animal_outs 
        where animal_id in (SELECT animal_id
                            from animal_ins
                            where sex_upon_intake like '%Intact%'
                            ) 
     ) t1
where t1.newt not like '%Intact%'

;

