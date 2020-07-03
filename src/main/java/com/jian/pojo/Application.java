package com.jian.pojo;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;
//应聘表
public class Application implements Serializable {
    private int applyId;
    private int employId;
    private String opendid;
    private String status;
    private String applyTime;

    Employment employment;


    @Override
    public String toString() {
        return "application{" +
                "applyId=" + applyId +
                ", employId=" + employId +
                ", opendid='" + opendid + '\'' +
                ", status='" + status + '\'' +
                ", applyTime='" + applyTime + '\'' +
                '}';
    }

    public Employment getEmployment() {
        return employment;
    }

    public void setEmployment(Employment employment) {
        this.employment = employment;
    }

    public String getApplyTime() {
        return applyTime;
    }
    //格式化日期
    public void setApplyTime(Date applyTime) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yy-MM-dd");
        this.applyTime = dateFormat.format(applyTime);
    }


    public int getApplyId() {
        return applyId;
    }

    public void setApplyId(int applyId) {
        this.applyId = applyId;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
