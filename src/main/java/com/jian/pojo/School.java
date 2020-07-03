package com.jian.pojo;

import java.io.Serializable;
//校方
public class School implements Serializable {
    private String account;
    private String password;
    private String name;

    @Override
    public String toString() {
        return "School{" +
                "account='" + account + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
