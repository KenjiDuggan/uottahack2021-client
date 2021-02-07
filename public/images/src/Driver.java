/**
 * 
 @author Kenji Duggan 40052973  
 COMP352
 Assignment 1
 Programming Part
 */

import java.io.*;
import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Random;
import java.util.Scanner;

public class Driver {
    static ArrayList<ArrayList<String>> recursiveLists = new ArrayList<ArrayList<String>>();
    static ArrayList<ArrayList<String>> iterativeLists = new ArrayList<ArrayList<String>>();
    static ArrayList<String> hashedRow = new ArrayList<>();
    static ArrayList<Integer> nberPoss = new ArrayList<>();
    static ArrayList<Integer> rowLengths = new ArrayList<>();
    static ArrayList<Long> recursiveRuntimes = new ArrayList<>();
    static ArrayList<Long> iterativeRuntimes = new ArrayList<>();
    static Random rnd = new Random();

    /**
     * Generate a String of knots(O) and crosses(X) from an input integer which is its length, and converts 1/5 of its characters into hashtags at random positions
     * @return Row of Xs and Os with 1/5 of characters as hidden hashtags
     */
    public static String getSaltString(int randomInt) {
        int half = randomInt / 2;
        String SALTCHARS = "XO";
        StringBuilder salt = new StringBuilder();
        
        while (salt.length() < randomInt) {  
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            if(SALTCHARS.charAt(index) == 'X') {
                half--;
            }
            if(half == 0) {
                salt.append('O');
            } else {
                salt.append(SALTCHARS.charAt(index));
            }
        }
 
        int nberOfHashes = salt.length() / 5;
 
        for(int i = 0; i < nberOfHashes; i++) {
            int index = (int) (rnd.nextFloat() * salt.length());
            if(salt.charAt(index) != '#') {
                salt.setCharAt(index, '#');
            }
        }

        String st = salt.toString();
        hashedRow.add(st);
        return st;
    }

    /**
     * RECURSIVE METHOD -  Provided a string with hidden characters and an empty list, we return an arraylist containing all possible outputs, does this recursively
     * @return ArrayList of String containing all possible solutions to replacing the Hashtags in String with Xs and Os
     */
    public static ArrayList<String> UnHide(String s, ArrayList<String> list) {
        StringBuilder sFactory = new StringBuilder(s);
        int idx = s.indexOf('#');
        if(idx != -1) {
            sFactory.setCharAt(idx, 'O');
            String replaceO = sFactory.toString();
            UnHide(replaceO, list);
            sFactory.setCharAt(idx, 'X');
            String replaceX = sFactory.toString();
            UnHide(replaceX, list);
        } else {
            list.add(s);
        }  
        return list;
    }

    /**
     * ITERATIVE METHOD -  Provided a string with hidden characters and an empty list, we return an arraylist containing all possible outputs, does this iteratively
     * @return ArrayList of String containing all possible solutions to replacing the Hashtags in String with Xs and Os
     */
    public static ArrayList<String> iterativeUnHide(String s) {
        ArrayList<String> list = new ArrayList<>();
        list.add(s);
        
        while(list.get(0).indexOf('#') != -1) {
        	ArrayList<String> temp = new ArrayList<String>(list);
        	int idx = list.get(0).indexOf('#');
        	list.removeAll(temp); //empty list here before adding new items
        	for(int i = 0; i < temp.size(); i++) {
        		String replaceO = temp.get(i).substring(0, idx) + 'O' + s.substring(idx + 1);
				String replaceX = temp.get(i).substring(0, idx) + 'X' + s.substring(idx + 1);
        		list.add(replaceO);
        		list.add(replaceX);
        	}
        }
        
        return list;
    }

    /**
     * MAIN METHOD - 
     * @return Textfile containing all the contents for the assignments and triggers all necessary methods
     */
    public static void main(String[] args) {
        int low = 10;
        int high = 50;
        int userIn = -1;

        //User input to see how many rows they want generated
        Scanner scan = new Scanner(System.in);
        System.out.println("Specs: Generation of rows of varying lengths " + low + " - " + high + " runtimes and transformed content is printed onto out.txt file, you can find it in src folder.");
        System.out.print("Please enter the number of rows that you would like to evaluate: ");
         
        try {
            userIn = scan.nextInt();
        } catch (InputMismatchException a) {
            System.out.print("You have entered an improper input.");
        } finally {
        	scan.close();
        }
 
        //Write out the contents required into out.text file
        String header = "This file contains the results of running recursive and iterative tests on rows of TICTACTOE. " +
                "\nThe tests were conducted on rows of lengths varying from "+ low + " - " + high + ".\n";
 
        File file = new File("src/out.txt");
        
        if(!file.exists()) {
            try {
				file.createNewFile();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        }
        
        try(BufferedWriter bw = new BufferedWriter(new FileWriter(file))) {
        	bw.write(header);
        	bw.newLine();
        	bw.write("Here are the test contents: \n");
        	bw.newLine();
         
            for(int i = 0; i < userIn; i++) {
                int len = rnd.nextInt(high-low) + low; 
                rowLengths.add(len);
                String st = getSaltString(len);      
                 
                //Running and Measuring recursive method
                ArrayList<String> list = new ArrayList<String>();
                long startTime = System.nanoTime();
                list = UnHide(st, list);
                bw.newLine();
                bw.write("THIS IS TEST NUMBER " + (i + 1) + ":\n");
                bw.write("---------------------------------------------------\n");
           
                bw.write("The length of each row is " + len + ".\n");
                bw.newLine();
                bw.write("This is the row when it was hashed: \n");
                bw.write(hashedRow.get(i) + "\n");
                bw.newLine();
                bw.write("It generates a total of " + list.size() + " combinations:");
                 
            	bw.newLine();
                
                nberPoss.add(list.size());
                long stopTime = System.nanoTime();
                recursiveRuntimes.add((stopTime - startTime));
 
                //Running and Measuring iterative method
                long startTime2 = System.nanoTime();
                ArrayList<String> list2 = iterativeUnHide(st);
                long stopTime2 = System.nanoTime();
                iterativeRuntimes.add((stopTime2 - startTime2));
 
                for(String row: list2) {
                	bw.write(row);
                	bw.newLine();
                }
 
                bw.newLine();
              
                recursiveLists.add(list);
                iterativeLists.add(list2);
            }
            bw.newLine();
            bw.newLine();
            bw.write("Summarizing the results into a table we get:\n ");
            bw.write("\n-----------------------------------------------------------------------------------------------");
            bw.newLine();
            bw.write(String.format("%15s %15s %20s %20s %25s", "TEST NUMBER","ROW LENGTH", "RECURSIVE (IN NS)", "ITERATIVE (IN NS)", "NBER OF POSSIBILITIES"));
            bw.write("\n-----------------------------------------------------------------------------------------------");
            for(int i = 0; i < recursiveLists.size(); i++) {
            	bw.newLine();
            	bw.write(String.format("%15d %15d %20d %20d %25d", (i + 1), rowLengths.get(i), recursiveRuntimes.get(i), iterativeRuntimes.get(i), nberPoss.get(i)));
            	bw.newLine();
            }
            bw.write("-----------------------------------------------------------------------------------------------");
            
            if(bw != null) {
                bw.close();
            }
        } catch(IOException e){
            // Handle the exception
        	System.out.println(e);
        } 
    }
  
}
