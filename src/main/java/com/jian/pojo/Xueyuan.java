package com.jian.pojo;


import java.io.Serializable;
//学院
public class Xueyuan implements Serializable {
    private int xyId;
    private String xyName;

    @Override
    public String toString() {
        return "Xueyuan{" +
                "xyId=" + xyId +
                ", xyName='" + xyName + '\'' +
                '}';
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
}
