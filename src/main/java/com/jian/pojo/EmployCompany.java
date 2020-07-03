package com.jian.pojo;

import java.io.Serializable;
//拓展查询职位
public class EmployCompany extends Employment implements Serializable {

    private String name;
    private String phone;
    private String email;
    private String companyInfo;
    private String adress;
    private String companyType;
    private String renshu;
    private String treatment;
    private String xingzhi;

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

    public String getXingzhi() {
        return xingzhi;
    }

    public void setXingzhi(String xingzhi) {
        this.xingzhi = xingzhi;
    }

    @Override
    public String toString() {
        return super.toString()+"  EmployCompany{" +
                "name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", companyInfo='" + companyInfo + '\'' +
                ", adress='" + adress + '\'' +
                ", companyType='" + companyType + '\'' +
                ", renshu='" + renshu + '\'' +
                ", treatment='" + treatment + '\'' +
                ", xingzhi='" + xingzhi + '\'' +
                '}';
    }
}
