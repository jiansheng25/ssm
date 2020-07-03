package com.jian.pojo;

import java.io.Serializable;
import java.util.List;
//学生
public class Student implements Serializable {
    private int stuId;
    private String stuAccount;
    private String stuName;
    private String gender;
    private String stuClass;
    private String opendid;
    private String age;
    private String phone;
    private String email;
    private String address;
    private String selfDes;
    private String skil;
    private String zhengshu;
    private String stuPwd;
    private String xyName;
    private int xyId;

    List<StuEduXp> stuEduXps;
    List<StuItershipXp> stuItershipXps;
    List<StuProjectXp> stuProjectXps;
    List<StuSchoolXp> stuSchoolXps;

    @Override
    public String toString() {
        return "Student{" +
                "stuId=" + stuId +
                ", stuAccount='" + stuAccount + '\'' +
                ", stuName='" + stuName + '\'' +
                ", gender='" + gender + '\'' +
                ", stuClass='" + stuClass + '\'' +
                ", opendid='" + opendid + '\'' +
                ", age='" + age + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", selfDes='" + selfDes + '\'' +
                ", skil='" + skil + '\'' +
                ", zhengshu='" + zhengshu + '\'' +
                ", stuPwd='" + stuPwd + '\'' +
                ", xyName='" + xyName + '\'' +
                ", xyId=" + xyId +
                ", stuEduXps=" + stuEduXps +
                ", stuItershipXps=" + stuItershipXps +
                ", stuProjectXps=" + stuProjectXps +
                ", stuSchoolXps=" + stuSchoolXps +
                '}';
    }

    public List<StuEduXp> getStuEduXps() {
        return stuEduXps;
    }

    public void setStuEduXps(List<StuEduXp> stuEduXps) {
        this.stuEduXps = stuEduXps;
    }

    public List<StuItershipXp> getStuItershipXps() {
        return stuItershipXps;
    }

    public void setStuItershipXps(List<StuItershipXp> stuItershipXps) {
        this.stuItershipXps = stuItershipXps;
    }

    public List<StuProjectXp> getStuProjectXps() {
        return stuProjectXps;
    }

    public void setStuProjectXps(List<StuProjectXp> stuProjectXps) {
        this.stuProjectXps = stuProjectXps;
    }

    public List<StuSchoolXp> getStuSchoolXps() {
        return stuSchoolXps;
    }

    public void setStuSchoolXps(List<StuSchoolXp> stuSchoolXps) {
        this.stuSchoolXps = stuSchoolXps;
    }

    public int getXyId() {
        return xyId;
    }

    public void setXyId(int xyId) {
        this.xyId = xyId;
    }

    public String getXyName() {
        return xyName;
    }

    public void setXyName(String xyName) {
        this.xyName = xyName;
    }

    public String getStuPwd() {
        return stuPwd;
    }

    public void setStuPwd(String stuPwd) {
        this.stuPwd = stuPwd;
    }

    public String getSelfDes() {
        return selfDes;
    }

    public void setSelfDes(String selfDes) {
        this.selfDes = selfDes;
    }

    public String getSkil() {
        return skil;
    }

    public void setSkil(String skil) {
        this.skil = skil;
    }

    public String getZhengshu() {
        return zhengshu;
    }

    public void setZhengshu(String zhengshu) {
        this.zhengshu = zhengshu;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getOpendid() {
        return opendid;
    }

    public void setOpendid(String opendid) {
        this.opendid = opendid;
    }

    public int getStuId() {
        return stuId;
    }

    public void setStuId(int stuId) {
        this.stuId = stuId;
    }

    public String getStuAccount() {
        return stuAccount;
    }

    public void setStuAccount(String stuAccount) {
        this.stuAccount = stuAccount;
    }

    public String getStuName() {
        return stuName;
    }

    public void setStuName(String stuName) {
        this.stuName = stuName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getStuClass() {
        return stuClass;
    }

    public void setStuClass(String stuClass) {
        this.stuClass = stuClass;
    }

}
