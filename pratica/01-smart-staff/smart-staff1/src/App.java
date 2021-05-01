public class App {
    public static void main(String[] args) throws Exception {

        for (int i = -71; i <= 103; i++) {

            if (i % 3 == 0) {

                System.out.println(i + " Smart");

            } else if (i % 5 == 0) {

                System.out.println(i + " Staff");

            } else {
                System.out.println(i);
            }

        }
    }
}
