package com.jian.service;

import com.jian.pojo.Class;
import com.jian.pojo.School;
import com.jian.pojo.Student;
import com.jian.pojo.Xueyuan;

import java.util.List;

public interface SchoolService {
    public School schoolLogin(School sc);

    public List<Student> findAllStudent(Integer pageIndex);

    public List<Xueyuan> findAllXueyuan();

    public List<Student> findStudentByXyId(Integer xyId,Integer pageIndex);

    public List<Class> findClassByXyId(Integer xyId);

    public List<Student> findStudentByClass(Integer pageIndex,String stuClass);
}
