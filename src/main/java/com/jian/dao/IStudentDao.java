package com.jian.dao;

import com.jian.pojo.*;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import sun.font.ScriptRun;

import java.util.List;

public interface IStudentDao {
    //学生登录
    @Select("select * from student where stuAccount=#{stuAccount} and stuPwd=#{stuPwd}")
    public Student stuLogin(Student stu);

    //判断openid是否存在
    @Select("select count(*) from student where opendid=#{opendid}")
    public int isOpenIdExsit(String openid);

    //插入Openid
    @Update("update student set opendid=#{opendid} where stuAccount=#{stuAccount}")
    public int addStudentOpenid(@Param("opendid") String opendid,@Param("stuAccount") String stuAccount);

    //获取学生信息
    @Select("select * from student where opendid=#{opendid}")
    @Results({
            @Result(property = "opendid",column = "opendid"),
            @Result(property = "stuEduXps",column = "opendid",many = @Many(select =
                    "com.jian.dao.IStudentDao.findEduXp",fetchType = FetchType.LAZY)),
            @Result(property = "stuItershipXps",column = "opendid",many = @Many(select =
                    "com.jian.dao.IStudentDao.findItershipXp",fetchType = FetchType.LAZY)),
            @Result(property = "stuSchoolXps",column = "opendid",many = @Many(select =
                    "com.jian.dao.IStudentDao.findSchoolXp",fetchType = FetchType.LAZY)),
            @Result(property = "stuProjectXps",column = "opendid",many = @Many(select =
                    "com.jian.dao.IStudentDao.findProjectXp",fetchType = FetchType.LAZY)),
    })
    public Student findStudentByOpendid(@Param("opendid") String opendid);

    //获取教育经历ByOpenid
    @Select("select * from stu_edu_xp where opendid=#{opendid}")
    public List<StuEduXp> findEduXp(@Param("opendid") String opendid);

    //获取教育经历ById
    @Select("select * from stu_edu_xp where eduId=#{eduId}")
    public StuEduXp findEduXpById(@Param("eduId") int eduId);

    //获取实习经历ByOpenid
    @Select("select * from stu_interships_xp where opendid=#{opendid}")
    public List<StuItershipXp> findItershipXp(@Param("opendid") String opendid);

    //获取实习经历ById
    @Select("select * from stu_interships_xp where intsId=#{intsId}")
    public StuItershipXp findItershipXpById(@Param("intsId") int intsId);

    //获取校园经历ByOpenid
    @Select("select * from stu_school_xp where opendid=#{opendid}")
    public List<StuSchoolXp> findSchoolXp(@Param("opendid") String opendid);

    //获取校园经历ById
    @Select("select * from stu_school_xp where school_xpId=#{school_xpId}")
    public StuSchoolXp findSchoolXpById(@Param("school_xpId") int school_xpId);

    //获取项目经历ByOpenid
    @Select("select * from stu_pro_xp where opendid=#{opendid}")
    public List<StuProjectXp> findProjectXp(@Param("opendid") String opendid);

    //获取项目经历ById
    @Select("select * from stu_pro_xp where proId=#{proId}")
    public StuProjectXp findProjectXpById(@Param("proId") int proId);
}
