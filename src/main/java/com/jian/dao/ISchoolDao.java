package com.jian.dao;

import com.jian.pojo.Class;
import com.jian.pojo.School;
import com.jian.pojo.Student;
import com.jian.pojo.Xuanjianghui;
import com.jian.pojo.Xueyuan;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.util.ArrayList;
import java.util.List;

public interface ISchoolDao {
    /**
     * 登录
     * @param sc
     * @return
     */
    @Select("select account,password,name from school where account=#{account} and password=#{password}")
    public School schoolLogin(School sc);

    /**
     * 获取所有学生信息
     */
    @Select("select * from student as s left join class as c on s.stuClass=c.stuClass" +
            " left join xueyuan as x on c.xyId=x.xyId order by xyName limit #{startIndex},14")
    public List<Student> findAllStudent(@Param("startIndex") Integer startIndex);

    //获取所有学院
    @Select("select * from xueyuan order by xyName asc")
    public List<Xueyuan> findAllXueyuan();

    //根据学院获取学生
    @Select("select * from student as s left join class as c on s.stuClass=c.className" +
            " left join xueyuan as x on c.xyId=x.xyId where x.xyId=#{xyId} limit #{startIndex},14")
    public List<Student> findStudentByXyId(@Param("xyId") Integer xyId,@Param("startIndex") Integer startIndex);

    //根据学院获取班级
    @Select("select * from class where xyId=#{xyId} order by stuClass asc")
    public List<Class> findClassByXyId(@Param("xyId") Integer xyId);

    //根据班级获取学生
    @Select("select * from student as s left join class as c on s.stuClass=c.stuClass" +
            " left join xueyuan as x on c.xyId=x.xyId where s.stuClass=#{stuClass} limit #{startIndex},14")
    public List<Student> findStudentByClass(@Param("startIndex") Integer startIndex,@Param("stuClass") String stuClass);

}
