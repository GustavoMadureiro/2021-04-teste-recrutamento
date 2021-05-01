public class App {
    public static void main(String[] args) throws Exception {

        String[] array = new String[] { "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog" };

        String saida= "";

        
        for (int i = array.length - 1; i >= 0; i--) {

            saida = saida + array[i] + "\n";

        }

        System.out.println(saida);

    }
}
