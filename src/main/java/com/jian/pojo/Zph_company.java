package com.jian.pojo;

import java.io.Serializable;

//参加招聘会的企业
public class Zph_company implements Serializable {
    private int comId;
    private String companyName;
    private String address;
    private String majors;
    private String postions;
    private String email;
    private String phone;
    private String requireNumber;
    private String companyInfo;
    private int zphId;

    public String getCompanyInfo() {
        return companyInfo;
    }

    public void setCompanyInfo(String companyInfo) {
        this.companyInfo = companyInfo;
    }

    @Override
    public String toString() {
        return "Zph_company{" +
                "comId=" + comId +
                ", companyName='" + companyName + '\'' +
                ", address='" + address + '\'' +
                ", majors='" + majors + '\'' +
                ", postions='" + postions + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", requireNumber='" + requireNumber + '\'' +
                ", companyInfo='" + companyInfo + '\'' +
                ", zphId=" + zphId +
                '}';
    }

    public int getZphId() {
        return zphId;
    }

    public void setZphId(int zphId) {
        this.zphId = zphId;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getRequireNumber() {
        return requireNumber;
    }

    public void setRequireNumber(String requireNumber) {
        this.requireNumber = requireNumber;
    }

    public int getComId() {
        return comId;
    }

    public void setComId(int comId) {
        this.comId = comId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMajors() {
        return majors;
    }

    public void setMajors(String majors) {
        this.majors = majors;
    }

    public String getPostions() {
        return postions;
    }

    public void setPostions(String postions) {
        this.postions = postions;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
