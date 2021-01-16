package io.github.thiagoccomelli.desafiobridge20202.models;

import java.math.BigInteger;

public class Factorial {
    private String id;
    private int number;
    private BigInteger factorial;

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getNumber() {
        return this.number;
    }

    public BigInteger getFactorial(){
        return this.factorial;
    }

    public BigInteger calcFactorial(){
        BigInteger result = BigInteger.ONE;

        for (int i = 2; i <= this.number; i++){
            result = result.multiply(BigInteger.valueOf(i));
        }

        this.factorial = result;

        return result;
    }
}
