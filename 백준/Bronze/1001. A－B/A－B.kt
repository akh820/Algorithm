fun main(){
    val input: String = readln();
    val intArray : List<Int> = input.split(" ").map { it.toInt() }
    println(intArray[0] - intArray[1])
}