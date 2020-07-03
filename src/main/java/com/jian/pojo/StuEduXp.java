package com.jian.pojo;

import java.io.Serializable;
//教育经历
public class StuEduXp implements Serializable {
    private int eduId;
    private String opendid;
    private String schoolName;
    private String time;
    private String majors;
    private String diploma;
    private String des;

    public int getEduId() {
        return eduId;
    }

    public void setEduId(int eduId) {
        this.eduId = eduId;
    }

    public String getOpendid() {
        return opendid;
    }

    public void setOpendid(String opendid) {
        this.opendid = opendid;
    }

    public String getSchoolName() {
        return schoolName;
    }

    public void setSchoolName(String schoolName) {
        this.schoolName = schoolName;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getMajors() {
        return majors;
    }

    public void setMajors(String majors) {
        this.majors = majors;
    }

    public String getDiploma() {
        return diploma;
    }

    public void setDiploma(String diploma) {
        this.diploma = diploma;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    @Override
    public String toString() {
        return "stu_edu_xp{" +
                "eduId=" + eduId +
                ", opendid='" + opendid + '\'' +
                ", schoolName='" + schoolName + '\'' +
                ", time='" + time + '\'' +
                ", majors='" + majors + '\'' +
                ", diploma='" + diploma + '\'' +
                ", des='" + des + '\'' +
                '}';
    }
}
