package com.jian.dao;

import com.jian.pojo.Zhaopinhui;
import com.jian.pojo.Zph_company;
import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;

public interface IZhaopinhuiDao {
    //查找所有招聘会
    @Select("select * from zhaopinhui limit #{startIndex},9")
    public List<Zhaopinhui> findAllZphByPage(int startIndex);

    //查找招聘会ById
    @Select("select * from zhaopinhui where zphId=#{zphId}")
    @Results({
            @Result( id = true,property = "zphId",column = "zphId"),
            @Result(property = "companys",column = "zphId",many = @Many(select =
            "com.jian.dao.ICompanyDao.findCompanyForZphById",fetchType = FetchType.LAZY))
    })
    public List<Zhaopinhui> findAllCompanyByZphId(int zphId);

}
