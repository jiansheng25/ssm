package com.jian.pojo;

import java.io.Serializable;
//班级
public class Class implements Serializable {
    private int classId;
    private int xyId;
    private String stuClass;

    @Override
    public String toString() {
        return "ClassStu{" +
                "classId=" + classId +
                ", xyId=" + xyId +
                '}';
    }

    public int getXyId() {
        return xyId;
    }

    public void setXyId(int xyId) {
        this.xyId = xyId;
    }

    public int getClassId() {
        return classId;
    }

    public void setClassId(int classId) {
        this.classId = classId;
    }

    public String getStuClass() {
        return stuClass;
    }

    public void setStuClass(String stuClass) {
        this.stuClass = stuClass;
    }
}
