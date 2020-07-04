package com.jian.service;

import com.jian.pojo.*;
import org.apache.ibatis.annotations.Param;

public interface StudentService {
    //学生登录
    Student stuLogin(Student stu);


    boolean isOpenIdExsit(String openid);

    //插入Openid
    int addStudentOpenid(String openid, String stuAccount);

    Student findStudentByOpendid(String opendid);

    StuEduXp findEduXpById( int eduId);

    StuItershipXp findItershipXpById(int intsId);

    StuSchoolXp findSchoolXpById(int school_xpId);

    StuProjectXp findProjectXpById(int proId);

}
