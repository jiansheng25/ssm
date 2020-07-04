package com.jian.dao;

import com.jian.pojo.Application;
import com.jian.pojo.ApplyDetail;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface IApplicationDao {
    //获取应聘信息
    @Select("select a.*,e.jobPostion,t.stuName from application as a left join school_em as e on a.employId=e.employId " +
            "left join student as t on a.opendid=t.opendid where status=#{status} limit #{startIndex},14")
    List<ApplyDetail> findApplicationByStatus(@Param("status") String status, @Param("startIndex") int startIndex);

    //处理应聘
    @Update("update application set status=#{status} where applyId=#{applyId}")
    int ApplyManager(@Param("status") String status,@Param("applyId") int applyId);



}
