package com.jian.pojo;

import java.io.Serializable;

/**
 * 学校发布的职位
 */
public class SchoolEm implements Serializable {
    private String name;
    private String email;
    private String companyInfo;
    private String adress;
    private String companyType;
    private String renshu;
    private String treatment;
    private String xingzhi;

    private int employId;
    private String account;
    private String workPlace;
    private String require1;
    private String majors;
    private String postTime;
    private String diploma;
    private String jobDetail;
    private String salay;
    private String number1;
    private String hrm;
    private String jobPostion;
    private String jobtype;

//    name;email;companyInfo;adress;companyType;renshu;treatment;xingzhi;
//    employId;account;workPlace; require1;majors;postTime; diploma;jobDetail;salay;number1;hrm;

    @Override
    public String toString() {
        return "schoolEm{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", companyInfo='" + companyInfo + '\'' +
                ", adress='" + adress + '\'' +
                ", companyType='" + companyType + '\'' +
                ", renshu='" + renshu + '\'' +
                ", treatment='" + treatment + '\'' +
                ", xingzhi='" + xingzhi + '\'' +
                ", employId=" + employId +
                ", account='" + account + '\'' +
                ", workPlace='" + workPlace + '\'' +
                ", require1='" + require1 + '\'' +
                ", majors='" + majors + '\'' +
                ", postTime='" + postTime + '\'' +
                ", diploma='" + diploma + '\'' +
                ", jobDetail='" + jobDetail + '\'' +
                ", salay='" + salay + '\'' +
                ", number1='" + number1 + '\'' +
                ", hrm='" + hrm + '\'' +
                ", jobPostion='" + jobPostion + '\'' +
                ", jobtype='" + jobtype + '\'' +
                '}';
    }

    public String getJobtype() {
        return jobtype;
    }

    public void setJobtype(String jobtype) {
        this.jobtype = jobtype;
    }

    public String getJobPostion() {
        return jobPostion;
    }

    public void setJobPostion(String jobPostion) {
        this.jobPostion = jobPostion;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public int getEmployId() {
        return employId;
    }

    public void setEmployId(int employId) {
        this.employId = employId;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getWorkPlace() {
        return workPlace;
    }

    public void setWorkPlace(String workPlace) {
        this.workPlace = workPlace;
    }

    public String getRequire1() {
        return require1;
    }

    public void setRequire1(String require1) {
        this.require1 = require1;
    }

    public String getMajors() {
        return majors;
    }

    public void setMajors(String majors) {
        this.majors = majors;
    }

    public String getPostTime() {
        return postTime;
    }

    public void setPostTime(String postTime) {
        this.postTime = postTime;
    }

    public String getDiploma() {
        return diploma;
    }

    public void setDiploma(String diploma) {
        this.diploma = diploma;
    }

    public String getJobDetail() {
        return jobDetail;
    }

    public void setJobDetail(String jobDetail) {
        this.jobDetail = jobDetail;
    }

    public String getSalay() {
        return salay;
    }

    public void setSalay(String salay) {
        this.salay = salay;
    }

    public String getNumber1() {
        return number1;
    }

    public void setNumber1(String number1) {
        this.number1 = number1;
    }

    public String getHrm() {
        return hrm;
    }

    public void setHrm(String hrm) {
        this.hrm = hrm;
    }
}
