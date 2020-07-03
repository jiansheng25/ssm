package com.jian.dao;

import com.jian.pojo.Company;
import com.jian.pojo.Zph_company;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ICompanyDao {
    //获取参加招聘会的企业
    @Select("select * from zph_company where zphId=#{zphId}")
    public List<Zph_company> findCompanyForZphById(int zphId);

    /**
     * 获取所有企业
     */
    @Select("select * from company where status1=#{status1} limit #{startIndex},14")
    public List<Company> getCompany(@Param("startIndex") Integer startIndex, @Param("status1") String status1);
}
