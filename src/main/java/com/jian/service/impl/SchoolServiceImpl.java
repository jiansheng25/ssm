package com.jian.service.impl;

import com.jian.dao.ISchoolDao;
import com.jian.pojo.Class;
import com.jian.pojo.School;
import com.jian.pojo.Student;
import com.jian.pojo.Xueyuan;
import com.jian.service.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolServiceImpl implements SchoolService {
    @Autowired
    ISchoolDao schoolDao;

    @Override
    public School schoolLogin(School sc) {
        return schoolDao.schoolLogin(sc);
    }

    @Override
    public List<Student> findAllStudent(Integer pageIndex) {
        return schoolDao.findAllStudent((pageIndex-1)*14);
    }

    @Override
    public List<Xueyuan> findAllXueyuan() {
        return schoolDao.findAllXueyuan();
    }

    @Override
    public List<Student> findStudentByXyId(Integer xyId, Integer pageIndex) {
        return schoolDao.findStudentByXyId(xyId,(pageIndex-1)*14);
    }

    @Override
    public List<Class> findClassByXyId(Integer xyId) {
        return schoolDao.findClassByXyId(xyId);
    }

    @Override
    public List<Student> findStudentByClass(Integer pageIndex, String stuClass) {
        return schoolDao.findStudentByClass(pageIndex,stuClass);
    }
}
