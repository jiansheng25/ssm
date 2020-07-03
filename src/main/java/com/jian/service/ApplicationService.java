package com.jian.service;

import com.jian.pojo.Application;
import com.jian.pojo.ApplyDetail;

import java.util.List;

public interface ApplicationService {
    public List<ApplyDetail> findApplicationByStatus(String status,int pageIndex);

    public int ApplyManager(String status,int applyId);
}
