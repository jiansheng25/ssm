package com.jian.pojo;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;
//收藏职位
public class Perfer implements Serializable {
    private int perferId;
    private int employId;
    private String opendid;
    private String perferTime;
    Employment employment;
    @Override
    public String toString() {
        return "perfer{" +
                "perferId=" + perferId +
                ", employId=" + employId +
                ", opendid='" + opendid + '\'' +
                '}';
    }

    public Employment getEmployment() {
        return employment;
    }

    public void setEmployment(Employment employment) {
        this.employment = employment;
    }

    public String getPerferTime() {
        return perferTime;
    }

    public void setPerferTime(Date perferTime) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("MM月dd日");
        this.perferTime = dateFormat.format(perferTime);
    }

    public int getPerferId() {
        return perferId;
    }

    public void setPerferId(int perferId) {
        this.perferId = perferId;
    }

    public int getEmployId() {
        return employId;
    }

    public void setEmployId(int employId) {
        this.employId = employId;
    }

    public String getOpendid() {
        return opendid;
    }

    public void setOpendid(String opendid) {
        this.opendid = opendid;
    }
}
