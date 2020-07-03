package com.jian.service.impl;

import com.jian.dao.IEmploymentDao;
import com.jian.pojo.*;
import com.jian.service.EmploymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class EmploymentServiceImpl implements EmploymentService {
    @Autowired
    IEmploymentDao employmentDao;
    @Override
    public List<EmployCompany> findAllEmployBypageAndCity(String workPlace, int pageIndex) {
        return employmentDao.findAllEmployBypageAndCity("%"+workPlace+"%",(pageIndex-1)*9);
    }

    @Override
    public List<EmployCompany> findPostionByName(String name, String workPlace) {
        return employmentDao.findPostionByName("%"+name+"%","%"+workPlace+"%");
    }

    @Override
    public List<EmployCompany> findAllPostionByCity(String workPlace) {
        return employmentDao.findAllPostionByCity("%"+workPlace+"%");
    }

    @Override
    public EmployCompany findPostionById(int employId) {
        return employmentDao.findPostionById(employId);
    }

    @Override
    public List<EmployCompany> findPostionByCompany(String account) {
        return employmentDao.findPostionByCompany(account);
    }

    @Override
    public List<Application> findAppliedPostion(String opendid, String status) {
        return employmentDao.findAppliedPostion(opendid,status);
    }

    @Override
    public Employment findEmpById(int employId) {
        return employmentDao.findEmpById(employId);
    }

    @Override
    public List<Perfer> findCollectedPostionByOpenid(String opendid) {
        return employmentDao.findCollectedPostionByOpenid(opendid);
    }

    @Override
    public boolean isCollected(String opendid, int employId) {
        if(employmentDao.isCollected(opendid,employId)!=0)
            return true;
        else return false;
    }

    //收藏职位
    @Override
    public int collectPostion(String opendid, int employId) {
        Timestamp perferTime = new Timestamp(System.currentTimeMillis());
        return employmentDao.collectPostion(opendid,employId,perferTime);
    }

    @Override
    public int deleteCollection(String opendid, int employId) {
        return employmentDao.deleteCollection(opendid,employId);
    }

    @Override
    public boolean isApply(String opendid, int employId) {
        if(employmentDao.isApply(opendid,employId)!=0)
            return true;
        else return false;
    }

    @Override
    public int applyPostion(String opendid, int employId) {
        Timestamp applyTime = new Timestamp(System.currentTimeMillis());
        return employmentDao.applyPostion(opendid,employId,applyTime);
    }

    @Override
    public List<SchoolEm> findEmpOfSchool(Integer  pageIndex) {
        return employmentDao.findEmpOfSchool((pageIndex-1)*13);
    }
}
