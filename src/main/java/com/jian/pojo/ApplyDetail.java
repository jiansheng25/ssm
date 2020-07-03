package com.jian.pojo;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

//申请职位信息拓展
public class ApplyDetail implements Serializable {
    private String opendid;
    private String stuName;
    private int applyId;
    private int employId;
    private String status;
    private String applyTime;
    private String jobPostion;

    public String getOpendid() {
        return opendid;
    }

    public void setOpendid(String opendid) {
        this.opendid = opendid;
    }

    public int getEmployId() {
        return employId;
    }

    public void setEmployId(int employId) {
        this.employId = employId;
    }

    public String getJobPostion() {
        return jobPostion;
    }

    public void setJobPostion(String jobPostion) {
        this.jobPostion = jobPostion;
    }

    public String getStuName() {
        return stuName;
    }

    public void setStuName(String stuName) {
        this.stuName = stuName;
    }

    public int getApplyId() {
        return applyId;
    }

    public void setApplyId(int applyId) {
        this.applyId = applyId;
    }


    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getApplyTime() {
        return applyTime;
    }

    public void setApplyTime(Date applyTime) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        this.applyTime = dateFormat.format(applyTime);
    }

    @Override
    public String toString() {
        return "ApplyDetail{" +
                "opendid='" + opendid + '\'' +
                ", stuName='" + stuName + '\'' +
                ", applyId=" + applyId +
                ", employId=" + employId +
                ", status='" + status + '\'' +
                ", applyTime='" + applyTime + '\'' +
                ", jobPostion='" + jobPostion + '\'' +
                '}';
    }
}
