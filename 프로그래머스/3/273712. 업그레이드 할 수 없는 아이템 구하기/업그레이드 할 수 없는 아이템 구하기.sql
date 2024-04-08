# 아이템 A는 B,C로 업글가능
# 아이템 B는 D,E로 업글가능
# 아이템 C,D,E는 업글 불가능

# SELECT ITEM_ID, ITEM_NAME, RARITY
# FROM ITEM_INFO 
# WHERE ITEM_ID EXISTS (
# SELECT PARENT_ITEM_ID
# FROM ITEM_TREE)

# SELECT ITEM_ID, ITEM_NAME, RARITY
# FROM ITEM_INFO AS II
# WHERE NOT EXISTS (
#     SELECT 1
#     FROM ITEM_TREE AS IT
#     WHERE II.ITEM_ID = IT.PARENT_ITEM_ID
# )
# ORDER BY 1 DESC;

SELECT II.ITEM_ID, II.ITEM_NAME, II.RARITY
FROM ITEM_INFO AS II
LEFT JOIN ITEM_TREE AS IT ON II.ITEM_ID = IT.PARENT_ITEM_ID
WHERE IT.PARENT_ITEM_ID IS NULL
ORDER BY 1 DESC;
