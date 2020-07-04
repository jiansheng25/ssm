package com.jian.service;

import com.jian.pojo.Class;
import com.jian.pojo.School;
import com.jian.pojo.Student;
import com.jian.pojo.Xueyuan;

import java.util.List;

public interface SchoolService {
    School schoolLogin(School sc);

    List<Student> findAllStudent(Integer pageIndex);

    List<Xueyuan> findAllXueyuan();

    List<Student> findStudentByXyId(Integer xyId,Integer pageIndex);

    List<Class> findClassByXyId(Integer xyId);

    List<Student> findStudentByClass(Integer pageIndex,String stuClass);
}
