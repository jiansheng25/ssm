package com.jian.pojo;

import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
//职位
public class Employment implements Serializable {
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

    public String getHrm() {
        return hrm;
    }

    public void setHrm(String hrm) {
        this.hrm = hrm;
    }

    public String getRequire1() {
        return require1;
    }

    public void setRequire1(String require1) {
        this.require1 = require1;
    }

    public String getNumber1() {
        return number1;
    }

    public void setNumber1(String number1) {
        this.number1 = number1;
    }

    public String getJobtype() {
        return jobtype;
    }

    public void setJobtype(String jobtype) {
        this.jobtype = jobtype;
    }

    private String jobtype;

    private String jobPostion;


    @Override
    public String toString() {
        return "employment{" +
                "employId=" + employId +
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
                ", jobtype='" + jobtype + '\'' +
                ", jobPostion='" + jobPostion + '\'' +
                '}';
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

    public String getMajors() {
        return majors;
    }

    public void setMajors(String majors) {
        this.majors = majors;
    }

    public String getPostTime() {
        return postTime;
    }

    public void setPostTime(Date postTime) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM月dd日");
        this.postTime = dateFormat.format(postTime);
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

    public String getJobPostion() {
        return jobPostion;
    }

    public void setJobPostion(String jobPostion) {
        this.jobPostion = jobPostion;
    }


    public static void main(String[] args) throws ParseException {
        Date date=new Date();
        Employment e=new Employment();

        SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-MM-dd");
        String aa="2018-2-11";
        Date da=dateFormat.parse(aa);
        String sql="update employment set postTime=? where employId=1";

        System.out.println(da);
    }
}
