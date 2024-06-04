fun main(){
    val input: String = readln()
    val list:List<String> = input.split(' ')
    val inputA = Integer.parseInt(list[0])
    val inputB = Integer.parseInt(list[1])
    if( inputA > inputB ){
        println(">")
    } else if( inputB > inputA ){
        println("<")
    } else if( inputA == inputB){
        println("==")
    }
}