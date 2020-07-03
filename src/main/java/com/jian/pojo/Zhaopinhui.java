package com.jian.pojo;

import java.io.Serializable;
import java.util.List;
//招聘会
public class Zhaopinhui implements Serializable {
    private int zphId;
    private String zhaoname;
    private String location;
    private String time1;
    List<Zph_company> companys;

//    public int comId;
//    public String companyName;
//    public String address;
//    public String majors;
//    public String postions;
//    public String email;
//    public String phone;
//    public String requireNumber;
//    public String companyInfo;

    @Override
    public String toString() {
        return "zhaopinhui{" +
                "zphId=" + zphId +
                ", zhaoname='" + zhaoname + '\'' +
                ", location='" + location + '\'' +
                ", time1='" + time1 + '\'' +
//                ", comId=" + comId +
//                ", companyName='" + companyName + '\'' +
//                ", address='" + address + '\'' +
//                ", majors='" + majors + '\'' +
//                ", postions='" + postions + '\'' +
//                ", email='" + email + '\'' +
//                ", phone='" + phone + '\'' +
//                ", requireNumber='" + requireNumber + '\'' +
//                ", companyInfo='" + companyInfo + '\'' +
                '}';
    }

//    public String getCompanyInfo() {
//        return companyInfo;
//    }
//
//    public void setCompanyInfo(String companyInfo) {
//        this.companyInfo = companyInfo;
//    }
//
//    public String getPhone() {
//        return phone;
//    }
//
//    public void setPhone(String phone) {
//        this.phone = phone;
//    }
//
//    public String getRequireNumber() {
//        return requireNumber;
//    }
//
//    public void setRequireNumber(String requireNumber) {
//        this.requireNumber = requireNumber;
//    }
//
//    public int getComId() {
//        return comId;
//    }
//
//    public void setComId(int comId) {
//        this.comId = comId;
//    }
//
//    public String getCompanyName() {
//        return companyName;
//    }
//
//    public void setCompanyName(String companyName) {
//        this.companyName = companyName;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    public String getMajors() {
//        return majors;
//    }
//
//    public void setMajors(String majors) {
//        this.majors = majors;
//    }
//
//    public String getPostions() {
//        return postions;
//    }
//
//    public void setPostions(String postions) {
//        this.postions = postions;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }


    public List<Zph_company> getCompanys() {
        return companys;
    }

    public void setCompanys(List<Zph_company> companys) {
        this.companys = companys;
    }

    public int getZphId() {
        return zphId;
    }

    public void setZphId(int zphId) {
        this.zphId = zphId;
    }

    public String getZhaoname() {
        return zhaoname;
    }

    public void setZhaoname(String zhaoname) {
        this.zhaoname = zhaoname;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getTime1() {
        return time1;
    }

    public void setTime1(String time1) {
        this.time1 = time1;
    }


}
