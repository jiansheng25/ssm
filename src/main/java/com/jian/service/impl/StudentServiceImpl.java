package com.jian.service.impl;

import com.jian.dao.IStudentDao;
import com.jian.pojo.*;
import com.jian.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
    @Autowired
    private IStudentDao studentDao;

    @Override
    public Student stuLogin(Student stu) {
        return studentDao.stuLogin(stu);
    }

    @Override
    public boolean isOpenIdExsit(String openid) {
        if(studentDao.isOpenIdExsit(openid)!=0)
            return true;
        else return false;
    }

    @Override
    public int addStudentOpenid(String openid, String stuAccount) {
        return studentDao.addStudentOpenid(openid,stuAccount);
    }

    @Override
    public Student findStudentByOpendid(String opendid) {
        return studentDao.findStudentByOpendid(opendid);
    }

    @Override
    public StuEduXp findEduXpById(int eduId) {
        return studentDao.findEduXpById(eduId);
    }

    @Override
    public StuItershipXp findItershipXpById(int intsId) {
        return studentDao.findItershipXpById(intsId);
    }

    @Override
    public StuSchoolXp findSchoolXpById(int school_xpId) {
        return studentDao.findSchoolXpById(school_xpId);
    }

    @Override
    public StuProjectXp findProjectXpById(int proId) {
        return studentDao.findProjectXpById(proId);
    }
}
