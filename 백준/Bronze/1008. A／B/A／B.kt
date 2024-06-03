import java.io.BufferedReader

fun main() {
    val input:List<String> = readln().split(" ")
    val result = input[0].toDouble() / input[1].toDouble()
    println(result)

}