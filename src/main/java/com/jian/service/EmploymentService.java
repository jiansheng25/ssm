package com.jian.service;

import com.jian.pojo.*;
import org.apache.ibatis.annotations.Param;

import java.sql.Timestamp;
import java.util.List;

public interface EmploymentService {
    List<EmployCompany> findAllEmployBypageAndCity(String workPlace, int pageIndex);

    List<EmployCompany> findPostionByName(String name,String workPlace);

    List<EmployCompany> findAllPostionByCity(String workPlace);

    EmployCompany findPostionById(int employId);

    List<EmployCompany> findPostionByCompany(String account);

    List<Application> findAppliedPostion(String opendid,String status);

    Employment findEmpById(int employId);

    List<Perfer> findCollectedPostionByOpenid(String opendid);

    boolean isCollected(String opendid,int employId);

    int collectPostion(String opendid,int employId);

    int deleteCollection(String opendid,int employId);

    boolean isApply(String opendid,int employId);

    int applyPostion(String opendid,int employId);

    List<SchoolEm> findEmpOfSchool(Integer pageIndex);

}
