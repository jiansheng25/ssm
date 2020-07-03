package com.jian.service.impl;

import com.jian.dao.IApplicationDao;
import com.jian.pojo.Application;
import com.jian.pojo.ApplyDetail;
import com.jian.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service()
public class ApplicationServiceImpl implements ApplicationService {

    @Autowired
    IApplicationDao applicationDao;


    @Override
    public List<ApplyDetail> findApplicationByStatus(String status, int pageIndex) {
        return applicationDao.findApplicationByStatus(status,(pageIndex-1)*14);
    }

    @Override
    public int ApplyManager(String status, int applyId) {
        return applicationDao.ApplyManager(status,applyId);
    }
}
