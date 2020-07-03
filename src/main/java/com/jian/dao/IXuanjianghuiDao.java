package com.jian.dao;

import com.jian.pojo.Xuanjianghui;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface IXuanjianghuiDao {
    //获取所有宣讲会
    @Select("select * from xuanjianghui limit #{startIndex},9")
    public List<Xuanjianghui> findAllXjhByPage(int startIndex);

    //获取宣讲会详细信息
    @Select("select * from xuanjianghui where xuanjiangId=#{xuanjiangId}")
    public Xuanjianghui findXjhById(int xuanjiangId);

    //添加宣讲会
    @Insert("insert into xuanjianghui (name,email,companyInfo,adress,companyType,renshu,xingzhi,huizong,time1,location," +
            "process,majors,postion) values(#{name},#{email},#{companyInfo},#{adress},#{companyType},#{renshu}," +
            "#{xingzhi},#{huizong},#{time1},#{location},#{process},#{majors},#{postion})")
    public int postXuanjianghui(Xuanjianghui xjh);

    //删除宣讲会
    @Delete("delete from xuanjianghui where xuanjiangId=#{xuanjiangId}")
    public int deleteXuan(int xuanjiangId);

}
