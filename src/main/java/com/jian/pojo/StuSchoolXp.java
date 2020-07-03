package com.jian.pojo;

import java.io.Serializable;
//校园经历
public class StuSchoolXp implements Serializable {
    private int school_xpId;
    private String xp_name;
    private String xp_time;
    private String xp_des;
    private String opendid;

    @Override
    public String toString() {
        return "stu_school_xp{" +
                "school_xpId=" + school_xpId +
                ", xp_name='" + xp_name + '\'' +
                ", xp_time='" + xp_time + '\'' +
                ", xp_des='" + xp_des + '\'' +
                ", opendid='" + opendid + '\'' +
                '}';
    }

    public int getSchool_xpId() {
        return school_xpId;
    }

    public void setSchool_xpId(int school_xpId) {
        this.school_xpId = school_xpId;
    }

    public String getXp_name() {
        return xp_name;
    }

    public void setXp_name(String xp_name) {
        this.xp_name = xp_name;
    }

    public String getXp_time() {
        return xp_time;
    }

    public void setXp_time(String xp_time) {
        this.xp_time = xp_time;
    }

    public String getXp_des() {
        return xp_des;
    }

    public void setXp_des(String xp_des) {
        this.xp_des = xp_des;
    }

    public String getOpendid() {
        return opendid;
    }

    public void setOpendid(String opendid) {
        this.opendid = opendid;
    }
}
