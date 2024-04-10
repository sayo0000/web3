class MultiplicationTable {
    companion object {
        fun printMultiplicationTable() {
            val size = 12
            for (i in 1..size) {
                for (j in 1..size) {
                    print("${i * j}\t")
                }
                println()
            }
        }
    }
}