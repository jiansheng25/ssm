package com.jian.dao;

import com.jian.pojo.*;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

public interface IEmploymentDao {
    /**
     * 查找所有职位
     * @param workPlace
     * @return
     */
    @Select("select * from employment as c left join company as e on c.account=e.account where workPlace like " +
            "concat('%',#{workPlace},'%') order by postTime desc limit #{startIndex},9")
    public List<EmployCompany> findAllEmployBypageAndCity(@Param("workPlace") String workPlace, @Param("startIndex") int startIndex);

    /**
     * 模糊查询职位
     * @param name
     * @param workPlace
     * @return
     */
    @Select("select * from employment as c left join company as e on c.account=e.account where (name like concat('%',#{name},'%') or" +
            "  jobPostion like concat('%',#{name},'%')) and workPlace like concat('%',#{workPlace},'%') order by postTime desc")
    public List<EmployCompany> findPostionByName(@Param("name") String name,@Param("workPlace") String workPlace);

    /**
     * 按城市查询职位
     * @param workPlace
     * @return
     */
    @Select("select * from employment as c left join company as e on c.account=e.account where workPlace like " +
            "concat('%',#{workPlace},'%') order by postTime desc")
    public List<EmployCompany> findAllPostionByCity(@Param("workPlace") String workPlace);

    /**
     * 按Id查询职位
     * @param employId
     * @return
     */
    @Select("select * from employment as c left join company as e on c.account=e.account where employId=#{employId}")
    public EmployCompany findPostionById(int employId);

    /**
     * 查找某企业的全部职位
     * @param account
     * @return
     */
    @Select("select * from employment as c left join company as e on c.account=e.account where e.account=#{account} order by postTime desc")
    public List<EmployCompany> findPostionByCompany(String account);

    //查找各个状态已申请职位
    @Select("select * from application where opendid=#{opendid} and status=#{status}")
    @Results(id="employMap",value = {
            @Result(property = "employId",column = "employId"),
            @Result(property = "employment",column = "employId",one = @One(select =
                    "com.jian.dao.IEmploymentDao.findEmpById"))
    })
    public List<Application> findAppliedPostion(@Param("opendid") String opendid, @Param("status") String status);

    //按Id查找职位
    @Select("select * from employment where employId=#{employId}")
    public Employment findEmpById(int employId);

    //获取已收藏的职位
    @Select("select * from perfer where opendid=#{opendid}")
    @ResultMap(value = "employMap")
    public List<Perfer> findCollectedPostionByOpenid(String opendid);

    //判断是否已收藏过该职位
    @Select("select count(*) from perfer where opendid=#{opendid} and employId=#{employId}")
    public int isCollected(@Param("opendid") String opendid,@Param("employId") int employId);

    //收藏职位
    @Insert("insert into perfer (opendid,employId,perferTime) values (#{opendid},#{employId},#{perferTime})")
    public int collectPostion(@Param("opendid") String opendid, @Param("employId") int employId,
                              @Param("perferTime")Timestamp perferTime);

    //取消收藏职位
    @Delete("delete from perfer where opendid=#{opendid} and employId=#{employId}")
    public int deleteCollection(@Param("opendid") String opendid,@Param("employId") int employId);

    //判断是否已申请该职位
    @Select("select count(*) from application where opendid=#{opendid} and employId=#{employId}")
    public int isApply(@Param("opendid") String opendid,@Param("employId") int employId);

    //申请职位
    @Insert("insert into application (opendid,employId,applyTime) values (#{opendid},#{employId},#{applyTime})")
    public int applyPostion(@Param("opendid") String opendid, @Param("employId") int employId,
                              @Param("applyTime")Timestamp applyTime);

    /**
     * 查找校方发布的职位
     * @return
     */
    @Select("select * from school_em order by postTime desc limit #{startIndex},13")
    public List<SchoolEm> findEmpOfSchool(@Param("startIndex") Integer startIndex);
}
