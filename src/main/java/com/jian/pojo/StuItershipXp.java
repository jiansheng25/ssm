package com.jian.pojo;

import java.io.Serializable;
//实习经历
public class StuItershipXp implements Serializable {
    private int intsId;
    private String ints_company;
    private String ints_time;
    private String ints_postion;
    private String ints_detail;
    private String opendid;

    @Override
    public String toString() {
        return "stu_interships_xp{" +
                "intsId=" + intsId +
                ", ints_company='" + ints_company + '\'' +
                ", ints_time='" + ints_time + '\'' +
                ", ints_postion='" + ints_postion + '\'' +
                ", ints_detail='" + ints_detail + '\'' +
                ", opendid='" + opendid + '\'' +
                '}';
    }

    public int getIntsId() {
        return intsId;
    }

    public void setIntsId(int intsId) {
        this.intsId = intsId;
    }

    public String getInts_company() {
        return ints_company;
    }

    public void setInts_company(String ints_company) {
        this.ints_company = ints_company;
    }

    public String getInts_time() {
        return ints_time;
    }

    public void setInts_time(String ints_time) {
        this.ints_time = ints_time;
    }

    public String getInts_postion() {
        return ints_postion;
    }

    public void setInts_postion(String ints_postion) {
        this.ints_postion = ints_postion;
    }

    public String getInts_detail() {
        return ints_detail;
    }

    public void setInts_detail(String ints_detail) {
        this.ints_detail = ints_detail;
    }

    public String getOpendid() {
        return opendid;
    }

    public void setOpendid(String opendid) {
        this.opendid = opendid;
    }
}
