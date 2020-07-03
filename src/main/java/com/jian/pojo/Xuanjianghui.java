package com.jian.pojo;

import java.io.Serializable;
//宣讲会
public class Xuanjianghui implements Serializable {
    private int xuanjiangId;
    private String name;
    private String phone;
    private String email;
    private String companyInfo;
    private String adress;
    private String companyType;
    private String renshu;
    private String xingzhi;
    private String huizong;
    private String time1;
    private String location;
    private String process;
    private String majors;
    private String postion;

    @Override
    public String toString() {
        return "xuanjianghui{" +
                "xuanjiangId='" + xuanjiangId + '\'' +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", companyInfo='" + companyInfo + '\'' +
                ", adress='" + adress + '\'' +
                ", companyType='" + companyType + '\'' +
                ", renshu='" + renshu + '\'' +
                ", xingzhi='" + xingzhi + '\'' +
                ", huizong='" + huizong + '\'' +
                ", time1='" + time1 + '\'' +
                ", location='" + location + '\'' +
                ", process='" + process + '\'' +
                ", majors='" + majors + '\'' +
                ", postion='" + postion + '\'' +
                '}';
    }

    public String getMajors() {
        return majors;
    }

    public void setMajors(String majors) {
        this.majors = majors;
    }

    public String getPostion() {
        return postion;
    }

    public void setPostion(String postion) {
        this.postion = postion;
    }

    public int getXuanjiangId() {
        return xuanjiangId;
    }

    public void setXuanjiangId(int xuanjiangId) {
        this.xuanjiangId = xuanjiangId;
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

    public String getXingzhi() {
        return xingzhi;
    }

    public void setXingzhi(String xingzhi) {
        this.xingzhi = xingzhi;
    }

    public String getHuizong() {
        return huizong;
    }

    public void setHuizong(String huizong) {
        this.huizong = huizong;
    }

    public String getTime1() {
        return time1;
    }

    public void setTime1(String time1) {
        this.time1 = time1;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getProcess() {
        return process;
    }

    public void setProcess(String process) {
        this.process = process;
    }
}

