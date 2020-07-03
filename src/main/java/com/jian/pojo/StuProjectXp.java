package com.jian.pojo;

import java.io.Serializable;
//项目经历
public class StuProjectXp implements Serializable {
    private int proId;
    private String pro_name;
    private String pro_time;
    private String pro_des;
    private String opendid;

    @Override
    public String toString() {
        return "stu_pro_xp{" +
                "proId=" + proId +
                ", pro_name='" + pro_name + '\'' +
                ", pro_time='" + pro_time + '\'' +
                ", pro_des='" + pro_des + '\'' +
                ", opendid='" + opendid + '\'' +
                '}';
    }

    public int getProId() {
        return proId;
    }

    public void setProId(int proId) {
        this.proId = proId;
    }

    public String getPro_name() {
        return pro_name;
    }

    public void setPro_name(String pro_name) {
        this.pro_name = pro_name;
    }

    public String getPro_time() {
        return pro_time;
    }

    public void setPro_time(String pro_time) {
        this.pro_time = pro_time;
    }

    public String getPro_des() {
        return pro_des;
    }

    public void setPro_des(String pro_des) {
        this.pro_des = pro_des;
    }

    public String getOpendid() {
        return opendid;
    }

    public void setOpendid(String opendid) {
        this.opendid = opendid;
    }
}
