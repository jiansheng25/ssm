package com.jian.service;

import com.jian.pojo.*;
import org.apache.ibatis.annotations.Param;

public interface StudentService {
    //学生登录
    public Student stuLogin(Student stu);


    public boolean isOpenIdExsit(String openid);

    //插入Openid
    public int addStudentOpenid(String openid, String stuAccount);

    public Student findStudentByOpendid(String opendid);

    public StuEduXp findEduXpById( int eduId);

    public StuItershipXp findItershipXpById(int intsId);

    public StuSchoolXp findSchoolXpById(int school_xpId);

    public StuProjectXp findProjectXpById(int proId);

}
