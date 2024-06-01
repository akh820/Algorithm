fun main(){
    val insect: String = readln()
    val parts: List<String> = insect.split(" ")

    val sum = parts.map{ it.toInt() }.sum()
    println(sum)

}