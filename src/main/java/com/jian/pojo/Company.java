package com.jian.pojo;

import java.io.Serializable;
import java.util.List;
//企业
public class Company implements Serializable {
    private String account;
    private String password;
    private String name;
    private String phone;
    private String email;
    private String companyInfo;
    private String adress;
    private String companyType;
    private String renshu;
    private String treatment;
    private String status1;
    private String xingzhi;
    List<Employment> employments;


    @Override
    public String toString() {
        return "Company{" +
                "account='" + account + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", companyInfo='" + companyInfo + '\'' +
                ", adress='" + adress + '\'' +
                ", companyType='" + companyType + '\'' +
                ", renshu='" + renshu + '\'' +
                ", treatment='" + treatment + '\'' +
                ", status1='" + status1 + '\'' +
                ", xingzhi='" + xingzhi + '\'' +
                '}';
    }

    public List<Employment> getEmployments() {
        return employments;
    }

    public void setEmployments(List<Employment> employments) {
        this.employments = employments;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCompanyInfo() {
        return companyInfo;
    }

    public void setCompanyInfo(String companyInfo) {
        this.companyInfo = companyInfo;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getCompanyType() {
        return companyType;
    }

    public void setCompanyType(String companyType) {
        this.companyType = companyType;
    }

    public String getRenshu() {
        return renshu;
    }

    public void setRenshu(String renshu) {
        this.renshu = renshu;
    }

    public String getTreatment() {
        return treatment;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }

    public String getStatus1() {
        return status1;
    }

    public void setStatus1(String status1) {
        this.status1 = status1;
    }

    public String getXingzhi() {
        return xingzhi;
    }

    public void setXingzhi(String xingzhi) {
        this.xingzhi = xingzhi;
    }
}

