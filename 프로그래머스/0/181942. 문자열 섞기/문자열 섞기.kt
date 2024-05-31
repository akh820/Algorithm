class Solution {
    fun solution(str1: String, str2: String): String {
        val sb = StringBuilder()
        val str1Len = str1.length
        val str2Len = str2.length

        var a = 0
        var b = 0

        while (a < str1Len && b < str2Len) {
            sb.append(str1[a])
            a++
            sb.append(str2[b])
            b++
        }
        
        return sb.toString()
    }
}