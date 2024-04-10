SELECT 
    T.ID,
    CASE
        WHEN T.번호 <= T.total_rows / 4 THEN 'CRITICAL'
        WHEN T.번호 > T.total_rows / 4 AND T.번호 <= T.total_rows / 2 THEN 'HIGH'
        WHEN T.번호 > T.total_rows / 2 AND T.번호 <= T.total_rows * 3 / 4 THEN 'MEDIUM'
        ELSE 'LOW'
    END AS COLONY_NAME
FROM 
    (
        SELECT 
            ROW_NUMBER() OVER (ORDER BY SIZE_OF_COLONY DESC) AS 번호,
            E.ID,
            E.SIZE_OF_COLONY,
            (SELECT COUNT(*) FROM ECOLI_DATA) AS total_rows
        FROM 
            ECOLI_DATA E
    ) AS T
ORDER BY T.ID ASC;
