package com.jian.service;

import com.jian.pojo.*;
import org.apache.ibatis.annotations.Param;

import java.sql.Timestamp;
import java.util.List;

public interface EmploymentService {
    public List<EmployCompany> findAllEmployBypageAndCity(String workPlace, int pageIndex);

    public List<EmployCompany> findPostionByName(String name,String workPlace);

    public List<EmployCompany> findAllPostionByCity(String workPlace);

    public EmployCompany findPostionById(int employId);

    public List<EmployCompany> findPostionByCompany(String account);

    public List<Application> findAppliedPostion(String opendid,String status);

    public Employment findEmpById(int employId);

    public List<Perfer> findCollectedPostionByOpenid(String opendid);

    public boolean isCollected(String opendid,int employId);

    public int collectPostion(String opendid,int employId);

    public int deleteCollection(String opendid,int employId);

    public boolean isApply(String opendid,int employId);

    public int applyPostion(String opendid,int employId);

    public List<SchoolEm> findEmpOfSchool(Integer pageIndex);

}
